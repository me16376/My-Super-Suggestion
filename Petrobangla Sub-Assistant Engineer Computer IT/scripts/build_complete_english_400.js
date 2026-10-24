const fs = require('fs');
const path = require('path');

const prelimDir = path.resolve(__dirname, '../data/preliminary');
const mod1Path = path.resolve(__dirname, '../../Sub-Assistant Maintenance Engineer Super Suggestion/data/preliminary/english_mcq.json');
const mod2Path = path.resolve(__dirname, '../../Junior Instructor Tech Computer Super Suggestion/data/preliminary/english_mcq.json');

const mod1 = JSON.parse(fs.readFileSync(mod1Path, 'utf8'));
const mod2 = JSON.parse(fs.readFileSync(mod2Path, 'utf8'));

console.log('=== BUILDING 400 100% UNIQUE BUET ENGLISH MCQS ===');

// Helper to filter unique questions
function getUniqueQuestions(sources, filterFn, count, topicName) {
  const seenTexts = new Set();
  const result = [];

  for (const pool of sources) {
    for (const q of pool) {
      if (filterFn(q)) {
        const cleanText = q.question.trim().toLowerCase();
        if (!seenTexts.has(cleanText)) {
          seenTexts.add(cleanText);
          result.push({
            subject: "ইংরেজি",
            topic: topicName,
            question: q.question.trim(),
            options: q.options,
            answer: q.answer,
            explanation: q.explanation ? q.explanation.trim() : "সঠিক উত্তর নির্বাচন ও ব্যাকরণগত ব্যাখ্যা উপরে দেওয়া হয়েছে।",
            tags: ["buet_english", topicName.toLowerCase().replace(/[^a-z0-9]/g, '_')]
          });
          if (result.length >= count) return result;
        }
      }
    }
  }

  return result;
}

// 1. Appropriate Prepositions (120 Questions - BUET's #1 Focus)
const prepositions = getUniqueQuestions(
  [mod1, mod2],
  q => (q.topic && q.topic.includes('Preposition')) || (q.tags && q.tags.includes('preposition')),
  120,
  "Appropriate Prepositions"
);
console.log('Prepositions collected:', prepositions.length);

// 2. Right Form of Verbs & Subject-Verb Agreement (80 Questions)
const rightForm = getUniqueQuestions(
  [mod1, mod2],
  q => (q.topic && q.topic.includes('Right Form')) || (q.tags && q.tags.includes('right_form_of_verbs')),
  80,
  "Right Form of Verbs & Grammar"
);
console.log('Right Form collected:', rightForm.length);

// 3. Idioms, Phrases & Phrasal Verbs (60 Questions)
const idioms = getUniqueQuestions(
  [mod1, mod2],
  q => (q.topic && q.topic.includes('Idiom')) || (q.tags && q.tags.includes('idioms')),
  60,
  "Idioms & Phrases"
);
console.log('Idioms collected:', idioms.length);

// 4. Synonyms, Antonyms & Vocabulary (60 Questions)
const synonyms = getUniqueQuestions(
  [mod1, mod2],
  q => (q.topic && q.topic.includes('Synonym')) || (q.tags && q.tags.includes('synonyms')),
  60,
  "Synonyms & Antonyms"
);
console.log('Synonyms collected:', synonyms.length);

// 5. Errors in Composition / Sentence Correction (40 Questions)
const errors = getUniqueQuestions(
  [mod1, mod2],
  q => (q.topic && q.topic.includes('Error')) || (q.topic && q.topic.includes('Sentence')),
  40,
  "Sentence Correction & Error Detection"
);
console.log('Errors collected:', errors.length);

// 6. Voice, Transformation & Clauses (40 Questions)
const transformation = getUniqueQuestions(
  [mod1, mod2],
  q => (q.topic && q.topic.includes('Transformation')) || (q.topic && q.topic.includes('Change of Parts of Speech')),
  40,
  "Transformation of Sentences & Voice"
);
console.log('Transformations collected:', transformation.length);

// Combine all 400 questions
const rawList = [
  ...prepositions,
  ...rightForm,
  ...idioms,
  ...synonyms,
  ...errors,
  ...transformation
];

// Ensure distinctness across all sections and assign IDs 2601 to 3000
const finalEnglish = [];
const globalSeen = new Set();
let currentId = 2601;

for (const q of rawList) {
  const norm = q.question.toLowerCase().trim();
  if (!globalSeen.has(norm)) {
    globalSeen.add(norm);
    finalEnglish.push({
      id: currentId++,
      ...q
    });
  }
}

// If slightly short due to cross-section duplicates, backfill from other pools
if (finalEnglish.length < 400) {
  for (const pool of [mod2, mod1]) {
    for (const q of pool) {
      const norm = q.question.toLowerCase().trim();
      if (!globalSeen.has(norm)) {
        globalSeen.add(norm);
        finalEnglish.push({
          id: currentId++,
          subject: "ইংরেজি",
          topic: q.topic || "English Grammar",
          question: q.question.trim(),
          options: q.options,
          answer: q.answer,
          explanation: q.explanation || "সঠিক উত্তর উপরে প্রদত্ত হয়েছে।",
          tags: ["buet_english"]
        });
        if (finalEnglish.length >= 400) break;
      }
    }
    if (finalEnglish.length >= 400) break;
  }
}

const final400 = finalEnglish.slice(0, 400);

fs.writeFileSync(path.join(prelimDir, 'english_mcq.json'), JSON.stringify(final400, null, 2), 'utf8');
console.log(`✅ Generated 100% UNIQUE english_mcq.json: EXACTLY ${final400.length} MCQs!`);
console.log('ID range:', final400[0].id, 'to', final400[final400.length - 1].id);
