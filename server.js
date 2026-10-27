const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
  '.md': 'text/markdown; charset=utf-8'
};

const JOB_KEY_MAP = {
  'maintenance': 'Sub-Assistant Maintenance Engineer Super Suggestion',
  'junior_instructor': 'Junior Instructor Tech Computer Super Suggestion',
  'petrobangla': 'Petrobangla Sub-Assistant Engineer Computer IT',
  'dss_karigori': 'DSS Karigori Proshikhok Computer Super Suggestion',
  'dss_data_entry': 'DSS Data Entry Operator Super Suggestion'
};

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Decode URI component for Bengali characters and spaces
  try {
    pathname = decodeURIComponent(pathname);
  } catch (e) {
    // Keep as is if decode fails
  }

  // API Endpoints
  if (pathname.startsWith('/api/')) {
    if (pathname === '/api/status') {
      const catalogPath = path.join(ROOT_DIR, 'drivers', 'site-catalog.json');
      let catalog = null;
      if (fs.existsSync(catalogPath)) {
        try { catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8')); } catch(e){}
      }
      return sendJson(res, 200, {
        status: 'online',
        serverTime: new Date().toISOString(),
        uptimeSeconds: Math.floor(process.uptime()),
        totalQuestions: catalog ? catalog.grandTotalQuestions : 27833,
        totalMCQ: catalog ? catalog.grandTotalMCQ : 26897,
        totalWritten: catalog ? catalog.grandTotalWritten : 936,
        modulesCount: catalog ? catalog.totalModules : 5
      });
    }

    if (pathname === '/api/jobs') {
      const catalogPath = path.join(ROOT_DIR, 'drivers', 'site-catalog.json');
      if (fs.existsSync(catalogPath)) {
        try {
          const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
          return sendJson(res, 200, catalog.jobs);
        } catch(e){}
      }
      return sendJson(res, 500, { error: 'Failed to load catalog' });
    }

    // Match /api/job/:key or /api/job/:key/mcq or /api/job/:key/written
    const jobMatch = pathname.match(/^\/api\/job\/([a-z_]+)(?:\/(mcq|written))?$/);
    if (jobMatch) {
      const jobKey = jobMatch[1];
      const subType = jobMatch[2];
      const folderName = JOB_KEY_MAP[jobKey];
      if (!folderName) {
        return sendJson(res, 404, { error: `Job key '${jobKey}' not found` });
      }

      const folderPath = path.join(ROOT_DIR, folderName);
      if (subType === 'mcq') {
        const filePath = path.join(folderPath, 'preliminary_mcq.json');
        if (fs.existsSync(filePath)) {
          const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          return sendJson(res, 200, data);
        }
        return sendJson(res, 404, { error: 'MCQ data not found' });
      }

      if (subType === 'written') {
        const filePath = path.join(folderPath, 'written_questions.json');
        if (fs.existsSync(filePath)) {
          const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          return sendJson(res, 200, data);
        }
        return sendJson(res, 404, { error: 'Written data not found' });
      }

      // Default: Return both
      const mcqPath = path.join(folderPath, 'preliminary_mcq.json');
      const writtenPath = path.join(folderPath, 'written_questions.json');
      const mcqs = fs.existsSync(mcqPath) ? JSON.parse(fs.readFileSync(mcqPath, 'utf8')) : [];
      const written = fs.existsSync(writtenPath) ? JSON.parse(fs.readFileSync(writtenPath, 'utf8')) : [];
      return sendJson(res, 200, {
        jobKey,
        folderName,
        mcqCount: mcqs.length,
        writtenCount: written.length,
        preliminary_mcq: mcqs,
        written_questions: written
      });
    }

    return sendJson(res, 404, { error: 'Endpoint not found' });
  }

  // Static File Serving
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // Security: prevent directory traversal
  const safePath = path.normalize(path.join(ROOT_DIR, pathname));
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Access Denied');
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(`
        <!DOCTYPE html>
        <html lang="bn">
        <head><meta charset="utf-8"><title>ফাইল পাওয়া যায়নি (404)</title></head>
        <body style="font-family:sans-serif;text-align:center;padding:50px;">
          <h2>❌ ৪MD / ফাইল পাওয়া যায়নি</h2>
          <p>অনুরোধকৃত ফাইলটি পাওয়া যায়নি: <code>${pathname}</code></p>
          <a href="/" style="display:inline-block;padding:8px 16px;background:#2563eb;color:#fff;text-decoration:none;border-radius:6px;margin-top:12px;">হোম পেজে ফিরুন</a>
        </body>
        </html>
      `);
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(safePath);
    stream.on('error', (streamErr) => {
      console.error('Stream error:', streamErr);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      }
    });
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('\n=============================================================');
  console.log('🇧🇩 BPSC & GOVT RECRUITMENT SUPER SUGGESTION LOCAL SERVER');
  console.log('=============================================================');
  console.log(`🌐 Server Running at: http://localhost:${PORT}`);
  console.log(`🏠 Master Hub:       http://localhost:${PORT}/index.html`);
  console.log(`⚡ API Status:       http://localhost:${PORT}/api/status`);
  console.log(`📚 API Jobs:         http://localhost:${PORT}/api/jobs`);
  console.log('=============================================================\n');
});
