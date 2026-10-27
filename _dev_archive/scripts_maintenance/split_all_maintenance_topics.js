const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '../../Sub-Assistant Maintenance Engineer Super Suggestion');

function sanitizeFilename(name) {
  return name
    .replace(/[\\/:*?"<>|]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

const mcqData = JSON.parse(fs.readFileSync(path.join(baseDir, 'preliminary_mcq.json'), 'utf8'));
const writtenData = JSON.parse(fs.readFileSync(path.join(baseDir, 'written_questions.json'), 'utf8'));

const subjects = [
  { name: 'ইংরেজি', key: 'ইংরেজি' },
  { name: 'সাধারণ জ্ঞান', key: 'সাধারণ জ্ঞান' },
  { name: 'টেকনিক্যাল (কম্পিউটার)', key: 'টেকনিক্যাল (কম্পিউটার)' }
];

console.log('=== SPLITTING ALL REMAINING SUBJECTS FOR SUB-ASSISTANT MAINTENANCE ENGINEER ===\n');

for (const sub of subjects) {
  console.log(`\n========================================`);
  console.log(`Processing Subject: ${sub.name}`);
  console.log(`========================================`);

  const mcqSubDir = path.join(baseDir, 'MCQ', sub.name);
  const writtenSubDir = path.join(baseDir, 'Written', sub.name);

  fs.mkdirSync(mcqSubDir, { recursive: true });
  fs.mkdirSync(writtenSubDir, { recursive: true });

  // 1. Filter MCQ
  const subMcq = mcqData.filter(q => q.subject === sub.key);
  const mcqByTopic = {};
  subMcq.forEach(q => {
    const topic = q.topic || 'সাধারণ ' + sub.name;
    if (!mcqByTopic[topic]) mcqByTopic[topic] = [];
    mcqByTopic[topic].push(q);
  });

  let mcqCount = 0;
  for (const [topic, questions] of Object.entries(mcqByTopic)) {
    const filename = sanitizeFilename(topic) + '.json';
    const filePath = path.join(mcqSubDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
    mcqCount += questions.length;
    console.log(`[MCQ: ${sub.name}] ${questions.length} questions -> ${filename}`);
  }
  console.log(`=> Total MCQ for ${sub.name}: ${mcqCount} across ${Object.keys(mcqByTopic).length} topic files.`);

  // 2. Filter Written
  const subWritten = writtenData.filter(q => q.subject === sub.key);
  const writtenByTopic = {};
  subWritten.forEach(q => {
    let topic = q.topic || 'সাধারণ ' + sub.name + ' লিখিত';
    if (!writtenByTopic[topic]) writtenByTopic[topic] = [];
    writtenByTopic[topic].push(q);
  });

  let writtenCount = 0;
  for (const [topic, questions] of Object.entries(writtenByTopic)) {
    const filename = sanitizeFilename(topic) + '.json';
    const filePath = path.join(writtenSubDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
    writtenCount += questions.length;
    console.log(`[Written: ${sub.name}] ${questions.length} questions -> ${filename}`);
  }
  console.log(`=> Total Written for ${sub.name}: ${writtenCount} across ${Object.keys(writtenByTopic).length} topic files.`);
}

console.log('\nAll subjects processed successfully!');
