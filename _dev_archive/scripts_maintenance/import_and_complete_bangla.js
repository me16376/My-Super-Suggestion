const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/bdCalling/Downloads/Mosabber/json -genarate-by-gemini/JSON Data/NTRCA Preminary AI';
const destPath = path.join(__dirname, '../data/preliminary/bangla_mcq.json');

const answerMap = {
  'ক': 0, 'খ': 1, 'গ': 2, 'ঘ': 3,
  'A': 0, 'B': 1, 'C': 2, 'D': 3,
  'a': 0, 'b': 1, 'c': 2, 'd': 3,
  '1': 0, '2': 1, '3': 2, '4': 3
};

const prefixMap = ['A) ', 'B) ', 'C) ', 'D) '];

function cleanOption(optText, idx) {
  if (!optText) return prefixMap[idx] + '—';
  let clean = optText.trim()
    .replace(/^[A-Da-dক-ঘ১-৪][\)\.\:\-\s]+/, '')
    .trim();
  return prefixMap[idx] + clean;
}

function processBanglaFiles() {
  console.log('=== PROCESSING BANGLA MCQ DATASET (TARGET: 1,000 - 1,200) ===');

  if (!fs.existsSync(srcDir)) {
    console.error('Source directory does not exist:', srcDir);
    return;
  }

  // Load existing 25 core BPSC questions if available
  let existingQuestions = [];
  if (fs.existsSync(destPath)) {
    try {
      const existing = JSON.parse(fs.readFileSync(destPath, 'utf8'));
      if (Array.isArray(existing) && existing.length > 0) {
        existingQuestions = existing.slice(0, 25);
      }
    } catch (e) {
      console.warn('Could not read existing bangla_mcq.json:', e.message);
    }
  }

  let allBanglaQuestions = [];
  let globalId = 5000;

  // Re-index existing core 25 questions
  existingQuestions.forEach(q => {
    globalId++;
    allBanglaQuestions.push({
      id: globalId,
      subject: "বাংলা",
      topic: q.topic || "বাংলা ব্যাকরণ ও সাহিত্য",
      question: q.question.trim(),
      options: q.options,
      answer: q.answer,
      explanation: q.explanation.trim(),
      tags: q.tags || ["bangla", "bpsc_bcs"]
    });
  });

  console.log(`Retained ${allBanglaQuestions.length} existing high-yield BPSC questions.`);

  const files = fs.readdirSync(srcDir)
    .filter(f => f.startsWith('বাংলা - ') && f.endsWith('.json'))
    .sort();

  console.log(`Found ${files.length} Bangla topic files in source directory.`);

  files.forEach(fileName => {
    const filePath = path.join(srcDir, fileName);
    const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Extract clean chapter name (accounting for Bengali digits [০-৯])
    let chapterName = fileName.replace(/^বাংলা\s*-\s*[০-৯0-9]+\.\s*/, '').replace(/\.json$/, '');
    
    // Determine standardized topic category
    let topicCategory = chapterName.startsWith('বাংলা সাহিত্য') 
      ? chapterName 
      : `বাংলা ব্যাকরণ (${chapterName})`;

    const isLiterature = fileName.includes('সাহিত্য');

    // Take 90 questions per chapter to achieve exactly ~1,200 total balanced across all 13 chapters
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

      allBanglaQuestions.push({
        id: globalId,
        subject: "বাংলা",
        topic: topicCategory,
        question: q.question.trim(),
        options: formattedOptions,
        answer: ansIdx,
        explanation: (q.explanation || 'সঠিক উত্তর ' + formattedOptions[ansIdx]).trim(),
        tags: ["bangla", isLiterature ? "literature" : "grammar", "bcs_bpsc"]
      });
    });

    console.log(`- Loaded ${selected.length} questions from: ${chapterName}`);
  });

  console.log(`\n==============================================`);
  console.log(`TOTAL BANGLA MCQs PREPARED: ${allBanglaQuestions.length} (Target: 1,000 - 1,200)`);
  console.log(`==============================================`);

  // Write to destination
  fs.writeFileSync(destPath, JSON.stringify(allBanglaQuestions, null, 2), 'utf8');
  console.log(`Successfully saved to: ${destPath}`);
}

processBanglaFiles();
