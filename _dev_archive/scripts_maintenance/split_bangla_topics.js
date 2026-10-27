const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '../../Sub-Assistant Maintenance Engineer Super Suggestion');
const mcqDir = path.join(baseDir, 'MCQ', 'বাংলা');
const writtenDir = path.join(baseDir, 'Written', 'বাংলা');

fs.mkdirSync(mcqDir, { recursive: true });
fs.mkdirSync(writtenDir, { recursive: true });

function sanitizeFilename(name) {
  return name.replace(/[\\/:*?"<>|]/g, '-').trim();
}

// 1. Process Preliminary MCQ for Bangla
const mcqData = JSON.parse(fs.readFileSync(path.join(baseDir, 'preliminary_mcq.json'), 'utf8'));
const banglaMcq = mcqData.filter(q => q.subject && (q.subject.includes('বাংলা') || q.subject.toLowerCase().includes('bangla')));

const mcqByTopic = {};
banglaMcq.forEach(q => {
  const topic = q.topic || 'সাধারণ বাংলা';
  if (!mcqByTopic[topic]) mcqByTopic[topic] = [];
  mcqByTopic[topic].push(q);
});

console.log('=== CREATING TOPIC-WISE MCQ FILES FOR BANGLA ===');
let totalMcqWritten = 0;
for (const [topic, questions] of Object.entries(mcqByTopic)) {
  const safeFilename = sanitizeFilename(topic) + '.json';
  const filePath = path.join(mcqDir, safeFilename);
  fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
  totalMcqWritten += questions.length;
  console.log(`[MCQ] ${questions.length} questions -> ${safeFilename}`);
}
console.log(`\nTotal Bangla MCQs written: ${totalMcqWritten} across ${Object.keys(mcqByTopic).length} topic files.`);

// 2. Process Written Questions for Bangla
const writtenData = JSON.parse(fs.readFileSync(path.join(baseDir, 'written_questions.json'), 'utf8'));
const banglaWritten = writtenData.filter(q => q.subject && (q.subject.includes('বাংলা') || q.subject.toLowerCase().includes('bangla')));

const writtenByTopic = {};
banglaWritten.forEach(q => {
  let topic = q.topic || 'সাধারণ বাংলা লিখিত';
  if (topic === 'এক কথায় প্রকাশ / বাক্য সংকোচন') {
    topic = 'এক কথায় প্রকাশ (বাক্য সংকোচন)';
  } else {
    topic = topic.replace(/\//g, '-').trim();
  }
  if (!writtenByTopic[topic]) writtenByTopic[topic] = [];
  writtenByTopic[topic].push(q);
});

console.log('\n=== CREATING TOPIC-WISE WRITTEN FILES FOR BANGLA ===');
let totalWrittenWritten = 0;
for (const [topic, questions] of Object.entries(writtenByTopic)) {
  const safeFilename = sanitizeFilename(topic) + '.json';
  const filePath = path.join(writtenDir, safeFilename);
  fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf8');
  totalWrittenWritten += questions.length;
  console.log(`[Written] ${questions.length} questions -> ${safeFilename}`);
}
console.log(`\nTotal Bangla Written questions written: ${totalWrittenWritten} across ${Object.keys(writtenByTopic).length} topic files.`);
