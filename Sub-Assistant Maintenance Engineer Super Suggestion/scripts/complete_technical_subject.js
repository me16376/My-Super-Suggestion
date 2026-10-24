const fs = require('fs');
const path = require('path');

const mcqFilePath = path.join(__dirname, '../data/preliminary/technical_computer_mcq.json');
const writtenFilePath = path.join(__dirname, '../data/written/technical_written.json');

let mcqs = JSON.parse(fs.readFileSync(mcqFilePath, 'utf8'));
let written = JSON.parse(fs.readFileSync(writtenFilePath, 'utf8'));

// Exhaustive additions to complete the Technical Computer Subject
const comprehensiveTechnicalMcqs = [
  // 1. Networking & Protocols
  {
    id: 161,
    subject: "টেকনিক্যাল (কম্পিউটার)",
    topic: "Data Communication & Networking",
    question: "একটি ক্লাস বি (Class B) নেটওয়ার্ক 172.16.0.0-কে ১৬টি সমান সাবনেটে বিভক্ত করতে চাইলে নতুন সাবনেট মাস্ক কত হবে?",
    "options": [
      "A) 255.255.240.0 (/20)",
      "B) 255.255.248.0 (/21)",
      "C) 255.255.255.0 (/24)",
      "D) 255.255.192.0 (/18)"
    ],
    answer: 0,
    "explanation": "ক্লাস B এর ডিফল্ট প্রিফিক্স /16। ১৬টি সাবনেট তৈরি করতে ধার করা সাবনেট বিট s = 4 (কারণ 2^4 = 16)। নতুন প্রিফিক্স = 16 + 4 = /20। এর সাবনেট মাস্ক হবে 255.255.240.0।",
    "tags": ["networking", "subnetting", "math"]
  },
  {
    id: 162,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    topic: "Data Communication & Networking",
    "question": "রাউটিং ইনফরমেশন প্রোটোকল (RIP)-এ লুপ প্রতিরোধে সর্বোচ্চ কত হপ কাউন্ট (Max Hop Count) পর্যন্ত ডেটা পাঠানো যায়?",
    "options": [
      "A) 7",
      "B) 15",
      "C) 16 (Unreachable)",
      "D) 255"
    ],
    answer: 1,
    "explanation": "RIP একটি ডিস্ট্যান্স ভেক্টর প্রোটোকল যার সর্বোচ্চ বৈধ হপ কাউন্ট ১৫। ১৬ তম হপকে সরাসরি 'Unreachable' বা অগম্য ঘোষণা করা হয়।",
    "tags": ["networking", "routing", "bpsc_frequent"]
  },
  {
    id: 163,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "ইন্টারনেটের মূল মেরুদণ্ড (Internet Backbone) এবং অটোনোমাস সিস্টেম (AS)-এর মাঝে রাউটিং তথ্য বিনিময়ে কোন প্রোটোকলটি ব্যবহৃত হয়?",
    "options": [
      "A) RIP",
      "B) OSPF",
      "C) BGP (Border Gateway Protocol)",
      "D) EIGRP"
    ],
    answer: 2,
    "explanation": "BGP (Border Gateway Protocol) হলো একটি পাথ ভেক্টর এক্সটেরিয়র গেটওয়ে প্রোটোকল (EGP), যা বিশ্বব্যাপী বিভিন্ন ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) ও অটোনোমাস সিস্টেমের মাঝে রুট বিনিময় করে।",
    "tags": ["networking", "bgp", "core"]
  },
  {
    id: 164,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "VLAN (Virtual Local Area Network) ট্রাঙ্ক লিঙ্কে ডেটা ফ্রেমের সাথে ১২-বিট VLAN ID যুক্ত করার আন্তর্জাতিক স্ট্যান্ডার্ড কোনটি?",
    "options": [
      "A) IEEE 802.1D",
      "B) IEEE 802.1Q",
      "C) IEEE 802.11ac",
      "D) IEEE 802.3u"
    ],
    "answer": 1,
    "explanation": "IEEE 802.1Q (ডট-ওয়ান-কিউ) হলো নেটওয়ার্ক সুইচে ভি-ল্যান ট্যাগিংয়ের আন্তর্জাতিক স্ট্যান্ডার্ড যা ৪ বাইটের ট্যাগ (যার মধ্যে ১২ বিট VLAN ID) ইথারনেট ফ্রেমে যুক্ত করে।",
    "tags": ["networking", "vlan", "standards"]
  },
  {
    id: 165,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "একক মোড ফাইবার অপটিক (Single-Mode Fiber) কেবলের কোরের সাধারণ ব্যাস (Core Diameter) কত মাইক্রন হয়?",
    "options": [
      "A) ৮ থেকে ১০ মাইক্রন (μm)",
      "B) ৫০ মাইক্রন (μm)",
      "C) ৬২.৫ মাইক্রন (μm)",
      "D) ১০০ মাইক্রন (μm)"
    ],
    "answer": 0,
    "explanation": "সিঙ্গেল-মোড ফাইবারের কোর অত্যন্ত সরু (প্রায় ৮-১০ মাইক্রন) হয়, যা লেজার রশ্মির সাহায্যে আলোর কেবল একটি তরঙ্গ দীর্ঘ দূরত্বে (৪০-৮০ কিমি) অপচয়হীনভাবে পাঠাতে পারে। মাল্টিমোডের কোর ৫০ বা ৬২.৫ মাইক্রন হয়।",
    "tags": ["networking", "fiber_optics"]
  },
  {
    id: 166,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "RJ-45 নেটওয়ার্ক কানেক্টরের T568B ওয়্যারিং স্ট্যান্ডার্ডে ১ ও ২ নম্বর পিনের তারের রঙ যথাক্রমে কোনটি?",
    "options": [
      "A) সাদা-সবুজ ও সবুজ",
      "B) সাদা-কমলা ও কমলা (White-Orange & Orange)",
      "C) সাদা-নীল ও নীল",
      "D) সাদা-বাদামি ও বাদামি"
    ],
    "answer": 1,
    "explanation": "T568B স্ট্যান্ডার্ডে পিন ক্রম: ১=সাদা-কমলা, ২=কমলা, ৩=সাদা-সবুজ, ৪=নীল, ৫=সাদা-নীল, ৬=সবুজ, ৭=সাদা-বাদামি, ৮=বাদামি।",
    "tags": ["networking", "cabling", "practical"]
  },

  // 2. Computer Architecture & Digital Logic
  {
    id: 167,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "৮০৮৬ মাইক্রোপ্রসেসরে মেমোরি সেগমেন্টেশন পদ্ধতিতে ২০-বিট ফিজিক্যাল অ্যাড্রেস গণনার সূত্র কোনটি?",
    "options": [
      "A) Physical Address = Segment Address + Offset",
      "B) Physical Address = (Segment Address × 10H) + Offset Address",
      "C) Physical Address = Segment Address × Offset",
      "D) Physical Address = (Segment Address + 1) × Offset"
    ],
    "answer": 1,
    "explanation": "৮০৮৬-তে ১৬-বিট সেগমেন্ট রেজিস্টারকে হেক্সাডেসিমাল ১০H (বা বাইনারিতে ৪ বিট বামে শিফট) দিয়ে গুণ করে তার সাথে ১৬-বিট অফসেট যোগ করে ২০-বিট ফিজিক্যাল অ্যাড্রেস তৈরি করা হয়।",
    "tags": ["microprocessor", "architecture", "math"]
  },
  {
    id: 168,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "সিপিইউ পাইপলাইনিংয়ে যখন একটি নির্দেশনার এক্সিকিউশন পূর্ববর্তী নির্দেশনার ফলাফলের ওপর নির্ভরশীল হয়, তখন কোন হ্যাজার্ডটি (Hazard) ঘটে?",
    "options": [
      "A) Structural Hazard",
      "B) Data Hazard (Read After Write - RAW)",
      "C) Control Hazard (Branch Hazard)",
      "D) Timing Hazard"
    ],
    "answer": 1,
    "explanation": "ডেটা হ্যাজার্ড ঘটে যখন পাইপলাইনে পরবর্তী ইন্সট্রাকশনের ইনপুট ডেটা আগের ইন্সট্রাকশন দ্বারা রাইট হওয়ার পূর্বেই পড়ার প্রয়োজন হয়। এটি অপারেন্ড ফরোয়ার্ডিং বা স্টল দিয়ে সমাধান করা হয়।",
    "tags": ["architecture", "pipelining"]
  },
  {
    id: 169,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "একটি 8:1 মাল্টিপ্লেক্সার (Multiplexer)-এ মোট কতটি সিলেকশন লাইন (Select Lines) প্রয়োজন?",
    "options": [
      "A) ২টি",
      "B) ৩টি",
      "C) ৪টি",
      "D) ৮টি"
    ],
    "answer": 1,
    "explanation": "মাল্টিপ্লেক্সারে ইনপুট সংখ্যা 2^n হলে সিলেকশন লাইন সংখ্যা হয় n। এখানে ইনপুট ৮টি = 2^3, সুতরাং সিলেকশন লাইন প্রয়োজন ৩টি (S0, S1, S2)।",
    "tags": ["digital_logic", "circuits"]
  },
  {
    id: 170,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "হেক্সাডেসিমাল সংখ্যা (2F)₁₆ এর সমতুল্য বাইনারি মান কত?",
    "options": [
      "A) (00101111)₂",
      "B) (00101110)₂",
      "C) (01001111)₂",
      "D) (00111111)₂"
    ],
    "answer": 0,
    "explanation": "প্রতিটি হেক্সাডেসিমাল ডিজিটকে ৪-বিট বাইনারিতে রূপান্তর: 2 = 0010, F = 15 = 1111। সুতরাং (2F)₁₆ = (00101111)₂।",
    "tags": ["number_system", "conversion"]
  },
  {
    id: 171,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "RAID-5 স্টোরেজ সেটআপে সর্বনিম্ন কয়টি ফিজিক্যাল হার্ডডিস্ক প্রয়োজন এবং এতে কী প্রযুক্তি ব্যবহৃত হয়?",
    "options": [
      "A) ২টি ডিস্ক; মিররিং",
      "B) ৩টি ডিস্ক; স্ট্রাইপিং উইথ ডিস্ট্রিবিউটেড প্যারিটি (Block-level Striping with Distributed Parity)",
      "C) ৪টি ডিস্ক; ডাবল প্যারিটি",
      "D) ১টি ডিস্ক"
    ],
    "answer": 1,
    "explanation": "RAID 5 তৈরিতে কমপক্ষে ৩টি ডিস্ক প্রয়োজন। এটি ডেটাকে স্ট্রাইপ করে এবং সকল ডিস্ক জুড়ে প্যারিটি তথ্য ছড়িয়ে দেয়, ফলে যেকোনো একটি ডিস্ক নষ্ট হলেও ডেটা অক্ষত থাকে।",
    "tags": ["hardware", "storage", "raid"]
  },

  // 3. Operating Systems & Server
  {
    id: 172,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "অপারেটিং সিস্টেমে 'Banker's Algorithm' মূলত কোন উদ্দেশ্যে ব্যবহৃত হয়?",
    "options": [
      "A) ডেডলক প্রতিরোধ (Deadlock Prevention)",
      "B) ডেডলক পরিহার ও নিরাপদ অবস্থা যাচাই (Deadlock Avoidance & Safe State)",
      "C) প্রসেস টার্মিনেশন",
      "D) মেমোরি ডিফ্র্যাগমেন্টেশন"
    ],
    "answer": 1,
    "explanation": "ডাইকস্ট্রার ব্যাঙ্কার্স অ্যালগরিদম ডেডলক পরিহারের (Deadlock Avoidance) জন্য ব্যবহৃত হয়। সিস্টেমটি রিসোর্স বরাদ্দের আগে নিশ্চিত করে যে বরাদ্দ দিলে সিস্টেম নিরাপদ অবস্থায় (Safe State) থাকবে কিনা।",
    "tags": ["os_theory", "deadlock", "frequent"]
  },
  {
    id: 173,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "উইন্ডোজ সার্ভারে ডোমেইন কন্ট্রোলারে 'DNS' সার্ভিসের A Record এবং PTR Record-এর কাজ কী?",
    "options": [
      "A) A Record মেইল পাঠায়, PTR Record ওয়েবসাইট ব্লক করে",
      "B) A Record হোস্টনেমকে আইপিতে এবং PTR Record আইপিকে হোস্টনেমে (Reverse DNS) রূপান্তর করে",
      "C) দুটিই কেবল আইপি অ্যাড্রেস মুছে ফেলে",
      "D) পাসওয়ার্ড রিসেট করে"
    ],
    "answer": 1,
    "explanation": "A Record (Address Record) ডোমেইন বা হোস্টনেমকে IPv4 অ্যাড্রেসে ম্যাপ করে (Forward Lookup)। আর PTR (Pointer Record) আইপি অ্যাড্রেস থেকে ডোমেইন নাম উদ্ধার করে (Reverse Lookup)।",
    "tags": ["server_admin", "dns", "windows_server"]
  },
  {
    id: 174,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "লিনাক্স ওএস-এ একটি ফাইলের পারমিশন 'chmod 754 filename' দিলে এর অর্থ কী দাঁড়ায়?",
    "options": [
      "A) মালিক: rwx, গ্রুপ: r-x, অন্যরা: r--",
      "B) মালিক: r--, গ্রুপ: -w-, অন্যরা: --x",
      "C) মালিক: rwx, গ্রুপ: rw-, অন্যরা: r--",
      "D) মালিক: r-x, গ্রুপ: rwx, অন্যরা: rw-"
    ],
    "answer": 0,
    "explanation": "অক্টাল মান: 7 = 4+2+1 = rwx (মালিক), 5 = 4+0+1 = r-x (গ্রুপ), 4 = 4+0+0 = r-- (অন্যান্য ইউজার)।",
    "tags": ["linux", "permissions", "commands"]
  },
  {
    id: 175,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "ভার্চুয়াল মেমোরির পেজ রিপ্লেসমেন্ট অ্যালগরিদমে 'Belady's Anomaly' কোন অ্যালগরিদমে দেখা যেতে পারে?",
    "options": [
      "A) LRU (Least Recently Used)",
      "B) FIFO (First In First Out)",
      "C) Optimal Page Replacement",
      "D) LFU"
    ],
    "answer": 1,
    "explanation": "বেলাডির অ্যানোমালি হলো এমন একটি ঘটনা যেখানে ফিজিক্যাল পেজ ফ্রেম সংখ্যা বৃদ্ধি করলেও পেজ ফল্টের সংখ্যা বৃদ্ধি পায়। এটি শুধুমাত্র FIFO অ্যালগরিদমে ঘটে, LRU বা অপটিমালে ঘটে না।",
    "tags": ["os_theory", "paging"]
  },

  // 4. DBMS & SQL
  {
    id: 176,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "কোন এসকিউএল (SQL) স্টেটমেন্ট দ্বারা কোনো ব্যবহারকারীকে ডাটাবেজে পারমিশন বা অধিকার প্রদান করা হয়?",
    "options": [
      "A) REVOKE",
      "B) GRANT",
      "C) COMMIT",
      "D) ASSIGN"
    ],
    "answer": 1,
    "explanation": "GRANT হলো একটি DCL (Data Control Language) কমান্ড যার মাধ্যমে ডাটাবেজ অ্যাডমিনিস্ট্রেটর সুনির্দিষ্ট ব্যবহারকারীকে SELECT, INSERT বা UPDATE অধিকার প্রদান করেন। অধিকার প্রত্যাহার করতে REVOKE ব্যবহৃত হয়।",
    "tags": ["dbms", "sql", "dcl"]
  },
  {
    id: 177,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "ডাটাবেজ রিলেশনে কোন নরমালাইজেশন ফর্মটিকে '3NF-এর কঠোর রূপ' বা যাতে প্রতিটি ফাংশনাল ডিপেনডেন্সি X -> Y এর ক্ষেত্রে X অবশ্যই সুপার কি (Super Key) হতে হয়?",
    "options": [
      "A) 2NF",
      "B) BCNF (Boyce-Codd Normal Form)",
      "C) 4NF",
      "D) 5NF"
    ],
    "answer": 1,
    "explanation": "BCNF (Boyce-Codd Normal Form)-কে 3.5NF বলা হয়। এর একমাত্র শর্ত হলো যেকোনো নন-ট্রিভিয়াল ফাংশনাল ডিপেনডেন্সি X -> Y-তে বামপাশের নির্ধারক (X) অবশ্যই সুপার কি হতে হবে।",
    "tags": ["dbms", "normalization"]
  },
  {
    id: 178,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "SQL কুয়েরিতে একাধিক টেবিল থেকে এমন রেকর্ড আনা যা দুটি টেবিলেই মিলে যায় (Matching Records), তাকে কোন জয়েন (Join) বলে?",
    "options": [
      "A) LEFT JOIN",
      "B) RIGHT JOIN",
      "C) INNER JOIN",
      "D) FULL OUTER JOIN"
    ],
    "answer": 2,
    "explanation": "INNER JOIN কেবল সেইসব সারি বা রো রিটার্ন করে যেখানে জয়েন শর্ত অনুযায়ী উভয় টেবিলে ম্যাচিং মান উপস্থিত থাকে।",
    "tags": ["dbms", "sql"]
  },

  // 5. System Maintenance, Passport Biometrics & Hardware
  {
    id: 179,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "মেশিন রিডেবল পাসপোর্ট (MRP)-এর ডেটা পেজে নিচের দিকে থাকা 'MRZ' জোনের লাইন সংখ্যা ও প্রতি লাইনের অক্ষর সংখ্যা কত?",
    "options": [
      "A) ২ লাইন, প্রতি লাইনে ৪৪টি অক্ষর (Type-3/TD3 Passport)",
      "B) ৩ লাইন, প্রতি লাইনে ৩০টি অক্ষর",
      "C) ১ লাইন, ৮০টি অক্ষর",
      "D) ২ লাইন, ৩০টি অক্ষর"
    ],
    "answer": 0,
    "explanation": "আন্তর্জাতিক আইসিএও ডক ৯৩০৩ (ICAO 9303) অনুযায়ী স্ট্যান্ডার্ড আন্তর্জাতিক পাসপোর্টের জন্য TD3 ফরম্যাট নির্ধারিত, যাতে ২ লাইনে মোট ৪৪টি করে অক্ষর (OCR-B ফন্ট) থাকে। জাতীয় পরিচয়পত্রে ৩ লাইনে ৩০ অক্ষর থাকে।",
    "tags": ["passport_tech", "specialized", "mrz"]
  },
  {
    id: 180,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "ই-পাসপোর্টের কন্ট্যাক্টলেস চিপ ক্লোনিং প্রতিরোধে কোন ডিজিটাল নিরাপত্তা মেকানিজমটি চিপের অভ্যন্তরীণ প্রাইভেট কী যাচাই করে?",
    "options": [
      "A) Basic Access Control (BAC)",
      "B) Passive Authentication (PA)",
      "C) Active Authentication (AA) / Chip Authentication (CA)",
      "D) Password Reset"
    ],
    "answer": 2,
    "explanation": "Active Authentication (AA) বা Chip Authentication (CA) পাবলিক-কি ক্রিপ্টোগ্রাফি ব্যবহার করে প্রমাণ করে যে আরএফআইডি চিপটি আসল এবং কেউ এর ডেটা কপি করে অন্য নকল চিপে ক্লোন করেনি।",
    "tags": ["passport_tech", "security", "specialized"]
  },
  {
    id: 181,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "আইরিস রিকগনিশন (Iris Recognition) ক্যামেরায় মানুষের চোখের আইরিসের জটিল প্যাটার্ন নিখুঁতভাবে ধারণ করতে কোন তরঙ্গদৈর্ঘ্যের আলো ব্যবহৃত হয়?",
    "options": [
      "A) অতিবেগুনি রশ্মি (UV Light)",
      "B) নিকট-অবলোহিত রশ্মি (Near-Infrared - NIR, 700-900 nm)",
      "C) এক্স-রে (X-Ray)",
      "D) সাধারণ হলুদ আলো"
    ],
    "answer": 1,
    "explanation": "আইরিস স্ক্যানারে ৭০০ থেকে ৯০০ ন্যানোমিটার তরঙ্গদৈর্ঘ্যের Near-Infrared (NIR) আলো ব্যবহার করা হয়। এটি গাঢ় রঙের চোখের মণির গভীর খাঁজ ও প্যাটার্ন পুঙ্খানুপুঙ্খভাবে ফুটিয়ে তোলে যা সাধারণ আলোতে দেখা যায় না।",
    "tags": ["passport_tech", "biometrics", "specialized"]
  },
  {
    id: 182,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "পিসিতে নতুন গ্রাফিক্স কার্ড বা ড্রাইভার ইনস্টল করার পর 'DRIVER_IRQL_NOT_LESS_OR_EQUAL' সম্বলিত BSOD দেখা দিলে তাৎক্ষণিক পদক্ষেপ কোনটি?",
    "options": [
      "A) মনিটরের রেজোলিউশন বাড়ানো",
      "B) সেফ মোডে (Safe Mode) বুট করে ডিভাইস ম্যানেজার থেকে গ্রাফিক্স ড্রাইভার আনইনস্টল বা রোলব্যাক করা",
      "C) হার্ডডিস্ক ফরম্যাট দেওয়া",
      "D) প্রসেসর পরিবর্তন করা"
    ],
    "answer": 1,
    "explanation": "IRQL_NOT_LESS_OR_EQUAL মূলত কার্নেল মেমোরি অ্যাড্রেসে অবৈধ অ্যাক্সেস বা ত্রুটিপূর্ণ ড্রাইভারের কারণে ঘটে। সেফ মোডে উইন্ডোজ বুট করে সদ্য ইনস্টল করা ড্রাইভার রোলব্যাক বা ক্লিন রিমুভ করলে সিস্টেম সচল হয়।",
    "tags": ["troubleshooting", "maintenance", "bsod"]
  },
  {
    id: 183,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "অপটিক্যাল ফিঙ্গারপ্রিন্ট স্ক্যানারে জাল আঙুল (যেমন: সিলিকন বা রাবারের তৈরি কৃত্রিম আঙুল) দিয়ে জালিয়াতি প্রতিরোধ প্রযুক্তির নাম কী?",
    "options": [
      "A) Live Finger Detection (LFD)",
      "B) Optical Zoom",
      "C) Contrast Enhancement",
      "D) Auto White Balance"
    ],
    "answer": 0,
    "explanation": "LFD (Live Finger Detection) প্রযুক্তি ত্বক ও মাংসের রক্তসঞ্চালন, পরিবাহিতা ও ক্যাপাসিট্যান্স সেন্সিংয়ের মাধ্যমে জীবিত মানুষের আসল আঙুল এবং কৃত্রিম রাবার বা মোমের তৈরি ভুয়া আঙুলের পার্থক্য নির্ভুলভাবে শনাক্ত করে।",
    "tags": ["passport_tech", "biometrics", "specialized"]
  },
  {
    id: 184,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "ডেস্কটপ কম্পিউটারের মাদারবোর্ডে CMOS ব্যাটারি সম্পূর্ণ ডেড বা ডিসচার্জ হয়ে গেলে কোন সমস্যাটি দৃশ্যমান হয়?",
    "options": [
      "A) হার্ডডিস্ক ক্র্যাশ করে",
      "B) প্রতিবার পাওয়ার অন করার পর সিস্টেমের তারিখ ও সময় ২০০১ বা ডিফল্ট ফ্যাক্টরি ডেটে রিসেট হয়ে যায় এবং 'CMOS Checksum Error' দেখায়",
      "C) কীবোর্ড কাজ করে না",
      "D) ইন্টারনেট স্পিড কমে যায়"
    ],
    "answer": 1,
    "explanation": "মাদারবোর্ডের CR2032 কয়েন ব্যাটারি সিস্টেম অফ থাকা অবস্থায় BIOS ক্লক ও মেমোরি সচল রাখে। ব্যাটারি নষ্ট হলে পাওয়ার বন্ধ করলেই সময় রিসেট হয়ে যায় এবং ব্রাউজারে SSL সার্টিফিকেট এরর দেয়।",
    "tags": ["hardware", "maintenance", "troubleshooting"]
  },
  {
    id: 185,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Cyber Security & Maintenance",
    "question": "ক্রিপ্টোগ্রাফিক হ্যাশ অ্যালগরিদম SHA-256 এর আউটপুট ডাইজেস্ট সাইজ কত বিটের হয়?",
    "options": [
      "A) ১২৮ বিট",
      "B) ১৬০ বিট",
      "C) ২৫৬ বিট (৩২ বাইট)",
      "D) ৫১২ বিট"
    ],
    "answer": 2,
    "explanation": "SHA-256 (Secure Hash Algorithm 256-bit) যেকোনো আকারের ইনপুট ডেটার জন্য সর্বদা একটি ফিক্সড ২৫৬-বিট (৬৪ হেক্সাডেসিমাল ক্যারেক্টার) ক্রিপ্টোগ্রাফিক হ্যাশ মান প্রদান করে যা ডিজিটাল স্বাক্ষর ও ডাটা অখণ্ডতায় ব্যবহৃত হয়।",
    "tags": ["security", "cryptography"]
  }
];

const existingMcqIds = new Set(mcqs.map(q => q.id));
comprehensiveTechnicalMcqs.forEach(q => {
  if (!existingMcqIds.has(q.id)) {
    mcqs.push(q);
    existingMcqIds.add(q.id);
  }
});

fs.writeFileSync(mcqFilePath, JSON.stringify(mcqs, null, 2), 'utf8');
console.log(`Updated Technical MCQs: Total count is now ${mcqs.length}`);

// Comprehensive additions to Technical Written Questions
const comprehensiveTechnicalWritten = [
  {
    id: 1015,
    subject: "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Networking & Subnetting",
    "question": "রাউটিং প্রোটোকল RIP, OSPF এবং BGP-এর মধ্যে তুলনামূলক পার্থক্য একটি টেবিল আকারে লিখুন (টাইপ, অ্যালগরিদম, মেট্রিক, কনভারজেন্স স্পিড ও ব্যবহারের ক্ষেত্র)।",
    "marks": 7,
    "answer": "RIP, OSPF ও BGP রাউটিং প্রোটোকলের তুলনামূলক বিশ্লেষণ:\n\n| বৈশিষ্ট্য | RIP (Routing Information Protocol) | OSPF (Open Shortest Path First) | BGP (Border Gateway Protocol) |\n|---|---|---|---|\n| প্রোটোকল টাইপ | Distance Vector IGP | Link-State IGP | Path-Vector EGP |\n| অ্যালগরিদম | Bellman-Ford Algorithm | Dijkstra's Shortest Path First (SPF) | Best-Path Selection Algorithm |\n| মেট্রিক (Metric) | Hop Count (সর্বোচ্চ ১৫) | Cost (ব্যান্ডউইথের ওপর ভিত্তি করে: 10^8/ব্যান্ডউইথ) | Path Attributes (AS-Path, Local Pref, MED) |\n| নেটওয়ার্ক সাইজ | ছোট নেটওয়ার্ক (Small LAN) | মাঝারি থেকে বৃহৎ এন্টারপ্রাইজ নেটওয়ার্ক | সম্পূর্ণ বৈশ্বিক ইন্টারনেট ও ISP ব্যাকবোন |\n| কনভারজেন্স গতি | অত্যন্ত ধীরগতির (৩০ সেকেন্ড পর পর ফুল টেবিল পাঠায়) | অত্যন্ত দ্রুত (কোল পরিবর্তন হলে ট্র্রিগারড আপডেট পাঠায়) | ধীর কিন্তু অত্যন্ত স্থিতিশীল ও পলিসি-ভিত্তিক |\n| ট্রান্সপোর্ট লেয়ার পোর্ট | UDP Port 520 | সরাসরি IP প্রোটোকল ৮৯ ব্যবহার করে | TCP Port 179 (নির্ভরযোগ্য কানেকশন) |\n\nমন্তব্য: বহিরাগমন ও পাসপোর্ট অধিদপ্তরের কেন্দ্রীয় ডেটাসেন্টারের সাথে ৬৪ জেলার পাসপোর্ট অফিসের নিরাপদ ও উচ্চগতির যোগাযোগের জন্য OSPF এবং জাতীয় ডেটা ব্যাকবোনে BGP আদর্শ।",
    "points_to_remember": [
      "RIP = Hop count (max 15), OSPF = Dijkstra SPF (Cost), BGP = Path vector (TCP port 179)।"
    ],
    "tags": ["networking", "routing", "bpsc_written"]
  },
  {
    id: 1016,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "ইন্টেল ৮০৮৬ (8086) মাইক্রোপ্রসেসরের অভ্যন্তরীণ আর্কিটেকচার ডায়াগ্রামের প্রধান দুটি ইউনিট (BIU এবং EU)-এর দায়িত্ব ও তাদের মধ্যকার রেজিস্টারসমূহের তালিকা দিন।",
    "marks": 8,
    "answer": "৮০৮৬ মাইক্রোপ্রসেসরের অভ্যন্তরীণ আর্কিটেকচার:\n৮০৮৬ প্রসেসরটি দুটি স্বতন্ত্র ইউনিটে বিভক্ত যা পাইপলাইনিংয়ের মাধ্যমে একই সাথে কাজ করে:\n\n১. বাস ইন্টারফেস ইউনিট (Bus Interface Unit - BIU):\n• মূল দায়িত্ব:\n- মেমোরি ও I/O পোর্ট থেকে ইন্সট্রাকশন কোড ফেচ (Fetch) করা।\n- ৬-বাইটের ইন্সট্রাকশন কিউ (Instruction Queue)-তে ফেচ করা কোড জমা রাখা (যা প্রি-ফেচিং বা পাইপলাইনিং নিশ্চিত করে)।\n- ২০-বিট ফিজিক্যাল অ্যাড্রেস জেনারেট করে অ্যাড্রেস বাসে পাঠানো।\n• BIU-এর রেজিস্টারসমূহ:\n- সেগমেন্ট রেজিস্টার (৪টি): CS (Code Segment), DS (Data Segment), SS (Stack Segment), ES (Extra Segment)।\n- পয়েন্টার: IP (Instruction Pointer)।\n- ৬-বাইটের ফার্স্ট-ইন-ফার্স্ট-আউট (FIFO) ইন্সট্রাকশন কিউ।\n\n২. এক্সিকিউশন ইউনিট (Execution Unit - EU):\n• মূল দায়িত্ব:\n- BIU-এর কিউ থেকে ইন্সট্রাকশন ডিকোড করা।\n- ALU-এর মাধ্যমে সকল গাণিতিক ও লজিক্যাল অপারেশন সম্পাদন করা।\n- ফ্ল্যাগ রেজিস্টারের স্ট্যাটাস আপডেট করা।\n• EU-এর রেজিস্টারসমূহ:\n- জেনারেল পারপাস রেজিস্টার (৪টি): AX (Accumulator), BX (Base), CX (Counter), DX (Data)।\n- পয়েন্টার ও ইনডেক্স রেজিস্টার: SP (Stack Pointer), BP (Base Pointer), SI (Source Index), DI (Destination Index)।\n- অ্যারিথমেটিক লজিক ইউনিট (16-bit ALU)।\n- ১৬-বিট ফ্ল্যাগ রেজিস্টার (Flag Register - যার মধ্যে ৯টি সক্রিয় ফ্ল্যাগ রয়েছে)।",
    "points_to_remember": [
      "BIU = Fetch & Bus control | EU = Decode & Execute।",
      "BIU-তে ৬-বাইটের কিউ থাকে যা ৮০৮৬-তে পাইপলাইনিং সম্ভব করে।"
    ],
    "tags": ["microprocessor", "architecture", "8086"]
  },
  {
    id: 1017,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "উইন্ডোজ সার্ভার ডোমেইন নেটওয়ার্কে Active Directory Domain Services (AD DS) কী? পাসপোর্ট ও ভিসা অফিসের নেটওয়ার্কে Group Policy Object (GPO) ব্যবহার করে কীভাবে সাধারণ ব্যবহারকারীদের ইউএসবি পেনড্রাইভ ব্লক এবং স্বয়ংক্রিয় উইন্ডোজ আপডেট চালু করা যায় তা ধাপে ধাপে লিখুন।",
    "marks": 8,
    "answer": "• Active Directory Domain Services (AD DS):\nAD DS হলো মাইক্রোসফট উইন্ডোজ সার্ভারের একটি কেন্দ্রীয় ডিরেক্টরি সার্ভিস ডাটাবেজ, যা পুরো প্রতিষ্ঠানের ব্যবহারকারী একাউন্ট (Users), কম্পিউটার, প্রিন্টার ও সিকিউরিটি পলিসিকে একটি কেন্দ্রীয় ডোমেইন কন্ট্রোলারের মাধ্যমে পরিচালনা ও প্রমাণীকরণ (Authentication/Authorization) করে।\n\n• Group Policy Object (GPO) প্রয়োগের ধাপসমূহ:\n\n(ক) সকল ক্লায়েন্ট পিসিতে পেনড্রাইভ (USB Storage) ব্লক করার পদ্ধতি:\n১. সার্ভার ম্যানেজারে গিয়ে 'Group Policy Management Console (gpmc.msc)' ওপেন করুন।\n২. পাসপোর্ট এনরোলমেন্ট ইউজারদের নির্দিষ্ট Organizational Unit (OU)-এর ওপর রাইট ক্লিক করে 'Create a GPO in this domain, and Link it here' সিলেক্ট করুন এবং নাম দিন 'Block_USB_Storage'।\n৩. নতুন তৈরিকৃত পলিসিটির ওপর রাইট ক্লিক করে 'Edit' অপশনে যান।\n৪. ব্রাউজ করুন: Computer Configuration -> Policies -> Administrative Templates -> System -> Removable Storage Access।\n৫. ডানপাশের প্যানেল থেকে 'All Removable Storage classes: Deny all access' পলিসিতে ডাবল ক্লিক করুন।\n৬. পলিসিটি 'Enabled' রেডিও বাটনে টিক দিয়ে 'Apply' ও 'OK' চাপুন।\n\n(খ) কেন্দ্রীয়ভাবে উইন্ডোজ আপডেট ফোর্স করার পদ্ধতি:\n১. একই GPO-তে গিয়ে নেভিগেট করুন: Computer Configuration -> Administrative Templates -> Windows Components -> Windows Update।\n২. 'Configure Automatic Updates' পলিসিতে ডাবল ক্লিক করে 'Enabled' করুন।\n৩. শিডিউল সেট করুন (যেমন: অটো-ডাউনলোড ও ইনস্টল প্রতিদিন রাত ০৯:০০ টায়)।\n৪. কমান্ড প্রম্পটে গিয়ে `gpupdate /force` রান করলেই সকল কম্পিউটার অবিলম্বে এই সেন্ট্রাল রুল গ্রহণ করবে।",
    "points_to_remember": [
      "Removable Storage Access -> Deny all access = USB ব্লক।",
      "ক্লায়েন্ট পিসিতে ইনস্ট্যান্ট কার্যকর করতে 'gpupdate /force' রান করতে হয়।"
    ],
    "tags": ["server_admin", "windows_server", "gpo", "passport_office"]
  },
  {
    id: 1018,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "একটি পাসপোর্ট ডাটাবেজ টেবিল: PassportApplication(AppID, NID, ApplicantName, District, PoliceStation, Status, FeeAmount)\n(ক) উপরের টেবিলটির জন্য SQL কোড লিখুন যাতে AppID প্রাইমারি কি এবং NID ইউনিক হয়।\n(খ) 'Dhaka' জেলার অন্তর্গত আবেদনকারীদের মধ্যে যাদের স্ট্যাটাস 'Approved' কিন্তু ফি দেওয়া সম্পন্ন হয়েছে তাদের তালিকা দেখানোর কুয়েরি লিখুন।\n(গ) জেলাভিত্তিক মোট কতজন আবেদনকারী আছেন এবং সংগৃহীত মোট ফির পরিমাণ নির্ণয়ের SQL কুয়েরি লিখুন।",
    "marks": 7,
    "answer": "এসকিউএল (SQL) সমাধান:\n\n(ক) টেবিল তৈরির SQL কোড (Constraints সহ):\nCREATE TABLE PassportApplication (\n    AppID INT PRIMARY KEY,\n    NID VARCHAR(17) UNIQUE NOT NULL,\n    ApplicantName VARCHAR(100) NOT NULL,\n    District VARCHAR(50) NOT NULL,\n    PoliceStation VARCHAR(50),\n    Status VARCHAR(20) DEFAULT 'Pending',\n    FeeAmount DECIMAL(10,2) NOT NULL CHECK (FeeAmount >= 0)\n);\n\n(খ) ঢাকা জেলার অনুমোদিত আবেদনকারীদের কুয়েরি:\nSELECT AppID, NID, ApplicantName, Status, FeeAmount\nFROM PassportApplication\nWHERE District = 'Dhaka' \n  AND Status = 'Approved' \n  AND FeeAmount > 0;\n\n(গ) জেলাভিত্তিক মোট আবেদনকারী ও মোট ফি সংগ্রহের কুয়েরি:\nSELECT District, \n       COUNT(AppID) AS TotalApplicants,\n       SUM(FeeAmount) AS TotalFeeCollected\nFROM PassportApplication\nGROUP BY District\nORDER BY TotalFeeCollected DESC;",
    "points_to_remember": [
      "PRIMARY KEY ইউনিক ও নট-নাল উভয় শর্ত নিশ্চিত করে।",
      "GROUP BY করলে SELECT-এ নন-অ্যাগ্রিগেটেড ফিল্ড হিসেবে কেবল District রাখা যাবে।"
    ],
    "tags": ["dbms", "sql", "passport_database", "practical"]
  },
  {
    id: 1019,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "ই-পাসপোর্ট (e-Passport) এবং মেশিন রিডেবল পাসপোর্ট (MRP)-এর মধ্যে প্রযুক্তিগত ও কাঠামোগত পার্থক্য বিস্তারিত লিখুন। ই-পাসপোর্টের চিপে থাকা ডাটা গ্রুপসমূহের (Data Groups: DG1, DG2, DG3) বিষয়বস্তু উল্লেখ করুন।",
    "marks": 8,
    "answer": "ই-পাসপোর্ট বনাম এমআরপি (MRP) তুলনামূলক পার্থক্য:\n\n| বিষয় | মেশিন রিডেবল পাসপোর্ট (MRP) | ইলেকট্রনিক পাসপোর্ট (e-Passport) |\n|---|---|---|\n| তথ্য ধারণ মাধ্যম | কেবল অপটিক্যাল ক্যারেক্টার জোন (MRZ টেক্সট) | অপটিক্যাল MRZ + এমবেডেড কন্ট্যাক্টলেস আরএফআইডি চিপ ও এন্টেনা |\n| বায়োমেট্রিক তথ্য | কোনো বায়োমেট্রিক চিপ থাকে না | উচ্চমানের ছবি (Facial), ২টি আঙুলের ছাপ এবং আইরিস ডাটা সংরক্ষিত |\n| জালিয়াতি প্রতিরোধ | কাঁচ বা পাতা পরিবর্তন করে জালিয়াতির ঝুঁকি থাকে | চিপে পাবলিক কি ক্রিপ্টোগ্রাফি (PKI) থাকায় ক্লোনিং ও বিকৃতি অসম্ভব |\n| ইমিগ্রেশন পারাপার | ইমিগ্রেশন অফিসারের ম্যানুয়াল যাচাইয়ে সময় বেশি লাগে | ই-গেট (e-Gate)-এ যাত্রী নিজে স্ক্যান করে মাত্র ২০-৩০ সেকেন্ডে পার হতে পারেন |\n| আইসিএও স্ট্যান্ডার্ড | ICAO Doc 9303 Part 3 | ICAO Doc 9303 Part 9 & 10 (LDS 1.7) |\n\n• ই-পাসপোর্ট চিপের ডাটা গ্রুপসমূহ (Data Groups in LDS):\nআন্তর্জাতিক সিভিল এভিয়েশন অর্গানাইজেশনের লজিক্যাল ডাটা স্ট্রাকচার (LDS) অনুযায়ী চিপের মেমোরি বিভিন্ন ডাটা গ্রুপে বিভক্ত থাকে:\n১. DG1 (Machine Readable Zone Data): পাসপোর্টের ব্যক্তিগত তথ্য যেমন নাম, পাসপোর্ট নম্বর, জন্মতারিখ, জাতীয়তা, মেয়াদোত্তীর্ণের তারিখ ও চেক ডিজিট।\n২. DG2 (Biometric Facial Image): আবেদনকারীর আন্তর্জাতিক মানসম্মত (ISO/IEC 19794-5) ডিজিটাল মুখাবয়বের রঙিন ছবি, যা ই-গেটে লাইভ ক্যামেরার সাথে ১০০% স্বয়ংক্রিয়ভাবে মেলানো হয়।\n৩. DG3 (Biometric Fingerprints): সুরক্ষিত ডাটা গ্রুপ যাতে আবেদনকারীর দুই হাতের বৃদ্ধাঙ্গুল বা তর্জনীর ডিজিটাল মিনুসিয়া/টেমপ্লেট এনক্রিপ্ট করে রাখা হয়। এটি কেবল কড়া নিরাপত্তা সনদ (EAC - Extended Access Control) সম্পন্ন অথরাইজড রিডারই পড়তে পারে।\n৪. SOD (Security Object Document): সকল ডাটা গ্রুপের ডিজিটাল হ্যাশ মান এবং ইস্যুকারী দেশ বাংলাদেশ সরকারের ডিজিটাল স্বাক্ষর (Document Signer Certificate) ধারণ করে।",
    "points_to_remember": [
      "DG1 = MRZ | DG2 = Face Biometrics | DG3 = Fingerprint Biometrics | SOD = Digital Signature.",
      "ই-গেট দিয়ে মাত্র ২০-৩০ সেকেন্ডে প্যাসেঞ্জার ক্লিয়ারেন্স সম্পন্ন হয়।"
    ],
    "tags": ["passport_tech", "specialized", "biometrics", "bpsc_written"]
  },
  {
    id: 1020,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "ডেস্কটপ কম্পিউটারে 'No Display' (পিসিতে বিদ্যুৎ পায় কিন্তু মনিটরে কোনো ছবি আসে না) সমস্যা সমাধানের জন্য একজন সিস্টেম মেইনটেন্যান্স ইঞ্জিনিয়ার হিসেবে আপনার সিস্টেমেটিক ডায়াগনস্টিক ট্রাবলশুটিং স্টেপসমূহ ক্রমানুসারে লিখুন।",
    "marks": 7,
    "answer": "'No Display' সমস্যার সিস্টেমেটিক ট্রাবলশুটিং মেথডোলজি:\n\nধাপ ১: বাহ্যিক মনিটর ও ক্যাবল সংযোগ যাচাই (Physical & Cable Check):\n• মনিটরে পাওয়ার এলইডি জ্বলছে কিনা এবং 'No Signal' মেসেজ দিচ্ছে কিনা পরীক্ষা করুন।\n• ভিজিএ (VGA), ডিভিআই (DVI) বা এইচডিএমআই (HDMI) ক্যাবলটি অন্য পিসিতে টেস্ট করুন বা পরিবর্তন করুন।\n• ক্যাবলটি মাদারবোর্ডের অনবোর্ড পোর্টের বদলে ডেডিকেটেড গ্রাফিক্স কার্ডের পোর্টে লাগানো আছে কিনা তা নিশ্চিত হোন।\n\nধাপ ২: পোস্ট ডায়াগনস্টিক ও বিপ কোড পর্যবেক্ষণ (POST & Beep Sound):\n• ক্যাবিনেট স্পিকারের বিপ সাউন্ড শুনুন। যদি কোনো অবিরাম দীর্ঘ বিপ (Continuous Long Beep) হয়, তবে তা র‍্যাম সংযোগহীনতার লক্ষণ। ১ লং ২ শর্ট বিপ হলে গ্রাফিক্স কার্ডে সমস্যা।\n\nধাপ ৩: র‍্যাম (RAM) ক্লিনিং ও রিসেটিং (সবচেয়ে সাধারণ কারণ):\n• বিদ্যুৎ সংযোগ বিচ্ছিন্ন করে ক্যাবিনেট খুলুন এবং সাবধানে র‍্যাম মডিউলগুলো আনল্যাচ করে বের করুন।\n• সাধারণ সফট পেন্সিল ইরেজার (Rubber) দিয়ে র‍্যামের সোনালী কানেক্টিং পিনগুলো আলতোভাবে ঘষে কার্বন বা অক্সিডেশন পরিষ্কার করুন। লিন্ট-ফ্রি কাপড় দিয়ে মুছে নিন।\n• মাদারবোর্ডের র‍্যাম স্লট নরম ব্রাশ বা এয়ার ব্লোয়ার দিয়ে পরিষ্কার করে র‍্যামটি দৃঢ়ভাবে চাপ দিয়ে পুনরায় স্থাপন করুন।\n• একাধিক র‍্যাম থাকলে একটি একটি করে ভিন্ন ভিন্ন স্লটে লাগিয়ে টেস্ট করুন।\n\nধাপ ৪: সিমস (CMOS) রিসেট:\n• মাদারবোর্ডের CR2032 কয়েন ব্যাটারিটি খুলে ৫ মিনিট অপেক্ষা করুন অথবা 'Clear CMOS' জাম্পার শর্ট করুন। এতে ভুল ক্লকিং বা মেমোরি সেটিংস ফ্যাক্টরি ডিফল্টে ফিরে যাবে।\n\nধাপ ৫: পাওয়ার সাপ্লাই (SMPS) ও প্রসেসর পরীক্ষা:\n• এসএমপিএসের +12V CPU লাইন ঠিকমতো ভোল্টেজ দিচ্ছে কিনা মাল্টিমিটার দিয়ে মাপুন।\n• প্রসেসর কুলার ফ্যান ঠিকমতো ঘুরছে কিনা এবং প্রসেসর স্পর্শ করে হালকা গরম অনুভূত হচ্ছে কিনা যাচাই করুন (সম্পূর্ণ ঠান্ডা থাকলে প্রসেসর বিদ্যুৎ পাচ্ছে না)।",
    "points_to_remember": [
      "No Display সমস্যার ৯০% কারণ র‍্যামের পিনে ধুলা/অক্সিডেশন জমা।",
      "ইরেজার দিয়ে সোনালী পিন পরিষ্কার করা পেশাদার ফিল্ড ইঞ্জিনিয়ারদের স্ট্যান্ডার্ড প্র্যাকটিস।"
    ],
    "tags": ["troubleshooting", "hardware", "maintenance", "practical"]
  }
];

const existingWrittenIds = new Set(written.map(q => q.id));
comprehensiveTechnicalWritten.forEach(q => {
  if (!existingWrittenIds.has(q.id)) {
    written.push(q);
    existingWrittenIds.add(q.id);
  }
});

fs.writeFileSync(writtenFilePath, JSON.stringify(written, null, 2), 'utf8');
console.log(`Updated Technical Written Questions: Total count is now ${written.length}`);
