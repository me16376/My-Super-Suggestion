const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');

// Helper to read JSON safely
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

// Helper to write JSON safely
function writeJson(relPath, data) {
  const fullPath = path.join(baseDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
}

function syncAll() {
  console.log('=== SYNCING PETROBANGLA QUESTION DATASETS ===');

  // 1. Prelim files
  const prelimTech = readJson('data/preliminary/technical_computer_mcq.json');
  const prelimMath = readJson('data/preliminary/math_mcq.json');
  const prelimEnglish = readJson('data/preliminary/english_mcq.json');
  const prelimBangla = readJson('data/preliminary/bangla_mcq.json');
  const prelimGk = readJson('data/preliminary/gk_mcq.json');

  let currentPrelimId = 1001;
  const indexGroup = (list, subjName) => {
    return list.map(q => ({
      ...q,
      id: currentPrelimId++,
      subject: subjName || q.subject
    }));
  };

  const indexedTech = indexGroup(prelimTech, "টেকনিক্যাল (কম্পিউটার)");
  const indexedMath = indexGroup(prelimMath, "সাধারণ গণিত ও মানসিক দক্ষতা");
  const indexedEnglish = indexGroup(prelimEnglish, "ইংরেজি");
  const indexedBangla = indexGroup(prelimBangla, "বাংলা");
  const indexedGk = indexGroup(prelimGk, "সাধারণ জ্ঞান ও জ্বালানি খাত");

  // Write back indexed individual files
  writeJson('data/preliminary/technical_computer_mcq.json', indexedTech);
  writeJson('data/preliminary/math_mcq.json', indexedMath);
  writeJson('data/preliminary/english_mcq.json', indexedEnglish);
  writeJson('data/preliminary/bangla_mcq.json', indexedBangla);
  writeJson('data/preliminary/gk_mcq.json', indexedGk);

  const allPrelim = [
    ...indexedTech,
    ...indexedMath,
    ...indexedEnglish,
    ...indexedBangla,
    ...indexedGk
  ];
  writeJson('data/preliminary_mcq.json', allPrelim);

  // Write offline JS bundle
  const prelimJsPath = path.join(baseDir, 'data/prelim_data.js');
  fs.writeFileSync(prelimJsPath, 'window.PRELIM_QUESTIONS = ' + JSON.stringify(allPrelim) + ';', 'utf8');

  console.log(`Prelim MCQs (100% Common Mega Question Bank):
  - Technical (Computer / IT):   ${indexedTech.length}
  - Math & Mental Ability:       ${indexedMath.length}
  - English:                     ${indexedEnglish.length}
  - Bangla:                      ${indexedBangla.length}
  - GK & Energy Sector:          ${indexedGk.length}
  => TOTAL PRELIM MCQS: ${allPrelim.length}`);

  // 2. Written files
  let allWritten = readJson('data/written/technical_written.json');
  if (allWritten.length === 0) {
    const writtenNet = readJson('data/written/networking_written.json');
    const writtenDbms = readJson('data/written/dbms_written.json');
    const writtenProg = readJson('data/written/programming_written.json');
    const writtenDld = readJson('data/written/dld_scheduling_written.json');
    const writtenGas = readJson('data/written/gas_it_written.json');
    allWritten = [...writtenNet, ...writtenDbms, ...writtenProg, ...writtenDld, ...writtenGas];
  }

  // Ensure 1-based sequential IDs for written
  allWritten = allWritten.map((q, idx) => ({
    ...q,
    id: idx + 1
  }));

  writeJson('data/written_questions.json', allWritten);

  // Write offline JS bundle
  const writtenJsPath = path.join(baseDir, 'data/written_data.js');
  fs.writeFileSync(writtenJsPath, 'window.WRITTEN_QUESTIONS = ' + JSON.stringify(allWritten) + ';', 'utf8');

  console.log(`Written Questions:
  - Master Technical Written: ${allWritten.length}
  => TOTAL WRITTEN: ${allWritten.length}`);

  console.log(`\n🎯 GRAND TOTAL QUESTIONS IN PETROBANGLA PREPARATION SYSTEM: ${allPrelim.length + allWritten.length}`);
  console.log('Successfully generated zero-CORS data/prelim_data.js & data/written_data.js!');
}

syncAll();
