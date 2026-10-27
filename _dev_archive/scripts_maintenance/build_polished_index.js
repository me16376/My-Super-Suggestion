const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const appLogicPath = path.join(__dirname, 'app_logic.js');

let html = fs.readFileSync(indexPath, 'utf8');
const appLogic = fs.readFileSync(appLogicPath, 'utf8');

// 1. Dark Mode and Bookmark CSS
const extraCss = `
    /* Bookmark Button Styling */
    .btn-bookmark {
      background: transparent;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      cursor: pointer;
      font-size: 15px;
      color: var(--text-muted);
      padding: 2px 8px;
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      line-height: 1;
    }

    .btn-bookmark:hover {
      color: #f59e0b;
      border-color: #f59e0b;
      background: rgba(245, 158, 11, 0.1);
    }

    .btn-bookmark.active {
      color: #f59e0b;
      border-color: #f59e0b;
      background: rgba(245, 158, 11, 0.15);
      font-weight: 700;
    }

    /* Dark Mode Palette */
    body.dark-mode {
      --bg-main: #0b1120;
      --card-bg: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --border-color: #334155;
      --primary-light: #1e293b;
    }

    body.dark-mode .option-btn {
      background: #1e293b;
      color: #f1f5f9;
      border-color: #334155;
    }

    body.dark-mode .option-btn:hover:not(.disabled) {
      background: #273549;
      border-color: #38bdf8;
    }

    body.dark-mode .explanation-box {
      background: #0f172a;
      border-left-color: #38bdf8;
      color: #e2e8f0;
    }

    body.dark-mode .written-answer-box {
      background: #0f172a;
      border-color: #334155;
      color: #f1f5f9;
    }

    body.dark-mode .key-points-box {
      background: #2a2012;
      border-color: #78350f;
      color: #fde68a;
    }

    body.dark-mode .search-input,
    body.dark-mode .custom-select {
      background: #1e293b;
      border-color: #334155;
      color: #f8fafc;
    }

    body.dark-mode .subject-pill {
      background: #1e293b;
      border-color: #334155;
      color: #cbd5e1;
    }

    body.dark-mode .subject-pill.active {
      background: #2563eb;
      color: #ffffff;
      border-color: #2563eb;
    }

    body.dark-mode .mock-welcome-card,
    body.dark-mode .mock-result-card {
      background: #1e293b;
      border-color: #334155;
    }

    body.dark-mode .mock-stat-box {
      background: #0f172a;
      border-color: #334155;
    }

    body.dark-mode .mock-rules-list {
      background: #0f172a;
      color: #e2e8f0;
      border-left-color: #38bdf8;
    }

    body.dark-mode .result-table th {
      background: #0f172a;
      color: #f8fafc;
    }

    body.dark-mode .result-table th, 
    body.dark-mode .result-table td {
      border-color: #334155;
    }

    body.dark-mode footer {
      background: #0f172a;
      border-top-color: #1e293b;
    }

    body.dark-mode .btn-load-all {
      background: #1e293b;
      color: #f1f5f9;
      border-color: #334155;
    }

    body.dark-mode .btn-load-all:hover {
      background: #273549;
    }

    body.dark-mode .btn-print-action {
      background: #1e293b;
      color: #f1f5f9;
      border-color: #334155;
    }

    body.dark-mode .btn-print-action:hover {
      background: #273549;
    }
`;

if (!html.includes('.btn-bookmark')) {
  html = html.replace('/* Print styles */', extraCss + '\n    /* Print styles */');
}

// 2. Add Theme Toggle button into .hero-nav-bar
const themeBtnHtml = `<button id="theme-toggle-btn" class="hero-top-link" onclick="toggleTheme()" title="ডার্ক / লাইট মোড পরিবর্তন" style="cursor:pointer;border:none;">
          <span id="theme-icon">🌙</span> <span id="theme-text">ডার্ক মোড</span>
        </button>`;

if (!html.includes('id="theme-toggle-btn"')) {
  html = html.replace('</div>\n        <a href="exam_guide.html"', '</div>\n        ' + themeBtnHtml + '\n        <a href="exam_guide.html"');
}

// 3. Add Bookmark Filter pill into .subject-pills
const bookmarkPillHtml = `<button class="subject-pill" id="pill-bookmark" onclick="toggleBookmarkFilter()" style="border-color:#f59e0b;color:#d97706;">⭐ বুকমার্ক (<span id="bookmark-count">0</span>)</button>`;

if (!html.includes('id="pill-bookmark"')) {
  html = html.replace('<button class="subject-pill" onclick="selectSubject(\'সাধারণ জ্ঞান\')">সাধারণ জ্ঞান</button>', '<button class="subject-pill" onclick="selectSubject(\'সাধারণ জ্ঞান\')">সাধারণ জ্ঞান</button>\n        ' + bookmarkPillHtml);
}

// 4. Add Quick Quiz button into #mcq-stats
const quickQuizBtnHtml = `<button class="btn-reset" onclick="startQuickQuiz(20)" title="এলোমেলো ২০টি প্রশ্ন নিয়ে কুইক প্র্যাকটিস">🎲 কুইক ২০ কুইজ</button>`;

if (!html.includes('startQuickQuiz(20)')) {
  html = html.replace('<button class="btn-reset" onclick="resetMcqScore()">রিসেট</button>', quickQuizBtnHtml + '\n        <button class="btn-reset" onclick="resetMcqScore()">রিসেট</button>');
}

// 5. Replace <script> contents with appLogic
const scriptTagIndex = html.indexOf('<script>\n    let PRELIM_QUESTIONS');
if (scriptTagIndex === -1) {
  console.error('Could not find starting <script> tag with let PRELIM_QUESTIONS!');
  process.exit(1);
}

const htmlBeforeScript = html.substring(0, scriptTagIndex);
const finalHtml = htmlBeforeScript + '<script>\n' + appLogic + '\n  </script>\n</body>\n</html>\n';

fs.writeFileSync(indexPath, finalHtml, 'utf8');
console.log('Successfully built polished index.html with Dark Mode, Bookmarks, and Quick Quiz! Length:', finalHtml.length);
