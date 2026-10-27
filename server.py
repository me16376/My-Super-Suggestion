#!/usr/bin/env python3
"""
BPSC & Government Recruitment Super Suggestion - Python HTTP Server
Supports:
- High-performance UTF-8 Static File Serving
- Full CORS Support (Allow-Origin: *)
- Automatic URL Decoding for Bengali folder and file names
- Built-in JSON API endpoints (/api/status, /api/jobs, /api/job/<key>)
- Multi-port fallback (e.g., 8000 -> 8080 -> 3000)
"""

import os
import sys
import json
import urllib.parse
from http.server import HTTPServer, BaseHTTPRequestHandler
import socket

# Force UTF-8 stdout encoding for Windows PowerShell / cmd
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

MIME_TYPES = {
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
}

JOB_KEY_MAP = {
    'maintenance': 'Sub-Assistant Maintenance Engineer Super Suggestion',
    'junior_instructor': 'Junior Instructor Tech Computer Super Suggestion',
    'petrobangla': 'Petrobangla Sub-Assistant Engineer Computer IT',
    'dss_karigori': 'DSS Karigori Proshikhok Computer Super Suggestion',
    'dss_data_entry': 'DSS Data Entry Operator Super Suggestion'
}

class SuperSuggestionHandler(BaseHTTPRequestHandler):
    server_version = "SuperSuggestionPython/2.0"

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Range')
        self.end_headers()

    def send_json(self, status_code, data):
        body = json.dumps(data, ensure_ascii=False, indent=2).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Cache-Control', 'no-cache')
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        pathname = urllib.parse.unquote(parsed.path)

        # Handle API routes
        if pathname.startswith('/api/'):
            return self.handle_api(pathname)

        # Static file routing
        if pathname in ('/', ''):
            pathname = '/index.html'

        # Security check: prevent directory traversal
        rel_path = pathname.lstrip('/')
        safe_path = os.path.abspath(os.path.join(ROOT_DIR, rel_path))
        if not safe_path.startswith(ROOT_DIR):
            self.send_error(403, "Access Denied")
            return

        if not os.path.exists(safe_path) or not os.path.isfile(safe_path):
            self.send_response(404)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            err_html = f"""<!DOCTYPE html>
<html lang="bn">
<head><meta charset="utf-8"><title>৪MD / ফাইল পাওয়া যায়নি</title></head>
<body style="font-family:sans-serif;text-align:center;padding:50px;background:#f8fafc;color:#1e293b;">
  <h2 style="color:#ef4444;">❌ ফাইল পাওয়া যায়নি (404 Not Found)</h2>
  <p>অনুরোধকৃত ফাইলটি পাওয়া যায়নি: <code>{pathname}</code></p>
  <a href="/" style="display:inline-block;padding:10px 20px;background:#0284c7;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;margin-top:14px;">🏠 মাস্টার পোর্টাল (Home) এ ফিরুন</a>
</body>
</html>"""
            self.wfile.write(err_html.encode('utf-8'))
            return

        ext = os.path.splitext(safe_path)[1].lower()
        content_type = MIME_TYPES.get(ext, 'application/octet-stream')

        try:
            with open(safe_path, 'rb') as f:
                content = f.read()

            self.send_response(200)
            self.send_header('Content-Type', content_type)
            self.send_header('Content-Length', str(len(content)))
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Cache-Control', 'no-cache')
            self.end_headers()
            self.wfile.write(content)
        except Exception as e:
            self.send_error(500, f"Server Error reading file: {e}")

    def handle_api(self, pathname):
        if pathname == '/api/status':
            catalog_file = os.path.join(ROOT_DIR, 'drivers', 'site-catalog.json')
            catalog = None
            if os.path.exists(catalog_file):
                try:
                    with open(catalog_file, 'r', encoding='utf-8') as f:
                        catalog = json.load(f)
                except Exception:
                    pass

            return self.send_json(200, {
                'status': 'online',
                'engine': 'Python ' + sys.version.split()[0],
                'server': 'SuperSuggestion Python HTTP Server',
                'totalQuestions': catalog.get('grandTotalQuestions', 27833) if catalog else 27833,
                'totalMCQ': catalog.get('grandTotalMCQ', 26897) if catalog else 26897,
                'totalWritten': catalog.get('grandTotalWritten', 936) if catalog else 936,
                'modulesCount': 5
            })

        if pathname == '/api/jobs':
            catalog_file = os.path.join(ROOT_DIR, 'drivers', 'site-catalog.json')
            if os.path.exists(catalog_file):
                try:
                    with open(catalog_file, 'r', encoding='utf-8') as f:
                        cat = json.load(f)
                        return self.send_json(200, cat.get('jobs', []))
                except Exception as e:
                    return self.send_json(500, {'error': str(e)})
            return self.send_json(404, {'error': 'Catalog file not found'})

        parts = pathname.strip('/').split('/')
        # /api/job/<key> or /api/job/<key>/mcq or /api/job/<key>/written
        if len(parts) >= 3 and parts[0] == 'api' and parts[1] == 'job':
            job_key = parts[2]
            sub_type = parts[3] if len(parts) > 3 else None
            folder_name = JOB_KEY_MAP.get(job_key)
            if not folder_name:
                return self.send_json(404, {'error': f"Job key '{job_key}' not found"})

            folder_path = os.path.join(ROOT_DIR, folder_name)
            if sub_type == 'mcq':
                fp = os.path.join(folder_path, 'preliminary_mcq.json')
                if os.path.exists(fp):
                    with open(fp, 'r', encoding='utf-8') as f:
                        return self.send_json(200, json.load(f))
                return self.send_json(404, {'error': 'MCQ dataset not found'})

            if sub_type == 'written':
                fp = os.path.join(folder_path, 'written_questions.json')
                if os.path.exists(fp):
                    with open(fp, 'r', encoding='utf-8') as f:
                        return self.send_json(200, json.load(f))
                return self.send_json(404, {'error': 'Written dataset not found'})

            mcq_p = os.path.join(folder_path, 'preliminary_mcq.json')
            wri_p = os.path.join(folder_path, 'written_questions.json')
            mcqs = []
            writtens = []
            if os.path.exists(mcq_p):
                with open(mcq_p, 'r', encoding='utf-8') as f:
                    mcqs = json.load(f)
            if os.path.exists(wri_p):
                with open(wri_p, 'r', encoding='utf-8') as f:
                    writtens = json.load(f)

            return self.send_json(200, {
                'jobKey': job_key,
                'folderName': folder_name,
                'mcqCount': len(mcqs),
                'writtenCount': len(writtens),
                'preliminary_mcq': mcqs,
                'written_questions': writtens
            })

        return self.send_json(404, {'error': 'Endpoint not found'})

    def log_message(self, format, *args):
        # Quiet log for high speed, only display errors
        if args and len(args) > 1 and str(args[1]).startswith(('4', '5')):
            sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

def find_available_port(preferred_ports=[8000, 8080, 5000, 3001, 8888]):
    for port in preferred_ports:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('127.0.0.1', port)) != 0:
                return port
    return 8000

def main():
    port = int(os.environ.get('PORT', 0))
    if not port:
        # Check command line arg: python server.py 8080
        if len(sys.argv) > 1 and sys.argv[1].isdigit():
            port = int(sys.argv[1])
        else:
            port = find_available_port()

    server_address = ('', port)
    httpd = HTTPServer(server_address, SuperSuggestionHandler)

    print("\n" + "="*70)
    print("🇧🇩 BPSC & সরকারি চাকরি প্রস্তুতি সুপার সাজেশন — PYTHON HTTP SERVER")
    print("="*70)
    print(f"🚀 সার্ভার সফলভাবে চালু হয়েছে: http://localhost:{port}")
    print(f"🏠 মাস্টার পোর্টাল (Hub):     http://localhost:{port}/index.html")
    print("-" * 70)
    print("📚 ৫টি পদের সরাসরি পোর্টাল লিংক:")
    print(f" 1. পাসপোর্ট সাব-অ্যাসিস্ট্যান্ট: http://localhost:{port}/sub_assistant_maintenance_engineer_super_suggestion.html")
    print(f" 2. জুনিয়র ইন্সট্রাক্টর (কম্পিউটার): http://localhost:{port}/junior_instructor_computer_super_suggestion.html")
    print(f" 3. পেট্রোবাংলা সাব-অ্যাসিস্ট্যান্ট: http://localhost:{port}/petrobangla_sub_assistant_engineer_super_suggestion.html")
    print(f" 4. সমাজসেবা কারিগরি প্রশিক্ষক:   http://localhost:{port}/dss_karigori_proshikhok_computer_super_suggestion.html")
    print(f" 5. সমাজসেবা ডাটা এন্ট্রি অপারেটর: http://localhost:{port}/dss_data_entry_operator_super_suggestion.html")
    print("-" * 70)
    print(f"⚡ API স্ট্যাটাস এন্ডপয়েন্ট:      http://localhost:{port}/api/status")
    print("="*70)
    print("সার্ভার বন্ধ করতে কিবোর্ডে Ctrl + C চাপুন।\n")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 সার্ভার বন্ধ করা হচ্ছে...")
        httpd.server_close()
        print("✅ সার্ভার সফলভাবে বন্ধ হয়েছে।")

if __name__ == '__main__':
    main()
