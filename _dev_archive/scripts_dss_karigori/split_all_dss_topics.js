const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '../../DSS Karigori Proshikhok Computer Super Suggestion');

function sanitizeFilename(name) {
  return name
    .replace(/[\\/:*?"<>|]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanSubjectName(s) {
  if (s.includes('বাংলা')) return 'বাংলা';
  if (s.includes('ইংরেজি')) return 'ইংরেজি';
  if (s.includes('গণিত')) return 'সাধারণ গণিত';
  if (s.includes('ট্রেড') || s.includes('Trade') || s.includes('কম্পিউটার')) return 'কম্পিউটার ট্রেড';
  if (s.includes('সমাজসেবা')) return 'সমাজসেবা ও সাধারণ জ্ঞান';
  if (s.includes('জ্ঞান')) return 'সমাজসেবা ও সাধারণ জ্ঞান';
  return s;
}

const mcqData = JSON.parse(fs.readFileSync(path.join(baseDir, 'preliminary_mcq.json'), 'utf8'));
const writtenData = JSON.parse(fs.readFileSync(path.join(baseDir, 'written_questions.json'), 'utf8'));

console.log('=== SPLITTING ALL SUBJECTS FOR DSS KARIGORI PROSHIKHOK COMPUTER ===\n');

// 1. Process MCQ
const mcqBySub = {};
mcqData.forEach(q => {
  const s = cleanSubjectName(q.subject || 'সাধারণ');
  if (!mcqBySub[s]) mcqBySub[s] = {};
  const topic = q.topic || 'সাধারণ ' + s;
  if (!mcqBySub[s][topic]) mcqBySub[s][topic] = [];
  mcqBySub[s][topic].push(q);
});

let totalMcq = 0;
for (const [subName, topics] of Object.entries(mcqBySub)) {
  const subDir = path.join(baseDir, 'MCQ', subName);
  fs.mkdirSync(subDir, { recursive: true });
  let subCount = 0;
  for (const [topic, questions] of Object.entries(topics)) {
    const filename = sanitizeFilename(topic) + '.json';
    const filePath = path.join(subDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
    subCount += questions.length;
  }
  totalMcq += subCount;
  console.log(`[MCQ] Subject '${subName}' -> ${Object.keys(topics).length} topic files, ${subCount} questions.`);
}
console.log(`=> Total DSS MCQ written: ${totalMcq} / ${mcqData.length}`);

// 2. Process Written
const writtenBySub = {};
writtenData.forEach(q => {
  const s = cleanSubjectName(q.subject || 'সাধারণ');
  if (!writtenBySub[s]) writtenBySub[s] = {};
  let topic = q.topic || 'সাধারণ ' + s;
  if (!writtenBySub[s][topic]) writtenBySub[s][topic] = [];
  writtenBySub[s][topic].push(q);
});

let totalWritten = 0;
for (const [subName, topics] of Object.entries(writtenBySub)) {
  const subDir = path.join(baseDir, 'Written', subName);
  fs.mkdirSync(subDir, { recursive: true });
  let subCount = 0;
  for (const [topic, questions] of Object.entries(topics)) {
    const filename = sanitizeFilename(topic) + '.json';
    const filePath = path.join(subDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
    subCount += questions.length;
  }
  totalWritten += subCount;
  console.log(`[Written] Subject '${subName}' -> ${Object.keys(topics).length} topic files, ${subCount} questions.`);
}
console.log(`=> Total DSS Written written: ${totalWritten} / ${writtenData.length}`);
