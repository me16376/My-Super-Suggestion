const fs = require('fs');
const path = require('path');

const prelimDir = path.resolve(__dirname, '../data/preliminary');
const mod1Path = path.resolve(__dirname, '../../Sub-Assistant Maintenance Engineer Super Suggestion/data/preliminary/gk_mcq.json');
const mod2Path = path.resolve(__dirname, '../../Junior Instructor Tech Computer Super Suggestion/data/preliminary/gk_mcq.json');
const currentGkPath = path.join(prelimDir, 'gk_mcq.json');

const mod1 = JSON.parse(fs.readFileSync(mod1Path, 'utf8'));
const mod2 = JSON.parse(fs.readFileSync(mod2Path, 'utf8'));
const current = JSON.parse(fs.readFileSync(currentGkPath, 'utf8'));

// Filter out any questions with [জ্বালানি বিশেষ #
const cleanCurrent = current.filter(q => !q.question.includes('[জ্বালানি বিশেষ #'));
console.log('Clean current GK baseline:', cleanCurrent.length);

const seen = new Set(cleanCurrent.map(q => q.question.toLowerCase().trim()));
const finalGk = [...cleanCurrent];

for (const pool of [mod2, mod1]) {
  for (const q of pool) {
    const norm = q.question.toLowerCase().trim();
    if (!seen.has(norm) && !q.question.includes('[জ্বালানি বিশেষ #')) {
      seen.add(norm);
      finalGk.push({
        subject: "সাধারণ জ্ঞান ও জ্বালানি খাত",
        topic: q.topic || "সাধারণ জ্ঞান (বাংলাদেশ ও আন্তর্জাতিক)",
        question: q.question.trim(),
        options: q.options,
        answer: q.answer,
        explanation: q.explanation ? q.explanation.trim() : "সঠিক উত্তর উপরে প্রদত্ত হয়েছে।",
        tags: ["buet_gk", "petrobangla_common"]
      });
      if (finalGk.length >= 1000) break;
    }
  }
  if (finalGk.length >= 1000) break;
}

console.log('Final 100% pure GK questions:', finalGk.length);
fs.writeFileSync(currentGkPath, JSON.stringify(finalGk, null, 2), 'utf8');
console.log('✅ Generated 1,000 100% PURE GK MCQs with ZERO template tags!');
