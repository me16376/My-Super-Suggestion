const fs = require('fs');
const path = require('path');

const sameSrcDir = 'c:/Users/bdCalling/Downloads/Mosabber/Circular analysis/Sub-Assistant Maintenance Engineer Super Suggestion/data/written';
const destDir = path.resolve(__dirname, '../data/written');

fs.mkdirSync(destDir, { recursive: true });

function readJsonSafe(file) {
  const p = path.join(sameSrcDir, file);
  if (!fs.existsSync(p)) return [];
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    return [];
  }
}

// 1. Process Bangla Written
function buildBanglaWritten() {
  console.log('=== BUILDING BANGLA WRITTEN DATASET ===');
  const baseData = readJsonSafe('bangla_written.json');
  let banglaList = [];

  // Adapt and enrich for Technical Education & Junior Instructor
  baseData.forEach((q, idx) => {
    let newQ = { ...q };
    newQ.id = 2000 + idx + 1;
    newQ.subject = "বাংলা লিখিত";
    
    // Modify any specific departmental essay or memo if needed
    if (newQ.question && newQ.question.includes('বহিরাগমন ও পাসপোর্ট')) {
      newQ.question = newQ.question.replace(/বহিরাগমন ও পাসপোর্ট অধিদপ্তর/g, 'কারিগরি শিক্ষা অধিদপ্তর ও টেকনিক্যাল স্কুল-কলেজ (TSC)');
      newQ.answer = newQ.answer.replace(/পাসপোর্ট অধিদপ্তর/g, 'কারিগরি শিক্ষা অধিদপ্তর').replace(/পাসপোর্ট সেবা/g, 'কারিগরি ও ভোকেশনাল শিক্ষা');
    }
    banglaList.push(newQ);
  });

  const outPath = path.join(destDir, 'bangla_written.json');
  fs.writeFileSync(outPath, JSON.stringify(banglaList, null, 2), 'utf8');
  console.log(`Bangla written saved: ${banglaList.length} questions`);
}

// 2. Process English Written
function buildEnglishWritten() {
  console.log('=== BUILDING ENGLISH WRITTEN DATASET ===');
  const baseData = readJsonSafe('english_written.json');
  let englishList = [];

  baseData.forEach((q, idx) => {
    let newQ = { ...q };
    newQ.id = 3000 + idx + 1;
    newQ.subject = "ইংরেজি লিখিত";

    if (newQ.question && newQ.question.includes('Passport Office')) {
      newQ.question = newQ.question.replace(/Passport Office/g, 'Technical School and College (TSC) / Polytechnic Institute');
      newQ.answer = newQ.answer.replace(/Passport Office/g, 'Technical School and College (TSC) / Polytechnic Institute');
    }
    englishList.push(newQ);
  });

  const outPath = path.join(destDir, 'english_written.json');
  fs.writeFileSync(outPath, JSON.stringify(englishList, null, 2), 'utf8');
  console.log(`English written saved: ${englishList.length} questions`);
}

// 3. Process GK Written
function buildGkWritten() {
  console.log('=== BUILDING GENERAL KNOWLEDGE WRITTEN DATASET ===');
  const baseData = readJsonSafe('gk_written.json');
  let gkList = [];

  baseData.forEach((q, idx) => {
    let newQ = { ...q };
    newQ.id = 4000 + idx + 1;
    newQ.subject = "সাধারণ জ্ঞান লিখিত";

    if (newQ.question && newQ.question.includes('পাসপোর্ট অধিদপ্তরের ৫০ বছরের')) {
      newQ.question = "বাংলাদেশে কারিগরি ও বৃত্তিমূলক শিক্ষা ও প্রশিক্ষণ (TVET) এর বর্তমান অবস্থা, এনএসডিএ (NSDA) এর ভূমিকা এবং কারিগরি শিক্ষার অগ্রগতি সংক্ষেপে লিখুন।";
      newQ.answer = "• TVET এর বর্তমান অবস্থা ও লক্ষ্য:\nবাংলাদেশে ২০৩০ সালের মধ্যে কারিগরি শিক্ষায় এনরোলমেন্ট ৩০% এবং ২০৪১ সালের মধ্যে ৫০% এ উন্নীত করার জাতীয় মহাপরিকল্পনা গৃহীত হয়েছে। দেশের প্রতিটি উপজেলায় একটি করে টেকনিক্যাল স্কুল ও কলেজ (TSC) স্থাপন প্রকল্প চলমান রয়েছে।\n\n• জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA):\nপ্রধানমন্ত্রীর কার্যালয়ের অধীন NSDA দেশের সমগ্র দক্ষতা উন্নয়ন প্রশিক্ষণকে স্ট্যান্ডার্ডাইজড ও আন্তর্জাতিক মানে উন্নীত করতে বাংলাদেশ ন্যাশনাল কোয়ালিফিকেশন ফ্রেমওয়ার্ক (BNQF) এবং NTVQF বাস্তবায়ন করছে।\n\n• ৪র্থ শিল্পবিপ্লবে (4IR) ভূমিকা:\nরোবোটিক্স, আইওটি, ক্লাউড কম্পিউটিং এবং এআই দক্ষতায় যুবসমাজকে দক্ষ করে গড়ে তুলতে পলিটেকনিক ও টিএসসি কারিকুলাম আধুনিকায়ন করা হচ্ছে।";
    }
    gkList.push(newQ);
  });

  const outPath = path.join(destDir, 'gk_written.json');
  fs.writeFileSync(outPath, JSON.stringify(gkList, null, 2), 'utf8');
  console.log(`GK written saved: ${gkList.length} questions`);
}

// 4. Process Technical Written & Add Technical Pedagogy/Lab
function buildTechnicalWritten() {
  console.log('=== BUILDING TECHNICAL WRITTEN DATASET ===');
  const baseData = readJsonSafe('technical_written.json');
  let techList = [];
  let currentId = 1000;

  // Filter out any strictly passport e-gate specific hardware and replace with Polytechnic / TSC teaching & lab hardware
  baseData.forEach(q => {
    if (q.question && (q.question.includes('পাসপোর্ট বুকলেট') || q.question.includes('ই-গেট') || q.question.includes('ICAO 9303'))) {
      // skip passport bespoke hardware
      return;
    }
    currentId++;
    techList.push({
      ...q,
      id: currentId,
      subject: "টেকনিক্যাল (কম্পিউটার)"
    });
  });

  // Now add dedicated High-Yield Junior Instructor Technical, Lab Management & Pedagogy questions:
  const juniorInstructorSpecialQuestions = [
    {
      id: ++currentId,
      subject: "টেকনিক্যাল (কম্পিউটার)",
      topic: "Technical Laboratory Management & Pedagogy",
      question: "একটি পলিটেকনিক ইনস্টিটিউট বা টেকনিক্যাল স্কুল ও কলেজ (TSC)-এর কম্পিউটার ল্যাবরেটরির জন্য আদর্শ ডিজাইন, লেআউট এবং ইলেক্ট্রোস্ট্যাটিক ডিসচার্জ (ESD) সুরক্ষার বিস্তারিত নীতিমালা লিখুন।",
      marks: 8,
      answer: "কম্পিউটার ল্যাবরেটরি ডিজাইন ও ESD সুরক্ষা গাইডলাইন:\n\n১. আদর্শ কম্পিউটার ল্যাব ডিজাইন ও লেআউট:\n• ফিজিক্যাল লেআউট: সাধারণত 'U-Shape' অথবা 'প্যারামিটাল রো' লেআউট সবচেয়ে কার্যকর, যাতে শিক্ষক কেন্দ্রস্থল বা ডেমোনস্ট্রেশন ডেস্ক থেকে প্রতিটি শিক্ষার্থীর মনিটর পর্যবেক্ষণ করতে পারেন।\n• পাওয়ার ও ক্যাবল ম্যানেজমেন্ট: উন্মুক্ত তারের ঝুঁকি এড়াতে মেঝের নিচ দিয়ে অথবা দেয়াল ঘেঁষে ফ্লোর ট্রাঙ্কিং (Raceway/PVC Conduit) ব্যবহার করতে হবে। প্রতিটি ওয়ার্কস্টেশনে ডেডিকেটেড গ্রাউন্ডেড সকেট থাকবে।\n• ভেন্টিলেশন ও কুলিং: সার্ভার ও ওয়ার্কস্টেশনের তাপ নিয়ন্ত্রণে সার্বক্ষণিক এসি (HVAC) এবং হিউমিডিটি ৪০% - ৬০% এর মাঝে রাখতে হবে (খুব শুষ্ক বাতাসে স্ট্যাটিক বিদ্যুৎ বৃদ্ধি পায়)।\n\n২. ইলেক্ট্রোস্ট্যাটিক ডিসচার্জ (ESD) সুরক্ষা:\n• অ্যান্টি-স্ট্যাটিক ম্যাট ও রিস্ট স্ট্র্যাপ: হার্ডওয়্যার ল্যাবের টেবিলে পরিবাহী ESD ম্যাট পাততে হবে এবং মাদারবোর্ড/র‍্যাম মেরামতের সময় শিক্ষার্থীদের হাতে ১ মেগাহম রেজিস্টরযুক্ত অ্যান্টি-স্ট্যাটিক রিস্ট স্ট্র্যাপ ব্যবহার বাধ্যতামূলক।\n• প্রোপার গ্রাউন্ডিং (Grounding): ল্যাব ভবনের সেন্ট্রাল আর্থিং রেজিস্ট্যান্স ১ ওহম (1 Ω) বা তার নিচে রাখতে হবে।\n• অ্যান্টি-স্ট্যাটিক ফ্লোরিং: স্ট্যাটিক চার্জ জমা প্রতিরোধে ভিনাইল বা অ্যান্টি-স্ট্যাটিক ফ্লোর টাইলস ব্যবহার।\n• আইসি হ্যান্ডলিং: মাইক্রোপ্রসেসর ও মেমোরি চিপ সর্বদা অ্যান্টি-স্ট্যাটিক ব্যাগে (Shielding Bag) সংরক্ষণ করতে হবে এবং সরাসরি পিন স্পর্শ না করে প্রান্ত ধরে তুলতে হবে।",
      points_to_remember: [
        "ESD-এর কারণে দৃশ্যমান ক্ষতি ছাড়াও মেমোরি চিপের অভ্যন্তরীণ সূক্ষ্ম গেট পুড়ে যেতে পারে (Latent Damage)।",
        "ল্যাবের আর্দ্রতা ৫০% রাখা স্ট্যাটিক বিদ্যুৎ হ্রাসে কার্যকর।"
      ],
      tags: ["lab_management", "hardware", "pedagogy", "junior_instructor"]
    },
    {
      id: ++currentId,
      subject: "টেকনিক্যাল (কম্পিউটার)",
      topic: "Technical Laboratory Management & Pedagogy",
      question: "কারিগরি শিক্ষাদানে 'ডেমোনস্ট্রেশন মেথড' (Demonstration Method / 4-Step Method: Prepare, Present, Apply, Test) কীভাবে কার্যকরভাবে প্রয়োগ করবেন? একটি কম্পিউটার হার্ডওয়্যার ক্লাসের উদাহরণসহ লিখুন।",
      marks: 8,
      answer: "কারিগরি শিক্ষার ৪-ধাপের ডেমোনস্ট্রেশন পদ্ধতি (4-Step Method):\n\nকারিগরি ও ভোকেশনাল শিক্ষায় হ্যান্ডস-অন স্কিল অর্জনে ৪-ধাপের ডেমোনস্ট্রেশন পদ্ধতি বিশ্বস্বীকৃত:\n\nধাপ ১: প্রস্তুতি (Preparation):\n- শিক্ষার্থীদের মনোযোগ আকর্ষণ করা এবং আজকের ব্যবহারিক কাজের উদ্দেশ্য ও প্রয়োজনীয়তা ব্যাখ্যা করা।\n- কাজের জন্য প্রয়োজনীয় টুলস (যেমন: স্ক্রু-ড্রাইভার, অ্যান্টি-স্ট্যাটিক ব্যান্ড) ও ইকুইপমেন্ট টেবিলে সাজিয়ে রাখা।\n\nধাপ ২: উপস্থাপন ও প্রদর্শন (Presentation / Demonstration by Instructor):\n- শিক্ষক নিজে সম্পূর্ণ কাজটি শিক্ষার্থীদের সামনে ধীরে ধীরে করে দেখাবেন (যেমন: SMPS ও মাদারবোর্ডে 24-Pin ATX পাওয়ার কানেক্টর এবং 4/8-Pin CPU পাওয়ার সংযোগ)।\n- প্রতিটি ধাপের নিরাপত্তা নিয়ম মুখে বলে বলে প্রদর্শন করবেন (\"Show and Tell\")।\n\nধাপ ৩: শিক্ষার্থীদের অনুশীলন ও প্রয়োগ (Application by Students):\n- শিক্ষার্থীরা শিক্ষকের উপস্থিতিতে নিজেরা কাজটি ল্যাব টেবিলে সম্পাদন করবে।\n- শিক্ষক তাদের কাজ পর্যবেক্ষণ করবেন, ভুল সংশোধন করে দেবেন এবং শিক্ষার্থীদের উৎসাহিত করবেন।\n\nধাপ ৪: মূল্যায়ন ও পরীক্ষা (Testing & Evaluation):\n- শিক্ষক শিক্ষার্থীর দক্ষতা চেকলিস্ট অনুযায়ী যাচাই করবেন (যেমন: ক্যাবল ঠিকমতো লক হয়েছে কিনা, কোনো শর্ট সার্কিট ঝুঁকি আছে কিনা)।\n- ফলাফল অনুযায়ী ফিডব্যাক প্রদান ও ল্যাব লগবুকে মার্কিং এন্ট্রি করা।",
      points_to_remember: [
        "কারিগরি শিক্ষার মূলনীতি: 'I hear and I forget, I see and I remember, I do and I understand.'",
        "টিএসসি ও পলিটেকনিকে লেকচারের চেয়ে ডেমোনস্ট্রেশন বেশি গুরুত্ব পায়।"
      ],
      tags: ["pedagogy", "teaching_method", "junior_instructor"]
    },
    {
      id: ++currentId,
      subject: "টেকনিক্যাল (কম্পিউটার)",
      topic: "Technical Laboratory Management & Pedagogy",
      question: "কম্পিউটার ল্যাবরেটরির প্রিভেন্টিভ মেইনটেন্যান্স শিডিউল (Preventive Maintenance Schedule) এবং ইকুইপমেন্ট লগবুক ব্যবস্থাপনার গুরুত্ব ও কাঠামো সংক্ষেপে তুলে ধরুন।",
      marks: 7,
      answer: "ল্যাবরেটরির প্রিভেন্টিভ মেইনটেন্যান্স ও লগবুক ব্যবস্থাপনা:\n\n১. প্রিভেন্টিভ মেইনটেন্যান্স শিডিউল (রক্ষণাবেক্ষণ সূচি):\n• দৈনিক (Daily): পিসি বুট পরীক্ষা, কিবোর্ড ও মাউস পরীক্ষা, ক্লাস শেষে মূল পাওয়ার মেইন সুইচ ও এসি বন্ধ করা।\n• সাপ্তাহিক (Weekly): অ্যান্টিভাইরাস ভাইরাস ডেফিনিশন আপডেট, উইন্ডোজ টেম্প ফাইল পরিষ্কার (`%temp%`), ব্যাকআপ ড্রাইভ সিঙ্ক।\n• মাসিক (Monthly): পিসি কেসিং খুলে এয়ার ব্লোয়ার দিয়ে প্রসেসর ফ্যান ও পাওয়ার সাপ্লাই ডাস্ট ক্লিন করা, ক্যাবল টাই ঠিক করা।\n• ষান্মাসিক/বাৎসরিক (Half-Yearly): প্রসেসরের থার্মাল পেস্ট (Thermal Paste) পরিবর্তন, ইউপিএস ব্যাটারি ভোল্টেজ পরীক্ষা ও ল্যাব ফায়ার এক্সটিঙ্গুইশার রিফিল যাচাই।\n\n২. ইকুইপমেন্ট লগবুকের আদর্শ কাঠামো:\nইকুইপমেন্ট লগবুকে নিচের কলামগুলো অন্তর্ভুক্ত থাকে:\n- সিরিয়াল নং ও মেশিনের কোড/ট্যাগ নং (Asset ID)\n- ডিভাইসের স্পেসিফিকেশন ও ব্র‍্যান্ড (যেমন: Core i5 12th Gen, 16GB RAM)\n- ত্রুটির তারিখ ও লক্ষণ (Fault Description)\n- গৃহীত ব্যবস্থা ও প্রতিস্থাপিত পার্টসের নাম\n- সার্ভিসের তারিখ ও দায়িত্বরত ইন্সট্রাক্টরের স্বাক্ষর\n- স্ট্যাটাস (Active / Under Maintenance / Condemned)",
      points_to_remember: [
        "প্রিভেন্টিভ মেইনটেন্যান্সের ফলে ইকুইপমেন্টের আয়ু বৃদ্ধি পায় এবং ল্যাব ডাউনটাইম শূন্যে নেমে আসে।"
      ],
      tags: ["lab_management", "maintenance", "junior_instructor"]
    },
    {
      id: ++currentId,
      subject: "টেকনিক্যাল (কম্পিউটার)",
      topic: "Microprocessor & Interfacing",
      question: "৮০৮৬ মাইক্রোপ্রসেসরের বাস ইন্টারফেস ইউনিট (BIU) এবং এক্সিকিউশন ইউনিট (EU) এর আর্কিটেকচার চিত্রসহ পার্থক্য এবং ইন্সট্রাকশন কিউ (Instruction Queue) কীভাবে পাইপলাইনিং তৈরি করে তা ব্যাখ্যা করুন।",
      marks: 8,
      answer: "৮০৮৬ মাইক্রোপ্রসেসরের আর্কিটেকচার:\n\n৮০৮৬ মাইক্রোপ্রসেসর দুটি স্বাধীন কার্যকরী ব্লকে বিভক্ত:\n\n১. বাস ইন্টারফেস ইউনিট (BIU):\n• কাজ: মেমোরি ও আই/ও ডিভাইস থেকে ডাটা ও ইন্সট্রাকশন আনা (Fetch), মেমোরিতে ডাটা লেখা এবং ২০-বিট ফিজিক্যাল অ্যাড্রেস জেনারেট করা।\n• মূল উপাদান: সেগমেন্ট রেজিস্টার (CS, DS, SS, ES), ইন্সট্রাকশন পয়েন্টার (IP), অ্যাড্রেস জেনারেশন সার্কিট এবং ৬-বাইট ইন্সট্রাকশন কিউ (Instruction Queue)।\n\n২. এক্সিকিউশন ইউনিট (EU):\n• কাজ: BIU কর্তৃক নিয়ে আসা ইন্সট্রাকশন ডিকোড করা এবং অ্যারিথমেটিক ও লজিক্যাল অপারেশন সম্পন্ন করা।\n• মূল উপাদান: ১৬-বিট ALU, জেনারেল পারপাস রেজিস্টার (AX, BX, CX, DX), পয়েন্টার ও ইনডেক্স রেজিস্টার (SP, BP, SI, DI) এবং ১৬-বিট ফ্ল্যাগ রেজিস্টার (Flag Register)।\n\n৩. ইন্সট্রাকশন কিউ ও পাইপলাইনিং (Pipelining):\n- BIU এর অভ্যন্তরে একটি ৬-বাইটের FIFO (First-In-First-Out) কিউ বাফার থাকে।\n- যখন EU একটি ইন্সট্রাকশন এক্সিকিউট করতে ব্যস্ত থাকে, তখন সিস্টেম বাস ফাঁকা থাকায় BIU পরবর্তী ইন্সট্রাকশনগুলো মেমোরি থেকে ফেচ করে কিউতে জমা রাখে।\n- ফেচ (Fetch) এবং এক্সিকিউশন (Execute) ধাপ একই সাথে প্যারালালে চলার এই ধারণাকে 'পাইপলাইনিং' (Pipelining) বলা হয়। এর ফলে ৮০৮৬ প্রসেসরের গতি উল্লেখযোগ্যভাবে বৃদ্ধি পায়।",
      points_to_remember: [
        "৮০৮৬ হলো প্রথম x86 আর্কিটেকচার প্রসেসর যাতে পাইপলাইনিং ব্যবহৃত হয়।",
        "ফিজিক্যাল অ্যাড্রেস = Segment x 16 + Offset।"
      ],
      tags: ["microprocessor", "8086", "core_theory"]
    },
    {
      id: ++currentId,
      subject: "টেকনিক্যাল (কম্পিউটার)",
      topic: "Digital Electronics & Logic Design",
      question: "একটি 4-Variable K-Map সরলীকরণ করুন: F(A, B, C, D) = Σm(0, 2, 5, 7, 8, 10, 13, 15) এবং সরলীকৃত ফাংশনটির লজিক সার্কিট অঙ্কন করুন।",
      marks: 8,
      answer: "K-Map সমাধান ধাপ:\n\nপ্রদত্ত মিনটার্মসমূহ: Σm(0, 2, 5, 7, 8, 10, 13, 15)\n\n১. ৪-ভেরিয়েবল K-Map ছকে মান বসানো (রো: AB, কলাম: CD):\n\n       CD:  00   01   11   10\nAB  00:  [ 1 ] [ 0 ] [ 0 ] [ 1 ]   -> m0, m2\n    01:  [ 0 ] [ 1 ] [ 1 ] [ 0 ]   -> m5, m7\n    11:  [ 0 ] [ 1 ] [ 1 ] [ 0 ]   -> m13, m15\n    10:  [ 1 ] [ 0 ] [ 0 ] [ 1 ]   -> m8, m10\n\n২. গ্রুপিং (Quad Grouping):\n• গ্রুপ ১ (চার কোণার ৪টি সেল): m0, m2, m8, m10\n  - সাধারণ পদ: B' (যেহেতু AB পরিবর্তিত হয় 00 ও 10, সাধারণ B=0 -> B')\n  - সাধারণ পদ: D' (যেহেতু CD পরিবর্তিত হয় 00 ও 10, সাধারণ D=0 -> D')\n  - টার্ম = B'D'\n\n• গ্রুপ ২ (মাঝের ৪টি সেল): m5, m7, m13, m15\n  - সাধারণ পদ: B (যেহেতু AB পরিবর্তিত হয় 01 ও 11, সাধারণ B=1 -> B)\n  - সাধারণ পদ: D (যেহেতু CD পরিবর্তিত হয় 01 ও 11, সাধারণ D=1 -> D)\n  - টার্ম = BD\n\n৩. সরলীকৃত ফলাফল:\nF = B'D' + BD\nযা মূলত একটি XNOR গেট: F = (B ⊕ D)'\n\n৪. সার্কিট ডিজাইন:\nদুটি ইনপুট B এবং D কে সরাসরি একটি 2-input XNOR গেটের মধ্য দিয়ে চালনা করলে আউটপুট F পাওয়া যাবে।",
      points_to_remember: [
        "চার কোণার গ্রুপিং (Corners Quad) বিপিএসসি পরীক্ষার অন্যতম প্রিয় প্রশ্ন প্যাটার্ন।"
      ],
      tags: ["digital_logic", "kmap", "math"]
    },
    {
      id: ++currentId,
      subject: "টেকনিক্যাল (কম্পিউটার)",
      topic: "Programming in C / Data Structures",
      question: "C প্রোগ্রামিং ভাষায় একটি সিঙ্গলি লিংকড লিস্টের (Singly Linked List) নোড স্ট্রাকচার তৈরি করুন এবং লিংকড লিস্টের শুরুতে (Beginning) একটি নতুন নোড ইনসার্ট করার পূর্ণাঙ্গ ফাংশন লিখুন।",
      marks: 7,
      answer: "C কোড সমাধান:\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n\n// নোড স্ট্রাকচার সংজ্ঞা\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\n// শুরুতে নোড ইনসার্ট করার ফাংশন\nvoid insertAtBeginning(struct Node** head_ref, int new_data) {\n    // ১. নতুন নোডের জন্য মেমোরি বরাদ্দ\n    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));\n    \n    // ২. ডেটা এসাইন করা\n    new_node->data = new_data;\n    \n    // ৩. নতুন নোডের next পয়েন্টার বর্তমান head কে পয়েন্ট করবে\n    new_node->next = (*head_ref);\n    \n    // ৪. head পয়েন্টার নতুন নোডকে পয়েন্ট করবে\n    (*head_ref) = new_node;\n    \n    printf(\"Node inserted: %d\\n\", new_data);\n}\n```\n\n• সময় জটিলতা (Time Complexity): O(1)\n• স্থান জটিলতা (Space Complexity): O(1)",
      points_to_remember: [
        "malloc() ফাংশন ডায়নামিক মেমোরি এলোকেশনের জন্য ব্যবহৃত হয়।",
        "হেড রেফারেন্স ডাবল পয়েন্টার (**head_ref) দিয়ে পাস করা হয় মূল পয়েন্টার পরিবর্তনের জন্য।"
      ],
      tags: ["c_programming", "data_structures", "code"]
    }
  ];

  techList.push(...juniorInstructorSpecialQuestions);

  const outPath = path.join(destDir, 'technical_written.json');
  fs.writeFileSync(outPath, JSON.stringify(techList, null, 2), 'utf8');
  console.log(`Technical written saved: ${techList.length} questions`);
}

function run() {
  buildBanglaWritten();
  buildEnglishWritten();
  buildGkWritten();
  buildTechnicalWritten();
  console.log('\n=== ALL WRITTEN DATASETS GENERATED SUCCESSFULLY ===');
}

run();
