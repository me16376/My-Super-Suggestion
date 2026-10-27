const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '../../');
const jobFolder = path.join(baseDir, 'DSS Data Entry Operator Super Suggestion');

const mcqQuestions = JSON.parse(fs.readFileSync(path.join(jobFolder, 'preliminary_mcq.json'), 'utf8'));
const writtenQuestions = JSON.parse(fs.readFileSync(path.join(jobFolder, 'written_questions.json'), 'utf8'));

console.log(`Read ${mcqQuestions.length} MCQs and ${writtenQuestions.length} Written Questions.`);

// ==========================================
// 1. GENERATE dss_data_entry_operator_exam_guide.html
// ==========================================

const guideHtml = `<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>সমাজসেবা অধিদপ্তর (DSS) ডাটা এন্ট্রি অপারেটর — পূর্ণাঙ্গ লিখিত ও অ্যাপটিটিউড পরীক্ষা গাইড ও সিলেবাস</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
<style>
  @page {
    size: A4;
    margin: 8mm 10mm 8mm 10mm;
  }
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  body {
    font-family: 'Hind Siliguri', 'Nirmala UI', 'Kalpurush', Arial, sans-serif;
    color: #1e293b;
    background-color: #f8fafc;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
  .no-print { display: block; }
  @media print { .no-print { display: none !important; } }
  .guide-top-bar {
    background: #0f172a;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #0284c7;
    margin-bottom: 16px;
    border-radius: 8px;
    flex-wrap: wrap;
    gap: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .guide-back-link {
    color: #ffffff;
    text-decoration: none;
    font-weight: 700;
    font-size: 13px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #0284c7;
    padding: 6px 14px;
    border-radius: 6px;
    transition: all 0.2s;
  }
  .guide-back-link:hover { background: #0369a1; }
  .guide-actions { display: flex; gap: 8px; flex-wrap: wrap; }
  .guide-action-btn {
    background: #1e293b;
    border: 1px solid #475569;
    color: #e2e8f0;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: all 0.2s;
  }
  .guide-action-btn:hover { background: #334155; color: #ffffff; }

  .container {
    max-width: 1100px;
    margin: 0 auto 30px auto;
    background: #ffffff;
    padding: 30px 40px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  }

  .header-box {
    text-align: center;
    border-bottom: 3px double #0284c7;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  .header-box h1 {
    font-size: 24px;
    margin: 0 0 4px 0;
    color: #0f172a;
    font-weight: 700;
  }
  .header-box h2 {
    font-size: 18px;
    margin: 0 0 6px 0;
    color: #0369a1;
    font-weight: 600;
  }
  .header-box p {
    margin: 0;
    font-size: 13px;
    color: #64748b;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 20px;
  }
  .meta-card {
    background: #f1f5f9;
    border-left: 4px solid #0284c7;
    padding: 8px 12px;
    border-radius: 4px;
  }
  .meta-label {
    font-size: 11px;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
  }
  .meta-val {
    font-size: 14px;
    color: #0f172a;
    font-weight: 700;
    margin-top: 2px;
  }

  .section-title {
    font-size: 16px;
    font-weight: 700;
    color: #0f172a;
    border-left: 5px solid #0284c7;
    padding-left: 10px;
    margin: 20px 0 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8fafc;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 0 6px 6px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 15px;
    font-size: 13px;
  }
  th, td {
    border: 1px solid #cbd5e1;
    padding: 8px 12px;
    text-align: left;
  }
  th {
    background: #f1f5f9;
    color: #0f172a;
    font-weight: 700;
  }
  tr:nth-child(even) { background: #fafafa; }

  .highlight-badge {
    background: #e0f2fe;
    color: #0369a1;
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 11px;
  }

  .typing-box {
    background: #ecfdf5;
    border: 2px dashed #10b981;
    border-radius: 8px;
    padding: 14px;
    margin: 15px 0;
  }
  .typing-box h4 {
    margin: 0 0 6px 0;
    color: #047857;
    font-size: 15px;
  }

  .syllabus-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 15px;
  }
  .syllabus-card {
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 12px;
    background: #ffffff;
  }
  .syllabus-card h4 {
    margin: 0 0 8px 0;
    color: #0284c7;
    font-size: 14px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 4px;
  }
  .syllabus-card ul {
    margin: 0;
    padding-left: 20px;
    font-size: 12.5px;
    color: #334155;
  }
  .syllabus-card li { margin-bottom: 4px; }

  .footer-note {
    text-align: center;
    border-top: 1px solid #cbd5e1;
    padding-top: 15px;
    margin-top: 25px;
    font-size: 12px;
    color: #64748b;
  }
</style>
</head>
<body>

<div class="no-print guide-top-bar" style="max-width: 1100px; margin: 15px auto;">
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <a href="index.html" class="guide-back-link" style="background: #2563eb;">
      🏠 মাস্টার পোর্টাল (Hub)
    </a>
    <a href="dss_data_entry_operator_super_suggestion.html" class="guide-back-link">
      ← সুপার সাজেশন পোর্টালে যান (Web Portal)
    </a>
  </div>
  <div class="guide-actions">
    <button class="guide-action-btn" onclick="window.print()">
      🖨️ সিলেবাস গাইড প্রিন্ট / PDF সংরক্ষণ
    </button>
    <a href="DSS Data Entry Operator Super Suggestion/DSS_ad_2026_Circular.pdf" target="_blank" class="guide-action-btn">
      📄 অফিশিয়াল সার্কুলার
    </a>
  </div>
</div>

<div class="container">
  <div class="header-box">
    <h1>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার — সমাজসেবা অধিদপ্তর (DSS)</h1>
    <h2>পদ: ডাটা এন্ট্রি অপারেটর (Data Entry Operator) — ১৬তম গ্রেড</h2>
    <p>নিয়োগ পরীক্ষা সিলেবাস, মানবণ্টন, স্ট্যান্ডার্ড অ্যাপটিটিউড টেস্ট ও টাইপিং স্পিড নির্দেশিকা</p>
  </div>

  <div class="meta-grid">
    <div class="meta-card">
      <div class="meta-label">বিজ্ঞপ্তি ক্রমিক</div>
      <div class="meta-val">১৬ (Circular No. 16)</div>
    </div>
    <div class="meta-card">
      <div class="meta-label">মোট পদসংখ্যা</div>
      <div class="meta-val">৩৫ টি (35 Posts)</div>
    </div>
    <div class="meta-card">
      <div class="meta-label">বেতন স্কেল</div>
      <div class="meta-val">৯,৩০০ - ২২,৪৯০/- (গ্রেড-১৬)</div>
    </div>
    <div class="meta-card">
      <div class="meta-label">শিক্ষাগত যোগ্যতা</div>
      <div class="meta-val">উচ্চ মাধ্যমিক সার্টিফিকেট (HSC) / সমমান</div>
    </div>
  </div>

  <div class="typing-box">
    <h4>⚠️ বাধ্যতামূলক টাইপিং ও অ্যাপটিটিউড শর্তাবলী (সরকারি সার্কুলার অনুযায়ী)</h4>
    <p style="margin: 0; font-size: 13px; color: #065f46;">
      ১. কম্পিউটার টাইপিংয়ে সর্বনিম্ন গতি: <strong>প্রতি মিনিটে বাংলায় ২০ শব্দ</strong> এবং <strong>ইংরেজিতে ২০ শব্দ</strong> থাকতে হবে।<br>
      ২. <strong>স্ট্যান্ডার্ড অ্যাপটিটিউড টেস্ট (Standard Aptitude Test)</strong>-এ উত্তীর্ণ হতে হবে (কম্পিউটার অপারেটিং, এমএস ওয়ার্ড, এক্সেল, পাওয়ারপয়েন্ট, অ্যাক্সেস ও ইন্টারনেট ব্রাউজিং)।
    </p>
  </div>

  <div class="section-title">১. প্রিলিমিনারি / লিখিত ওএমআর পরীক্ষার পূর্ণাঙ্গ মানবণ্টন (৭০ নম্বর)</div>
  <table>
    <thead>
      <tr>
        <th style="width: 10%;">ক্রম</th>
        <th style="width: 30%;">বিষয়</th>
        <th style="width: 15%;">নম্বর</th>
        <th style="width: 45%;">গুরুত্বপূর্ণ ফোকাস এরিয়া ও টপিক</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>০১</td>
        <td><strong>বাংলা ভাষা ও সাহিত্য</strong></td>
        <td><span class="highlight-badge">২০ নম্বর</span></td>
        <td>বানান ও বাক্য শুদ্ধিকরণ, এককথায় প্রকাশ, সন্ধি, সমাস, কারক ও বিভক্তি, বাগধারা ও প্রবাদ-প্রবচন, দাপ্তরিক ও প্রশাসনিক পরিভাষা।</td>
      </tr>
      <tr>
        <td>০২</td>
        <td><strong>ইংরেজি (English Language)</strong></td>
        <td><span class="highlight-badge">২০ নম্বর</span></td>
        <td>Right Form of Verbs, Appropriate Prepositions, Sentence Correction, Spelling, Synonyms & Antonyms, Idioms & Phrases, Translation.</td>
      </tr>
      <tr>
        <td>০৩</td>
        <td><strong>সাধারণ গণিত</strong></td>
        <td><span class="highlight-badge">১৫ নম্বর</span></td>
        <td>ঐকিক নিয়ম, শতকরা, লাভ-ক্ষতি, অনুপাত-সমানুপাত, সুদকষা, ল.সা.গু ও গ.সা.গু, সাধারণ বীজগণিত ও মান নির্ণয়।</td>
      </tr>
      <tr>
        <td>০৪</td>
        <td><strong>কম্পিউটার ও ডাটা এন্ট্রি</strong></td>
        <td><span class="highlight-badge">১৫ নম্বর</span></td>
        <td>কম্পিউটার সংগঠন, MS Word, MS Excel ফর্মুলা (SUM, AVERAGE, IF, VLOOKUP), MS Access বেসিক, কীবোর্ড শর্টকাট, টাইপিং রুলস, ইন্টারনেট ও ডাটা ভ্যালিডেশন।</td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: right; font-weight: 700;">সর্বমোট নম্বর:</td>
        <td style="font-weight: 700; color: #0284c7;">৭০ নম্বর</td>
        <td><strong>সময়: ৬০ মিনিট | নেগেটিভ মার্কিং: প্রতিটি ভুলের জন্য ০.২৫ কাটা যাবে</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="section-title">২. বিষয়ভিত্তিক বিস্তারিত সিলেবাস ও প্রশ্ন বিশ্লেষণ</div>
  <div class="syllabus-grid">
    <div class="syllabus-card">
      <h4>💻 কম্পিউটার ও স্ট্যান্ডার্ড অ্যাপটিটিউড (১৫ নম্বর + প্র্যাকটিক্যাল)</h4>
      <ul>
        <li><strong>MS Excel:</strong> সেল রেফারেন্সিং ($A$1), ফর্মুলা (=SUM, =AVERAGE, =COUNTIF, =IF, =VLOOKUP), ফিল্টার, সর্টিং, কন্ডিশনাল ফরম্যাটিং।</li>
        <li><strong>MS Word:</strong> পেজ সেটআপ (মার্জিন, অরিয়েন্টেশন, পেপার সাইজ A4/Legal), টেবিল ইনসার্ট ও ফরম্যাটিং, হেডার ও ফুটার, ফন্ট কনভার্সন (বিজয়/অভ্র)।</li>
        <li><strong>MS Access:</strong> ডাটাবেজ টেবিল, ফিল্ড ডাটা টাইপ, প্রাইমারি কি (Primary Key), রিলেশনশিপ, সিম্পল কোয়েরি তৈরি।</li>
        <li><strong>টাইপিং স্পিড:</strong> বাংলা ২০ শব্দ/মিনিট (বিজয় বা অভ্র), ইংরেজি ২০ শব্দ/মিনিট (ভুলের হার ৫% এর কম হতে হবে)।</li>
        <li><strong>কীবোর্ড শর্টকাট:</strong> Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+F, Ctrl+H, Ctrl+Z, Ctrl+Y, F12 (Save As), Alt+Tab, Win+D ইত্যাদি।</li>
      </ul>
    </div>
    <div class="syllabus-card">
      <h4>🇧🇩 বাংলা ভাষা ও সাহিত্য (২০ নম্বর)</h4>
      <ul>
        <li><strong>শুদ্ধিকরণ:</strong> বানান শুদ্ধি (মুমূর্ষু, অপরাহ্ন, সান্ত্বনা, উজ্জ্বল, প্রতিযোগিতা) ও বাক্য শুদ্ধি।</li>
        <li><strong>শব্দ ও ব্যাকরণ:</strong> সন্ধি, সমাস (দ্বন্দ্ব, দ্বিগু, বহুব্রীহি), কারক ও বিভক্তি, ণ-ত্ব ও ষ-ত্ব বিধান।</li>
        <li><strong>শব্দভাণ্ডার:</strong> এককথায় প্রকাশ, বাগধারা ও প্রবাদ-প্রবচন, বিপরীতার্থক শব্দ, সমার্থক শব্দ।</li>
        <li><strong>দাপ্তরিক পরিভাষা:</strong> Noti, Summary, Approval, Quorum, Gazette, Embezzlement, Deputation, Agenda, Remittance।</li>
      </ul>
    </div>
    <div class="syllabus-card">
      <h4>🇬🇧 English Language & Grammar (২০ নম্বর)</h4>
      <ul>
        <li><strong>Grammar & Usage:</strong> Parts of Speech, Tense, Subject-Verb Agreement, Right Form of Verbs, Voice Change, Narration.</li>
        <li><strong>Vocabulary & Spelling:</strong> Correct Spelling (Accommodate, Millennium, Lieutenant, Questionnaire), Synonyms, Antonyms.</li>
        <li><strong>Prepositions & Idioms:</strong> Appropriate Prepositions (Abide by, Absorb in, Aware of), Idioms & Phrases (A piece of cake, In full swing).</li>
        <li><strong>Official English:</strong> Drafting official emails, formal letter phrasing, notices, error correction in sentences.</li>
      </ul>
    </div>
    <div class="syllabus-card">
      <h4>📐 সাধারণ গণিত ও পাটিগণিত (১৫ নম্বর)</h4>
      <ul>
        <li><strong>পাটিগণিত:</strong> ঐকিক নিয়ম (কাজ ও সময়, নল ও চৌবাচ্চা), শতকরা, লাভ ও ক্ষতি, সরল ও যৌগিক মুনাফা।</li>
        <li><strong>অনুপাত ও মিশ্রণ:</strong> অনুপাত-সমানুপাত, তামা-দস্তার অনুপাত, অংশীদারি কারবার।</li>
        <li><strong>বীজগণিত:</strong> বীজগাণিতিক সূত্রাবলি ও মান নির্ণয় ((a+b)², (a-b)³), উৎপাদকে বিশ্লেষণ, সরল সমীকরণ।</li>
        <li><strong>জ্যামিতি ও পরিমিতি:</strong> ত্রিভুজ, চতুর্ভুজ ও আয়তক্ষেত্রের ক্ষেত্রফল ও পরিসীমা নির্ণয়।</li>
      </ul>
    </div>
  </div>

  <div class="section-title">৩. স্ট্যান্ডার্ড অ্যাপটিটিউড টেস্টে সর্বোচ্চ নম্বর নিশ্চিতের কৌশল</div>
  <table style="margin-bottom: 20px;">
    <thead>
      <tr>
        <th style="width: 25%;">মডিউল</th>
        <th style="width: 35%;">পরীক্ষায় যা করতে দেওয়া হয়</th>
        <th style="width: 40%;">সতর্কতা ও সর্বোচ্চ স্কোরের টিপস</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>MS Excel প্র্যাকটিক্যাল</strong></td>
        <td>একটি স্যালারি শীট বা বাজেট শীট তৈরি করে SUM, IF, AVERAGE ও ফিল্টার প্রয়োগ করা।</td>
        <td>ম্যানুয়াল যোগ না করে সরাসরি এক্সেল ফর্মুলা লিখুন। টাকার ঘরে কারেন্সি বা ডেসিমাল ফরম্যাট ২ ডিজিট রাখুন।</td>
      </tr>
      <tr>
        <td><strong>MS Word ফরম্যাটিং</strong></td>
        <td>একটি সরকারি নোটিশ বা আবেদনপত্র টাইপ করে উপযুক্ত মার্জিন, ট্যাব, বুলেট ও টেবিল সাজানো।</td>
        <td>Margin: Normal (Top 1", Bottom 1", Left 1", Right 1") দিন। স্পেসবার দিয়ে দূরত্ব না বাড়িয়ে Tab ও Alignment ব্যবহার করুন।</td>
      </tr>
      <tr>
        <td><strong>টাইপিং স্পিড টেস্ট</strong></td>
        <td>স্ক্রিন বা প্রিন্টেড কাগজ দেখে ৫ মিনিটে ১০০ শব্দ বাংলায় ও ১০০ শব্দ ইংরেজিতে নির্ভুল টাইপ।</td>
        <td>দ্রুত টাইপের চেয়ে নির্ভুলতা (Accuracy) আগে নিশ্চিত করুন। ভুল বেশি হলে পেনাল্টি দিয়ে স্পিড কমে যায়।</td>
      </tr>
      <tr>
        <td><strong>ডাটা ভ্যালিডেশন</strong></td>
        <td>তালিকা দেখে ভুল ডাটা (১০ বা ১৩ ডিজিটের NID, ভুল মোবাইল নাম্বার, ভুল তারিখ ফরম্যাট) সংশোধন।</td>
        <td>Excel Data Validation ব্যবহার শিখুন (Text Length = 10, Date within range)।</td>
      </tr>
    </tbody>
  </table>

  <div class="footer-note">
    <strong>সমাজসেবা অধিদপ্তর (DSS) ডাটা এন্ট্রি অপারেটর নিয়োগ প্রস্তুতি প্যাক</strong><br>
    ইন্টারঅ্যাক্টিভ ওএমআর মক টেস্ট এবং লাইভ টাইপিং স্পিড টেস্ট দিতে আমাদের সুপার সাজেশন ওয়েব পোর্টালে ভিজিট করুন।<br>
    © ২০২৬ সর্বস্বত্ব সংরক্ষিত | গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
  </div>
</div>

</body>
</html>
`;

fs.writeFileSync(path.join(baseDir, 'dss_data_entry_operator_exam_guide.html'), guideHtml, 'utf8');
console.log('Generated dss_data_entry_operator_exam_guide.html in workspace root.');

// ==========================================
// 2. GENERATE dss_data_entry_operator_super_suggestion.html
// ==========================================

const portalHtml = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>সমাজসেবা অধিদপ্তর (DSS) ডাটা এন্ট্রি অপারেটর — সুপার সাজেশন ও মডেল টেস্ট পোর্টাল</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">

  <style>
    :root {
      --primary: #0284c7;
      --primary-dark: #0369a1;
      --primary-light: #e0f2fe;
      --accent: #10b981;
      --accent-hover: #059669;
      --accent-light: #ecfdf5;
      --danger: #ef4444;
      --danger-bg: #fef2f2;
      --warning: #f59e0b;
      --warning-bg: #fffbeb;
      --info: #3b82f6;
      --bg-body: #f8fafc;
      --bg-card: #ffffff;
      --bg-card-hover: #f1f5f9;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --text-dim: #94a3b8;
      --border-color: #e2e8f0;
      --border-highlight: #cbd5e1;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
      --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.05);
      --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04);
      --radius-sm: 6px;
      --radius-md: 10px;
      --radius-lg: 16px;
      --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    [data-theme="dark"] {
      --primary: #38bdf8;
      --primary-dark: #0284c7;
      --primary-light: rgba(56, 189, 248, 0.12);
      --accent: #34d399;
      --accent-hover: #10b981;
      --accent-light: rgba(52, 211, 153, 0.12);
      --danger: #f87171;
      --danger-bg: rgba(239, 68, 68, 0.12);
      --warning: #fbbf24;
      --warning-bg: rgba(245, 158, 11, 0.12);
      --bg-body: #0b1120;
      --bg-card: #131c31;
      --bg-card-hover: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      --border-color: #1e293b;
      --border-highlight: #334155;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
      --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.4);
      --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.5);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Hind Siliguri', sans-serif;
      background-color: var(--bg-body);
      color: var(--text-main);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    header {
      background: var(--bg-card);
      border-bottom: 1px solid var(--border-color);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: var(--shadow-sm);
      backdrop-filter: blur(8px);
    }

    .header-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 12px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .brand-section {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .brand-icon {
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, #0284c7, #10b981);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      color: #fff;
      box-shadow: 0 4px 10px rgba(2, 132, 199, 0.3);
    }

    .brand-text h1 {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.25;
      color: var(--text-main);
    }

    .brand-text p {
      font-size: 12px;
      color: var(--text-muted);
    }

    .brand-badge {
      display: inline-block;
      background: var(--primary-light);
      color: var(--primary);
      font-size: 11px;
      font-weight: 600;
      padding: 1px 8px;
      border-radius: 20px;
      margin-left: 6px;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .nav-btn {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 7px 14px;
      border-radius: var(--radius-sm);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      transition: var(--transition);
    }

    .nav-btn:hover {
      background: var(--bg-card-hover);
      border-color: var(--primary);
      color: var(--primary);
    }

    .nav-btn.primary {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    .nav-btn.primary:hover {
      background: var(--primary-dark);
    }

    .theme-toggle {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid var(--border-color);
      background: var(--bg-card);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: var(--transition);
      font-size: 16px;
    }

    .theme-toggle:hover {
      border-color: var(--primary);
    }

    /* TABS NAVIGATION */
    .tabs-bar {
      background: var(--bg-card);
      border-bottom: 1px solid var(--border-color);
    }

    .tabs-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      gap: 4px;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .tabs-inner::-webkit-scrollbar { display: none; }

    .tab-btn {
      padding: 12px 18px;
      background: transparent;
      border: none;
      border-bottom: 3px solid transparent;
      color: var(--text-muted);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      transition: var(--transition);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .tab-btn:hover {
      color: var(--primary);
      background: var(--bg-card-hover);
    }

    .tab-btn.active {
      color: var(--primary);
      border-bottom-color: var(--primary);
    }

    .tab-badge {
      background: var(--border-color);
      color: var(--text-muted);
      padding: 2px 7px;
      border-radius: 12px;
      font-size: 11px;
    }
    .tab-btn.active .tab-badge {
      background: var(--primary-light);
      color: var(--primary);
    }

    /* MAIN CONTAINER */
    main {
      flex: 1;
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
      padding: 24px 20px;
    }

    .tab-pane {
      display: none;
    }
    .tab-pane.active {
      display: block;
      animation: fadeIn 0.25s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* STATS STRIP */
    .stats-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }

    .stat-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
    }

    .stat-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      border-color: var(--primary);
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
    }

    .stat-info .stat-num {
      font-size: 24px;
      font-weight: 700;
      color: var(--text-main);
      font-family: 'Outfit', sans-serif;
      line-height: 1.1;
    }

    .stat-info .stat-label {
      font-size: 12.5px;
      color: var(--text-muted);
      margin-top: 3px;
    }

    /* FILTER BAR */
    .filter-bar {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 16px;
      margin-bottom: 20px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
      box-shadow: var(--shadow-sm);
    }

    .search-box {
      flex: 1;
      min-width: 250px;
      position: relative;
    }

    .search-box input {
      width: 100%;
      background: var(--bg-body);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      padding: 9px 12px 9px 36px;
      font-size: 14px;
      color: var(--text-main);
      outline: none;
      transition: var(--transition);
    }

    .search-box input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
    }

    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-dim);
      font-size: 14px;
    }

    .pill-group {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .pill-btn {
      background: var(--bg-body);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
    }

    .pill-btn:hover {
      background: var(--primary-light);
      color: var(--primary);
      border-color: var(--primary);
    }

    .pill-btn.active {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    /* QUESTION CARD */
    .question-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .q-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 20px;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
    }

    .q-card:hover {
      box-shadow: var(--shadow-md);
      border-color: var(--border-highlight);
    }

    .q-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
      gap: 12px;
    }

    .q-badge-wrap {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .q-badge {
      font-size: 11px;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 4px;
      text-transform: uppercase;
    }
    .badge-sub { background: var(--primary-light); color: var(--primary); }
    .badge-top { background: var(--accent-light); color: var(--accent-hover); }

    .btn-bookmark {
      background: transparent;
      border: none;
      color: var(--text-dim);
      font-size: 18px;
      cursor: pointer;
      transition: var(--transition);
    }
    .btn-bookmark:hover, .btn-bookmark.active {
      color: var(--warning);
      transform: scale(1.15);
    }

    .q-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-main);
      margin-bottom: 16px;
      line-height: 1.5;
    }

    .options-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 10px;
      margin-bottom: 14px;
    }

    .option-item {
      background: var(--bg-body);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      padding: 10px 14px;
      font-size: 14px;
      cursor: pointer;
      transition: var(--transition);
      display: flex;
      align-items: center;
      gap: 10px;
      user-select: none;
      color: var(--text-main);
    }

    .option-item:hover {
      border-color: var(--primary);
      background: var(--primary-light);
    }

    .option-item.correct {
      background: var(--accent-light) !important;
      border-color: var(--accent) !important;
      color: var(--accent-hover) !important;
      font-weight: 700;
    }

    .option-item.incorrect {
      background: var(--danger-bg) !important;
      border-color: var(--danger) !important;
      color: var(--danger) !important;
    }

    .q-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;
      border-top: 1px solid var(--border-color);
    }

    .btn-explain {
      background: transparent;
      border: 1px solid var(--border-color);
      color: var(--primary);
      padding: 4px 12px;
      border-radius: var(--radius-sm);
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
    }

    .btn-explain:hover {
      background: var(--primary-light);
    }

    .explanation-box {
      display: none;
      background: var(--bg-body);
      border-left: 4px solid var(--primary);
      padding: 12px 16px;
      margin-top: 12px;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      font-size: 13.5px;
      color: var(--text-main);
      line-height: 1.5;
    }

    /* TYPING TEST ENGINE */
    .typing-container {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 24px;
      box-shadow: var(--shadow-md);
      max-width: 960px;
      margin: 0 auto;
    }

    .typing-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 12px;
    }

    .typing-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 20px;
    }

    .typing-stat-box {
      background: var(--bg-body);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 12px;
      text-align: center;
    }

    .typing-stat-val {
      font-size: 26px;
      font-weight: 800;
      font-family: 'Outfit', sans-serif;
      color: var(--primary);
    }

    .typing-stat-lbl {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 2px;
    }

    .typing-pass-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
    }
    .status-pass { background: var(--accent-light); color: var(--accent-hover); }
    .status-fail { background: var(--warning-bg); color: var(--warning); }

    .typing-prompt-box {
      background: var(--bg-body);
      border: 1px solid var(--border-highlight);
      border-radius: var(--radius-md);
      padding: 18px;
      font-size: 16px;
      line-height: 1.8;
      min-height: 110px;
      user-select: none;
      letter-spacing: 0.3px;
      margin-bottom: 16px;
    }

    .char-correct { color: #10b981; font-weight: 600; }
    .char-wrong { background: #fee2e2; color: #dc2626; border-radius: 2px; text-decoration: underline; }
    .char-current { background: #e0f2fe; border-bottom: 2px solid #0284c7; }

    .typing-input-area {
      width: 100%;
      height: 110px;
      background: var(--bg-card);
      border: 2px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 14px;
      font-size: 16px;
      font-family: inherit;
      color: var(--text-main);
      outline: none;
      resize: none;
      transition: var(--transition);
      line-height: 1.6;
    }

    .typing-input-area:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(2, 132, 199, 0.15);
    }

    .typing-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      flex-wrap: wrap;
      gap: 10px;
    }

    /* MOCK EXAM SECTION */
    .mock-start-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 32px 24px;
      text-align: center;
      max-width: 720px;
      margin: 20px auto;
      box-shadow: var(--shadow-md);
    }

    .mock-start-card h2 {
      font-size: 22px;
      color: var(--text-main);
      margin-bottom: 12px;
    }

    .mock-rules {
      text-align: left;
      background: var(--bg-body);
      border-radius: var(--radius-md);
      padding: 18px 24px;
      margin: 20px 0;
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.7;
    }

    .exam-live-wrapper {
      display: none;
    }
    .exam-live-wrapper.active {
      display: block;
    }

    .exam-timer-bar {
      position: sticky;
      top: 65px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 10px 18px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 90;
      box-shadow: var(--shadow-md);
    }

    .timer-display {
      font-family: 'Fira Code', monospace;
      font-size: 20px;
      font-weight: 700;
      color: var(--danger);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .btn-submit-exam {
      background: var(--accent);
      color: #fff;
      border: none;
      padding: 8px 18px;
      border-radius: var(--radius-sm);
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: var(--transition);
    }
    .btn-submit-exam:hover {
      background: var(--accent-hover);
    }

    .mock-result-card {
      display: none;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 30px;
      text-align: center;
      max-width: 700px;
      margin: 20px auto;
      box-shadow: var(--shadow-lg);
    }
    .mock-result-card.active {
      display: block;
    }

    .score-circle {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(135deg, #0284c7, #10b981);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px auto;
      box-shadow: 0 6px 18px rgba(2, 132, 199, 0.35);
    }
    .score-circle .score-val {
      font-size: 32px;
      font-weight: 800;
      font-family: 'Outfit', sans-serif;
      line-height: 1;
    }
    .score-circle .score-sub {
      font-size: 12px;
      opacity: 0.9;
    }

    .result-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin: 24px 0;
    }
    .result-box {
      background: var(--bg-body);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 12px 8px;
    }
    .result-box .num {
      font-size: 20px;
      font-weight: 700;
      font-family: 'Outfit', sans-serif;
    }
    .result-box .lbl {
      font-size: 11.5px;
      color: var(--text-muted);
      margin-top: 2px;
    }

    /* APTITUDE TAB */
    .aptitude-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: var(--shadow-sm);
    }
    .aptitude-card h3 {
      font-size: 18px;
      color: var(--primary);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .shortcut-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 13.5px;
    }
    .shortcut-table th, .shortcut-table td {
      border: 1px solid var(--border-color);
      padding: 8px 12px;
      text-align: left;
    }
    .shortcut-table th {
      background: var(--bg-body);
      color: var(--text-main);
      font-weight: 700;
    }
    kbd {
      background: var(--bg-body);
      border: 1px solid var(--border-highlight);
      border-radius: 4px;
      padding: 2px 6px;
      font-family: 'Fira Code', monospace;
      font-size: 12px;
      box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    }

    /* WRITTEN TAB */
    .written-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: var(--shadow-sm);
    }
    .written-card h3 {
      font-size: 16.5px;
      color: var(--text-main);
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
    }
    .written-ans-box {
      background: var(--bg-body);
      border-left: 4px solid var(--accent);
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      padding: 16px;
      font-size: 14px;
      color: var(--text-main);
      line-height: 1.6;
      white-space: pre-wrap;
    }

    footer {
      background: var(--bg-card);
      border-top: 1px solid var(--border-color);
      padding: 20px;
      text-align: center;
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 40px;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header>
    <div class="header-inner">
      <div class="brand-section">
        <div class="brand-icon">⌨️</div>
        <div class="brand-text">
          <h1>
            সমাজসেবা অধিদপ্তর (DSS) — ডাটা এন্ট্রি অপারেটর
            <span class="brand-badge">১৬তম গ্রেড • ৩৫টি পদ</span>
          </h1>
          <p>সুপার সাজেশন, লাইভ টাইপিং স্পিড টেস্ট ও ৭০-নম্বর ওএমআর মডেল টেস্ট পোর্টাল</p>
        </div>
      </div>
      <div class="header-actions">
        <a href="index.html" class="nav-btn">
          🏠 মাস্টার পোর্টাল
        </a>
        <a href="dss_data_entry_operator_exam_guide.html" target="_blank" class="nav-btn primary">
          🖨️ প্রিন্ট সিলেবাস ও গাইড
        </a>
        <button class="theme-toggle" id="themeToggleBtn" onclick="toggleTheme()" title="থিম পরিবর্তন">
          🌓
        </button>
      </div>
    </div>
  </header>

  <!-- TABS BAR -->
  <div class="tabs-bar">
    <div class="tabs-inner">
      <button class="tab-btn active" onclick="switchTab('tab-study')">
        📚 বিষয়ভিত্তিক প্রশ্নব্যাংক <span class="tab-badge" id="studyBadge">৭৪</span>
      </button>
      <button class="tab-btn" onclick="switchTab('tab-mock')">
        ⏱️ ৭০ মার্ক ওএমআর মডেল টেস্ট <span class="tab-badge">মক টেস্ট</span>
      </button>
      <button class="tab-btn" onclick="switchTab('tab-typing')">
        ⌨️ লাইভ টাইপিং টেস্ট (২০ wpm) <span class="tab-badge" style="background:#ecfdf5;color:#059669;">বাধ্যতামূলক</span>
      </button>
      <button class="tab-btn" onclick="switchTab('tab-aptitude')">
        💻 স্ট্যান্ডার্ড অ্যাপটিটিউড টেস্ট গাইড <span class="tab-badge">প্র্যাকটিক্যাল</span>
      </button>
      <button class="tab-btn" onclick="switchTab('tab-written')">
        📝 লিখিত ও প্র্যাকটিক্যাল মডেল <span class="tab-badge">৭টি</span>
      </button>
      <button class="tab-btn" onclick="switchTab('tab-bookmark')">
        📌 বুকমার্ককৃত প্রশ্ন <span class="tab-badge" id="bookmarkTabBadge">০</span>
      </button>
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main>

    <!-- TAB 1: STUDY & MCQ BANK -->
    <div id="tab-study" class="tab-pane active">
      <!-- STATS STRIP -->
      <div class="stats-strip">
        <div class="stat-card">
          <div class="stat-icon" style="background: #e0f2fe; color: #0284c7;">🎯</div>
          <div class="stat-info">
            <div class="stat-num" id="statTotalMcq">৭৪</div>
            <div class="stat-label">মোট সাজেস্টেড MCQ</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background: #ecfdf5; color: #10b981;">💻</div>
          <div class="stat-info">
            <div class="stat-num">২০ WPM</div>
            <div class="stat-label">টাইপিং স্পিড রিকোয়ারমেন্ট</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background: #fef3c7; color: #d97706;">📝</div>
          <div class="stat-info">
            <div class="stat-num">৭০ মার্ক</div>
            <div class="stat-label">প্রিলি/লিখিত পূর্ণমান</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background: #f3e8ff; color: #9333ea;">👥</div>
          <div class="stat-info">
            <div class="stat-num">৩৫ টি</div>
            <div class="stat-label">বিজ্ঞপ্তি পদসংখ্যা (গ্রেড-১৬)</div>
          </div>
        </div>
      </div>

      <!-- FILTER BAR -->
      <div class="filter-bar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="searchInput" placeholder="প্রশ্ন, টপিক বা অপশন খুঁজুন..." oninput="filterQuestions()">
        </div>
        <div class="pill-group" id="subjectFilterPills">
          <button class="pill-btn active" onclick="setSubjectFilter('all', this)">সব বিষয় (All)</button>
          <button class="pill-btn" onclick="setSubjectFilter('কম্পিউটার ও ডাটা এন্ট্রি', this)">কম্পিউটার ও ডাটা এন্ট্রি</button>
          <button class="pill-btn" onclick="setSubjectFilter('বাংলা', this)">বাংলা</button>
          <button class="pill-btn" onclick="setSubjectFilter('ইংরেজি', this)">ইংরেজি</button>
          <button class="pill-btn" onclick="setSubjectFilter('সাধারণ গণিত', this)">সাধারণ গণিত</button>
          <button class="pill-btn" onclick="setSubjectFilter('সমাজসেবা ও সাধারণ জ্ঞান', this)">সাধারণ জ্ঞান</button>
        </div>
      </div>

      <!-- QUESTIONS LIST -->
      <div class="question-list" id="questionsContainer">
        <!-- Injected by JavaScript -->
      </div>
    </div>

    <!-- TAB 2: 70-MARK OMR MOCK TEST -->
    <div id="tab-mock" class="tab-pane">
      <div id="mockIntroCard" class="mock-start-card">
        <h2>⏱️ সমাজসেবা অধিদপ্তর ডাটা এন্ট্রি অপারেটর পূর্ণাঙ্গ ওএমআর মডেল টেস্ট</h2>
        <p style="color: var(--text-muted); font-size: 14.5px;">
          অফিশিয়াল পরীক্ষার মানবণ্টন ও সময়ানুযায়ী ৭০ নম্বরের রিয়েল-টাইম প্র্যাকটিস টেস্ট
        </p>

        <div class="mock-rules">
          <strong style="color: var(--text-main); display: block; margin-bottom: 6px;">📋 মডেল টেস্টের নিয়মাবলী:</strong>
          • মোট প্রশ্ন: <strong>৭০টি</strong> (বাংলা ২০, ইংরেজি ২০, গণিত ১৫, কম্পিউটার ও ডাটা এন্ট্রি ১৫)<br>
          • নির্ধারিত সময়: <strong>৬০ মিনিট</strong> (কাউন্টডাউন টাইমার চলমান থাকবে)<br>
          • প্রতিটি সঠিক উত্তরের জন্য: <strong>+১ নম্বর</strong><br>
          • প্রতিটি ভুল উত্তরের জন্য: <strong>-০.২৫ নম্বর</strong> (নেগেটিভ মার্কিং কার্যকর)<br>
          • সময় শেষ হলে স্বয়ংক্রিয়ভাবে খাতা জমা হয়ে যাবে এবং পূর্ণাঙ্গ অ্যানালাইসিস স্ক্রিনে প্রদর্শিত হবে।
        </div>

        <button class="nav-btn primary" style="padding: 12px 32px; font-size: 16px; border-radius: 8px;" onclick="startMockExam()">
          🚀 মডেল টেস্ট শুরু করুন
        </button>
      </div>

      <!-- LIVE EXAM RUNNER -->
      <div id="examLiveWrapper" class="exam-live-wrapper">
        <div class="exam-timer-bar">
          <div class="timer-display">
            ⏱️ <span id="timerText">60:00</span>
          </div>
          <div style="font-size: 14px; font-weight: 600; color: var(--text-muted);">
            উত্তর দিয়েছেন: <span id="examAnsweredCount" style="color: var(--primary); font-weight: 700;">০</span> / ৭০
          </div>
          <button class="btn-submit-exam" onclick="confirmSubmitExam()">
            ✅ পরীক্ষা জমা দিন (Submit)
          </button>
        </div>

        <div class="question-list" id="mockExamQuestionsContainer">
          <!-- Live exam questions injected here -->
        </div>
      </div>

      <!-- RESULT CARD -->
      <div id="mockResultCard" class="mock-result-card">
        <div class="score-circle">
          <span class="score-val" id="finalScoreVal">0.00</span>
          <span class="score-sub">পূর্ণমান: ৭০</span>
        </div>
        <h3 style="font-size: 20px; color: var(--text-main); margin-bottom: 6px;">মডেল টেস্টের ফলাফল বিবরণী</h3>
        <p style="font-size: 13.5px; color: var(--text-muted);" id="mockPerformanceSummary">বিশ্লেষণ প্রস্তুত হচ্ছে...</p>

        <div class="result-grid">
          <div class="result-box">
            <div class="num" style="color: #10b981;" id="resCorrect">০</div>
            <div class="lbl">সঠিক উত্তর (+১)</div>
          </div>
          <div class="result-box">
            <div class="num" style="color: #ef4444;" id="resIncorrect">০</div>
            <div class="lbl">ভুল উত্তর (-০.২৫)</div>
          </div>
          <div class="result-box">
            <div class="num" style="color: #94a3b8;" id="resUnattempted">০</div>
            <div class="lbl">অনুত্তরিত (০)</div>
          </div>
          <div class="result-box">
            <div class="num" style="color: #d97706;" id="resPenalty">-০.০০</div>
            <div class="lbl">নেগেটিভ পেনাল্টি</div>
          </div>
        </div>

        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
          <button class="nav-btn primary" onclick="retakeExam()">
            🔄 পুনরায় পরীক্ষা দিন
          </button>
          <button class="nav-btn" onclick="reviewExamAnswers()">
            📝 উত্তরপত্র ও সমাধান রিভিউ করুন
          </button>
        </div>
      </div>
    </div>

    <!-- TAB 3: LIVE TYPING SPEED TEST -->
    <div id="tab-typing" class="tab-pane">
      <div class="typing-container">
        <div class="typing-header">
          <div>
            <h2 style="font-size: 20px; color: var(--text-main);">⌨️ কম্পিউটার টাইপিং স্পিড ও নির্ভুলতা টেস্ট</h2>
            <p style="font-size: 13px; color: var(--text-muted);">
              সরকারি সার্কুলার রিকোয়ারমেন্ট: <strong>ন্যূনতম ২০ wpm বাংলায় ও ২০ wpm ইংরেজিতে</strong>
            </p>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="pill-btn active" id="btnTypeBangla" onclick="setTypingLang('bangla')">🇧🇩 বাংলা টাইপিং</button>
            <button class="pill-btn" id="btnTypeEnglish" onclick="setTypingLang('english')">🇬🇧 English Typing</button>
          </div>
        </div>

        <div class="typing-stats">
          <div class="typing-stat-box">
            <div class="typing-stat-val" id="typeTimer">60s</div>
            <div class="typing-stat-lbl">বাকি সময়</div>
          </div>
          <div class="typing-stat-box">
            <div class="typing-stat-val" id="typeWpm">0</div>
            <div class="typing-stat-lbl">গতি (WPM)</div>
          </div>
          <div class="typing-stat-box">
            <div class="typing-stat-val" id="typeAccuracy">100%</div>
            <div class="typing-stat-lbl">নির্ভুলতা (Accuracy)</div>
          </div>
          <div class="typing-stat-box">
            <div class="typing-stat-val" id="typeCpm">0</div>
            <div class="typing-stat-lbl">অক্ষর/মিনিট (CPM)</div>
          </div>
        </div>

        <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 13px; font-weight: 600; color: var(--text-muted);">
            নিচের প্যারাগ্রাফটি দেখে নিচের বক্সে হুবহু টাইপ করুন:
          </span>
          <span class="typing-pass-badge status-fail" id="typingStatusBadge">প্রস্তুত হোন (টার্গেট: ২০+ WPM)</span>
        </div>

        <div class="typing-prompt-box" id="typingPromptDisplay">
          <!-- Text with highlighted chars -->
        </div>

        <textarea class="typing-input-area" id="typingInputField" placeholder="টাইপিং শুরু করতে এখানে ক্লিক করুন এবং টাইপ করা আরম্ভ করুন..." oninput="handleTypingInput()"></textarea>

        <div class="typing-actions">
          <div style="font-size: 13px; color: var(--text-muted);">
            💡 টিপস: টাইপিং বক্সে প্রথম কি চাপার সাথে সাথেই টাইমার স্বয়ংক্রিয়ভাবে চালু হবে।
          </div>
          <button class="nav-btn primary" onclick="resetTypingTest()">
            🔄 নতুন টেস্ট শুরু করুন (Reset)
          </button>
        </div>
      </div>
    </div>

    <!-- TAB 4: APTITUDE TEST GUIDE -->
    <div id="tab-aptitude" class="tab-pane">
      <div class="aptitude-card">
        <h3>📊 ১. এমএস এক্সেল (MS Excel) প্র্যাকটিক্যাল নির্দেশিকা ও জরুরি ফর্মুলা</h3>
        <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 14px;">
          ডাটা এন্ট্রি অপারেটরদের জন্য স্প্রেডশিটে নির্ভুল হিসাব ও দ্রুত রিপোর্ট তৈরিতে নিচের ফর্মুলাগুলো মুখস্থ ও প্র্যাকটিস বাধ্যতামূলক:
        </p>
        <table class="shortcut-table">
          <thead>
            <tr>
              <th style="width: 20%;">ফর্মুলা সিনট্যাক্স</th>
              <th style="width: 40%;">কাজের বিবরণ ও ব্যবহার</th>
              <th style="width: 40%;">বাস্তব উদাহরণ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>=SUM(A1:A10)</code></td>
              <td>নির্দিষ্ট সেল রেঞ্জের সব সংখ্যা স্বয়ংক্রিয়ভাবে যোগ করা।</td>
              <td>১০ জন কর্মীর মূল বেতনের যোগফল: <code>=SUM(C2:C11)</code></td>
            </tr>
            <tr>
              <td><code>=AVERAGE(B1:B20)</code></td>
              <td>সংখ্যাগুলোর গাণিতিক গড় (Arithmetic Mean) নির্ণয়।</td>
              <td>দৈনিক গড় আবেদন সংখ্যা: <code>=AVERAGE(D2:D31)</code></td>
            </tr>
            <tr>
              <td><code>=COUNTIF(range, criteria)</code></td>
              <td>শর্ত অনুযায়ী নির্দিষ্ট ডাটা সেলে কতবার আছে গণনা করা।</td>
              <td>ঢাকা জেলার আবেদনকারী গণনা: <code>=COUNTIF(E2:E100, "ঢাকা")</code></td>
            </tr>
            <tr>
              <td><code>=IF(logical_test, val_true, val_false)</code></td>
              <td>লজিক্যাল শর্ত সাপেক্ষে ফলাফল নির্ধারণ।</td>
              <td>টাইপিং পাস নির্ণয়: <code>=IF(B2>=20, "Pass", "Fail")</code></td>
            </tr>
            <tr>
              <td><code>=VLOOKUP(val, table, col, [range])</code></td>
              <td>ডাটা টেবিল থেকে নির্দিষ্ট আইডির বিপরীতে তথ্য খুঁজে বের করা।</td>
              <td>NID দিয়ে নাম খোঁজা: <code>=VLOOKUP(A2, Sheet2!A:C, 2, FALSE)</code></td>
            </tr>
            <tr>
              <td><code>=TRIM(text)</code></td>
              <td>শব্দের মাঝে অপ্রয়োজনীয় বাড়তি স্পেস স্বয়ংক্রিয়ভাবে মুছে ফেলা।</td>
              <td>ডাটা ক্লিনিং: <code>=TRIM(A2)</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="aptitude-card">
        <h3>⌨️ ২. ডাটা এন্ট্রি অপারেটরদের অতি প্রয়োজনীয় কীবোর্ড শর্টকাট তালিকা</h3>
        <table class="shortcut-table">
          <thead>
            <tr>
              <th style="width: 30%;">শর্টকাট কী</th>
              <th style="width: 70%;">কার্যকারিতা (Windows / Word / Excel)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>V</kbd></td>
              <td>নির্বাচিত টেক্সট বা সেল কপি (Copy) এবং পেস্ট (Paste) করা।</td>
            </tr>
            <tr>
              <td><kbd>Ctrl</kbd> + <kbd>Z</kbd> / <kbd>Ctrl</kbd> + <kbd>Y</kbd></td>
              <td>পূর্বের কাজ বাতিল (Undo) এবং পুনরায় ফিরিয়ে আনা (Redo)।</td>
            </tr>
            <tr>
              <td><kbd>Ctrl</kbd> + <kbd>F</kbd> / <kbd>Ctrl</kbd> + <kbd>H</kbd></td>
              <td>নির্দিষ্ট শব্দ বা ডাটা খোঁজা (Find) এবং প্রতিস্থাপন (Replace) করা।</td>
            </tr>
            <tr>
              <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>V</kbd></td>
              <td>বিজয় কীবোর্ড মোড পরিবর্তন (ইংরেজি ও বিজয়ের মধ্যে সুইচিং)।</td>
            </tr>
            <tr>
              <td><kbd>F12</kbd></td>
              <td>এমএস ওয়ার্ড ও এক্সেলে সরাসরি Save As ডায়ালগ বক্স ওপেন করা।</td>
            </tr>
            <tr>
              <td><kbd>Alt</kbd> + <kbd>=</kbd></td>
              <td>এমএস এক্সেলে কার্সরের ওপরের বা বামের সেলের অটো-সাম (AutoSum) প্রয়োগ।</td>
            </tr>
            <tr>
              <td><kbd>Ctrl</kbd> + <kbd>;</kbd></td>
              <td>এমএস এক্সেলে বর্তমান সিস্টেম তারিখ (Current Date) ইনসার্ট করা।</td>
            </tr>
            <tr>
              <td><kbd>Shift</kbd> + <kbd>F3</kbd></td>
              <td>এমএস ওয়ার্ডে নির্বাচিত টেক্সটের কেস পরিবর্তন (UPPERCASE, lowercase, Title Case)।</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="aptitude-card">
        <h3>🛡️ ৩. ডাটা ভ্যালিডেশন ও টাইপিং নির্ভুলতা চেকলিস্ট</h3>
        <div style="font-size: 14px; color: var(--text-main); line-height: 1.7;">
          ১. <strong>জাতীয় পরিচয়পত্র (NID) ভেরিফিকেশন:</strong> স্মার্ট কার্ড সবসময় ১০ ডিজিটের এবং পুরাতন এনআইডি ১৩ বা ১৭ ডিজিটের হতে হবে। ১৩ ডিজিটের ক্ষেত্রে জন্মসাল ৪ ডিজিট যোগ করে ১৭ ডিজিট নিশ্চিত করতে হবে।<br>
          ২. <strong>মোবাইল নাম্বার যাচাই:</strong> বাংলাদেশি মোবাইল নাম্বার সবসময় ১১ ডিজিটের এবং <code>013</code>, <code>014</code>, <code>015</code>, <code>016</code>, <code>017</code>, <code>018</code>, <code>019</code> দিয়ে শুরু হতে হবে।<br>
          ৩. <strong>তারিখ ফরম্যাট:</strong> দাপ্তরিক ডাটা এন্ট্রিতে স্ট্যান্ডার্ড ফরম্যাট <code>DD/MM/YYYY</code> বা <code>YYYY-MM-DD</code> কঠোরভাবে অনুসরণ করতে হবে।<br>
          ৪. <strong>যুক্তাক্ষর টাইপিং কৌশল:</strong> বিজয়ে যুক্তাক্ষরের ক্ষেত্রে প্রথম বর্ণ + <kbd>G</kbd> + দ্বিতীয় বর্ণ (যেমন: ক্ষ = k + g + N; জ্ঞ = j + g + I)।
        </div>
      </div>
    </div>

    <!-- TAB 5: WRITTEN PREPARATION -->
    <div id="tab-written" class="tab-pane">
      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 20px; color: var(--text-main);">📝 লিখিত ও প্র্যাকটিক্যাল মডেল প্রশ্ন ও আদর্শ সমাধান</h2>
        <p style="font-size: 13.5px; color: var(--text-muted);">
          দাপ্তরিক পত্র, অফিশিয়াল ইমেইল, পাটিগণিত এবং এক্সেল প্র্যাকটিক্যাল লিখিত পরীক্ষার পূর্ণাঙ্গ গাইড
        </p>
      </div>

      <div class="question-list" id="writtenQuestionsContainer">
        <!-- Injected by JavaScript -->
      </div>
    </div>

    <!-- TAB 6: BOOKMARKS -->
    <div id="tab-bookmark" class="tab-pane">
      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 20px; color: var(--text-main);">📌 সংরক্ষিত প্রশ্নসমূহ (Bookmarks)</h2>
        <p style="font-size: 13.5px; color: var(--text-muted);">
          আপনার রিভিশনের সুবিধার জন্য স্টার মার্ক দেওয়া গুরুত্বপূর্ণ প্রশ্নগুলোর তালিকা
        </p>
      </div>
      <div class="question-list" id="bookmarkedQuestionsContainer">
        <!-- Injected by JavaScript -->
      </div>
    </div>

  </main>

  <!-- FOOTER -->
  <footer>
    <p>
      সমাজসেবা অধিদপ্তর (DSS) ডাটা এন্ট্রি অপারেটর (গ্রেড-১৬) সুপার সাজেশন ও মডেল টেস্ট পোর্টাল<br>
      © ২০২৬ সর্বস্বত্ব সংরক্ষিত | নিয়োগ প্রস্তুতি রিসোর্স
    </p>
  </footer>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // Embedded Data Fallback
    const EMBEDDED_MCQ = ${JSON.stringify(mcqQuestions)};
    const EMBEDDED_WRITTEN = ${JSON.stringify(writtenQuestions)};

    let allQuestions = EMBEDDED_MCQ;
    let writtenList = EMBEDDED_WRITTEN;
    let currentSubjectFilter = 'all';
    let bookmarks = JSON.parse(localStorage.getItem('dss_deo_bookmarks') || '[]');

    // Theme Management
    function initTheme() {
      const saved = localStorage.getItem('dss_deo_theme') || 'light';
      document.documentElement.setAttribute('data-theme', saved);
    }
    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('dss_deo_theme', target);
    }
    initTheme();

    // Tab Management
    function switchTab(tabId) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

      const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick').includes(tabId));
      if (activeBtn) activeBtn.classList.add('active');

      const targetPane = document.getElementById(tabId);
      if (targetPane) targetPane.classList.add('active');

      if (tabId === 'tab-bookmark') {
        renderBookmarks();
      }
    }

    // Bookmark Toggle
    function toggleBookmark(id) {
      const idx = bookmarks.indexOf(id);
      if (idx > -1) {
        bookmarks.splice(idx, 1);
      } else {
        bookmarks.push(id);
      }
      localStorage.setItem('dss_deo_bookmarks', JSON.stringify(bookmarks));
      updateBookmarkBadges();
      renderStudyQuestions();
      renderBookmarks();
    }

    function updateBookmarkBadges() {
      const count = bookmarks.length;
      const b1 = document.getElementById('bookmarkTabBadge');
      if (b1) b1.innerText = count;
    }

    // Render Study Questions
    function setSubjectFilter(subj, elem) {
      currentSubjectFilter = subj;
      document.querySelectorAll('#subjectFilterPills .pill-btn').forEach(b => b.classList.remove('active'));
      elem.classList.add('active');
      renderStudyQuestions();
    }

    function filterQuestions() {
      renderStudyQuestions();
    }

    function renderStudyQuestions() {
      const container = document.getElementById('questionsContainer');
      const search = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();

      let list = allQuestions.filter(q => {
        if (currentSubjectFilter !== 'all' && q.subject !== currentSubjectFilter) return false;
        if (search) {
          const matchQ = q.question.toLowerCase().includes(search);
          const matchTopic = (q.topic || '').toLowerCase().includes(search);
          const matchSubj = (q.subject || '').toLowerCase().includes(search);
          const matchOpts = (q.options || []).some(o => o.toLowerCase().includes(search));
          return matchQ || matchTopic || matchSubj || matchOpts;
        }
        return true;
      });

      if (list.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);background:var(--bg-card);border-radius:10px;">🔍 কোনো প্রশ্ন খুঁজে পাওয়া যায়নি। অনুসন্ধান পরিবর্তন করুন।</div>';
        return;
      }

      container.innerHTML = list.map((q, idx) => {
        const isBookmarked = bookmarks.includes(q.id);
        return \`
          <div class="q-card" id="qcard_\${q.id}">
            <div class="q-header">
              <div class="q-badge-wrap">
                <span class="q-badge badge-sub">\${q.subject}</span>
                <span class="q-badge badge-top">\${q.topic}</span>
              </div>
              <button class="btn-bookmark \${isBookmarked ? 'active' : ''}" onclick="toggleBookmark(\${q.id})" title="বুকমার্ক করুন">
                \${isBookmarked ? '★' : '☆'}
              </button>
            </div>
            <div class="q-title">\${idx + 1}. \${q.question}</div>
            <div class="options-grid">
              \${q.options.map((opt, oIdx) => \`
                <div class="option-item" onclick="checkOption(\${q.id}, \${oIdx}, \${q.answer}, this)">
                  <span style="font-weight:700;font-family:'Outfit',sans-serif;">\${String.fromCharCode(65 + oIdx)}</span>
                  <span>\${opt.replace(/^[A-D]\\)\\s*/, '')}</span>
                </div>
              \`).join('')}
            </div>
            <div class="q-footer">
              <span style="font-size:12px;color:var(--text-muted);">প্রশ্ন আইডি: #\${q.id}</span>
              <button class="btn-explain" onclick="toggleExplanation('exp_\${q.id}')">
                💡 সঠিক উত্তর ও ব্যাখ্যা দেখুন
              </button>
            </div>
            <div class="explanation-box" id="exp_\${q.id}">
              <strong>সঠিক উত্তর: \${String.fromCharCode(65 + q.answer)} (\${q.options[q.answer]})</strong><br>
              \${q.explanation || 'সঠিক উত্তর যাচাই করুন।'}
            </div>
          </div>
        \`;
      }).join('');
    }

    function checkOption(qId, selectedIdx, correctIdx, elem) {
      const card = elem.closest('.q-card');
      const allOpts = card.querySelectorAll('.option-item');
      allOpts.forEach(o => o.classList.remove('correct', 'incorrect'));

      if (selectedIdx === correctIdx) {
        elem.classList.add('correct');
      } else {
        elem.classList.add('incorrect');
        if (allOpts[correctIdx]) allOpts[correctIdx].classList.add('correct');
      }

      const exp = card.querySelector('.explanation-box');
      if (exp) exp.style.display = 'block';
    }

    function toggleExplanation(id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.style.display = el.style.display === 'block' ? 'none' : 'block';
    }

    // Render Bookmarks
    function renderBookmarks() {
      const container = document.getElementById('bookmarkedQuestionsContainer');
      const list = allQuestions.filter(q => bookmarks.includes(q.id));

      if (list.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);background:var(--bg-card);border-radius:10px;">📌 আপনার এখনো কোনো প্রশ্ন বুকমার্ক করা নেই। পড়ার সময় স্টারে ক্লিক করে বুকমার্ক করুন।</div>';
        return;
      }

      container.innerHTML = list.map((q, idx) => \`
        <div class="q-card">
          <div class="q-header">
            <div class="q-badge-wrap">
              <span class="q-badge badge-sub">\${q.subject}</span>
              <span class="q-badge badge-top">\${q.topic}</span>
            </div>
            <button class="btn-bookmark active" onclick="toggleBookmark(\${q.id})">★</button>
          </div>
          <div class="q-title">\${idx + 1}. \${q.question}</div>
          <div class="options-grid">
            \${q.options.map((opt, oIdx) => \`
              <div class="option-item \${oIdx === q.answer ? 'correct' : ''}">
                <span style="font-weight:700;">\${String.fromCharCode(65 + oIdx)}</span>
                <span>\${opt.replace(/^[A-D]\\)\\s*/, '')}</span>
              </div>
            \`).join('')}
          </div>
          <div class="explanation-box" style="display:block;">
            <strong>সঠিক উত্তর: \${String.fromCharCode(65 + q.answer)} (\${q.options[q.answer]})</strong><br>
            \${q.explanation || ''}
          </div>
        </div>
      \`).join('');
    }

    // Render Written Questions
    function renderWrittenQuestions() {
      const container = document.getElementById('writtenQuestionsContainer');
      container.innerHTML = writtenList.map((w, idx) => \`
        <div class="written-card">
          <h3>
            <span>\${idx + 1}. \${w.question}</span>
            <span class="q-badge badge-top">\${w.subject}</span>
          </h3>
          <div style="font-size:12.5px;color:var(--text-muted);margin-bottom:10px;">
            টপিক: <strong>\${w.topic}</strong> | মান: <strong>\${w.marks} নম্বর</strong>
          </div>
          <div class="written-ans-box">\${w.solution}</div>
        </div>
      \`).join('');
    }

    // ==========================================
    // 70-MARK MOCK EXAM ENGINE
    // ==========================================
    let mockExamQuestions = [];
    let userMockAnswers = {};
    let mockTimerSeconds = 60 * 60;
    let mockTimerInterval = null;

    function startMockExam() {
      // Pick 70 questions (or all if < 70)
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      mockExamQuestions = shuffled.slice(0, 70);
      userMockAnswers = {};
      mockTimerSeconds = 60 * 60;

      document.getElementById('mockIntroCard').style.display = 'none';
      document.getElementById('mockResultCard').classList.remove('active');
      document.getElementById('examLiveWrapper').classList.add('active');

      renderMockQuestions();
      startMockTimer();
    }

    function renderMockQuestions() {
      const container = document.getElementById('mockExamQuestionsContainer');
      container.innerHTML = mockExamQuestions.map((q, idx) => \`
        <div class="q-card" id="mock_q_\${q.id}">
          <div class="q-header">
            <span class="q-badge badge-sub">\${q.subject}</span>
            <span style="font-size:12px;color:var(--text-muted);">প্রশ্ন \${idx + 1} / \${mockExamQuestions.length}</span>
          </div>
          <div class="q-title">\${idx + 1}. \${q.question}</div>
          <div class="options-grid">
            \${q.options.map((opt, oIdx) => \`
              <div class="option-item" onclick="selectMockAnswer(\${q.id}, \${oIdx}, this)">
                <span style="font-weight:700;">\${String.fromCharCode(65 + oIdx)}</span>
                <span>\${opt.replace(/^[A-D]\\)\\s*/, '')}</span>
              </div>
            \`).join('')}
          </div>
        </div>
      \`).join('');
      updateExamAnsweredCount();
    }

    function selectMockAnswer(qId, oIdx, elem) {
      userMockAnswers[qId] = oIdx;
      const card = elem.closest('.q-card');
      card.querySelectorAll('.option-item').forEach(o => {
        o.style.background = 'var(--bg-body)';
        o.style.borderColor = 'var(--border-color)';
        o.style.color = 'var(--text-main)';
      });
      elem.style.background = 'var(--primary-light)';
      elem.style.borderColor = 'var(--primary)';
      elem.style.color = 'var(--primary)';
      updateExamAnsweredCount();
    }

    function updateExamAnsweredCount() {
      const answered = Object.keys(userMockAnswers).length;
      document.getElementById('examAnsweredCount').innerText = answered;
    }

    function startMockTimer() {
      clearInterval(mockTimerInterval);
      mockTimerInterval = setInterval(() => {
        mockTimerSeconds--;
        const mins = Math.floor(mockTimerSeconds / 60);
        const secs = mockTimerSeconds % 60;
        document.getElementById('timerText').innerText = 
          \`\${mins < 10 ? '0' : ''}\${mins}:\${secs < 10 ? '0' : ''}\${secs}\`;

        if (mockTimerSeconds <= 0) {
          clearInterval(mockTimerInterval);
          alert('সময় সমাপ্ত হয়েছে! খাতা স্বয়ংক্রিয়ভাবে জমা নেওয়া হচ্ছে।');
          evaluateMockExam();
        }
      }, 1000);
    }

    function confirmSubmitExam() {
      const answered = Object.keys(userMockAnswers).length;
      const total = mockExamQuestions.length;
      if (confirm(\`আপনি কি পরীক্ষা জমা দিতে চান?\\nমোট উত্তর দিয়েছেন: \${answered} / \${total} টি\`)) {
        clearInterval(mockTimerInterval);
        evaluateMockExam();
      }
    }

    function evaluateMockExam() {
      let correct = 0;
      let incorrect = 0;
      let unattempted = 0;

      mockExamQuestions.forEach(q => {
        const userAns = userMockAnswers[q.id];
        if (userAns === undefined) {
          unattempted++;
        } else if (userAns === q.answer) {
          correct++;
        } else {
          incorrect++;
        }
      });

      const penalty = incorrect * 0.25;
      const finalScore = Math.max(0, correct - penalty);

      document.getElementById('examLiveWrapper').classList.remove('active');
      document.getElementById('mockResultCard').classList.add('active');

      document.getElementById('finalScoreVal').innerText = finalScore.toFixed(2);
      document.getElementById('resCorrect').innerText = correct;
      document.getElementById('resIncorrect').innerText = incorrect;
      document.getElementById('resUnattempted').innerText = unattempted;
      document.getElementById('resPenalty').innerText = \`-\${penalty.toFixed(2)}\`;

      const pct = (finalScore / mockExamQuestions.length) * 100;
      let summary = '';
      if (pct >= 70) {
        summary = '🎉 চমৎকার প্রস্তুতি! আপনি প্রিলিমিনারিতে নিরাপদ জোনে রয়েছেন।';
      } else if (pct >= 50) {
        summary = '👍 ভালো চেষ্টা! তবে নেগেটিভ মার্কিং কমাতে আরেকটু যত্নবান হন।';
      } else {
        summary = '⚠️ আরো নিবিড় অনুশীলন প্রয়োজন। বিষয়ভিত্তিক প্রশ্নগুলো পুনরায় রিভিশন দিন।';
      }
      document.getElementById('mockPerformanceSummary').innerText = summary;
    }

    function retakeExam() {
      startMockExam();
    }

    function reviewExamAnswers() {
      document.getElementById('mockResultCard').classList.remove('active');
      document.getElementById('examLiveWrapper').classList.add('active');

      document.getElementById('timerText').innerText = '📝 রিভিউ মোড';
      document.querySelector('.btn-submit-exam').style.display = 'none';

      const container = document.getElementById('mockExamQuestionsContainer');
      container.innerHTML = mockExamQuestions.map((q, idx) => {
        const uAns = userMockAnswers[q.id];
        const isCorrect = uAns === q.answer;
        const isUnanswered = uAns === undefined;

        return \`
          <div class="q-card" style="border-left: 4px solid \${isCorrect ? '#10b981' : isUnanswered ? '#94a3b8' : '#ef4444'};">
            <div class="q-header">
              <span class="q-badge badge-sub">\${q.subject}</span>
              <span style="font-weight:700;color:\${isCorrect ? '#10b981' : isUnanswered ? '#94a3b8' : '#ef4444'};">
                \${isCorrect ? '✔ সঠিক (+১)' : isUnanswered ? '⚪ অনুত্তরিত (০)' : '✖ ভুল (-০.২৫)'}
              </span>
            </div>
            <div class="q-title">\${idx + 1}. \${q.question}</div>
            <div class="options-grid">
              \${q.options.map((opt, oIdx) => {
                let cls = '';
                if (oIdx === q.answer) cls = 'correct';
                else if (oIdx === uAns) cls = 'incorrect';
                return \`
                  <div class="option-item \${cls}">
                    <span style="font-weight:700;">\${String.fromCharCode(65 + oIdx)}</span>
                    <span>\${opt.replace(/^[A-D]\\)\\s*/, '')}</span>
                  </div>
                \`;
              }).join('')}
            </div>
            <div class="explanation-box" style="display:block;">
              <strong>সঠিক উত্তর: \${String.fromCharCode(65 + q.answer)}</strong><br>
              \${q.explanation || 'সঠিক উত্তর যাচাই করুন।'}
            </div>
          </div>
        \`;
      }).join('');
    }

    // ==========================================
    // INTERACTIVE TYPING SPEED TEST ENGINE
    // ==========================================
    const BANGLA_PASSAGE = "সমাজসেবা অধিদপ্তর গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের সমাজকল্যাণ মন্ত্রণালয়ের আওতাধীন একটি প্রধান সেবাধর্মী প্রতিষ্ঠান। দেশের সুবিধাবঞ্চিত, অনগ্রসর, প্রতিবন্ধী ও বয়োবৃদ্ধ নাগরিকদের কল্যাণ সাধন ও সামাজিক সুরক্ষা বেষ্টনী নিশ্চিত করাই এ অধিদপ্তরের মূল লক্ষ্য। ডাটা এন্ট্রি অপারেটরের দায়িত্ব হলো সরকারি ডাটাবেজে সঠিক তথ্য নির্ভুলভাবে সংরক্ষণ ও হালনাগাদ করা।";
    const ENGLISH_PASSAGE = "The Department of Social Services under the Ministry of Social Welfare works relentlessly to empower vulnerable and underprivileged citizens of Bangladesh. A Data Entry Operator plays a critical role in managing official records, maintaining database integrity, and processing citizen services accurately and efficiently.";

    let currentTypingLang = 'bangla';
    let typingTargetText = BANGLA_PASSAGE;
    let typingTimer = 60;
    let typingInterval = null;
    let typingStarted = false;

    function setTypingLang(lang) {
      currentTypingLang = lang;
      document.getElementById('btnTypeBangla').classList.toggle('active', lang === 'bangla');
      document.getElementById('btnTypeEnglish').classList.toggle('active', lang === 'english');
      typingTargetText = lang === 'bangla' ? BANGLA_PASSAGE : ENGLISH_PASSAGE;
      resetTypingTest();
    }

    function resetTypingTest() {
      clearInterval(typingInterval);
      typingStarted = false;
      typingTimer = 60;
      document.getElementById('typeTimer').innerText = '60s';
      document.getElementById('typeWpm').innerText = '0';
      document.getElementById('typeAccuracy').innerText = '100%';
      document.getElementById('typeCpm').innerText = '0';
      document.getElementById('typingInputField').value = '';
      document.getElementById('typingInputField').disabled = false;
      document.getElementById('typingStatusBadge').className = 'typing-pass-badge status-fail';
      document.getElementById('typingStatusBadge').innerText = 'প্রস্তুত হোন (টার্গেট: ২০+ WPM)';
      renderTypingPrompt('');
    }

    function renderTypingPrompt(typed) {
      const container = document.getElementById('typingPromptDisplay');
      let html = '';
      for (let i = 0; i < typingTargetText.length; i++) {
        const targetChar = typingTargetText[i];
        const typedChar = typed[i];

        if (typedChar === undefined) {
          if (i === typed.length) {
            html += \`<span class="char-current">\${targetChar}</span>\`;
          } else {
            html += targetChar;
          }
        } else if (typedChar === targetChar) {
          html += \`<span class="char-correct">\${targetChar}</span>\`;
        } else {
          html += \`<span class="char-wrong">\${targetChar}</span>\`;
        }
      }
      container.innerHTML = html;
    }

    function handleTypingInput() {
      const input = document.getElementById('typingInputField').value;

      if (!typingStarted && input.length > 0) {
        typingStarted = true;
        startTypingTimer();
      }

      renderTypingPrompt(input);
      calculateTypingStats(input);
    }

    function startTypingTimer() {
      typingInterval = setInterval(() => {
        typingTimer--;
        document.getElementById('typeTimer').innerText = \`\${typingTimer}s\`;

        const input = document.getElementById('typingInputField').value;
        calculateTypingStats(input);

        if (typingTimer <= 0) {
          clearInterval(typingInterval);
          document.getElementById('typingInputField').disabled = true;
          finishTypingTest();
        }
      }, 1000);
    }

    function calculateTypingStats(typed) {
      let correctChars = 0;
      for (let i = 0; i < typed.length; i++) {
        if (typed[i] === typingTargetText[i]) {
          correctChars++;
        }
      }

      const elapsedMinutes = (60 - typingTimer) / 60 || 0.01;
      const words = correctChars / 5;
      const wpm = Math.round(words / elapsedMinutes);
      const cpm = Math.round(correctChars / elapsedMinutes);
      const accuracy = typed.length > 0 ? Math.round((correctChars / typed.length) * 100) : 100;

      document.getElementById('typeWpm').innerText = wpm;
      document.getElementById('typeCpm').innerText = cpm;
      document.getElementById('typeAccuracy').innerText = \`\${accuracy}%\`;

      const badge = document.getElementById('typingStatusBadge');
      if (wpm >= 20) {
        badge.className = 'typing-pass-badge status-pass';
        badge.innerText = '✅ পাস কোটা অর্জিত (≥ ২০ WPM)';
      } else {
        badge.className = 'typing-pass-badge status-fail';
        badge.innerText = \`⚠️ আরো গতি বাড়ান (বর্তমান: \${wpm} WPM)\`;
      }
    }

    function finishTypingTest() {
      const wpm = parseInt(document.getElementById('typeWpm').innerText, 10);
      const acc = document.getElementById('typeAccuracy').innerText;
      if (wpm >= 20) {
        alert(\`🎉 অভিনন্দন! আপনার টাইপিং গতি \${wpm} WPM এবং নির্ভুলতা \${acc}। আপনি সরকারি মানদণ্ড (২০ WPM) সফলভাবে অর্জন করেছেন!\`);
      } else {
        alert(\`⚠️ টেস্ট সমাপ্ত। আপনার গতি \${wpm} WPM। পাস করতে সর্বনিম্ন ২০ WPM প্রয়োজন। নিয়মিত প্র্যাকটিস করুন!\`);
      }
    }

    // Initialize Page
    window.addEventListener('DOMContentLoaded', () => {
      renderStudyQuestions();
      renderWrittenQuestions();
      updateBookmarkBadges();
      resetTypingTest();
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(baseDir, 'dss_data_entry_operator_super_suggestion.html'), portalHtml, 'utf8');
console.log('Generated dss_data_entry_operator_super_suggestion.html in workspace root.');
