const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const appLogicPath = path.join(__dirname, 'app_logic.js');

let html = fs.readFileSync(indexPath, 'utf8');
const appLogic = fs.readFileSync(appLogicPath, 'utf8');

// 1. Ensure CSS has style for .hero-nav-bar, .hero-top-link, and print styles
const cssToAdd = `
    /* Header Quick Links */
    .hero-nav-bar {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .hero-top-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #ffffff;
      text-decoration: none;
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 600;
      transition: var(--transition);
      backdrop-filter: blur(8px);
    }

    .hero-top-link:hover {
      background: rgba(255, 255, 255, 0.28);
      transform: translateY(-1px);
    }

    .hero-top-link.outline {
      background: transparent;
      border-color: rgba(56, 189, 248, 0.5);
      color: #7dd3fc;
    }

    .hero-top-link.outline:hover {
      background: rgba(56, 189, 248, 0.15);
    }

    .btn-print-action {
      background: #f1f5f9;
      color: #1e293b;
      border: 1px solid #cbd5e1;
      padding: 8px 16px;
      border-radius: var(--radius-sm);
      font-size: 13.5px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: var(--transition);
    }

    .btn-print-action:hover {
      background: #e2e8f0;
      border-color: #94a3b8;
    }
`;

if (!html.includes('.hero-nav-bar')) {
  html = html.replace('/* Header & Navigation */', '/* Header & Navigation */\n' + cssToAdd);
}

// 2. Update Header HTML with .hero-nav-bar
const oldHeroBadge = `      <div class="hero-badge">
        <span>🇧🇩 BPSC Non-Cadre Job Solution</span>
      </div>`;

const newHeroTop = `      <div class="hero-nav-bar">
        <div class="hero-badge" style="margin-bottom:0;">
          <span>🇧🇩 BPSC Non-Cadre Job Solution</span>
        </div>
        <a href="exam_guide.html" target="_blank" class="hero-top-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          অফিসিয়াল সিলেবাস ও গাইড (Exam Guide)
        </a>
        <a href="সাব-অ্যাসিস্ট্যান্ট_মেইনটেন্যান্স_ইঞ্জিনিয়ার_পরীক্ষা_পদ্ধতি_ও_সিলেবাস.pdf" target="_blank" class="hero-top-link outline">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          সিলেবাস PDF
        </a>
      </div>`;

if (html.includes(oldHeroBadge)) {
  html = html.replace(oldHeroBadge, newHeroTop);
}

// 3. Ensure Print button in Written Mode stats
const oldWrittenStats = `<div id="written-stats" class="score-badge" style="display: none;">
        <button class="btn-reset" onclick="toggleAllWrittenAnswers(true)">সকল উত্তর উন্মুক্ত করুন</button>
        <button class="btn-reset" onclick="toggleAllWrittenAnswers(false)">সকল উত্তর লুকান</button>
      </div>`;

const newWrittenStats = `<div id="written-stats" class="score-badge" style="display: none;">
        <button class="btn-reset" onclick="toggleAllWrittenAnswers(true)">সকল উত্তর উন্মুক্ত করুন</button>
        <button class="btn-reset" onclick="toggleAllWrittenAnswers(false)">সকল উত্তর লুকান</button>
        <button class="btn-reset" onclick="window.print()">🖨️ লিখিত শিট প্রিন্ট করুন</button>
      </div>`;

if (html.includes(oldWrittenStats)) {
  html = html.replace(oldWrittenStats, newWrittenStats);
}

// 4. Update the final <script> tag with appLogic
const scriptTagIndex = html.indexOf('<script>\n    let PRELIM_QUESTIONS');
if (scriptTagIndex === -1) {
  console.error('Could not find starting <script> tag with let PRELIM_QUESTIONS!');
  process.exit(1);
}

const htmlBeforeScript = html.substring(0, scriptTagIndex);
const finalHtml = htmlBeforeScript + '<script>\n' + appLogic + '\n  </script>\n</body>\n</html>\n';

fs.writeFileSync(indexPath, finalHtml, 'utf8');
console.log('Successfully built index.html! File size:', finalHtml.length, 'bytes');
