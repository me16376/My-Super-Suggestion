const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '../../DSS Karigori Proshikhok Computer Super Suggestion');

function auditSection(sectionName) {
  const secDir = path.join(baseDir, sectionName);
  const subjects = fs.readdirSync(secDir);
  console.log('\n=== AUDIT ' + sectionName + ' ===');
  let secTotal = 0;
  for (const s of subjects) {
    const sPath = path.join(secDir, s);
    if (!fs.statSync(sPath).isDirectory()) continue;
    const files = fs.readdirSync(sPath).filter(f => f.endsWith('.json'));
    let subTotal = 0;
    for (const f of files) {
      const qList = JSON.parse(fs.readFileSync(path.join(sPath, f), 'utf8'));
      subTotal += qList.length;
    }
    secTotal += subTotal;
    console.log('Subject [' + s + '] -> ' + files.length + ' topic files, ' + subTotal + ' questions.');
  }
  console.log('TOTAL ' + sectionName + ': ' + secTotal + ' questions.');
  return secTotal;
}

const mcqTotal = auditSection('MCQ');
const writtenTotal = auditSection('Written');

const mainMcq = JSON.parse(fs.readFileSync(path.join(baseDir, 'preliminary_mcq.json'), 'utf8')).length;
const mainWritten = JSON.parse(fs.readFileSync(path.join(baseDir, 'written_questions.json'), 'utf8')).length;

console.log('\n=== INTEGRITY CHECK ===');
console.log('MCQ Match: ' + (mcqTotal === mainMcq) + ' (' + mcqTotal + ' / ' + mainMcq + ')');
console.log('Written Match: ' + (writtenTotal === mainWritten) + ' (' + writtenTotal + ' / ' + mainWritten + ')');
