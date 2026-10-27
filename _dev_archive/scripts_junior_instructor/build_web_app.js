const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const outHtml1 = path.join(baseDir, 'junior_instructor_computer_super_suggestion.html');
const outHtml2 = path.join(baseDir, 'index.html');

// Read the clean app logic from sub-assistant or tailor it
const srcAppLogicPath = path.resolve(__dirname, '../../Sub-Assistant Maintenance Engineer Super Suggestion/scripts/app_logic.js');
let appLogic = fs.readFileSync(srcAppLogicPath, 'utf8');

// Customizations for Junior Instructor in appLogic if needed:
appLogic = appLogic.replace(/সাব-অ্যাসিস্ট্যান্ট মেইনটেন্যান্স ইঞ্জিনিয়ার/g, 'জুনিয়র ইন্সট্রাক্টর [টেক/ কম্পিউটার]');
appLogic = appLogic.replace(/পাসপোর্ট অধিদপ্তর/g, 'কারিগরি শিক্ষা অধিদপ্তর ও টিএসসি');

const htmlContent = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BPSC জুনিয়র ইন্সট্রাক্টর [টেক/ কম্পিউটার] — প্রিলি ও লিখিত পূর্ণাঙ্গ প্রস্তুতি সিস্টেম</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <!-- KaTeX for Math & Technical Equations -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
  <style>
    :root {
      --primary: #0284c7;
      --primary-dark: #0369a1;
      --primary-light: #f0f9ff;
      --accent: #2563eb;
      --accent-glow: rgba(2, 132, 199, 0.15);
      --bg-main: #f8fafc;
      --card-bg: #ffffff;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --border-color: #e2e8f0;
      --success: #10b981;
      --success-bg: #ecfdf5;
      --danger: #ef4444;
      --danger-bg: #fef2f2;
      --warning: #f59e0b;
      --warning-bg: #fffbeb;
      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
      --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.08);
      --shadow-lg: 0 10px 25px -5px rgba(15, 23, 42, 0.12);
      --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Hind Siliguri', 'Inter', sans-serif;
      background-color: var(--bg-main);
      color: var(--text-main);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* Header & Navigation */
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

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    }

    /* Hero Header */
    .header-hero {
      background: linear-gradient(135deg, #091e3a 0%, #0369a1 60%, #0284c7 100%);
      color: #ffffff;
      padding: 36px 0 30px;
      position: relative;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.15);
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.25);
      padding: 4px 14px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
      backdrop-filter: blur(8px);
    }

    .hero-title {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 1.3;
    }

    .hero-subtitle {
      font-size: 15px;
      color: #bae6fd;
      max-width: 800px;
      margin-bottom: 20px;
    }

    /* Master Tabs: Prelim vs Written vs Mock */
    .master-tabs {
      display: flex;
      background: rgba(15, 23, 42, 0.6);
      padding: 6px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      gap: 8px;
      margin-top: 8px;
      width: 100%;
      max-width: 720px;
      flex-wrap: wrap;
    }

    .master-tab-btn {
      flex: 1;
      min-width: 180px;
      padding: 12px 16px;
      border: none;
      background: transparent;
      color: #cbd5e1;
      font-family: inherit;
      font-size: 14.5px;
      font-weight: 600;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: var(--transition);
    }

    .master-tab-btn.active {
      background: #ffffff;
      color: #0f172a;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .master-tab-btn:hover:not(.active) {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }

    /* Controls Bar: Filter & Search */
    .controls-wrapper {
      background: var(--card-bg);
      border-radius: var(--radius-md);
      padding: 18px 20px;
      margin: 24px 0 20px;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
    }

    .filter-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      align-items: center;
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .filter-label {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .custom-select, .search-input {
      padding: 10px 14px;
      border-radius: var(--radius-sm);
      border: 1.5px solid var(--border-color);
      font-family: inherit;
      font-size: 14px;
      color: var(--text-main);
      background-color: #ffffff;
      transition: var(--transition);
      outline: none;
      width: 100%;
    }

    .custom-select:focus, .search-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
    }

    /* Subject Pills */
    .subject-pills {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px dashed var(--border-color);
    }

    .subject-pill {
      background: var(--bg-main);
      border: 1px solid var(--border-color);
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      color: var(--text-muted);
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .subject-pill:hover {
      background: #e2e8f0;
      color: var(--text-main);
    }

    .subject-pill.active {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
      box-shadow: 0 2px 6px rgba(2, 132, 199, 0.3);
    }

    /* Live Stats Bar */
    .stats-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      background: var(--card-bg);
      padding: 12px 18px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border-color);
    }

    .stats-count {
      font-size: 14px;
      color: var(--text-muted);
    }

    .stats-count strong {
      color: var(--primary);
      font-size: 16px;
    }

    .score-badge {
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 13px;
      font-weight: 600;
    }

    .score-pill {
      padding: 4px 10px;
      border-radius: 6px;
    }

    .score-pill.correct {
      background: var(--success-bg);
      color: var(--success);
      border: 1px solid rgba(16, 185, 129, 0.3);
    }

    .score-pill.wrong {
      background: var(--danger-bg);
      color: var(--danger);
      border: 1px solid rgba(239, 68, 68, 0.3);
    }

    .score-pill.score {
      background: #eff6ff;
      color: var(--primary);
      border: 1px solid rgba(2, 132, 199, 0.3);
    }

    .btn-reset {
      background: transparent;
      border: 1px solid var(--border-color);
      padding: 5px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-family: inherit;
      cursor: pointer;
      color: var(--text-muted);
      transition: var(--transition);
    }

    .btn-reset:hover {
      background: #f1f5f9;
      color: var(--text-main);
    }

    /* Card Layouts */
    .questions-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 40px;
    }

    .question-card {
      background: var(--card-bg);
      border-radius: var(--radius-md);
      padding: 20px;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      position: relative;
    }

    .question-card:hover {
      box-shadow: var(--shadow-md);
      border-color: #cbd5e1;
    }

    .card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }

    .topic-tag {
      background: #e0f2fe;
      color: #0369a1;
      font-size: 12px;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .subject-tag {
      background: #f1f5f9;
      color: #475569;
      font-size: 11px;
      font-weight: 600;
      padding: 3px 8px;
      border-radius: 6px;
    }

    .q-number {
      font-size: 14px;
      font-weight: 700;
      color: var(--primary);
      margin-right: 6px;
    }

    .q-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-main);
      line-height: 1.5;
      margin-bottom: 16px;
      white-space: pre-line;
    }

    /* MCQ Options */
    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 14px;
    }

    @media (min-width: 640px) {
      .options-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .option-btn {
      background: var(--bg-main);
      border: 1.5px solid var(--border-color);
      border-radius: var(--radius-sm);
      padding: 12px 14px;
      font-family: inherit;
      font-size: 14px;
      text-align: left;
      cursor: pointer;
      color: var(--text-main);
      transition: var(--transition);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .option-btn:hover:not(.disabled) {
      border-color: var(--primary);
      background-color: #f0f7ff;
      transform: translateY(-1px);
    }

    .option-btn.correct {
      background-color: var(--success-bg) !important;
      border-color: var(--success) !important;
      color: #065f46 !important;
      font-weight: 600;
    }

    .option-btn.wrong {
      background-color: var(--danger-bg) !important;
      border-color: var(--danger) !important;
      color: #991b1b !important;
    }

    .option-btn.disabled {
      cursor: default;
    }

    /* Explanation Box */
    .explanation-box {
      margin-top: 14px;
      background: #f8fafc;
      border-left: 4px solid var(--primary);
      padding: 12px 16px;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      font-size: 13.5px;
      color: #334155;
      display: none;
      animation: fadeIn 0.3s ease;
    }

    .explanation-box.show {
      display: block;
    }

    .explanation-title {
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    /* Written Questions Specifics */
    .written-card {
      border-left: 4px solid #0284c7;
    }

    .marks-badge {
      background: #fef3c7;
      color: #b45309;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 700;
    }

    .btn-toggle-answer {
      background: #eff6ff;
      color: var(--primary);
      border: 1px solid #bfdbfe;
      padding: 8px 16px;
      border-radius: var(--radius-sm);
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: var(--transition);
      margin-top: 8px;
    }

    .btn-toggle-answer:hover {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    .written-answer-box {
      background: #fdfefe;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      padding: 16px;
      margin-top: 14px;
      font-size: 14px;
      white-space: pre-wrap;
      font-family: inherit;
      color: #1e293b;
      line-height: 1.7;
      display: none;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
    }

    .written-answer-box.show {
      display: block;
      animation: fadeIn 0.3s ease;
    }

    .key-points-box {
      background: #fffbeb;
      border: 1px dashed #fcd34d;
      border-radius: var(--radius-sm);
      padding: 10px 14px;
      margin-top: 12px;
      font-size: 13px;
      color: #92400e;
    }

    .key-points-title {
      font-weight: 700;
      margin-bottom: 4px;
    }

    /* Empty state */
    .empty-state {
      text-align: center;
      padding: 50px 20px;
      background: var(--card-bg);
      border-radius: var(--radius-md);
      border: 1px dashed var(--border-color);
      color: var(--text-muted);
    }

    /* Mock Exam Styles */
    .mock-container {
      margin-top: 10px;
    }

    .mock-welcome-card {
      background: var(--card-bg);
      border-radius: var(--radius-md);
      padding: 36px 28px;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
      text-align: center;
      max-width: 800px;
      margin: 20px auto;
    }

    .mock-welcome-card h2 {
      font-size: 24px;
      color: var(--text-main);
      margin-bottom: 10px;
      font-weight: 700;
    }

    .mock-welcome-card p {
      font-size: 15px;
      color: var(--text-muted);
      margin-bottom: 24px;
    }

    .mock-stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 14px;
      margin-bottom: 26px;
    }

    .mock-stat-box {
      background: var(--bg-main);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    .mock-stat-box strong {
      font-size: 26px;
      color: var(--primary);
    }

    .mock-stat-box span {
      font-size: 13px;
      color: var(--text-muted);
      font-weight: 600;
    }

    .mock-rules-list {
      background: #f8fafc;
      border-left: 4px solid var(--primary);
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      padding: 16px 20px;
      margin: 20px 0 28px 0;
      text-align: left;
      font-size: 14px;
      color: var(--text-main);
      line-height: 1.8;
      list-style-type: none;
    }

    .btn-start-mock {
      background: linear-gradient(135deg, #0284c7, #0369a1);
      color: #ffffff;
      border: none;
      padding: 14px 32px;
      border-radius: var(--radius-sm);
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
      box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    .btn-start-mock:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(2, 132, 199, 0.45);
    }

    /* Sticky Exam Status Bar */
    .mock-sticky-bar {
      position: sticky;
      top: 16px;
      z-index: 100;
      background: #0f172a;
      color: #ffffff;
      border-radius: var(--radius-md);
      padding: 12px 20px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      box-shadow: var(--shadow-lg);
    }

    .mock-timer {
      font-size: 18px;
      font-weight: 700;
      color: #38bdf8;
      font-family: 'Fira Code', monospace;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .mock-progress {
      font-size: 14px;
      color: #cbd5e1;
    }

    .btn-submit-mock {
      background: #ef4444;
      color: #ffffff;
      border: none;
      padding: 8px 18px;
      border-radius: var(--radius-sm);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
    }

    .btn-submit-mock:hover {
      background: #dc2626;
    }

    /* Result Scorecard */
    .mock-result-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 28px;
      margin-bottom: 28px;
      text-align: center;
      box-shadow: var(--shadow-md);
    }

    .result-score-highlight {
      font-size: 42px;
      font-weight: 800;
      color: var(--primary);
      margin: 10px 0;
    }

    .result-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
      text-align: left;
    }

    .result-table th, .result-table td {
      padding: 10px 14px;
      border: 1px solid var(--border-color);
    }

    .result-table th {
      background: var(--bg-main);
      font-weight: 600;
    }

    /* Load More Buttons */
    .load-more-container {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin: 32px 0 16px 0;
      flex-wrap: wrap;
    }

    .btn-load-more, .btn-load-all {
      padding: 12px 24px;
      font-size: 14px;
      font-weight: 600;
      border-radius: var(--radius-sm);
      cursor: pointer;
      font-family: inherit;
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .btn-load-more {
      background: var(--primary);
      color: #ffffff;
      border: 1px solid var(--primary);
      box-shadow: 0 4px 12px rgba(2, 132, 199, 0.2);
    }

    .btn-load-more:hover {
      background: var(--primary-dark);
      transform: translateY(-1px);
    }

    .btn-load-all {
      background: #ffffff;
      color: var(--text-main);
      border: 1.5px solid var(--border-color);
    }

    .btn-load-all:hover {
      background: #f1f5f9;
      border-color: #cbd5e1;
    }

    .empty-state h3 {
      font-size: 18px;
      color: var(--text-main);
      margin-bottom: 6px;
    }

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
      background: #0284c7;
      color: #ffffff;
      border-color: #0284c7;
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

    /* Print styles */
    @media print {
      .header-hero, .controls-wrapper, .stats-bar, .master-tabs, .btn-toggle-answer, footer {
        display: none !important;
      }
      body {
        background: #ffffff;
      }
      .question-card {
        box-shadow: none;
        border: 1px solid #ccc;
        page-break-inside: avoid;
        margin-bottom: 15px;
      }
      .written-answer-box {
        display: block !important;
      }
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 24px;
      font-size: 13px;
      color: var(--text-muted);
      border-top: 1px solid var(--border-color);
      background: var(--card-bg);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>

  <!-- Header Section -->
  <header class="header-hero">
    <div class="container hero-content">
      <div class="hero-nav-bar">
        <div class="hero-badge" style="margin-bottom:0;">
          <span>🇧🇩 BPSC Non-Cadre Job Solution | ইউনিট-০৯</span>
        </div>
        <button id="theme-toggle-btn" class="hero-top-link" onclick="toggleTheme()" title="ডার্ক / লাইট মোড পরিবর্তন" style="cursor:pointer;border:none;">
          <span id="theme-icon">🌙</span> <span id="theme-text">ডার্ক মোড</span>
        </button>
        <a href="exam_guide.html" target="_blank" class="hero-top-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          অফিসিয়াল সিলেবাস ও গাইড (Exam Guide)
        </a>
        <a href="Junior_Instructor_Computer_Exam_Syllabus_Guide.pdf" target="_blank" class="hero-top-link outline">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          সিলেবাস PDF
        </a>
      </div>
      <h1 class="hero-title">জুনিয়র ইন্সট্রাক্টর [টেক/ কম্পিউটার] (১০ম গ্রেড)</h1>
      <p class="hero-subtitle">টেকনিক্যাল স্কুল ও কলেজসমূহ (TSC) ও পলিটেকনিক — প্রিলিমিনারি (১২,৬০০+ MCQ) ও মূল লিখিত (৩৭২+ প্রশ্ন ও সমাধান) মাস্টার প্রশ্নব্যাংক ও লাইভ মক টেস্ট</p>
      
      <!-- Master Mode Switcher -->
      <div class="master-tabs">
        <button id="tab-prelim" class="master-tab-btn active" onclick="switchMasterMode('prelim')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
          প্রিলিমিনারি প্রশ্ন ও কুইজ (MCQ - ১০০ নম্বর)
        </button>
        <button id="tab-written" class="master-tab-btn" onclick="switchMasterMode('written')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          লিখিত প্রশ্ন ও উত্তর (Written - ২০০ নম্বর)
        </button>
        <button id="tab-mock" class="master-tab-btn" onclick="switchMasterMode('mock')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ১০০ নম্বরের লাইভ মডেল টেস্ট (Mock Exam)
        </button>
      </div>
    </div>
  </header>

  <main class="container">
    
    <!-- Controls Bar: Topic, Subject, Search Filter -->
    <div class="controls-wrapper">
      <div class="filter-grid">
        <!-- Search Input -->
        <div class="filter-group">
          <label class="filter-label" for="search-input">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            প্রশ্ন খুঁজুন (কীওয়ার্ড / বিষয়)
          </label>
          <input type="text" id="search-input" class="search-input" placeholder="যেকোনো শব্দ লিখে সার্চ করুন..." oninput="handleFilterChange()">
        </div>

        <!-- Topic/Chapter Filter (Oddhay) -->
        <div class="filter-group">
          <label class="filter-label" for="topic-select">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
            অধ্যায় / টপিক ফিল্টার (Topic Selection)
          </label>
          <select id="topic-select" class="custom-select" onchange="handleFilterChange()">
            <option value="all">সকল অধ্যায় ও টপিক (All Topics)</option>
          </select>
        </div>
      </div>

      <!-- Subject Filter Pills -->
      <div class="subject-pills" id="subject-pills-container">
        <button class="subject-pill active" onclick="selectSubject('all')">সকল বিষয় (All)</button>
        <button class="subject-pill" onclick="selectSubject('টেকনিক্যাল (কম্পিউটার)')">টেকনিক্যাল (কম্পিউটার)</button>
        <button class="subject-pill" onclick="selectSubject('বাংলা')">বাংলা</button>
        <button class="subject-pill" onclick="selectSubject('ইংরেজি')">ইংরেজি</button>
        <button class="subject-pill" onclick="selectSubject('সাধারণ জ্ঞান')">সাধারণ জ্ঞান</button>
        <button class="subject-pill" id="pill-bookmark" onclick="toggleBookmarkFilter()" style="border-color:#f59e0b;color:#d97706;">⭐ বুকমার্ক (<span id="bookmark-count">0</span>)</button>
      </div>
    </div>

    <!-- Live Statistics Bar -->
    <div class="stats-bar">
      <div class="stats-count">
        প্রদর্শিত প্রশ্ন: <strong id="visible-count">0</strong> টি (সর্বমোট: <span id="total-count">0</span> টি)
      </div>
      
      <!-- MCQ Interactive Score Badge -->
      <div id="prelim-stats" class="score-badge">
        <span class="score-pill correct">সঠিক: <span id="correct-count">0</span></span>
        <span class="score-pill wrong">ভুল: <span id="wrong-count">0</span></span>
        <span class="score-pill score">স্কোর: <span id="net-score">0.00</span></span>
        <button class="btn-reset" onclick="resetScore()">রিসেট</button>
      </div>

      <!-- Written Mode Action Bar -->
      <div id="written-stats" class="score-badge" style="display: none;">
        <button class="btn-reset" onclick="toggleAllWrittenAnswers(true)">সকল উত্তর উন্মুক্ত করুন</button>
        <button class="btn-reset" onclick="toggleAllWrittenAnswers(false)">সকল উত্তর লুকান</button>
        <button class="btn-reset" onclick="window.print()">🖨️ লিখিত শিট প্রিন্ট করুন</button>
      </div>
    </div>

    <!-- Questions Feed Container -->
    <div id="questions-container" class="questions-container">
      <!-- Injected via JavaScript -->
    </div>

    <!-- Load More / Pagination -->
    <div id="pagination-controls" class="load-more-container" style="display: none;">
      <button class="btn-load-more" onclick="loadMoreQuestions()">
        আরও প্রশ্ন লোড করুন (Load More)
      </button>
      <button class="btn-load-all" onclick="loadAllRemaining()">
        একসাথে সব প্রশ্ন দেখুন (View All)
      </button>
    </div>

  </main>

  <footer>
    <div class="container">
      <p><strong>বাংলাদেশ সরকারি কর্ম কমিশন (BPSC) — নন-ক্যাডার নিয়োগ প্রস্তুতি সিস্টেম</strong></p>
      <p style="margin-top: 4px; color: #94a3b8;">পদ: জুনিয়র ইন্সট্রাক্টর [টেক/ কম্পিউটার] (১০ম গ্রেড) | টেকনিক্যাল স্কুল ও কলেজসমূহ (TSC) ও পলিটেকনিক | শূন্য পদ: ৮১ টি</p>
    </div>
  </footer>

  <!-- Embedded Question Datasets -->
  <script src="data/prelim_data.js"></script>
  <script src="data/written_data.js"></script>

  <!-- Application Logic -->
  <script>
${appLogic}
  </script>
</body>
</html>
`;

fs.writeFileSync(outHtml1, htmlContent, 'utf8');
fs.writeFileSync(outHtml2, htmlContent, 'utf8');

console.log(`Successfully generated:\n1. ${outHtml1} (${htmlContent.length} bytes)\n2. ${outHtml2} (${htmlContent.length} bytes)`);
