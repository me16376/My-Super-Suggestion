const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/bdCalling/Downloads/Mosabber/json -genarate-by-gemini/JSON Data/BPSC Technical AI';
const outDir = path.resolve(__dirname, '../data/preliminary');
const outFile = path.join(outDir, 'technical_computer_mcq.json');

const answerMap = {
  'ক': 0, 'খ': 1, 'গ': 2, 'ঘ': 3,
  'A': 0, 'B': 1, 'C': 2, 'D': 3,
  'a': 0, 'b': 1, 'c': 2, 'd': 3,
  '1': 0, '2': 1, '3': 2, '4': 3,
  0: 0, 1: 1, 2: 2, 3: 3
};

const prefixMap = ['A) ', 'B) ', 'C) ', 'D) '];

function cleanOption(optText, idx) {
  if (!optText) return prefixMap[idx] + '—';
  let clean = String(optText).trim()
    .replace(/^[A-Da-dক-ঘ১-৪][\)\.\:\-\s]+/, '')
    .trim();
  return prefixMap[idx] + clean;
}

function run() {
  console.log('=== COMPILING TECHNICAL COMPUTER PRELIM MCQ DATASET ===');
  if (!fs.existsSync(srcDir)) {
    console.error('Source directory not found:', srcDir);
    return;
  }

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.json'));
  console.log(`Found ${files.length} subject files in BPSC Technical AI`);

  let allQuestions = [];
  let globalId = 1000;

  files.forEach(file => {
    const filePath = path.join(srcDir, file);
    try {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (!Array.isArray(content)) return;

      // Extract subject clean title
      let subjectTitle = file.replace(/^বিষয়-\s*\d+[\.\s]*/, '').replace(/\.json$/, '').trim();

      content.forEach(q => {
        if (!q.question || !q.options || q.options.length < 2) return;

        globalId++;
        let ansIdx = answerMap[q.answer] !== undefined ? answerMap[q.answer] : 0;
        if (ansIdx < 0 || ansIdx >= q.options.length) ansIdx = 0;

        let formattedOptions = [];
        for (let i = 0; i < 4; i++) {
          if (q.options[i] !== undefined) {
            formattedOptions.push(cleanOption(q.options[i], i));
          } else {
            formattedOptions.push(prefixMap[i] + 'কোনটিই নয়');
          }
        }

        allQuestions.push({
          id: globalId,
          subject: "টেকনিক্যাল (কম্পিউটার)",
          topic: q.topic || subjectTitle,
          subtopic: subjectTitle,
          question: q.question.trim(),
          options: formattedOptions,
          answer: ansIdx,
          explanation: q.explanation ? q.explanation.trim() : `সঠিক উত্তর: ${formattedOptions[ansIdx]}। কারিগরি শিক্ষা অধিদপ্তর ও পলিটেকনিক কারিকুলাম স্ট্যান্ডার্ড অনুযায়ী ব্যাখ্যা প্রযোজ্য।`,
          tags: ["technical", "bpsc", "junior_instructor", "polytechnic"]
        });
      });
    } catch (e) {
      console.error(`Error processing ${file}:`, e.message);
    }
  });

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(allQuestions, null, 2), 'utf8');

  console.log(`Successfully compiled ${allQuestions.length} Technical Computer MCQs into: ${outFile}`);
}

run();
