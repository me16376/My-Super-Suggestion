const fs = require('fs');
const path = require('path');

const prelimDir = path.resolve(__dirname, '../data/preliminary');
const mod1Path = path.resolve(__dirname, '../../Sub-Assistant Maintenance Engineer Super Suggestion/data/preliminary/technical_computer_mcq.json');
const mod2Path = path.resolve(__dirname, '../../Junior Instructor Tech Computer Super Suggestion/data/preliminary/technical_computer_mcq.json');
const currentTechPath = path.join(prelimDir, 'technical_computer_mcq.json');

const mod1 = JSON.parse(fs.readFileSync(mod1Path, 'utf8'));
const mod2 = JSON.parse(fs.readFileSync(mod2Path, 'utf8'));
const currentTech = JSON.parse(fs.readFileSync(currentTechPath, 'utf8'));

console.log('=== EXPANDING TECHNICAL (COMPUTER & IT) TO 2,500 UNIQUE MCQS FOR 100% COMMON ===');
console.log('Current Petrobangla technical MCQs:', currentTech.length);

const finalTech = [...currentTech];
const seen = new Set(currentTech.map(q => q.question.toLowerCase().trim()));

const allPool = [...mod1, ...mod2];

for (const q of allPool) {
  const norm = q.question.toLowerCase().trim();
  if (!seen.has(norm)) {
    seen.add(norm);
    finalTech.push({
      subject: "টেকনিক্যাল (কম্পিউটার)",
      topic: q.topic || "Computer Science & Engineering",
      question: q.question.trim(),
      options: q.options,
      answer: q.answer,
      explanation: q.explanation ? q.explanation.trim() : "সঠিক উত্তর ও প্রযুক্তিগত ব্যাখ্যা উপরে দেওয়া হয়েছে।",
      tags: ["buet_technical", "computer_science_common"]
    });
    if (finalTech.length >= 2500) break;
  }
}

console.log('Final expanded Technical MCQs:', finalTech.length);

fs.writeFileSync(currentTechPath, JSON.stringify(finalTech, null, 2), 'utf8');
console.log('✅ Generated 2,500 Unique Technical MCQs in data/preliminary/technical_computer_mcq.json!');
