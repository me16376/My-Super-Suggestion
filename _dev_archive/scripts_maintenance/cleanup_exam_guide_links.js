const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');

// 1. UPDATE index.html
const indexPath = path.join(rootDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Card 1
const card1Old = `          <div class="secondary-links">
            <a href="sub_assistant_maintenance_engineer_exam_guide.html" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              পরীক্ষা পদ্ধতি ও গাইড
            </a>
            <a href="PROGRESS.md" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              প্রগ্রেস ট্র্যাকার (MD)
            </a>
            <a href="Sub-Assistant Maintenance Engineer Super Suggestion/Sub_Assistant_Maintenance_Engineer_Exam_Syllabus_Guide.pdf" target="_blank" class="btn-secondary-link" style="grid-column: span 2;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              অফিশিয়াল সিলেবাস PDF
            </a>
          </div>`;

const card1New = `          <div class="secondary-links">
            <a href="Sub-Assistant Maintenance Engineer Super Suggestion/Sub_Assistant_Maintenance_Engineer_Exam_Syllabus_Guide.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              সিলেবাস PDF গাইড
            </a>
            <a href="BPSC ad_202506.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              সার্কুলার PDF
            </a>
          </div>`;

// Card 2
const card2Old = `          <div class="secondary-links">
            <a href="junior_instructor_computer_exam_guide.html" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              পরীক্ষা পদ্ধতি ও গাইড
            </a>
            <a href="PROGRESS.md" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              প্রগ্রেস ট্র্যাকার (MD)
            </a>
            <a href="Junior Instructor Tech Computer Super Suggestion/Junior_Instructor_Computer_Exam_Syllabus_Guide.pdf" target="_blank" class="btn-secondary-link" style="grid-column: span 2;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              সিলেবাস PDF গাইড
            </a>
          </div>`;

const card2New = `          <div class="secondary-links">
            <a href="Junior Instructor Tech Computer Super Suggestion/Junior_Instructor_Computer_Exam_Syllabus_Guide.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              সিলেবাস PDF গাইড
            </a>
            <a href="BPSC ad_202506.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              সার্কুলার PDF
            </a>
          </div>`;

// Card 3
const card3Old = `          <div class="secondary-links">
            <a href="petrobangla_sub_assistant_engineer_exam_guide.html" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              পরীক্ষা পদ্ধতি ও গাইড
            </a>
            <a href="PROGRESS.md" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              প্রগ্রেস ট্র্যাকার (MD)
            </a>
            <a href="Petrobangla Sub-Assistant Engineer Computer IT/Petrobangla_Sub_Assistant_Engineer_Computer_IT_Exam_Guide.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              সিলেবাস PDF গাইড
            </a>
            <a href="petrobangla-1790774270-5822.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              মূল সার্কুলার PDF
            </a>
          </div>`;

const card3New = `          <div class="secondary-links">
            <a href="Petrobangla Sub-Assistant Engineer Computer IT/Petrobangla_Sub_Assistant_Engineer_Computer_IT_Exam_Guide.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              সিলেবাস PDF গাইড
            </a>
            <a href="petrobangla-1790774270-5822.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              মূল সার্কুলার PDF
            </a>
          </div>`;

// Card 4
const card4Old = `          <div class="secondary-links">
            <a href="dss_karigori_proshikhok_computer_exam_guide.html" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              পরীক্ষা পদ্ধতি ও গাইড
            </a>
            <a href="DSS Karigori Proshikhok Computer Super Suggestion/DSS_Karigori_Proshikhok_Computer_Exam_Guide.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              সিলেবাস PDF গাইড
            </a>
            <a href="PROGRESS.md" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              প্রগ্রেস ট্র্যাকার (MD)
            </a>
            <a href="advertisement-1780374169755.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              অফিশিয়াল সার্কুলার PDF
            </a>
          </div>`;

const card4New = `          <div class="secondary-links">
            <a href="DSS Karigori Proshikhok Computer Super Suggestion/DSS_Karigori_Proshikhok_Computer_Exam_Guide.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              সিলেবাস PDF গাইড
            </a>
            <a href="advertisement-1780374169755.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              অফিশিয়াল সার্কুলার PDF
            </a>
          </div>`;

// Card 5
const card5Old = `          <div class="secondary-links">
            <a href="dss_data_entry_operator_exam_guide.html" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              পরীক্ষা পদ্ধতি ও গাইড
            </a>
            <a href="DSS Data Entry Operator Super Suggestion/DSS_Data_Entry_Operator_Exam_Guide.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              সিলেবাস PDF গাইড
            </a>
            <a href="PROGRESS.md" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              প্রগ্রেস ট্র্যাকার (MD)
            </a>
            <a href="DSS Data Entry Operator Super Suggestion/DSS_ad_2026_Circular.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              অফিশিয়াল সার্কুলার PDF
            </a>
          </div>`;

const card5New = `          <div class="secondary-links">
            <a href="DSS Data Entry Operator Super Suggestion/DSS_Data_Entry_Operator_Exam_Guide.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              সিলেবাস PDF গাইড
            </a>
            <a href="DSS Data Entry Operator Super Suggestion/DSS_ad_2026_Circular.pdf" target="_blank" class="btn-secondary-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              অফিশিয়াল সার্কুলার PDF
            </a>
          </div>`;

indexContent = indexContent.replace(card1Old, card1New);
indexContent = indexContent.replace(card2Old, card2New);
indexContent = indexContent.replace(card3Old, card3New);
indexContent = indexContent.replace(card4Old, card4New);
indexContent = indexContent.replace(card5Old, card5New);

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('✅ Updated index.html secondary links to clean PDF links.');

// 2. UPDATE PORTAL HTMLs
function updateFile(filePath, transforms) {
  let content = fs.readFileSync(filePath, 'utf8');
  transforms.forEach(t => {
    content = content.replace(t.from, t.to);
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✅ Updated', path.basename(filePath));
}

// Sub-Assistant Maintenance Engineer
updateFile(path.join(rootDir, 'sub_assistant_maintenance_engineer_super_suggestion.html'), [
  {
    from: '<a href="sub_assistant_maintenance_engineer_exam_guide.html" target="_blank" class="hero-top-link">\n          পরীক্ষা পদ্ধতি ও সিলেবাস গাইড (Syllabus Guide)\n        </a>',
    to: '<a href="Sub-Assistant Maintenance Engineer Super Suggestion/Sub_Assistant_Maintenance_Engineer_Exam_Syllabus_Guide.pdf" target="_blank" class="hero-top-link">\n          📄 অফিসিয়াল সিলেবাস PDF গাইড\n        </a>'
  }
]);

// Junior Instructor
updateFile(path.join(rootDir, 'junior_instructor_computer_super_suggestion.html'), [
  {
    from: '<a href="junior_instructor_computer_exam_guide.html" target="_blank" class="hero-top-link">\n          পরীক্ষা পদ্ধতি ও সিলেবাস গাইড (Syllabus Guide)\n        </a>',
    to: '<a href="Junior Instructor Tech Computer Super Suggestion/Junior_Instructor_Computer_Exam_Syllabus_Guide.pdf" target="_blank" class="hero-top-link">\n          📄 অফিসিয়াল সিলেবাস PDF গাইড\n        </a>'
  }
]);

// Petrobangla
updateFile(path.join(rootDir, 'petrobangla_sub_assistant_engineer_super_suggestion.html'), [
  {
    from: '<a href="petrobangla_sub_assistant_engineer_exam_guide.html" target="_blank" class="hero-top-link">\n          বুয়েট পরীক্ষা পদ্ধতি ও সিলেবাস গাইড (BUET Syllabus Guide)\n        </a>',
    to: '<a href="Petrobangla Sub-Assistant Engineer Computer IT/Petrobangla_Sub_Assistant_Engineer_Computer_IT_Exam_Guide.pdf" target="_blank" class="hero-top-link">\n          📄 বুয়েট সিলেবাস PDF গাইড\n        </a>'
  }
]);

// DSS Karigori Proshikhok
updateFile(path.join(rootDir, 'dss_karigori_proshikhok_computer_super_suggestion.html'), [
  {
    from: '<a href="dss_karigori_proshikhok_computer_exam_guide.html" target="_blank" class="nav-btn">\n          পরীক্ষা পদ্ধতি ও সিলেবাস গাইড\n        </a>',
    to: '<a href="DSS Karigori Proshikhok Computer Super Suggestion/DSS_Karigori_Proshikhok_Computer_Exam_Guide.pdf" target="_blank" class="nav-btn">\n          📄 অফিসিয়াল সিলেবাস PDF\n        </a>'
  },
  {
    from: `<div id="syllabusTab" class="tab-pane">
      <div style="display: flex; justify-content: flex-end; gap: 10px; margin-bottom: 12px; flex-wrap: wrap;">
        <a href="DSS_Karigori_Proshikhok_Computer_Exam_Guide.pdf" target="_blank" class="nav-btn" style="background: #10b981; color: #ffffff; border-color: transparent;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          সরাসরি সিলেবাস PDF ডাউনলোড করুন (Download PDF)
        </a>
        <a href="exam_guide.html" target="_blank" class="nav-btn primary">
          🖨️ সম্পূর্ণ গাইড নতুন উইন্ডোতে ওপেন / প্রিন্ট করুন (Open HTML)
        </a>
      </div>
      <iframe src="exam_guide.html" class="syllabus-iframe" title="DSS Exam Guide"></iframe>
    </div>`,
    to: `<div id="syllabusTab" class="tab-pane">
      <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:12px;padding:32px;text-align:center;max-width:800px;margin:20px auto;box-shadow:var(--shadow-sm);">
        <div style="font-size:48px;margin-bottom:12px;">📑</div>
        <h3 style="font-size:20px;color:var(--text-main);margin-bottom:8px;">অফিসিয়াল পরীক্ষা সিলেবাস ও গাইড PDF</h3>
        <p style="color:var(--text-muted);font-size:14px;margin-bottom:20px;line-height:1.6;">
          সমাজসেবা অধিদপ্তর কারিগরি প্রশিক্ষক (কম্পিউটার) পদের পূর্ণাঙ্গ পরীক্ষার মানবণ্টন ও সিলেবাস গাইড PDF আকারে সংরক্ষিত রয়েছে। নিচের বাটনে ক্লিক করে অফিশিয়াল PDF ফাইলটি ভিউ বা ডাউনলোড করুন।
        </p>
        <a href="DSS Karigori Proshikhok Computer Super Suggestion/DSS_Karigori_Proshikhok_Computer_Exam_Guide.pdf" target="_blank" class="nav-btn primary" style="padding:12px 24px;font-size:15px;display:inline-flex;align-items:center;gap:8px;">
          📥 অফিশিয়াল সিলেবাস PDF ওপেন করুন (Open PDF)
        </a>
      </div>
    </div>`
  }
]);

// DSS Data Entry Operator
updateFile(path.join(rootDir, 'dss_data_entry_operator_super_suggestion.html'), [
  {
    from: '<a href="dss_data_entry_operator_exam_guide.html" target="_blank" class="nav-btn primary">\n          🖨️ প্রিন্ট সিলেবাস ও গাইড\n        </a>',
    to: '<a href="DSS Data Entry Operator Super Suggestion/DSS_Data_Entry_Operator_Exam_Guide.pdf" target="_blank" class="nav-btn primary">\n          📄 অফিশিয়াল সিলেবাস PDF\n        </a>'
  }
]);
