const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');

function readJson(relPath) {
  const fullPath = path.join(baseDir, relPath);
  if (!fs.existsSync(fullPath)) return [];
  try {
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  } catch (e) {
    console.error(`Error reading ${relPath}:`, e.message);
    return [];
  }
}

function writeJson(relPath, data) {
  const fullPath = path.join(baseDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
}

function syncAll() {
  console.log('=== SYNCING DSS KARIGORI PROSHIKHOK COMPUTER DATASETS ===');

  // 1. Prelim files
  const prelimTech = readJson('data/preliminary/computer_trade_mcq.json');
  const prelimBangla = readJson('data/preliminary/bangla_mcq.json');
  const prelimEnglish = readJson('data/preliminary/english_mcq.json');
  const prelimMath = readJson('data/preliminary/math_mcq.json');
  const prelimGk = readJson('data/preliminary/gk_dss_mcq.json');

  const allPrelim = [...prelimTech, ...prelimBangla, ...prelimEnglish, ...prelimMath, ...prelimGk];
  writeJson('data/preliminary_mcq.json', allPrelim);

  // Write offline JS bundle
  const prelimJsPath = path.join(baseDir, 'data/prelim_data.js');
  fs.writeFileSync(prelimJsPath, 'window.PRELIM_QUESTIONS = ' + JSON.stringify(allPrelim) + ';', 'utf8');

  console.log(`Prelim MCQs:
  - Computer Trade: ${prelimTech.length}
  - Bangla:         ${prelimBangla.length}
  - English:        ${prelimEnglish.length}
  - Math:           ${prelimMath.length}
  - GK & DSS:       ${prelimGk.length}
  => TOTAL PRELIM: ${allPrelim.length}`);

  // 2. Written files
  const writtenQuestions = readJson('data/written/written_questions.json');
  writeJson('data/written_questions.json', writtenQuestions);

  const writtenJsPath = path.join(baseDir, 'data/written_data.js');
  fs.writeFileSync(writtenJsPath, 'window.WRITTEN_QUESTIONS = ' + JSON.stringify(writtenQuestions) + ';', 'utf8');

  console.log(`Written Questions: ${writtenQuestions.length}`);
  console.log('Successfully generated Zero-CORS offline bundles (data/prelim_data.js & data/written_data.js)!');
}

syncAll();
