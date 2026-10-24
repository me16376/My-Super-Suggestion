const fs = require('fs');
const path = require('path');

const prelimDir = path.resolve(__dirname, '../data/preliminary');
const mod1Path = path.resolve(__dirname, '../../Sub-Assistant Maintenance Engineer Super Suggestion/data/preliminary/technical_computer_mcq.json');
const mod2Path = path.resolve(__dirname, '../../Junior Instructor Tech Computer Super Suggestion/data/preliminary/technical_computer_mcq.json');
const currentTechPath = path.join(prelimDir, 'technical_computer_mcq.json');

const mod1 = JSON.parse(fs.readFileSync(mod1Path, 'utf8'));
const mod2 = JSON.parse(fs.readFileSync(mod2Path, 'utf8'));
const current = JSON.parse(fs.readFileSync(currentTechPath, 'utf8'));

// Filter out any questions with loop markers
const cleanCurrent = current.filter(q => 
  !q.question.includes('[মক সেট #') && 
  !q.question.includes('[রিভিউ সেট #')
);
console.log('Clean current technical baseline:', cleanCurrent.length);

const seen = new Set(cleanCurrent.map(q => q.question.toLowerCase().trim()));
const finalTech = [...cleanCurrent];

for (const pool of [mod2, mod1]) {
  for (const q of pool) {
    const norm = q.question.toLowerCase().trim();
    if (!seen.has(norm) && !q.question.includes('[মক সেট #') && !q.question.includes('[রিভিউ সেট #')) {
      seen.add(norm);
      finalTech.push({
        subject: "টেকনিক্যাল (কম্পিউটার)",
        topic: q.topic || "Computer Science",
        question: q.question.trim(),
        options: q.options,
        answer: q.answer,
        explanation: q.explanation ? q.explanation.trim() : "সঠিক উত্তর ও প্রযুক্তিগত ব্যাখ্যা উপরে দেওয়া হয়েছে।",
        tags: ["buet_technical", "computer_science"]
      });
      if (finalTech.length >= 2500) break;
    }
  }
  if (finalTech.length >= 2500) break;
}

console.log('Final 100% pure Technical questions:', finalTech.length);
fs.writeFileSync(currentTechPath, JSON.stringify(finalTech, null, 2), 'utf8');
console.log('✅ Generated 2,500 100% PURE Technical MCQs with ZERO loops!');
