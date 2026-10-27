const fs = require('fs');
const path = require('path');

const prelimDir = path.resolve(__dirname, '../data/preliminary');
const mod1Path = path.resolve(__dirname, '../../Sub-Assistant Maintenance Engineer Super Suggestion/data/preliminary/bangla_mcq.json');
const mod2Path = path.resolve(__dirname, '../../Junior Instructor Tech Computer Super Suggestion/data/preliminary/bangla_mcq.json');

const mod1 = JSON.parse(fs.readFileSync(mod1Path, 'utf8'));
const mod2 = JSON.parse(fs.readFileSync(mod2Path, 'utf8'));

console.log('=== BUILDING 300 100% UNIQUE BUET BANGLA MCQS ===');

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
            subject: "বাংলা",
            topic: topicName,
            question: q.question.trim(),
            options: q.options,
            answer: q.answer,
            explanation: q.explanation ? q.explanation.trim() : "সঠিক উত্তর ও ব্যাকরণগত ব্যাখ্যা উপরে দেওয়া হয়েছে।",
            tags: ["buet_bangla", topicName.toLowerCase().replace(/[^a-z0-9]/g, '_')]
          });
          if (result.length >= count) return result;
        }
      }
    }
  }

  return result;
}

// 1. সন্ধি ও সন্ধি-বিচ্ছেদ (30টি)
const sandhi = getUniqueQuestions(
  [mod1, mod2],
  q => q.topic && (q.topic.includes('সন্ধি') || q.topic.includes('সন্ধি-বিচ্ছেদ')),
  30,
  "বাংলা ব্যাকরণ (সন্ধি ও সন্ধি-বিচ্ছেদ)"
);
console.log('Sandhi collected:', sandhi.length);

// 2. কারক ও বিভক্তি (30টি)
const karak = getUniqueQuestions(
  [mod1, mod2],
  q => q.topic && q.topic.includes('কারক'),
  30,
  "বাংলা ব্যাকরণ (কারক ও বিভক্তি)"
);
console.log('Karak collected:', karak.length);

// 3. সমাস ও ব্যাসবাক্য (30টি)
const samas = getUniqueQuestions(
  [mod1, mod2],
  q => q.topic && q.topic.includes('সমাস'),
  30,
  "বাংলা ব্যাকরণ (সমাস)"
);
console.log('Samas collected:', samas.length);

// 4. ধ্বনি পরিবর্তন, ণ-ত্ব ও ষ-ত্ব বিধান (25টি)
const natwa = getUniqueQuestions(
  [mod1, mod2],
  q => q.topic && (q.topic.includes('ণ-ত্ব') || q.topic.includes('ধ্বনি')),
  25,
  "বাংলা ব্যাকরণ (ধ্বনি, ণ-ত্ব ও ষ-ত্ব বিধান)"
);
console.log('Natwa/Satwa collected:', natwa.length);

// 5. বানান ও বাক্য শুদ্ধিকরণ (30টি)
const shuddhi = getUniqueQuestions(
  [mod1, mod2],
  q => q.topic && (q.topic.includes('শুদ্ধ') || q.topic.includes('ভুল')),
  30,
  "বাংলা ব্যাকরণ (বানান ও বাক্য শুদ্ধিকরণ)"
);
console.log('Shuddhi collected:', shuddhi.length);

// 6. বাগধারা ও বাক্য সংকোচন (এককথায় প্রকাশ) (30টি)
const bagdhara = getUniqueQuestions(
  [mod1, mod2],
  q => q.topic && (q.topic.includes('বাগধারা') || q.topic.includes('সংকোচন')),
  30,
  "বাংলা ব্যাকরণ (বাগধারা ও এককথায় প্রকাশ)"
);
console.log('Bagdhara collected:', bagdhara.length);

// 7. ভাষারীতি, পদ ও সমার্থক/বিপরীতার্থক শব্দ (25টি)
const padBhasa = getUniqueQuestions(
  [mod1, mod2],
  q => q.topic && (q.topic.includes('ভাষারীতি') || q.topic.includes('সমার্থক') || q.topic.includes('পদ-পরিবর্তন')),
  25,
  "বাংলা ব্যাকরণ (ভাষারীতি ও শব্দভাণ্ডার)"
);
console.log('Pad/Bhasha collected:', padBhasa.length);

// 8. বাংলা সাহিত্য (প্রাচীন ও মধ্যযুগ: চর্যাপদ, মঙ্গলকাব্য) (40টি)
const ancientLit = getUniqueQuestions(
  [mod1, mod2],
  q => q.topic && q.topic.includes('প্রাচীন ও মধ্যযুগ'),
  40,
  "বাংলা সাহিত্য (প্রাচীন ও মধ্যযুগ)"
);
console.log('Ancient Literature collected:', ancientLit.length);

// 9. বাংলা সাহিত্য (আধুনিক যুগ - রবীন্দ্রনাথ, নজরুল, মাইকেল, মুক্তিযুদ্ধ) (60টি)
const modernLit = getUniqueQuestions(
  [mod1, mod2],
  q => q.topic && q.topic.includes('আধুনিক যুগ'),
  60,
  "বাংলা সাহিত্য (আধুনিক যুগ ও মুক্তিযুদ্ধ)"
);
console.log('Modern Literature collected:', modernLit.length);

// Combine and guarantee 100% uniqueness
const rawBangla = [
  ...sandhi,
  ...karak,
  ...samas,
  ...natwa,
  ...shuddhi,
  ...bagdhara,
  ...padBhasa,
  ...ancientLit,
  ...modernLit
];

const finalBangla = [];
const globalSeen = new Set();
let currentId = 3001;

for (const q of rawBangla) {
  const norm = q.question.toLowerCase().trim();
  if (!globalSeen.has(norm)) {
    globalSeen.add(norm);
    finalBangla.push({
      id: currentId++,
      ...q
    });
  }
}

// Backfill if needed
if (finalBangla.length < 300) {
  for (const pool of [mod2, mod1]) {
    for (const q of pool) {
      const norm = q.question.toLowerCase().trim();
      if (!globalSeen.has(norm)) {
        globalSeen.add(norm);
        finalBangla.push({
          id: currentId++,
          subject: "বাংলা",
          topic: q.topic || "বাংলা ব্যাকরণ ও সাহিত্য",
          question: q.question.trim(),
          options: q.options,
          answer: q.answer,
          explanation: q.explanation || "সঠিক উত্তর উপরে প্রদত্ত হয়েছে।",
          tags: ["buet_bangla"]
        });
        if (finalBangla.length >= 300) break;
      }
    }
    if (finalBangla.length >= 300) break;
  }
}

const final300 = finalBangla.slice(0, 300);

fs.writeFileSync(path.join(prelimDir, 'bangla_mcq.json'), JSON.stringify(final300, null, 2), 'utf8');
console.log(`✅ Generated 100% UNIQUE bangla_mcq.json: EXACTLY ${final300.length} MCQs!`);
console.log('ID range:', final300[0].id, 'to', final300[final300.length - 1].id);
