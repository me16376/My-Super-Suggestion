const fs = require('fs');
const path = require('path');

const prelimPath = path.join(__dirname, '../data/preliminary_mcq.json');
const writtenPath = path.join(__dirname, '../data/written_questions.json');

console.log('====================================================');
console.log('🔍 INITIATING DEEP RECHARGE & QUALITY AUDIT (BUET STANDARD)');
console.log('====================================================\n');

if (!fs.existsSync(prelimPath) || !fs.existsSync(writtenPath)) {
  console.error('❌ Data files not found!');
  process.exit(1);
}

const prelim = JSON.parse(fs.readFileSync(prelimPath, 'utf8'));
const written = JSON.parse(fs.readFileSync(writtenPath, 'utf8'));

console.log(`📊 Loaded ${prelim.length} Prelim MCQs and ${written.length} Written Questions.\n`);

// 1. Subject Breakdown
const subjectCounts = {};
const topicCounts = {};
const errors = [];
const warnings = [];
const seenQuestions = new Map();
let bracketArtifacts = 0;
let optionsInvalid = 0;
let answerNotInOptions = 0;
let duplicateOptionsInQuestion = 0;
let missingExplanation = 0;

prelim.forEach((q, idx) => {
  const subj = q.subject || 'Unknown';
  subjectCounts[subj] = (subjectCounts[subj] || 0) + 1;

  const topic = q.topic || 'General';
  const topicKey = `${subj} -> ${topic}`;
  topicCounts[topicKey] = (topicCounts[topicKey] || 0) + 1;

  // Check Question
  if (!q.question || typeof q.question !== 'string' || q.question.trim().length < 8) {
    errors.push(`[ID ${q.id}] Empty or too short question: "${q.question}"`);
  }

  // Duplicate Check
  const normalizedQ = q.question.trim().toLowerCase().replace(/\s+/g, ' ');
  if (seenQuestions.has(normalizedQ)) {
    const prevId = seenQuestions.get(normalizedQ);
    warnings.push(`Duplicate Question found between ID ${prevId} and ID ${q.id}: "${q.question.substring(0, 50)}..."`);
  } else {
    seenQuestions.set(normalizedQ, q.id);
  }

  // Bracket Artifact Check ([মক সেট, [রিভিউ সেট, [জ্বালানি বিশেষ)
  if (/\[.*?set.*?\]|\[.*?মক.*?\]|\[.*?রিভিউ.*?\]|\[.*?বিশেষ.*?\]/i.test(q.question)) {
    bracketArtifacts++;
    warnings.push(`[ID ${q.id}] Question contains bracket artifact: "${q.question.substring(0, 60)}"`);
  }

  // Options Check
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    optionsInvalid++;
    errors.push(`[ID ${q.id}] Invalid options count (${q.options ? q.options.length : 0})`);
  } else {
    // Check duplicates inside options
    const uniqueOpts = new Set(q.options.map(o => String(o).trim().toLowerCase()));
    if (uniqueOpts.size !== 4) {
      duplicateOptionsInQuestion++;
      warnings.push(`[ID ${q.id}] Duplicate options within question: ${JSON.stringify(q.options)}`);
    }
  }

  // Answer Validation (answer index 0..3)
  if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
    answerNotInOptions++;
    errors.push(`[ID ${q.id}] Answer index (${q.answer}) is invalid for options length ${q.options.length}`);
  } else if (!q.options[q.answer] || String(q.options[q.answer]).trim().length === 0) {
    answerNotInOptions++;
    errors.push(`[ID ${q.id}] Option at answer index (${q.answer}) is empty!`);
  }

  // Explanation Check
  if (!q.explanation || String(q.explanation).trim().length < 5) {
    missingExplanation++;
  }
});

console.log('📌 SUBJECT DISTRIBUTION:');
for (const [subj, count] of Object.entries(subjectCounts)) {
  console.log(`   - ${subj.padEnd(45)} : ${count} MCQs`);
}
console.log(`   -------------------------------------------------`);
console.log(`   Total Preliminary MCQs                      : ${prelim.length}\n`);

console.log('📌 CRITICAL INTEGRITY METRICS:');
console.log(`   - Total Questions Checked                   : ${prelim.length}`);
console.log(`   - Unique Question Statements                : ${seenQuestions.size}`);
console.log(`   - Duplicate Questions (Warnings)            : ${warnings.filter(w => w.includes('Duplicate Question')).length}`);
console.log(`   - Bracket Loop Artifacts Found              : ${bracketArtifacts}`);
console.log(`   - Invalid Options Count (< 4 or > 4)        : ${optionsInvalid}`);
console.log(`   - Duplicate Options within Same Question    : ${duplicateOptionsInQuestion}`);
console.log(`   - Invalid Answer Index / Out of Bounds      : ${answerNotInOptions}`);
console.log(`   - Questions with Missing Explanations       : ${missingExplanation}`);
console.log(`   - Total Critical Errors                     : ${errors.length}\n`);

// Written Questions Audit
console.log('📌 WRITTEN QUESTIONS AUDIT:');
let writtenErrors = 0;
const writtenTopics = {};
written.forEach((wq, idx) => {
  const top = wq.topic || 'General';
  writtenTopics[top] = (writtenTopics[top] || 0) + 1;
  if (!wq.question || wq.question.length < 15) {
    console.error(`   ❌ [Written ID ${wq.id}] Question too short`);
    writtenErrors++;
  }
  if (!wq.answer || wq.answer.length < 20) {
    console.error(`   ❌ [Written ID ${wq.id}] Solution/Answer too short`);
    writtenErrors++;
  }
});

console.log(`   - Total Written Problems Checked            : ${written.length}`);
console.log(`   - Written Critical Errors                   : ${writtenErrors}`);
for (const [top, count] of Object.entries(writtenTopics)) {
  console.log(`     * ${top.padEnd(40)} : ${count} problems`);
}

console.log('\n====================================================');
if (errors.length === 0 && bracketArtifacts === 0 && optionsInvalid === 0 && answerNotInOptions === 0) {
  console.log('🌟 AUDIT STATUS: 100% CLEAN & VERIFIED FOR BUET RECRUITMENT EXAM');
} else {
  console.log(`⚠️ AUDIT STATUS: FOUND ISSUES (Errors: ${errors.length}, Warnings: ${warnings.length})`);
}
console.log('====================================================\n');

// Write detailed audit log if any warnings/errors
const auditReport = {
  timestamp: new Date().toISOString(),
  prelimCount: prelim.length,
  writtenCount: written.length,
  subjectDistribution: subjectCounts,
  topicDistribution: topicCounts,
  integrity: {
    bracketArtifacts,
    optionsInvalid,
    answerNotInOptions,
    duplicateOptionsInQuestion,
    missingExplanation,
    duplicateQuestionsCount: warnings.filter(w => w.includes('Duplicate Question')).length,
    criticalErrors: errors
  },
  warningsSnippet: warnings.slice(0, 30)
};

fs.writeFileSync(path.join(__dirname, 'audit_report.json'), JSON.stringify(auditReport, null, 2), 'utf8');
console.log('Audit report saved to scripts/audit_report.json');
