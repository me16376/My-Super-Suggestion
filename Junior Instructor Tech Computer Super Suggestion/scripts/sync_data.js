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
  console.log('=== SYNCING ALL JUNIOR INSTRUCTOR QUESTION DATASETS ===');

  // 1. Prelim files
  const prelimTech = readJson('data/preliminary/technical_computer_mcq.json');
  const prelimBangla = readJson('data/preliminary/bangla_mcq.json');
  const prelimEnglish = readJson('data/preliminary/english_mcq.json');
  const prelimGk = readJson('data/preliminary/gk_mcq.json');

  const allPrelim = [...prelimTech, ...prelimBangla, ...prelimEnglish, ...prelimGk];
  writeJson('data/preliminary_mcq.json', allPrelim);

  // Write offline JS bundle
  const prelimJsPath = path.join(baseDir, 'data/prelim_data.js');
  fs.writeFileSync(prelimJsPath, 'window.PRELIM_QUESTIONS = ' + JSON.stringify(allPrelim) + ';', 'utf8');

  console.log(`Prelim MCQs:
  - Technical: ${prelimTech.length}
  - Bangla:    ${prelimBangla.length}
  - English:   ${prelimEnglish.length}
  - GK:        ${prelimGk.length}
  => TOTAL PRELIM: ${allPrelim.length}`);

  // 2. Written files
  const writtenTech = readJson('data/written/technical_written.json');
  const writtenBangla = readJson('data/written/bangla_written.json');
  const writtenEnglish = readJson('data/written/english_written.json');
  const writtenGk = readJson('data/written/gk_written.json');

  const allWritten = [...writtenTech, ...writtenBangla, ...writtenEnglish, ...writtenGk];
  writeJson('data/written_questions.json', allWritten);

  // Write offline JS bundle
  const writtenJsPath = path.join(baseDir, 'data/written_data.js');
  fs.writeFileSync(writtenJsPath, 'window.WRITTEN_QUESTIONS = ' + JSON.stringify(allWritten) + ';', 'utf8');

  console.log(`Written Questions:
  - Technical: ${writtenTech.length}
  - Bangla:    ${writtenBangla.length}
  - English:   ${writtenEnglish.length}
  - GK:        ${writtenGk.length}
  => TOTAL WRITTEN: ${allWritten.length}`);

  console.log('\n=== DATA BUNDLING COMPLETE ===');
}

syncAll();
