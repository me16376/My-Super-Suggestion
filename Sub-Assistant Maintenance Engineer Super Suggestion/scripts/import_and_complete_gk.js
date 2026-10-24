const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/bdCalling/Downloads/Mosabber/json -genarate-by-gemini/JSON Data/NTRCA Preminary AI';
const destPath = path.join(__dirname, '../data/preliminary/gk_mcq.json');

const answerMap = {
  'ক': 0, 'খ': 1, 'গ': 2, 'ঘ': 3,
  'A': 0, 'B': 1, 'C': 2, 'D': 3,
  'a': 0, 'b': 1, 'c': 2, 'd': 3,
  '1': 0, '2': 1, '3': 2, '4': 3
};

const prefixMap = ['A) ', 'B) ', 'C) ', 'D) '];

function cleanOption(optText, idx) {
  if (!optText) return prefixMap[idx] + '—';
  let clean = String(optText).trim()
    .replace(/^[A-Da-dক-ঘ১-৪][\)\.\:\-\s]+/, '')
    .trim();
  return prefixMap[idx] + clean;
}

function processGkFiles() {
  console.log('=== PROCESSING GK MCQ DATASET (TARGET: 1,000 - 1,200) ===');

  if (!fs.existsSync(srcDir)) {
    console.error('Source directory does not exist:', srcDir);
    return;
  }

  // Retain existing 25 core BPSC questions
  let existingQuestions = [];
  if (fs.existsSync(destPath)) {
    try {
      const existing = JSON.parse(fs.readFileSync(destPath, 'utf8'));
      if (Array.isArray(existing) && existing.length > 0) {
        existingQuestions = existing.slice(0, 25);
      }
    } catch (e) {
      console.warn('Could not read existing gk_mcq.json:', e.message);
    }
  }

  let allGkQuestions = [];
  let globalId = 9000;

  // Re-index existing core 25 questions
  existingQuestions.forEach(q => {
    globalId++;
    allGkQuestions.push({
      id: globalId,
      subject: "সাধারণ জ্ঞান",
      topic: q.topic || "সাধারণ জ্ঞান (বাংলাদেশ ও আন্তর্জাতিক)",
      question: q.question.trim(),
      options: q.options,
      answer: q.answer,
      explanation: q.explanation.trim(),
      tags: q.tags || ["gk", "bpsc_bcs"]
    });
  });

  console.log(`Retained ${allGkQuestions.length} existing high-yield BPSC questions.`);

  const files = fs.readdirSync(srcDir)
    .filter(f => f.startsWith('সাধারণ জ্ঞান - ') && f.endsWith('.json'))
    .sort();

  console.log(`Found ${files.length} GK topic files in source directory.`);

  files.forEach(fileName => {
    const filePath = path.join(srcDir, fileName);
    const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Extract clean chapter name
    let chapterName = fileName.replace(/^সাধারণ জ্ঞান\s*-\s*[০-৯0-9]+\.\s*/, '').replace(/\.json$/, '');
    let topicCategory = `সাধারণ জ্ঞান (${chapterName})`;

    // Take 90 questions per chapter (13 * 90 = 1,170 + 25 = 1,195 MCQs)
    const sampleSize = Math.min(rawData.length, 90);
    const selected = rawData.slice(0, sampleSize);

    selected.forEach(q => {
      globalId++;

      // Map Answer to 0-3
      let ansIdx = 0;
      if (typeof q.answer === 'number') {
        ansIdx = q.answer >= 0 && q.answer <= 3 ? q.answer : (q.answer === 4 ? 3 : 0);
      } else if (typeof q.answer === 'string') {
        const trimmed = q.answer.trim();
        if (answerMap[trimmed] !== undefined) {
          ansIdx = answerMap[trimmed];
        }
      }

      // Format options with standard A) B) C) D)
      const formattedOptions = (q.options || []).slice(0, 4).map((opt, idx) => cleanOption(opt, idx));
      while (formattedOptions.length < 4) {
        formattedOptions.push(prefixMap[formattedOptions.length] + '—');
      }

      allGkQuestions.push({
        id: globalId,
        subject: "সাধারণ জ্ঞান",
        topic: topicCategory,
        question: String(q.question).trim(),
        options: formattedOptions,
        answer: ansIdx,
        explanation: (q.explanation || 'সঠিক উত্তর ' + formattedOptions[ansIdx]).trim(),
        tags: ["gk", "bpsc_bcs"]
      });
    });

    console.log(`- Loaded ${selected.length} questions from: ${chapterName}`);
  });

  console.log(`\n==============================================`);
  console.log(`TOTAL GK MCQs PREPARED: ${allGkQuestions.length} (Target: 1,000 - 1,200)`);
  console.log(`==============================================`);

  // Write to destination
  fs.writeFileSync(destPath, JSON.stringify(allGkQuestions, null, 2), 'utf8');
  console.log(`Successfully saved to: ${destPath}`);
}

processGkFiles();
