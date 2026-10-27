const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Update switchMasterMode function in index.html to handle 'mock' mode
const oldSwitchMode = `    // Switch between Prelim & Written
    function switchMasterMode(mode) {
      currentMode = mode;
      resetPagination();
      
      document.getElementById('tab-prelim').classList.toggle('active', mode === 'prelim');
      document.getElementById('tab-written').classList.toggle('active', mode === 'written');

      document.getElementById('mcq-stats').style.display = mode === 'prelim' ? 'flex' : 'none';
      document.getElementById('written-stats').style.display = mode === 'written' ? 'flex' : 'none';

      // Reset filters to all for clean switch
      currentTopic = 'all';
      updateTopicsDropdown();
      renderQuestions();
    }`;

const newSwitchMode = `    // Switch between Prelim, Written & Mock Exam
    function switchMasterMode(mode) {
      currentMode = mode;
      resetPagination();
      
      document.getElementById('tab-prelim').classList.toggle('active', mode === 'prelim');
      document.getElementById('tab-written').classList.toggle('active', mode === 'written');
      const tabMock = document.getElementById('tab-mock');
      if (tabMock) tabMock.classList.toggle('active', mode === 'mock');

      const isMock = mode === 'mock';
      document.querySelector('.controls-wrapper').style.display = isMock ? 'none' : 'block';
      document.querySelector('.stats-bar').style.display = isMock ? 'none' : 'flex';
      document.getElementById('questions-list').style.display = isMock ? 'none' : 'block';
      const mockContainer = document.getElementById('mock-exam-container');
      if (mockContainer) mockContainer.style.display = isMock ? 'block' : 'none';

      if (isMock) {
        renderMockView();
      } else {
        document.getElementById('mcq-stats').style.display = mode === 'prelim' ? 'flex' : 'none';
        document.getElementById('written-stats').style.display = mode === 'written' ? 'flex' : 'none';
        currentTopic = 'all';
        updateTopicsDropdown();
        renderQuestions();
      }
    }`;

html = html.replace(oldSwitchMode, newSwitchMode);

// Add Mock Exam JavaScript Logic at the bottom of the script tag before </script>
const mockEngineLogic = `
    /* ==========================================================
       MOCK EXAM ENGINE (100-Mark Full BPSC Standard Model Test)
       ========================================================== */
    let mockExamActive = false;
    let mockExamSubmitted = false;
    let mockQuestions = [];
    let mockUserAnswers = {}; // { qId: selectedOptionIndex }
    let mockTimerInterval = null;
    let mockTimeRemaining = 3600; // 60 minutes in seconds

    function renderMockView() {
      const container = document.getElementById('mock-exam-container');
      if (!container) return;

      if (!mockExamActive && !mockExamSubmitted) {
        container.innerHTML = \`
          <div class="mock-welcome-card">
            <h2>🇧🇩 বিপিএসসি ১০০ নম্বরের পূর্ণাঙ্গ মডেল টেস্ট</h2>
            <p>সাব-অ্যাসিস্ট্যান্ট মেইনটেন্যান্স ইঞ্জিনিয়ার (১০ম গ্রেড) নিয়োগ পরীক্ষার অফিসিয়াল সিলেবাস ও মানবন্টন অনুযায়ী ১০০টি প্রশ্নের পূর্ণাঙ্গ টেস্ট:</p>
            
            <div class="mock-stats-grid">
              <div class="mock-stat-box">
                <strong>৪০ টি</strong>
                <span>টেকনিক্যাল (কম্পিউটার)</span>
              </div>
              <div class="mock-stat-box">
                <strong>২০ টি</strong>
                <span>বাংলা</span>
              </div>
              <div class="mock-stat-box">
                <strong>২০ টি</strong>
                <span>ইংরেজি</span>
              </div>
              <div class="mock-stat-box">
                <strong>২০ টি</strong>
                <span>সাধারণ জ্ঞান</span>
              </div>
            </div>

            <ul class="mock-rules-list">
              <li>⏱️ <strong>সময়সীমা:</strong> ৬০ মিনিট (১ ঘণ্টা কাউন্টডাউন টাইমার)।</li>
              <li>🎯 <strong>মানবন্টন:</strong> সর্বমোট ১০০ নম্বর (প্রতিটি সঠিক উত্তরে ১.০০ নম্বর)।</li>
              <li>⚠️ <strong>নেগেটিভ মার্কিং:</strong> প্রতিটি ভুল উত্তরের জন্য -০.৫০ নম্বর কাটা যাবে।</li>
              <li>🔍 <strong>ফলাফল ও বিশ্লেষণ:</strong> পরীক্ষা শেষে মোট নম্বর, বিষয়ভিত্তিক স্কোর এবং ১০০টি প্রশ্নের সঠিক উত্তর ও ব্যাখ্যা দেখতে পাবেন।</li>
            </ul>

            <button class="btn-start-mock" onclick="startMockExam()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              মডেল টেস্ট শুরু করুন (Start 100-Mark Exam)
            </button>
          </div>
        \`;
        return;
      }

      if (mockExamActive) {
        renderMockExamActive(container);
      } else if (mockExamSubmitted) {
        renderMockExamResults(container);
      }
    }

    function sampleRandom(arr, n) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    }

    function startMockExam() {
      const techPool = PRELIM_QUESTIONS.filter(q => q.subject.includes('টেকনিক্যাল'));
      const banglaPool = PRELIM_QUESTIONS.filter(q => q.subject.includes('বাংলা'));
      const englishPool = PRELIM_QUESTIONS.filter(q => q.subject.includes('ইংরেজি'));
      const gkPool = PRELIM_QUESTIONS.filter(q => q.subject.includes('সাধারণ জ্ঞান'));

      mockQuestions = [
        ...sampleRandom(techPool, 40),
        ...sampleRandom(banglaPool, 20),
        ...sampleRandom(englishPool, 20),
        ...sampleRandom(gkPool, 20)
      ];

      mockExamActive = true;
      mockExamSubmitted = false;
      mockUserAnswers = {};
      mockTimeRemaining = 60 * 60; // 60 minutes

      if (mockTimerInterval) clearInterval(mockTimerInterval);
      mockTimerInterval = setInterval(() => {
        mockTimeRemaining--;
        updateMockTimerDisplay();
        if (mockTimeRemaining <= 0) {
          clearInterval(mockTimerInterval);
          alert('সময় শেষ! আপনার পরীক্ষা স্বয়ংক্রিয়ভাবে জমা দেওয়া হলো।');
          submitMockExam(true);
        }
      }, 1000);

      renderMockView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateMockTimerDisplay() {
      const timerEl = document.getElementById('mock-timer-display');
      if (!timerEl) return;
      const mins = Math.floor(mockTimeRemaining / 60);
      const secs = mockTimeRemaining % 60;
      timerEl.textContent = \`\${String(mins).padStart(2, '0')}:\${String(secs).padStart(2, '0')}\`;
      
      const answeredCount = Object.keys(mockUserAnswers).length;
      const progressEl = document.getElementById('mock-progress-display');
      if (progressEl) progressEl.textContent = \`উত্তর দেওয়া হয়েছে: \${answeredCount} / 100\`;
    }

    function renderMockExamActive(container) {
      const mins = Math.floor(mockTimeRemaining / 60);
      const secs = mockTimeRemaining % 60;
      const timerText = \`\${String(mins).padStart(2, '0')}:\${String(secs).padStart(2, '0')}\`;
      const answeredCount = Object.keys(mockUserAnswers).length;

      const questionsHtml = mockQuestions.map((q, idx) => {
        const selected = mockUserAnswers[q.id];

        const optionsHtml = q.options.map((opt, optIdx) => {
          const isSelected = selected === optIdx;
          const btnClass = 'option-btn' + (isSelected ? ' active-selected' : '');
          return \`
            <button class="\${btnClass}" style="\${isSelected ? 'background:#e0f2fe;border-color:#0284c7;font-weight:600;' : ''}" onclick="selectMockOption(\${q.id}, \${optIdx})">
              <span>\${opt}</span>
              \${isSelected ? '<span style=\"color:#0284c7;font-weight:700;\">●</span>' : ''}
            </button>
          \`;
        }).join('');

        return \`
          <div class="question-card" id="mock-q-\${q.id}">
            <div class="card-meta">
              <span class="topic-tag">\${q.topic}</span>
              <span class="subject-tag">\${q.subject}</span>
            </div>
            <div class="q-title">
              <span class="q-number">প্রশ্ন \${idx + 1}.</span> \${escapeHtml(q.question)}
            </div>
            <div class="options-grid">
              \${optionsHtml}
            </div>
          </div>
        \`;
      }).join('');

      container.innerHTML = \`
        <div class="mock-sticky-bar">
          <div class="mock-timer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span id="mock-timer-display">\${timerText}</span>
          </div>
          <div class="mock-progress" id="mock-progress-display">
            উত্তর দেওয়া হয়েছে: \${answeredCount} / 100
          </div>
          <button class="btn-submit-mock" onclick="submitMockExam(false)">
            পরীক্ষা সাবমিট করুন (Submit Exam)
          </button>
        </div>

        <div class="mock-questions-list">
          \${questionsHtml}
        </div>
      \`;

      if (window.renderMathInElement) {
        try {
          renderMathInElement(container, {
            delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}],
            throwOnError: false
          });
        } catch(e) {}
      }
    }

    function selectMockOption(qId, optIdx) {
      if (mockExamSubmitted) return;
      mockUserAnswers[qId] = optIdx;

      // Targeted card update
      const card = document.getElementById(\`mock-q-\${qId}\`);
      if (card) {
        const btns = card.querySelectorAll('.option-btn');
        btns.forEach((btn, idx) => {
          if (idx === optIdx) {
            btn.style.background = '#e0f2fe';
            btn.style.borderColor = '#0284c7';
            btn.style.fontWeight = '600';
            btn.innerHTML = \`<span>\${btn.firstElementChild.textContent}</span><span style="color:#0284c7;font-weight:700;">●</span>\`;
          } else {
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.fontWeight = 'normal';
            btn.innerHTML = \`<span>\${btn.firstElementChild.textContent}</span>\`;
          }
        });
      }

      updateMockTimerDisplay();
    }

    function submitMockExam(autoSubmit) {
      if (!autoSubmit) {
        const answered = Object.keys(mockUserAnswers).length;
        const conf = confirm(\`আপনি মোট ১০০টির মধ্যে \${answered}টি প্রশ্নের উত্তর দিয়েছেন।\\nআপনি কি নিশ্চিত যে পরীক্ষা জমা দিতে চান?\`);
        if (!conf) return;
      }

      if (mockTimerInterval) clearInterval(mockTimerInterval);
      mockExamActive = false;
      mockExamSubmitted = true;

      renderMockView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderMockExamResults(container) {
      let correct = 0;
      let wrong = 0;
      let skipped = 0;

      const subBreakdown = {
        'টেকনিক্যাল (কম্পিউটার)': { total: 0, correct: 0, wrong: 0 },
        'বাংলা': { total: 0, correct: 0, wrong: 0 },
        'ইংরেজি': { total: 0, correct: 0, wrong: 0 },
        'সাধারণ জ্ঞান': { total: 0, correct: 0, wrong: 0 }
      };

      mockQuestions.forEach(q => {
        const sub = q.subject;
        if (!subBreakdown[sub]) subBreakdown[sub] = { total: 0, correct: 0, wrong: 0 };
        subBreakdown[sub].total++;

        const userSel = mockUserAnswers[q.id];
        if (userSel === undefined) {
          skipped++;
        } else if (userSel === q.answer) {
          correct++;
          subBreakdown[sub].correct++;
        } else {
          wrong++;
          subBreakdown[sub].wrong++;
        }
      });

      const netScore = (correct * 1.0) - (wrong * 0.50);
      const isPassed = netScore >= 45.0; // Standard BPSC qualifying threshold

      const resultCardsHtml = mockQuestions.map((q, idx) => {
        const userSel = mockUserAnswers[q.id];
        const isAnswered = userSel !== undefined;
        const isCorrect = userSel === q.answer;

        const optionsHtml = q.options.map((opt, optIdx) => {
          let btnStyle = 'background:var(--bg-main);border:1.5px solid var(--border-color);';
          let statusBadge = '';

          if (optIdx === q.answer) {
            btnStyle = 'background:#ecfdf5;border-color:#10b981;color:#065f46;font-weight:600;';
            statusBadge = '<span style="color:#059669;font-weight:700;">✓ সঠিক উত্তর</span>';
          } else if (userSel === optIdx && !isCorrect) {
            btnStyle = 'background:#fef2f2;border-color:#ef4444;color:#991b1b;';
            statusBadge = '<span style="color:#dc2626;font-weight:700;">✗ আপনার উত্তর (ভুল)</span>';
          }

          return \`
            <div class="option-btn disabled" style="\${btnStyle}">
              <span>\${opt}</span>
              \${statusBadge}
            </div>
          \`;
        }).join('');

        return \`
          <div class="question-card" id="review-q-\${q.id}">
            <div class="card-meta">
              <span class="topic-tag">\${q.topic}</span>
              <span class="subject-tag">\${q.subject}</span>
              \${!isAnswered ? '<span style="background:#f1f5f9;color:#64748b;font-size:11px;padding:3px 8px;border-radius:6px;">উত্তর দেননি (Skipped)</span>' : ''}
              \${isAnswered && isCorrect ? '<span style="background:#ecfdf5;color:#059669;font-size:11px;padding:3px 8px;border-radius:6px;font-weight:600;">+১.০০ প্রাপ্ত</span>' : ''}
              \${isAnswered && !isCorrect ? '<span style="background:#fef2f2;color:#dc2626;font-size:11px;padding:3px 8px;border-radius:6px;font-weight:600;">-০.৫০ কর্তন</span>' : ''}
            </div>
            <div class="q-title">
              <span class="q-number">প্রশ্ন \${idx + 1}.</span> \${escapeHtml(q.question)}
            </div>
            <div class="options-grid">
              \${optionsHtml}
            </div>
            <div class="explanation-box show">
              <div class="explanation-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                সঠিক উত্তর ও বিস্তারিত ব্যাখ্যা:
              </div>
              <p><strong>উত্তর:</strong> \${q.options[q.answer]}</p>
              <p style="margin-top: 4px;">\${escapeHtml(q.explanation)}</p>
            </div>
          </div>
        \`;
      }).join('');

      container.innerHTML = \`
        <div class="mock-result-card">
          <h2 style="font-size: 24px; color: var(--text-main);">📋 মডেল টেস্ট রেজাল্ট শিট</h2>
          <div class="result-score-highlight \${isPassed ? 'text-success' : ''}">
            \${netScore.toFixed(2)} <span style="font-size: 20px; color: var(--text-muted); font-weight: 500;">/ ১০০</span>
          </div>
          
          <div style="font-size: 16px; font-weight: 700; margin-bottom: 20px;">
            \${isPassed 
              ? '<span style="color:#059669;background:#ecfdf5;padding:6px 16px;border-radius:999px;">🏆 অভিনন্দন! আপনি পাস করেছেন (লিখিত পরীক্ষার যোগ্য)</span>' 
              : '<span style="color:#dc2626;background:#fef2f2;padding:6px 16px;border-radius:999px;">⚠️ অনুত্তীর্ণ (পাস মার্ক ৪৫.০০) — নেগেটিভ মার্কিং কমিয়ে পুনর্বার অনুশীলন করুন</span>'}
          </div>

          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 24px;">
            <div class="mock-stat-box" style="min-width: 140px;">
              <strong style="color:#059669;">\${correct}</strong>
              <span>সঠিক উত্তর (+১.০০)</span>
            </div>
            <div class="mock-stat-box" style="min-width: 140px;">
              <strong style="color:#dc2626;">\${wrong}</strong>
              <span>ভুল উত্তর (-০.৫০)</span>
            </div>
            <div class="mock-stat-box" style="min-width: 140px;">
              <strong style="color:#64748b;">\${skipped}</strong>
              <span>অনুত্তর (০.০০)</span>
            </div>
          </div>

          <!-- Subject Breakdown Table -->
          <h3 style="font-size: 16px; text-align: left; margin-bottom: 8px;">📊 বিষয়ভিত্তিক মূল্যায়ন বিবরণী:</h3>
          <table class="result-table">
            <thead>
              <tr>
                <th>বিষয়</th>
                <th>মোট প্রশ্ন</th>
                <th>সঠিক</th>
                <th>ভুল</th>
                <th>অর্জিত নেট নম্বর</th>
              </tr>
            </thead>
            <tbody>
              \${Object.entries(subBreakdown).map(([sub, data]) => {
                const subNet = (data.correct * 1.0) - (data.wrong * 0.50);
                return \`
                  <tr>
                    <td><strong>\${sub}</strong></td>
                    <td>\${data.total}</td>
                    <td style="color:#059669;font-weight:600;">\${data.correct}</td>
                    <td style="color:#dc2626;font-weight:600;">\${data.wrong}</td>
                    <td><strong>\${subNet.toFixed(2)}</strong></td>
                  </tr>
                \`;
              }).join('')}
            </tbody>
          </table>

          <div style="margin-top: 24px;">
            <button class="btn-start-mock" onclick="startMockExam()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg>
              আরেকটি নতুন মডেল টেস্ট দিন (Take Another Mock Test)
            </button>
          </div>
        </div>

        <h3 style="margin: 30px 0 16px 0; font-size: 18px; color: var(--text-main);">
          🔍 ১০০টি প্রশ্নের পূর্ণাঙ্গ রিভিউ ও বিস্তারিত সমাধান:
        </h3>
        
        <div class="mock-review-list">
          \${resultCardsHtml}
        </div>
      \`;

      if (window.renderMathInElement) {
        try {
          renderMathInElement(container, {
            delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}],
            throwOnError: false
          });
        } catch(e) {}
      }
    }
  </script>
</body>
</html>
`;

html = html.replace('</script>\n</body>\n</html>', mockEngineLogic);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully integrated Mock Exam Engine into index.html!');
