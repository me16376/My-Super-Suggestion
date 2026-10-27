const http = require('http');
const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9555;

async function diagnosePage(htmlFile) {
  console.log('\n==========================================');
  console.log(`BROWSER DIAGNOSIS: ${htmlFile}`);
  console.log('==========================================');

  const url = `file:///c:/Users/bdCalling/Downloads/Mosabber/My Super Suggestion/${htmlFile}`;
  const profileDir = `C:/Temp/chrome_diag_${Date.now()}`;

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
      // Enable console & runtime
      ws.send(JSON.stringify({ id: msgId++, method: 'Console.enable' }));
      ws.send(JSON.stringify({ id: msgId++, method: 'Runtime.enable' }));
      
      // Evaluate test expressions after 1 second
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 100,
          method: 'Runtime.evaluate',
          params: {
            expression: `({
              prelimQuestions: typeof PRELIM_QUESTIONS !== 'undefined' ? (PRELIM_QUESTIONS ? PRELIM_QUESTIONS.length : 'null') : (typeof prelimQuestions !== 'undefined' ? prelimQuestions.length : (typeof allQuestions !== 'undefined' ? allQuestions.length : 'not defined')),
              writtenQuestions: typeof WRITTEN_QUESTIONS !== 'undefined' ? (WRITTEN_QUESTIONS ? WRITTEN_QUESTIONS.length : 'null') : (typeof writtenQuestions !== 'undefined' ? writtenQuestions.length : (typeof writtenList !== 'undefined' ? writtenList.length : 'not defined')),
              windowPrelim: window.PRELIM_QUESTIONS ? window.PRELIM_QUESTIONS.length : 'none',
              windowWritten: window.WRITTEN_QUESTIONS ? window.WRITTEN_QUESTIONS.length : 'none',
              visibleCards: document.querySelectorAll('.question-card, .q-card').length,
              emptyState: !!document.querySelector('.empty-state'),
              bodyTextSnippet: document.body.innerText.slice(0, 300).replace(/\\n+/g, ' ')
            })`,
            returnByValue: true
          }
        }));
      }, 1000);
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

  if (logs.length > 0) {
    console.log('Console Logs:\n ', logs.join('\n  '));
  } else {
    console.log('No console logs recorded.');
  }

  if (errors.length > 0) {
    console.log('⚠️ Console Exceptions:\n ', errors.join('\n  '));
  } else {
    console.log('✅ No JavaScript errors thrown!');
  }

  ws.close();
  proc.kill();
}

async function run() {
  const files = [
    'sub_assistant_maintenance_engineer_super_suggestion.html',
    'junior_instructor_computer_super_suggestion.html',
    'petrobangla_sub_assistant_engineer_super_suggestion.html',
    'dss_karigori_proshikhok_computer_super_suggestion.html',
    'dss_data_entry_operator_super_suggestion.html'
  ];

  for (const f of files) {
    await diagnosePage(f);
  }
}

run();
