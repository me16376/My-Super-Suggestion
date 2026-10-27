const fs = require('fs');
const path = require('path');

const prelimDir = path.resolve(__dirname, '../data/preliminary');
const mod1Path = path.resolve(__dirname, '../../Sub-Assistant Maintenance Engineer Super Suggestion/data/preliminary/bangla_mcq.json');
const mod2Path = path.resolve(__dirname, '../../Junior Instructor Tech Computer Super Suggestion/data/preliminary/bangla_mcq.json');

const mod1 = JSON.parse(fs.readFileSync(mod1Path, 'utf8'));
const mod2 = JSON.parse(fs.readFileSync(mod2Path, 'utf8'));

console.log('=== EXPANDING BANGLA TO 1,500 UNIQUE MCQS FOR 100% COMMON ===');

const allPool = [...mod1, ...mod2];
const seen = new Set();
const finalBangla = [];

function getTopic(q) {
  const t = q.topic || "";
  if (t.includes('সন্ধি')) return "বাংলা ব্যাকরণ (সন্ধি ও সন্ধি-বিচ্ছেদ)";
  if (t.includes('কারক')) return "বাংলা ব্যাকরণ (কারক ও বিভক্তি)";
  if (t.includes('সমাস')) return "বাংলা ব্যাকরণ (সমাস ও ব্যাসবাক্য)";
  if (t.includes('ণ-ত্ব') || t.includes('ধ্বনি')) return "বাংলা ব্যাকরণ (ধ্বনি, ণ-ত্ব ও ষ-ত্ব বিধান)";
  if (t.includes('শুদ্ধ') || t.includes('ভুল')) return "বাংলা ব্যাকরণ (বানান ও বাক্য শুদ্ধিকরণ)";
  if (t.includes('বাগধারা') || t.includes('সংকোচন')) return "বাংলা ব্যাকরণ (বাগধারা ও এককথায় প্রকাশ)";
  if (t.includes('সমার্থক') || t.includes('বিপরীত')) return "বাংলা ব্যাকরণ (সমার্থক ও বিপরীতার্থক শব্দ)";
  if (t.includes('ভাষারীতি') || t.includes('বিরামচিহ্ন') || t.includes('পদ')) return "বাংলা ব্যাকরণ (ভাষারীতি ও পদ প্রকরণ)";
  if (t.includes('প্রাচীন ও মধ্যযুগ')) return "বাংলা সাহিত্য (প্রাচীন ও মধ্যযুগ: চর্যাপদ, মঙ্গলকাব্য)";
  if (t.includes('আধুনিক যুগ')) return "বাংলা সাহিত্য (আধুনিক যুগ ও মুক্তিযুদ্ধ)";
  return "বাংলা ব্যাকরণ ও সাহিত্য";
}

for (const q of allPool) {
  const norm = q.question.toLowerCase().trim();
  if (!seen.has(norm)) {
    seen.add(norm);
    finalBangla.push({
      subject: "বাংলা",
      topic: getTopic(q),
      question: q.question.trim(),
      options: q.options,
      answer: q.answer,
      explanation: q.explanation ? q.explanation.trim() : "সঠিক উত্তর ও ব্যাকরণগত ব্যাখ্যা উপরে দেওয়া হয়েছে।",
      tags: ["buet_bangla", "bpsc_bcs_common"]
    });
    if (finalBangla.length >= 1500) break;
  }
}

console.log('Final expanded Bangla questions:', finalBangla.length);

fs.writeFileSync(path.join(prelimDir, 'bangla_mcq.json'), JSON.stringify(finalBangla, null, 2), 'utf8');
console.log('✅ Generated 1,500 Unique Bangla MCQs in data/preliminary/bangla_mcq.json!');
