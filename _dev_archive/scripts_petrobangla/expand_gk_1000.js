const fs = require('fs');
const path = require('path');

const prelimDir = path.resolve(__dirname, '../data/preliminary');
const mod1Path = path.resolve(__dirname, '../../Sub-Assistant Maintenance Engineer Super Suggestion/data/preliminary/gk_mcq.json');
const mod2Path = path.resolve(__dirname, '../../Junior Instructor Tech Computer Super Suggestion/data/preliminary/gk_mcq.json');
const currentGkPath = path.join(prelimDir, 'gk_mcq.json');

const mod1 = JSON.parse(fs.readFileSync(mod1Path, 'utf8'));
const mod2 = JSON.parse(fs.readFileSync(mod2Path, 'utf8'));
const currentGk = JSON.parse(fs.readFileSync(currentGkPath, 'utf8'));

console.log('=== EXPANDING GK & ENERGY SECTOR TO 1,000 UNIQUE MCQS FOR 100% COMMON ===');

// Keep all 150 Petrobangla & Energy questions at the front!
const petroList = currentGk.filter(q => q.topic && q.topic.includes('পেট্রোবাংলা'));
console.log('Dedicated Petrobangla questions kept:', petroList.length);

const finalGk = [...petroList];
const seen = new Set(petroList.map(q => q.question.toLowerCase().trim()));

const allPool = [...mod1, ...mod2];

function getTopic(q) {
  const t = q.topic || "";
  if (t.includes('মুক্তিযুদ্ধ') || t.includes('ভাষা আন্দোলন')) return "সাধারণ জ্ঞান (বাংলাদেশ - মুক্তিযুদ্ধ ও ইতিহাস)";
  if (t.includes('সংবিধান') || t.includes('রাষ্ট্রব্যবস্থা')) return "সাধারণ জ্ঞান (বাংলাদেশ - সংবিধান ও শাসনব্যবস্থা)";
  if (t.includes('অর্থনীতি') || t.includes('মেগাপ্রকল্প') || t.includes('শিল্প')) return "সাধারণ জ্ঞান (বাংলাদেশ - অর্থনীতি, মেগাপ্রকল্প ও উন্নয়ন)";
  if (t.includes('ভূপ্রকৃতি') || t.includes('সীমানা') || t.includes('নদী')) return "সাধারণ জ্ঞান (বাংলাদেশ - ভূপ্রকৃতি ও জাতীয় সম্পদ)";
  if (t.includes('আন্তর্জাতিক সংস্থা') || t.includes('জোট')) return "সাধারণ জ্ঞান (আন্তর্জাতিক - সংস্থা, জোট ও বিশ্ব জ্বালানি)";
  if (t.includes('আন্তর্জাতিক')) return "সাধারণ জ্ঞান (আন্তর্জাতিক বিষয়াবলি ও সাম্প্রতিক বিশ্ব)";
  return "সাধারণ জ্ঞান (বাংলাদেশ ও আন্তর্জাতিক)";
}

for (const q of allPool) {
  const norm = q.question.toLowerCase().trim();
  if (!seen.has(norm)) {
    seen.add(norm);
    finalGk.push({
      subject: "সাধারণ জ্ঞান ও জ্বালানি খাত",
      topic: getTopic(q),
      question: q.question.trim(),
      options: q.options,
      answer: q.answer,
      explanation: q.explanation ? q.explanation.trim() : "সঠিক উত্তর উপরে প্রদত্ত হয়েছে।",
      tags: ["buet_gk", "petrobangla_common"]
    });
    if (finalGk.length >= 1000) break;
  }
}

console.log('Final expanded GK questions:', finalGk.length);

fs.writeFileSync(path.join(prelimDir, 'gk_mcq.json'), JSON.stringify(finalGk, null, 2), 'utf8');
console.log('✅ Generated 1,000 Unique GK & Energy MCQs in data/preliminary/gk_mcq.json!');
