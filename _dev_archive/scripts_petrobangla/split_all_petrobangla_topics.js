const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '../../Petrobangla Sub-Assistant Engineer Computer IT');

function sanitizeFilename(name) {
  return name
    .replace(/[\\/:*?"<>|]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanSubjectName(s) {
  if (s.includes('বাংলা')) return 'বাংলা';
  if (s.includes('ইংরেজি')) return 'ইংরেজি';
  if (s.includes('গণিত') || s.includes('মানসিক')) return 'সাধারণ গণিত ও মানসিক দক্ষতা';
  if (s.includes('সাধারণ জ্ঞান') || s.includes('জ্বালানি')) return 'সাধারণ জ্ঞান ও জ্বালানি খাত';
  if (s.includes('টেকনিক্যাল')) return 'টেকনিক্যাল (কম্পিউটার)';
  return s;
}

const mcqData = JSON.parse(fs.readFileSync(path.join(baseDir, 'preliminary_mcq.json'), 'utf8'));
const writtenData = JSON.parse(fs.readFileSync(path.join(baseDir, 'written_questions.json'), 'utf8'));

console.log('=== SPLITTING ALL SUBJECTS FOR PETROBANGLA SUB-ASSISTANT ENGINEER ===\n');

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
console.log(`=> Total Petrobangla MCQ written: ${totalMcq} / ${mcqData.length}`);

// 2. Process Written
const writtenBySub = {};
writtenData.forEach(q => {
  const s = 'টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)';
  if (!writtenBySub[s]) writtenBySub[s] = {};
  let topic = q.topic || 'সাধারণ লিখিত';
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
console.log(`=> Total Petrobangla Written written: ${totalWritten} / ${writtenData.length}`);
