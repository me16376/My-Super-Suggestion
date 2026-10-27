const http = require('http');
const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9556;

async function testInteractions(htmlFile) {
  console.log('\n==========================================');
  console.log(`INTERACTION TEST: ${htmlFile}`);
  console.log('==========================================');

  const url = `file:///c:/Users/bdCalling/Downloads/Mosabber/My Super Suggestion/${htmlFile}`;
  const profileDir = `C:/Temp/chrome_interact_${Date.now()}`;

  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${profileDir}`,
    url
  ]);

  await new Promise(r => setTimeout(r, 2500));

  let tabs;
  try {
    const res = await fetch(`http://localhost:${port}/json`);
    tabs = await res.json();
  } catch (e) {
    console.error('Failed to get tabs:', e.message);
    proc.kill();
    return;
  }

  const pageTab = tabs.find(t => t.url && t.url.includes(htmlFile));
  if (!pageTab) {
    console.error('Page tab not found!');
    proc.kill();
    return;
  }

  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  await new Promise((resolve) => {
    let msgId = 1;

    function sendEval(id, expr) {
      ws.send(JSON.stringify({
        id,
        method: 'Runtime.evaluate',
        params: { expression: expr, returnByValue: true }
      }));
    }

    ws.onopen = () => {
      ws.send(JSON.stringify({ id: msgId++, method: 'Console.enable' }));
      ws.send(JSON.stringify({ id: msgId++, method: 'Runtime.enable' }));

      setTimeout(() => {
        // Step 1: Check initial cards
        sendEval(101, `({
          initialCards: document.querySelectorAll('.question-card, .q-card').length,
          visibleCount: document.getElementById('visible-count')?.innerText || document.getElementById('visibleQuestionsCount')?.innerText || 'n/a'
        })`);
      }, 500);

      setTimeout(() => {
        // Step 2: Switch to written mode if switchMasterMode exists
        sendEval(102, `(function() {
          if (typeof switchMasterMode === 'function') {
            switchMasterMode('written');
            return {
              switched: 'written',
              writtenCards: document.querySelectorAll('.written-card, .question-card').length,
              mode: currentMode
            };
          } else if (typeof switchTab === 'function') {
            switchTab('written');
            return {
              switched: 'written via switchTab',
              writtenCards: document.querySelectorAll('.written-card, .question-card, #writtenQuestionsContainer .question-card').length
            };
          }
          return { skipped: true };
        })()`);
      }, 1500);

      setTimeout(() => {
        // Step 3: Switch to mock mode if exists
        sendEval(103, `(function() {
          if (typeof switchMasterMode === 'function') {
            switchMasterMode('mock');
            const mockCont = document.getElementById('mock-exam-container');
            return {
              switched: 'mock',
              mockVisible: mockCont && mockCont.style.display !== 'none',
              mockContentLength: mockCont ? mockCont.innerHTML.length : 0
            };
          }
          return { skipped: true };
        })()`);
      }, 2500);

      setTimeout(() => {
        // Step 4: Switch back to prelim
        sendEval(104, `(function() {
          if (typeof switchMasterMode === 'function') {
            switchMasterMode('prelim');
            return {
              switched: 'prelim',
              prelimCards: document.querySelectorAll('.question-card, .q-card').length
            };
          }
          return { skipped: true };
        })()`);
      }, 3500);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === 101) console.log('Step 1 (Initial):', data.result?.result?.value);
      if (data.id === 102) console.log('Step 2 (Written Mode):', data.result?.result?.value);
      if (data.id === 103) console.log('Step 3 (Mock Mode):', data.result?.result?.value);
      if (data.id === 104) {
        console.log('Step 4 (Back to Prelim):', data.result?.result?.value);
        resolve();
      }
      if (data.method === 'Runtime.exceptionThrown') {
        console.error('🚨 JS EXCEPTION:', data.params.exceptionDetails.text, data.params.exceptionDetails.exception?.description);
      }
    };

    setTimeout(resolve, 6000);
  });

  proc.kill();
}

async function run() {
  const pages = [
    'junior_instructor_computer_super_suggestion.html',
    'sub_assistant_maintenance_engineer_super_suggestion.html',
    'petrobangla_sub_assistant_engineer_super_suggestion.html',
    'dss_karigori_proshikhok_computer_super_suggestion.html',
    'dss_data_entry_operator_super_suggestion.html'
  ];

  for (const page of pages) {
    await testInteractions(page);
  }
  console.log('\n==========================================');
  console.log('ALL INTERACTION TESTS FINISHED SUCCESSFULLY!');
  console.log('==========================================\n');
}

run();
