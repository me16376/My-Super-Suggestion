const http = require('http');
const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9557;

async function diagnosePage(htmlFile) {
  console.log('\n==========================================');
  console.log(`PYTHON SERVER BROWSER TEST: ${htmlFile}`);
  console.log('==========================================');

  const url = `http://localhost:8000/${htmlFile}`;
  const profileDir = `C:/Temp/chrome_py_test_${Date.now()}`;

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
    console.error('Page tab not found! Available tabs:', tabs.map(t => t.url));
    proc.kill();
    return;
  }

  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  const logs = [];
  const errors = [];

  await new Promise((resolve) => {
    let msgId = 1;

    ws.onopen = () => {
      ws.send(JSON.stringify({ id: msgId++, method: 'Console.enable' }));
      ws.send(JSON.stringify({ id: msgId++, method: 'Runtime.enable' }));
      
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 100,
          method: 'Runtime.evaluate',
          params: {
            expression: `({
              prelimQuestions: typeof PRELIM_QUESTIONS !== 'undefined' ? (PRELIM_QUESTIONS ? PRELIM_QUESTIONS.length : 'null') : (typeof prelimQuestions !== 'undefined' ? prelimQuestions.length : (typeof allQuestions !== 'undefined' ? allQuestions.length : 'not defined')),
              writtenQuestions: typeof WRITTEN_QUESTIONS !== 'undefined' ? (WRITTEN_QUESTIONS ? WRITTEN_QUESTIONS.length : 'null') : (typeof writtenQuestions !== 'undefined' ? writtenQuestions.length : (typeof writtenList !== 'undefined' ? writtenList.length : 'not defined')),
              visibleCards: document.querySelectorAll('.question-card, .q-card').length,
              emptyState: !!document.querySelector('.empty-state')
            })`,
            returnByValue: true
          }
        }));
      }, 1200);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.method === 'Runtime.consoleAPICalled') {
        const text = data.params.args.map(a => a.value || JSON.stringify(a)).join(' ');
        logs.push(`[${data.params.type}] ${text}`);
      }
      if (data.method === 'Runtime.exceptionThrown') {
        errors.push(data.params.exceptionDetails.text + ' ' + (data.params.exceptionDetails.exception?.description || ''));
      }
      if (data.id === 100) {
        console.log('Evaluation Result:', JSON.stringify(data.result?.result?.value, null, 2));
        resolve();
      }
    };

    setTimeout(resolve, 6000);
  });

  if (errors.length > 0) {
    console.error('🚨 Errors Found:\n ', errors.join('\n  '));
  } else {
    console.log('✅ No JavaScript errors thrown!');
  }

  proc.kill();
}

async function run() {
  const pages = [
    'sub_assistant_maintenance_engineer_super_suggestion.html',
    'junior_instructor_computer_super_suggestion.html',
    'petrobangla_sub_assistant_engineer_super_suggestion.html',
    'dss_karigori_proshikhok_computer_super_suggestion.html',
    'dss_data_entry_operator_super_suggestion.html'
  ];

  for (const page of pages) {
    await diagnosePage(page);
  }
}

run();
