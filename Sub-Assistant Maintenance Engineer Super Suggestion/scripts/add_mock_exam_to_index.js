const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Add Mock Exam Tab button if not present
if (!html.includes('id="tab-mock"')) {
  const target = `<button id="tab-written" class="master-tab-btn" onclick="switchMasterMode('written')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          লিখিত প্রশ্ন ও উত্তর (Written)
        </button>`;

  const replacement = `${target}
        <button id="tab-mock" class="master-tab-btn" onclick="switchMasterMode('mock')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ১০০ নম্বরের পূর্ণাঙ্গ মডেল টেস্ট (Mock Exam)
        </button>`;

  html = html.replace(target, replacement);
  console.log('✓ Added tab-mock to master-tabs');
}

// 2. Add #mock-exam-container after #questions-list
if (!html.includes('id="mock-exam-container"')) {
  const target = `<div id="questions-list" class="questions-container">
      <!-- Injected via JavaScript -->
    </div>`;

  const replacement = `${target}

    <!-- Dedicated Mock Exam Container -->
    <div id="mock-exam-container" class="mock-container" style="display: none;">
      <!-- Dynamically generated via JavaScript -->
    </div>`;

  html = html.replace(target, replacement);
  console.log('✓ Added mock-exam-container to main');
}

// 3. Add Mock Exam CSS styles
if (!html.includes('.mock-welcome-card')) {
  const styleTarget = `/* Load More Buttons */`;
  const mockStyles = `/* Mock Exam Styles */
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
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: #ffffff;
      border: none;
      padding: 14px 32px;
      border-radius: var(--radius-sm);
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    .btn-start-mock:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
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

    ${styleTarget}`;

  html = html.replace(styleTarget, mockStyles);
  console.log('✓ Added Mock Exam CSS');
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Updated index.html structure.');
