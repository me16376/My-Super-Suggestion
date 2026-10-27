# 🇧🇩 বিপিএসসি ও সরকারি চাকরি নিয়োগ প্রস্তুতি মাস্টার প্ল্যাটফর্ম
## প্রজেক্ট আর্কিটেকচার, ডিরেক্টরি স্ট্রাকচার ও কাজের প্রণালী গাইড (README.md)

> **উদ্দেশ্য:** বিপিএসসি (BPSC) ও বিভিন্ন মন্ত্রণালয়/অধিদপ্তরের সরকারি চাকরি নিয়োগ পরীক্ষার জন্য আলাদা আলাদা স্বয়ংক্রিয় "সুপার সাজেশন", অফলাইন ইন্টারঅ্যাক্টিভ ওয়েব অ্যাপ্লিকেশন, প্রশ্নব্যাংক ও লাইভ মডেল টেস্ট ইঞ্জিন তৈরি এবং কেন্দ্রীয়ভাবে পরিচালনা করার মাস্টার রিপোজিটরি।

---

## 🏗️ ১. কেন্দ্রীয় মডিউলার আর্কিটেকচার (Modular Architecture)

যেহেতু ব্যবহারকারী একাধিক বিভিন্ন সরকারি পদে আবেদন করবেন, তাই পুরো প্রজেক্টটি **মডিউলার (Modular)** ডিজাইনে সাজানো হয়েছে:
1. **রুট ড্যাশবোর্ড (`index.html`):** আবেদনকৃত সকল চাকরির কেন্দ্রীয় মাস্টার ড্যাশবোর্ড। এখান থেকে যেকোনো পদের পোর্টালে সরাসরি যাওয়া যায়।
2. **শেয়ার্ড ড্রাইভার ফোল্ডার (`drivers/`):** সকল পদের পরীক্ষার জন্য সাধারণ ফন্ট, আইকন ও KaTeX ম্যাথ স্ক্রিপ্টের কেন্দ্রীয় অফলাইন শেয়ার্ড ফোল্ডার।
3. **পদভিত্তিক পৃথক সাজেশন ফোল্ডার (Job Modules):** প্রতিটি পদের জন্য আলাদা সম্পূর্ণ সেলফ-কনটেইন্ড ফোল্ডার (যেমন: `Sub-Assistant Maintenance Engineer Super Suggestion/`)।

---

## 📂 ২. ডিরেক্টরি কাঠামো (Directory Tree)

```text
My Super Suggestion/                                    <-- রুট ডিরেক্টরি (Master Root)
│
├── index.html                                          <-- মাস্টার হাব / কেন্দ্রীয় ড্যাশবোর্ড
├── README.md                                           <-- আর্কিটেকচার ও অপারেশনাল গাইড
├── PROGRESS.md                                         <-- কেন্দ্রীয় একক মাস্টার প্রগ্রেস ট্র্যাকার
│
├── drivers/                                            <-- সর্বজনীন শেয়ার্ড অফলাইন ড্রাইভার ও এসেটস
│   ├── fonts/                                          <-- বাংলা ও ইংরেজি অফলাইন ফন্ট
│   ├── fontawesome/                                    <-- আইকন সেট
│   ├── katex/                                          <-- KaTeX ম্যাথ ফন্ট ও রিসোর্স
│   ├── katex.min.css                                   <-- গাণিতিক সমীকরণ রেন্ডারিং CSS
│   └── katex.min.js                                    <-- গাণিতিক সমীকরণ রেন্ডারিং JS
│
├── [মূল সুপার সাজেশন ও এক্সাম গাইড HTML ফাইলসমূহ (রুট লেভেলে)]:
│   ├── sub_assistant_maintenance_engineer_super_suggestion.html
│   ├── sub_assistant_maintenance_engineer_exam_guide.html
│   ├── junior_instructor_computer_super_suggestion.html
│   ├── junior_instructor_computer_exam_guide.html
│   ├── petrobangla_sub_assistant_engineer_super_suggestion.html
│   ├── petrobangla_sub_assistant_engineer_exam_guide.html
│   ├── dss_karigori_proshikhok_computer_super_suggestion.html
│   └── dss_karigori_proshikhok_computer_exam_guide.html
│
├── [অফিশিয়াল সার্কুলার PDF ফাইলসমূহ (রুট লেভেলে)]:
│   ├── BPSC ad_202506.pdf                              <-- বিপিএসসি জুনিয়র ইন্সট্রাক্টর
│   ├── advertisement-1780374169755.pdf                 <-- সমাজসেবা অধিদপ্তর (DSS)
│   ├── petrobangla-1790774270-5822.pdf                 <-- পেট্রোবাংলা
│   └── Sub_Registrar_Circular.pdf                      <-- সাব-রেজিস্টার
│
├── [পদভিত্তিক ডেটা ফোল্ডারসমূহ (শুধুমাত্র JSON ডেটাসেট ও অফিশিয়াল সিলেবাস PDF)]:
│   ├── Sub-Assistant Maintenance Engineer Super Suggestion/
│   │   ├── preliminary_mcq.json                        <-- ৬,৫৯০টি প্রিলিমিনারি MCQ
│   │   ├── written_questions.json                      <-- ৩৭৫টি লিখিত প্রশ্ন ও সমাধান
│   │   └── Sub_Assistant_Maintenance_Engineer_Exam_Syllabus_Guide.pdf
│   │
│   ├── Junior Instructor Tech Computer Super Suggestion/
│   │   ├── preliminary_mcq.json                        <-- ১২,৬০০টি প্রিলিমিনারি MCQ
│   │   ├── written_questions.json                      <-- ৩৭২টি লিখিত প্রশ্ন ও সমাধান
│   │   └── Junior_Instructor_Computer_Exam_Syllabus_Guide.pdf
│   │
│   ├── Petrobangla Sub-Assistant Engineer Computer IT/
│   │   ├── preliminary_mcq.json                        <-- ৭,৫০০টি প্রিলিমিনারি MCQ
│   │   ├── written_questions.json                      <-- ১৫০টি লিখিত সমস্যা ও সমাধান
│   │   └── Petrobangla_Sub_Assistant_Engineer_Computer_IT_Exam_Guide.pdf
│   │
│   ├── DSS Karigori Proshikhok Computer Super Suggestion/
│   │   ├── preliminary_mcq.json                        <-- ১৩৩টি প্রিলিমিনারি MCQ
│   │   ├── written_questions.json                      <-- ৩২টি লিখিত প্রশ্ন ও হ্যান্ডবুক
│   │   └── DSS_Karigori_Proshikhok_Computer_Exam_Guide.pdf
│   │
│   └── DSS Data Entry Operator Super Suggestion/
│       └── README.md
│
└── _dev_archive/                                       <-- ব্যাকআপ স্ক্রিপ্টসমূহ (Development Tools)
```

---

## ⚙️ ৩. প্রতিটি কম্পোনেন্ট কীভাবে কাজ করে (How Components Work)

### ১. রুট মাস্টার পোর্টাল (`index.html`)
* ব্যবহারকারীর আবেদনকৃত সকল চাকরির তালিকা প্রদর্শন করে।
* দ্রুত খুঁজে পাওয়ার জন্য এতে রয়েছে **রিয়েলটাইম সার্চ বার** ও **স্ট্যাটাস ফিল্টার** (সকল সার্কুলার, প্রস্তুত মডিউল, পাইপলাইন)।
* প্রতি কার্ডে পদের গ্রেড, মন্ত্রণালয়, সিলেবাসের সারাংশ ও সরাসরি পোর্টালে ঢোকার বাটন রয়েছে।

### ২. শেয়ার্ড ড্রাইভার ফোল্ডার (`drivers/`)
* এটি রুটে রাখা হয়েছে যাতে যেকোনো বর্তমান ও ভবিষ্যৎ চাকরির মডিউল এখান থেকে সহজেই কাটেক্স (KaTeX), ফন্ট ও ফন্টঅসাম আইকন লোড করতে পারে। বারবার প্রতিটি ফোল্ডারে মেগাবাইট ডুপ্লিকেট করার প্রয়োজন নেই।

### ৩. সুপার সাজেশন অ্যাপ্লিকেশন (`sub_assistant_maintenance_engineer_super_suggestion.html`)
* **জিরো-সিওআরএস (Zero-CORS Offline Technology):** কোনো লোকাল সার্ভার (`http://localhost`) চালু না করেই ব্রাউজারে ডাবল ক্লিক করলেই এটি সরাসরি ওপেন হয়। কারণ `data/prelim_data.js` এবং `data/written_data.js`-এর মাধ্যমে ডেটা জাভাস্ক্রিপ্ট গ্লোবাল ভ্যারিয়েবলে যুক্ত থাকে।
* **বিপিএসসি রিয়েল মডেল টেস্ট ইঞ্জিন:** ৬০ মিনিটের লাইভ কাউন্টডাউন টাইমার, এলোমেলোভাবে ৪০ টেকনিক্যাল + ২০ বাংলা + ২০ ইংরেজি + ২০ জিকে প্রশ্ন নির্বাচন, -০.৫০ নেগেটিভ মার্কিং সহ রেজাল্ট শিট ও প্রিন্ট সাপোর্ট।
* **KaTeX গাণিতিক সমীকরণ রেন্ডারিং:** সাবনেটিং, ৮০৮৬ অ্যাড্রেসিং, ফ্লিপ-ফ্লপ ও ফিজিক্স-ম্যাথ নিখুঁতভাবে রেন্ডার হয়।
* **লোকাল স্টোরেজ বুকমার্ক (⭐):** ব্যবহারকারী পড়ার সময় কঠিন প্রশ্ন বুকমার্ক করে রাখতে পারেন, যা ব্রাউজার বন্ধ করলেও সেভ থাকে।

---

## 🚀 ৪. নতুন কোনো চাকরির জন্য নতুন মডিউল তৈরির নিয়ম (How to Add a New Exam)

ভবিষ্যতে যখন ব্যবহারকারী নতুন কোনো চাকরির জন্য কাজ করতে বলবেন (যেমন: **সাব-রেজিস্টার**):

1. **সার্কুলার ফাইল:** মূল সার্কুলার PDF টি রুটে রাখা হবে (যেমন ইতিমধ্যে `Sub_Registrar_Circular.pdf` রয়েছে)।
2. **নতুন ফোল্ডার সৃষ্টি:** পদের নাম দিয়ে নতুন ফোল্ডার তৈরি করতে হবে (যেমন: `Sub-Registrar Super Suggestion/`)।
3. **কাঠামো কপি:** `Sub-Assistant Maintenance Engineer Super Suggestion/` এর আদলে `data/`, `scripts/` এবং HTML ফাইল তৈরি করা হবে।
4. **সিলেবাস অনুযায়ী ডেটা জেনারেশন:** 
   * সাব-রেজিস্টার পদের জন্য প্রযোজ্য বিষয়সমূহ (বাংলা, ইংরেজি, সাধারণ জ্ঞান, সাধারণ গণিত এবং রেজিস্ট্রি আইন) দিয়ে প্রশ্ন জেনারেট করে `scripts/sync_data.js` দিয়ে সিঙ্ক করা হবে।
5. **মাস্টার পোর্টালে লিঙ্ক করা:** রুট `index.html`-এর কার্ড লিস্টে স্ট্যাটাস "✅ প্রস্তুত" করে পোর্টালে প্রবেশের বাটন যুক্ত করা হবে।

---

## 💡 ৫. জরুরি স্ক্রিপ্ট কমান্ডসমূহ (Cheat Sheet)

* **সকল প্রশ্ন ডেটাসেট সিঙ্ক ও অফলাইন বান্ডল জেনারেট:**
  ```powershell
  cd "Sub-Assistant Maintenance Engineer Super Suggestion"
  node scripts/sync_data.js
  ```
* **প্রগ্রেস ফাইল আপডেট করা:**
  ```powershell
  cd "Sub-Assistant Maintenance Engineer Super Suggestion"
  node scripts/update_progress.js
  ```

---

*এই ফাইলটি দেখে যেকোনো সময় যে কোনো এআই বা ডেভেলপার পুরো রিপোজিটরির গঠন ও কাজের প্রণালী এক নজরে বুঝে নিতে পারবে।*
