const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const JOB_MODULES = [
  {
    key: 'maintenance',
    folderName: 'Sub-Assistant Maintenance Engineer Super Suggestion',
    title: 'সাব-অ্যাসিস্ট্যান্ট মেইনটেন্যান্স ইঞ্জিনিয়ার (১০ম গ্রেড)',
    department: 'বহিরাগমন ও পাসপোর্ট অধিদপ্তর',
    htmlFile: 'sub_assistant_maintenance_engineer_super_suggestion.html',
    syllabusPdf: 'Sub-Assistant Maintenance Engineer Super Suggestion/Sub_Assistant_Maintenance_Engineer_Exam_Syllabus_Guide.pdf',
    circularPdf: 'BPSC ad_202506.pdf'
  },
  {
    key: 'junior_instructor',
    folderName: 'Junior Instructor Tech Computer Super Suggestion',
    title: 'জুনিয়র ইন্সট্রাক্টর [টেক/কম্পিউটার] (১০ম গ্রেড)',
    department: 'কারিগরি শিক্ষা অধিদপ্তর (DTE)',
    htmlFile: 'junior_instructor_computer_super_suggestion.html',
    syllabusPdf: 'Junior Instructor Tech Computer Super Suggestion/Junior_Instructor_Computer_Exam_Syllabus_Guide.pdf',
    circularPdf: 'BPSC ad_202506.pdf'
  },
  {
    key: 'petrobangla',
    folderName: 'Petrobangla Sub-Assistant Engineer Computer IT',
    title: 'উপ-সহকারী প্রকৌশলী (কম্পিউটার / আইটি - ১০ম গ্রেড)',
    department: 'পেট্রোবাংলা (তিতাস গ্যাস ও বাখরাবাদ গ্যাস)',
    htmlFile: 'petrobangla_sub_assistant_engineer_super_suggestion.html',
    syllabusPdf: 'Petrobangla Sub-Assistant Engineer Computer IT/Petrobangla_Sub_Assistant_Engineer_Computer_IT_Exam_Guide.pdf',
    circularPdf: 'petrobangla-1790774270-5822.pdf'
  },
  {
    key: 'dss_karigori',
    folderName: 'DSS Karigori Proshikhok Computer Super Suggestion',
    title: 'কারিগরি প্রশিক্ষক (কম্পিউটার - ১০ম গ্রেড)',
    department: 'সমাজসেবা অধিদপ্তর (DSS)',
    htmlFile: 'dss_karigori_proshikhok_computer_super_suggestion.html',
    syllabusPdf: 'DSS Karigori Proshikhok Computer Super Suggestion/DSS_Karigori_Proshikhok_Computer_Exam_Guide.pdf',
    circularPdf: 'advertisement-1780374169755.pdf'
  },
  {
    key: 'dss_data_entry',
    folderName: 'DSS Data Entry Operator Super Suggestion',
    title: 'ডাটা এন্ট্রি অপারেটর (১৬তম গ্রেড)',
    department: 'সমাজসেবা অধিদপ্তর (DSS)',
    htmlFile: 'dss_data_entry_operator_super_suggestion.html',
    syllabusPdf: 'DSS Data Entry Operator Super Suggestion/DSS_Data_Entry_Operator_Exam_Guide.pdf',
    circularPdf: 'DSS Data Entry Operator Super Suggestion/DSS_ad_2026_Circular.pdf'
  }
];

function readJsonFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading JSON ${filePath}:`, err.message);
    return [];
  }
}

function countFilesInDir(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  let count = 0;
  function walk(d) {
    const list = fs.readdirSync(d);
    for (const item of list) {
      const full = path.join(d, item);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (item.endsWith('.json')) count++;
    }
  }
  walk(dirPath);
  return count;
}

function syncAll() {
  console.log('======================================================');
  console.log('🔄 BPSC & GOVT JOB MASTER DATASET SYNC & BUNDLER');
  console.log('======================================================\n');

  let grandTotalMCQ = 0;
  let grandTotalWritten = 0;
  const catalog = [];

  for (const mod of JOB_MODULES) {
    const folderPath = path.join(ROOT_DIR, mod.folderName);
    const mcqPath = path.join(folderPath, 'preliminary_mcq.json');
    const writtenPath = path.join(folderPath, 'written_questions.json');

    const mcqs = readJsonFile(mcqPath);
    const written = readJsonFile(writtenPath);

    const splitMcqFiles = countFilesInDir(path.join(folderPath, 'MCQ'));
    const splitWrittenFiles = countFilesInDir(path.join(folderPath, 'Written'));

    grandTotalMCQ += mcqs.length;
    grandTotalWritten += written.length;

    // Generate zero-CORS data_bundle.js for offline file:// and instant loading
    const bundlePath = path.join(folderPath, 'data_bundle.js');
    const bundleContent = `// Auto-generated offline Zero-CORS bundle for ${mod.key}
(function() {
  window.PRELIM_QUESTIONS = ${JSON.stringify(mcqs)};
  window.WRITTEN_QUESTIONS = ${JSON.stringify(written)};
  window.DATASET_METADATA = {
    jobKey: ${JSON.stringify(mod.key)},
    jobTitle: ${JSON.stringify(mod.title)},
    folderName: ${JSON.stringify(mod.folderName)},
    prelimCount: ${mcqs.length},
    writtenCount: ${written.length},
    totalQuestions: ${mcqs.length + written.length},
    generatedAt: ${JSON.stringify(new Date().toISOString())}
  };
})();
`;
    fs.writeFileSync(bundlePath, bundleContent, 'utf8');

    // Get subject breakdowns
    const subjectsMap = {};
    for (const q of mcqs) {
      const s = q.subject || 'অন্যান্য';
      subjectsMap[s] = (subjectsMap[s] || 0) + 1;
    }

    catalog.push({
      key: mod.key,
      title: mod.title,
      department: mod.department,
      folderName: mod.folderName,
      htmlFile: mod.htmlFile,
      syllabusPdf: mod.syllabusPdf,
      circularPdf: mod.circularPdf,
      mcqCount: mcqs.length,
      writtenCount: written.length,
      totalQuestions: mcqs.length + written.length,
      splitMcqFiles,
      splitWrittenFiles,
      subjects: subjectsMap
    });

    console.log(`✅ [${mod.key}] ${mod.title}`);
    console.log(`   - Preliminary MCQs: ${mcqs.length} (across ${splitMcqFiles} topic files)`);
    console.log(`   - Written Qs:       ${written.length} (across ${splitWrittenFiles} topic files)`);
    console.log(`   - Generated:        ${bundlePath} (${(fs.statSync(bundlePath).size / (1024 * 1024)).toFixed(2)} MB)\n`);
  }

  // Save catalog files
  const catalogPath = path.join(ROOT_DIR, 'drivers', 'site-catalog.json');
  const catalogJsPath = path.join(ROOT_DIR, 'drivers', 'site-catalog.js');
  const catalogData = {
    version: '1.0.0',
    updatedAt: new Date().toISOString(),
    totalModules: JOB_MODULES.length,
    grandTotalMCQ,
    grandTotalWritten,
    grandTotalQuestions: grandTotalMCQ + grandTotalWritten,
    jobs: catalog
  };

  fs.writeFileSync(catalogPath, JSON.stringify(catalogData, null, 2), 'utf8');
  fs.writeFileSync(catalogJsPath, `// Global Site Catalog\nwindow.SITE_CATALOG = ${JSON.stringify(catalogData, null, 2)};\n`, 'utf8');

  console.log('------------------------------------------------------');
  console.log(`🎉 ALL JOBS SYNCED SUCCESSFULLY!`);
  console.log(`   Total MCQ Questions:    ${grandTotalMCQ.toLocaleString()}`);
  console.log(`   Total Written Questions: ${grandTotalWritten.toLocaleString()}`);
  console.log(`   GRAND TOTAL QUESTIONS:   ${(grandTotalMCQ + grandTotalWritten).toLocaleString()}`);
  console.log(`   Master Catalog:          drivers/site-catalog.json & .js`);
  console.log('------------------------------------------------------\n');
}

if (require.main === module) {
  syncAll();
}

module.exports = { syncAll, JOB_MODULES };
