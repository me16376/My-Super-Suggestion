const fs = require('fs');
const path = require('path');

const mcqFilePath = path.join(__dirname, '../data/preliminary/technical_computer_mcq.json');
const writtenFilePath = path.join(__dirname, '../data/written/technical_written.json');

let mcqs = JSON.parse(fs.readFileSync(mcqFilePath, 'utf8'));
let written = JSON.parse(fs.readFileSync(writtenFilePath, 'utf8'));

const finalTechnicalBatch = [
  {
    "id": 186,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "স্ট্যান্ডার্ড ইথারনেট ফ্রেমে (Ethernet Frame) ডেটা পেলোডের (Payload/MTU) সর্বোচ্চ আকার কত বাইট?",
    "options": [
      "A) 64 bytes",
      "B) 512 bytes",
      "C) 1500 bytes",
      "D) 4096 bytes"
    ],
    "answer": 2,
    "explanation": "স্ট্যান্ডার্ড ইথারনেট ফ্রেমে ডেটা পেলোডের সর্বনিম্ন আকার ৪৬ বাইট এবং সর্বোচ্চ আকার ১৫০০ বাইট (MTU - Maximum Transmission Unit)। পুরো ফ্রেমের আকার ৬৪ থেকে ১৫১৮ বাইট।",
    "tags": ["networking", "ethernet", "mtu"]
  },
  {
    "id": 187,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "উইন্ডোজ ক্লায়েন্ট পিসি যখন নেটওয়ার্কে কোনো DHCP সার্ভার খুঁজে পায় না, তখন স্বয়ংক্রিয়ভাবে কোন আইপি রেঞ্জ (APIPA) থেকে আইপি গ্রহণ করে?",
    "options": [
      "A) 127.0.0.0/8",
      "B) 169.254.0.0/16",
      "C) 192.168.1.0/24",
      "D) 10.0.0.0/8"
    ],
    "answer": 1,
    "explanation": "APIPA (Automatic Private IP Addressing) রেঞ্জ হলো 169.254.0.1 হতে 169.254.255.254। পিসিতে এই আইপি দেখালে বুঝতে হবে পিসিটি লোকাল DHCP সার্ভার থেকে আইপি পাচ্ছে না।",
    "tags": ["networking", "troubleshooting", "apipa"]
  },
  {
    "id": 188,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "USB 3.0 (SuperSpeed USB) পোর্টের সর্বোচ্চ ডেটা স্থানান্তর গতি কত?",
    "options": [
      "A) 480 Mbps",
      "B) 1.5 Gbps",
      "C) 5 Gbps",
      "D) 10 Gbps"
    ],
    "answer": 2,
    "explanation": "USB 2.0 এর গতি 480 Mbps (High Speed)। USB 3.0 (SuperSpeed) নীল রঙের পোর্ট দিয়ে চেনা যায় এবং এর তাত্ত্বিক সর্বোচ্চ গতি 5 Gbps। USB 3.1 Gen 2 এর গতি 10 Gbps।",
    "tags": ["hardware", "usb", "ports"]
  },
  {
    "id": 189,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "৪টি ভেরিয়েবল বিশিষ্ট একটি কারণো ম্যাপ (4-Variable K-Map)-এ মোট কতটি সেল বা খোপ থাকে?",
    "options": [
      "A) ৪টি",
      "B) ৮টি",
      "C) ১৬টি",
      "D) ৩২টি"
    ],
    "answer": 2,
    "explanation": "K-Map এ সেলের সংখ্যা সূত্র: 2^n (যেখানে n হলো ভ্যারিয়েবল সংখ্যা)। এখানে n = 4, সুতরাং সেল সংখ্যা = 2^4 = ১৬টি।",
    "tags": ["digital_logic", "kmap"]
  },
  {
    "id": 190,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "লিনাক্স ফাইল সিস্টেমে একটি ফাইলের মেটাডাটা (সাইজ, ওনার, পারমিশন, ডিস্ক ব্লক লোকেশন) কোথায় সংরক্ষিত থাকে?",
    "options": [
      "A) Superblock",
      "B) Inode (Index Node)",
      "C) Boot block",
      "D) Swap space"
    ],
    "answer": 1,
    "explanation": "লিনাক্সে প্রতিটি ফাইলের জন্য একটি অনন্য Inode নম্বর থাকে যা ফাইলের নাম ব্যতীত বাকি সমস্ত মেটাডাটা (মালিকানা, অনুমতি, সময় ও ডেটা ব্লকের অ্যাড্রেস) সংরক্ষণ করে।",
    "tags": ["linux", "os", "filesystem"]
  },
  {
    "id": 191,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "ক্রিটিক্যাল সেকশন (Critical Section) সমস্যা সমাধানে সিঙ্ক্রোনাইজেশনের জন্য Dijkstra উদ্ভাবিত ইন্টিজার ভ্যারিয়েবলকে কী বলে?",
    "options": [
      "A) Monitor",
      "B) Semaphore",
      "C) Mutex Lock",
      "D) Thread"
    ],
    "answer": 1,
    "explanation": "সেমাফোর (Semaphore) হলো একটি সিঙ্ক্রোনাইজেশন টুল যা দুটি স্ট্যান্ডার্ড পারমাণবিক (Atomic) অপারেশন 'wait()' (বা P) এবং 'signal()' (বা V)-এর মাধ্যমে প্রসেসের শেয়ার্ড রিসোর্স অ্যাক্সেস নিয়ন্ত্রণ করে।",
    "tags": ["os_theory", "concurrency"]
  },
  {
    "id": 192,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "এসকিউএল-এ 'VIEW' এর মূল সুবিধা কোনটি?",
    "options": [
      "A) এটি ডিস্কে অতিরিক্ত ফিজিক্যাল জায়গা নেয়",
      "B) এটি ভার্চুয়াল টেবিল হিসেবে কাজ করে যা জটিল কুয়েরিকে সরল করে এবং ডেটা নিরাপত্তা বৃদ্ধি করে",
      "C) এটি প্রাইমারি কি মুছে ফেলে",
      "D) ব্যাকআপ নষ্ট করে"
    ],
    "answer": 1,
    "explanation": "ভিউ (View) কোনো ফিজিক্যাল ডেটা স্টোর করে না; এটি একটি সংরক্ষিত ভার্চুয়াল কুয়েরি যা ব্যবহারকারীর কাছে নির্দিষ্ট কলাম প্রকাশ করে নিরাপত্তা নিশ্চিত করে এবং জটিল কোড সহজে বারবার রান করতে দেয়।",
    "tags": ["dbms", "sql", "views"]
  },
  {
    "id": 193,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "ডাটাবেজে কনকারেন্সি কন্ট্রোলের জন্য 'Two-Phase Locking (2PL)' প্রোটোকলে কয়টি ফেজ থাকে?",
    "options": [
      "A) ১টি",
      "B) ২টি: Growing Phase এবং Shrinking Phase",
      "C) ৩টি",
      "D) ৪টি"
    ],
    "answer": 1,
    "explanation": "2PL প্রোটোকলে দুটি পর্যায় থাকে: ১. Growing Phase (লক কেবল অর্জন করা যায়, কোনো লক রিলিজ করা যায় না), ২. Shrinking Phase (লক কেবল ছাড়া যায়, কোনো নতুন লক নেওয়া যায় না)। এটি সিরিয়ালাইজেবিলিটি নিশ্চিত করে।",
    "tags": ["dbms", "transactions", "locking"]
  },
  {
    "id": 194,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "ফিঙ্গারপ্রিন্ট ডাটাবেজে আঙুলের ছাপের ইমেজ সংরক্ষণে এফবিআই ও আন্তর্জাতিক মানের কম্প্রেশন অ্যালগরিদম কোনটি?",
    "options": [
      "A) JPEG",
      "B) WSQ (Wavelet Scalar Quantization)",
      "C) PNG",
      "D) GIF"
    ],
    "answer": 1,
    "explanation": "WSQ (Wavelet Scalar Quantization) হলো ৫০০ ডিপিআই গ্রেস্কেল ফিঙ্গারপ্রিন্ট ইমেজের জন্য FBI ও ICAO কর্তৃক অনুমোদিত প্রমিত কম্প্রেশন ফরম্যাট। সাধারণ JPEG যেখানে সূক্ষ্ম খাঁজ নষ্ট করে ফেলে, WSQ সেখানে মিনুসিয়া অক্ষত রেখে ১৫:১ অনুপাতে ডেটা সংকুচিত করে।",
    "tags": ["passport_tech", "biometrics", "specialized"]
  },
  {
    "id": 195,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "কম্পিউটারের পাওয়ার সাপ্লাইতে (SMPS) 'Power Good' সিগন্যাল তারের রঙ কী এবং এর গুরুত্ব কী?",
    "options": [
      "A) লাল তার; সিপিইউ গরম করে",
      "B) ধূসর (Gray) তার; ভোল্টেজ স্থিতিশীল হলে মাদারবোর্ডকে বুট করার সংকেত পাঠায় (+5V)",
      "C) কালো তার; আর্থিং দেয়",
      "D) নীল তার; ফ্যান বন্ধ করে"
    ],
    "answer": 1,
    "explanation": "Power Good তারটি ধূসর (Gray wire - Pin 8)। এসএমপিএস অন হওয়ার পর সকল ডিসি ভোল্টেজ (+12V, +5V, +3.3V) স্থির হলে এটি মাদারবোর্ডে +5V সিগন্যাল পাঠায়, যার পর প্রসেসর রিসেট ছেড়ে বুট প্রক্রিয়া শুরু করে।",
    "tags": ["hardware", "smps", "maintenance"]
  },
  {
    "id": 196,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "বায়োমেট্রিক ই-গেটে (e-Gate) পাসপোর্ট স্ক্যান ও যাত্রীর ফেসিয়াল ভেরিফিকেশনের সময় কোন ম্যাচিং মোড ব্যবহৃত হয়?",
    "options": [
      "A) 1:N Identification (সকলের মাঝে খোঁজা)",
      "B) 1:1 Verification (পাসপোর্ট চিপের ছবির সাথে ক্যামেরার লাইভ ছবির সত্যতা যাচাই)",
      "C) N:M Clustering",
      "D) Manual Signature Match"
    ],
    "answer": 1,
    "explanation": "ই-গেটে 1:1 ভেরিফিকেশন হয়: যাত্রী যে পাসপোর্ট উপস্থাপন করেছেন তার চিপের ভেতরের অফিশিয়াল ছবির (DG2) সাথে লাইভ ই-গেট ক্যামেরায় ধারণ করা যাত্রীর মুখের মিল নিখুঁতভাবে পরীক্ষা করা হয়।",
    "tags": ["passport_tech", "biometrics", "egate"]
  },
  {
    "id": 197,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Cyber Security & Maintenance",
    "question": "ক্রিপ্টোগ্রাফিতে AES (Advanced Encryption Standard) কোন ধরনের সাইফার এবং এর কি-সাইজ (Key Size) কত হতে পারে?",
    "options": [
      "A) Asymmetric Cipher; 1024 bit",
      "B) Symmetric Block Cipher; 128, 192 অথবা 256 bits",
      "C) Hash Function; 512 bit",
      "D) Stream Cipher; 64 bit"
    ],
    "answer": 1,
    "explanation": "AES হলো একটি সিমেট্রিক ব্লক সাইফার যা ১২৮ বিটের ডেটা ব্লককে ১২৮, ১৯২ অথবা ২৫৬ বিটের গোপন চাবি দিয়ে এনক্রিপ্ট করে। এটি বর্তমান বিশ্বের সরকার ও নিরাপত্তা সংস্থাগুলোর ডি-ফ্যাক্টো স্ট্যান্ডার্ড।",
    "tags": ["security", "cryptography", "aes"]
  },
  {
    "id": 198,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Cyber Security & Maintenance",
    "question": "কোন নেটওয়ার্ক আক্রমণ পদ্ধতিতে আক্রমণকারী প্রেরক ও প্রাপকের মধ্যবর্তী ডেটা প্যাকেট গোপনে আড়ি পেতে শোনে বা বিকৃত করে?",
    "options": [
      "A) Denial of Service (DoS)",
      "B) Man-in-the-Middle (MitM) Attack",
      "C) Ransomware",
      "D) Brute Force Attack"
    ],
    "answer": 1,
    "explanation": "MitM (Man-in-the-Middle) আক্রমণে হ্যাকার যোগাযোগের দুই পক্ষের অজান্তেই তাদের মাঝে অবস্থান নিয়ে ডেটা চুরি বা রূপান্তর করে (যেমন: ARP Spoofing বা Rogue Wi-Fi দিয়ে)। এটি ঠেকাতে SSL/TLS এনক্রিপশন আবশ্যক।",
    "tags": ["security", "mitm"]
  },
  {
    "id": 199,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "উইন্ডোজ ক্লায়েন্ট পিসির জন্য ল্যান নেটওয়ার্কে স্ট্যাটিক আইপি কনফিগারেশনে নিচের কোন তথ্যটি প্রদান করা বাধ্যতামূলক নয়?",
    "options": [
      "A) IP Address",
      "B) Subnet Mask",
      "C) Default Gateway",
      "D) WINS Server"
    ],
    "answer": 3,
    "explanation": "ইন্টারনেট বা নেটওয়ার্ক যোগাযোগের জন্য IP Address, Subnet Mask এবং Default Gateway অত্যাবশ্যক। WINS Server হলো প্রাচীন নেটবায়োস রেজল্যুশন সার্ভিস যা বর্তমান আধুনিক TCP/IP নেটওয়ার্কে অপশনাল।",
    "tags": ["networking", "configuration"]
  },
  {
    "id": 200,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "কম্পিউটারের মাদারবোর্ডে কোন উপাদানটি প্রসেসরের গতিকে সামঞ্জস্যপূর্ণ রাখতে নির্দিষ্ট সময় পর পর ইলেকট্রিক্যাল ক্লক পালস তৈরি করে?",
    "options": [
      "A) CMOS Battery",
      "B) Quartz Crystal Oscillator",
      "C) Heat Sink",
      "D) VRM Chip"
    ],
    "answer": 1,
    "explanation": "কোয়ার্টজ ক্রিস্টাল অসিলেটর (Quartz Crystal Oscillator) একটি নির্দিষ্ট রেজোন্যান্ট ফ্রিকোয়েন্সিতে অত্যন্ত সুনির্দিষ্ট ইলেকট্রনিক ক্লক পালস তৈরি করে, যার ওপর ভিত্তি করে CPU ও বাসের ঘড়ির গতি (ক্লক স্পিড যেমন 3.2 GHz) নির্ধারিত হয়।",
    "tags": ["hardware", "components"]
  }
];

const existingIds = new Set(mcqs.map(q => q.id));
finalTechnicalBatch.forEach(q => {
  if (!existingIds.has(q.id)) {
    mcqs.push(q);
    existingIds.add(q.id);
  }
});

fs.writeFileSync(mcqFilePath, JSON.stringify(mcqs, null, 2), 'utf8');
console.log(`Final Technical MCQs: Total count is now ${mcqs.length} (TARGET REACHED 100!)`);

// 5 more Technical Written to complete 25 comprehensive written solutions
const finalTechnicalWrittenBatch = [
  {
    "id": 1021,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "ক্যাশ মেমোরির 'Cache Hit' এবং 'Cache Miss' কী? গড় মেমোরি অ্যাক্সেস টাইম (AMAT - Average Memory Access Time) গণনার সূত্রটি লিখুন এবং একটি গাণিতিক উদাহরণ সমাধান করুন:\nক্যাশ অ্যাক্সেস টাইম = 2 ns, প্রধান মেমোরি অ্যাক্সেস টাইম = 50 ns, এবং ক্যাশ হিট রেট = 95% হলে AMAT নির্ণয় করুন।",
    "marks": 7,
    "answer": "• Cache Hit ও Cache Miss:\n- Cache Hit: যখন সিপিইউ কোনো ডেটা বা ইন্সট্রাকশন খুঁজতে যায় এবং তা ক্যাশ মেমোরির মধ্যেই পাওয়া যায়, তখন তাকে Cache Hit বলে।\n- Cache Miss: যখন কাঙ্ক্ষিত ডেটা ক্যাশে অনুপস্থিত থাকে এবং সিপিইউকে ধীরগতির প্রধান মেমোরি (RAM) থেকে ডেটা আনতে হয়, তখন তাকে Cache Miss বলে।\n\n• AMAT (Average Memory Access Time) গণনার সূত্র:\nAMAT = Hit Time + (Miss Rate × Miss Penalty)\nঅথবা:\nAMAT = (Hit Rate × Hit Time) + (Miss Rate × Main Memory Access Time)\n\n• গাণিতিক সমাধান:\nদেওয়া আছে:\nক্যাশ হিট টাইম (Hit Time) = 2 ns\nপ্রধান মেমোরি টাইম (Miss Penalty) = 50 ns\nহিট রেট (Hit Rate, H) = 95% = 0.95\nমিস রেট (Miss Rate, M) = 1 - 0.95 = 0.05 (বা 5%)\n\nমান বসিয়ে:\nAMAT = Hit Time + (Miss Rate × Miss Penalty)\nAMAT = 2 ns + (0.05 × 50 ns)\nAMAT = 2 ns + 2.5 ns\nAMAT = 4.5 ns\n\nউত্তর: গড় মেমোরি অ্যাক্সেস টাইম = ৪.৫ ন্যানোসেকেন্ড (ns)।",
    "points_to_remember": [
      "Miss Rate = 1 - Hit Rate.",
      "AMAT যত কম হবে, সিস্টেমের সামগ্রিক পারফরম্যান্স তত দ্রুত হবে।"
    ],
    "tags": ["architecture", "cache_memory", "math", "bpsc_written"]
  },
  {
    "id": 1022,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Networking & Subnetting",
    "question": "নেটওয়ার্ক ফায়ারওয়াল (Firewall) কী? প্যাকেট ফিল্টারিং ফায়ারওয়াল (Packet Filtering) এবং স্টেটফুল ইন্সপেকশন ফায়ারওয়াল (Stateful Inspection)-এর তুলনামূলক পার্থক্য লিখুন। একটি সরকারি অফিসে DMZ জোনের গুরুত্ব কী?",
    "marks": 7,
    "answer": "• ফায়ারওয়াল (Firewall):\nফায়ারওয়াল হলো একটি নেটওয়ার্ক নিরাপত্তা ডিভাইস (হার্ডওয়্যার বা সফটওয়্যার), যা পূর্বনির্ধারিত নিরাপত্তা বিধিমালার (Security Rules) ভিত্তিতে অভ্যন্তরীণ প্রাইভেট নেটওয়ার্ক এবং বহিঃস্থ অনিরাপদ ইন্টারনেটের মধ্যকার ট্রাফিক পর্যবেক্ষণ ও ফিল্টার করে।\n\n• Packet Filtering বনাম Stateful Inspection পার্থক্য:\n১. কাজের স্তর: প্যাকেট ফিল্টারিং OSI-এর লেয়ার ৩ ও ৪-এ কাজ করে (শুধুমাত্র Source/Destination IP ও Port দেখে)। স্টেটফুল ইন্সপেকশন লেয়ার ৩ থেকে ৭ পর্যন্ত সম্পূর্ণ কানেকশন স্টেট টেবিল ট্র্যাক করে।\n২. কার্যপদ্ধতি: প্যাকেট ফিল্টারিং প্রতিটি প্যাকেটকে স্বাধীনভাবে দেখে (Stateless), ফলে স্পুফিং আক্রমণ ধরতে পারে না। স্টেটফুল ফায়ারওয়াল কোনো প্যাকেট বৈধ প্রতিষ্ঠিত সংযোগের (TCP Handshake) অংশ কিনা তা যাচাই করে।\n৩. গতি ও নিরাপত্তা: প্যাকেট ফিল্টারিং দ্রুত হলেও কম নিরাপদ; স্টেটফুল কিছুটা প্রসেসিং নিলেও বহুগুণ বেশি নিরাপদ।\n\n• DMZ (Demilitarized Zone)-এর গুরুত্ব:\nপাসপোর্ট অফিসের ওয়েব পোর্টাল, অনলাইন পাসপোর্ট আবেদন সার্ভার এবং পাবলিক ডিএনএস সার্ভারকে অভ্যন্তরীণ অফিস ল্যান থেকে পৃথক করে DMZ-এ রাখা হয়। ফলে বাইরের কোনো হ্যাকার যদি পাবলিক ওয়েব সার্ভার হ্যাকও করে, তবুও সে অভ্যন্তরীণ মূল পাসপোর্ট ও বায়োমেট্রিক ডাটাবেজে প্রবেশ করতে পারবে না।",
    "points_to_remember": [
      "Stateless = শুধুমাত্র আইপি/পোর্ট দেখে | Stateful = কানেকশনের অবস্থা পর্যবেক্ষণ করে।",
      "DMZ বহিঃস্থ আক্রমণ থেকে ইন্টারনাল ল্যানকে রক্ষা করে।"
    ],
    "tags": ["networking", "security", "firewall", "written"]
  },
  {
    "id": 1023,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "লিনাক্স অপারেটিং সিস্টেমে সিস্টেম অ্যাডমিনিস্ট্রেশনের জন্য নিচের কমান্ডগুলোর কাজ উদাহরণসহ ব্যাখ্যা করুন:\n(ক) grep  (খ) systemctl  (গ) tar  (ঘ) netstat  (ঙ) crontab",
    "marks": 7,
    "answer": "লিনাক্স অ্যাডমিনিস্ট্রেশন কমান্ডসমূহের ব্যাখ্যা:\n\n(ক) grep (Global Regular Expression Print):\n• কাজ: ফাইল বা টেক্সট আউটপুটের মধ্যে নির্দিষ্ট প্যাটার্ন বা শব্দ খোঁজার জন্য ব্যবহৃত হয়।\n• উদাহরণ: `grep 'error' /var/log/syslog` (লগ ফাইল থেকে এরর লাইনগুলো প্রদর্শন করে)।\n\n(খ) systemctl:\n• কাজ: লিনাক্সের Systemd সার্ভিসসমূহ নিয়ন্ত্রণ (স্টার্ট, স্টপ, রিস্টার্ট, এনাবল) করতে ব্যবহৃত হয়।\n• উদাহরণ: `sudo systemctl restart apache2` (ওয়েব সার্ভার রিস্টার্ট করা)।\n\n(গ) tar (Tape Archive):\n• কাজ: একাধিক ফাইল বা ডিরেক্টরিকে একটি একক আর্কাইভে রূপান্তর ও কম্প্রেস করতে ব্যবহৃত হয়।\n• উদাহরণ: `tar -czvf backup.tar.gz /var/www/html` (ডিরেক্টরি ব্যাকআপ তৈরি করা)।\n\n(ঘ) netstat (Network Statistics):\n• কাজ: সক্রিয় নেটওয়ার্ক সংযোগ, রাউটিং টেবিল এবং লিসেনিং পোর্টসমূহের তথ্য দেখতে ব্যবহৃত হয়।\n• উদাহরণ: `netstat -tulnp` (কোন কোন পোর্টে কোন সার্ভিস চলছে তা PID সহ প্রদর্শন করে)।\n\n(ঙ) crontab (Cron Table):\n• কাজ: নির্ধারিত সময়সূচি অনুযায়ী কোনো স্ক্রিপ্ট বা ব্যাকআপ স্বয়ংক্রিয়ভাবে রান করার শিডিউলার।\n• উদাহরণ: `0 2 * * * /scripts/db_backup.sh` (প্রতিদিন রাত ২:০০ টায় ডাটাবেজ ব্যাকআপ নেওয়া)।",
    "points_to_remember": [
      "grep = সার্চ | systemctl = সার্ভিস কন্ট্রোল | tar = আর্কাইভ | netstat = পোর্ট মনিটরিং | crontab = শিডিউলিং।"
    ],
    "tags": ["linux", "commands", "server_admin", "written"]
  },
  {
    "id": 1024,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "রিলেশনাল ডাটাবেজের কনকারেন্সি কন্ট্রোলে 'Dirty Read', 'Lost Update' এবং 'Non-repeatable Read' কী? ডাটাবেজে লক ব্যবহারের মাধ্যমে কীভাবে এগুলো প্রতিরোধ করা যায়?",
    "marks": 7,
    "answer": "কনকারেন্সি কন্ট্রোল সমস্যা ও সমাধান:\nযখন একাধিক ট্রানজেকশন একই ডেটা আইটেমে একসাথে কাজ করে, তখন এই ত্রুটিগুলো দেখা দেয়:\n\n১. Lost Update (হারিয়ে যাওয়া আপডেট):\nদুটি ট্রানজেকশন একই সময়ে একটি ডেটা পড়ে এবং পৃথক মান দিয়ে আপডেট করে। ফলে পরবর্তী আপডেটের কারণে পূর্ববর্তী ট্রানজেকশনের ফলাফল সম্পূর্ণ মুছে যায়।\n\n২. Dirty Read (অবিশ্বস্ত রিড):\nট্রানজেকশন ১ একটি ডেটা আপডেট করল কিন্তু এখনো COMMIT করেনি। এই অবস্থায় ট্রানজেকশন ২ সেই পরিবর্তিত ডেটাটি পড়ে ফেলল। এরপর ট্রানজেকশন ১ কোনো কারণে ROLLBACK করল। ফলে ট্রানজেকশন ২ যে ডেটা পড়েছিল তা অবৈধ হয়ে যায়—এটিকে ডার্টি রিড বলে।\n\n৩. Non-repeatable Read (অসঙ্গতিপূর্ণ পুনরাবৃত্তি):\nট্রানজেকশন ১ একটি রেকর্ড পড়ার পর, ট্রানজেকশন ২ সেই রেকর্ডটি আপডেট বা ডিলিট করে COMMIT করল। এরপর ট্রানজেকশন ১ পুনরায় সেই রেকর্ড পড়তে গিয়ে ভিন্ন মান পেল।\n\n• লকিং (Locking) মেকানিজম দ্বারা সমাধান:\n- Shared Lock (S-Lock / Read Lock): একাধিক ট্রানজেকশন একই সাথে পড়তে পারে, কিন্তু কেউ রাইট বা মডিফাই করতে পারে না।\n- Exclusive Lock (X-Lock / Write Lock): একটি ডেটা আইটেমে কেবল একটি ট্রানজেকশন রাইট লক নিতে পারে; লক মুক্ত না হওয়া পর্যন্ত অন্য কেউ পড়তে বা লিখতে পারবে না।\n- Strict 2-Phase Locking (Strict 2PL) প্রোটোকল ব্যবহার করে ট্রানজেকশন শেষ (Commit/Rollback) না হওয়া পর্যন্ত সকল Exclusive Lock ধরে রেখে ডার্টি রিড ও লস্ট আপডেট শতভাগ প্রতিরোধ করা হয়।",
    "points_to_remember": [
      "Dirty Read = আনকমিটেড ডেটা পড়া।",
      "Strict 2PL ট্রানজেকশন কমিট না হওয়া পর্যন্ত এক্সক্লুসিভ লক রিলিজ করে না।"
    ],
    "tags": ["dbms", "transactions", "concurrency", "written"]
  },
  {
    "id": 1025,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "বহিরাগমন ও পাসপোর্ট অধিদপ্তরের স্বয়ংক্রিয় সীমান্ত নিয়ন্ত্রণ (ABC - Automated Border Control) বা 'ই-গেট (e-Gate)'-এর কর্মপ্রণালী, হার্ডওয়্যার উপাদান এবং ই-গেটে প্যাসেঞ্জার ভেরিফিকেশন ফেইল করলে ট্রাবলশুটিং প্রোটোকল বর্ণনা করুন।",
    "marks": 8,
    "answer": "ই-গেট (e-Gate) কর্মপ্রণালী ও প্রযুক্তিগত ব্যবস্থাপনা:\n\n১. ই-গেটের প্রধান হার্ডওয়্যার উপাদানসমূহ:\n• অপটিক্যাল ডকুমেন্ট রিডার (Optical Document Reader with MRZ & UV/IR light sensors)\n• আরএফআইডি চিপ রিডার (RFID Smart Antenna - 13.56 MHz, ISO 14443)\n• লাইভ বায়োমেট্রিক ক্যামেরা (Live Biometric Facial Capture Camera with motorized height adjustment)\n• অপটিক্যাল সেফটি সেন্সর ও টেলগেটিং ডিটেকশন (Tailgating Prevention Sensor)\n• ফিজিক্যাল ইন্টারলকিং ফ্লাপ ডোর (Plexiglass Barrier Gates)\n• স্ট্যাটাস ডিসপ্লে মনিটর ও গ্রিন/রেড এলইডি ইন্ডিকেটর\n\n২. ই-গেটের ধারাবাহিক কর্মপ্রণালী (Step-by-Step Flow):\n- ধাপ ১ (ডকুমেন্ট প্লেসমেন্ট): যাত্রী ই-গেটের রিডারে তাঁর ই-পাসপোর্টের ডেটা পেজ স্থাপন করেন।\n- ধাপ ২ (MRZ ও সিকিউরিটি স্ক্যান): অপটিক্যাল সেন্সর সেকেন্ডের মধ্যে MRZ টেক্সট পড়ে ফেলে এবং UV/IR আলো দিয়ে ওয়াটারমার্ক ও হলোগ্রামের সত্যতা যাচাই করে।\n- ধাপ ৩ (আরএফআইডি চিপ ডেটা রিড): আরএফআইডি চিপ থেকে এনক্রিপ্টেড পদ্ধতিতে DG1 (MRZ) এবং DG2 (ডিজিটাল ছবি) রিড করে এবং ডিজিটাল সিগনেচার (PA/AA) যাচাই করে প্রথম গেট খুলে দেয়।\n- ধাপ ৪ (লাইভ ফেসিয়াল ভেরিফিকেশন): যাত্রী প্রবেশ করার পর ক্যামেরা যাত্রীর লাইভ মুখের ছবি তোলে এবং চিপে থাকা ডিজিটালি সাইন করা ছবির সাথে 1:1 বায়োমেট্রিক ফেসিয়াল ম্যাচিং অ্যালগরিদম চালায়।\n- ধাপ ৫ (ইমিগ্রেশন ডাটাবেজ চেক ও গেট ওপেন): সেন্ট্রাল সার্ভারে ব্ল্যাকলিস্ট/স্টপ লিস্ট চেক করে কোনো আপত্তি না থাকলে ২য় এক্সিট গেট খুলে যায় এবং প্যাসেঞ্জার ক্লিয়ারেন্স সম্পন্ন হয় (পুরো প্রক্রিয়াটি সম্পন্ন হতে মাত্র ১৫-২৫ সেকেন্ড লাগে)।\n\n৩. ভেরিফিকেশন ফেইল করলে ট্রাবলশুটিং পদক্ষেপ:\n- অপটিক্যাল রিডার পরিষ্কারকরণ: রিডারের কাঁচে আঙুলের ছাপ বা তেল জমলে MRZ মিসরিড হতে পারে; IPA ও মাইক্রোফাইবার দিয়ে পরিষ্কার করতে হবে।\n- চিপ রিডিং ফেইল (No Chip Detected): পাসপোর্টের পাতা ঠিকমতো সোজা করে রিডারে চাপ দিয়ে ধরতে হবে; চিপ ড্যামেজ থাকলে ম্যানুয়াল কাউন্টারে পাঠাতে হবে।\n- ফেসিয়াল ম্যাচিং রিজেকশন (FRR): যাত্রীকে চশমা, টুপি, মাস্ক খুলতে বলতে হবে এবং ক্যামেরার অতিরিক্ত ব্যাকলাইট বা সরাসরি সূর্যের আলো প্রতিরোধ করতে ব্লাইন্ডার বা ক্যামেরা ফোকাস রিসেট করতে হবে।",
    "points_to_remember": [
      "ই-গেট সম্পূর্ণ কন্ট্যাক্টলেস বায়োমেট্রিক যাচাই সম্পন্ন করে।",
      "ই-গেটের তিনটি মূল নিরাপত্তা স্তম্ভ: MRZ Validation, Chip Cryptographic Authentication, এবং 1:1 Live Face Match।"
    ],
    "tags": ["passport_tech", "egate", "specialized", "practical", "written"]
  }
];

const existingWrittenIds = new Set(written.map(q => q.id));
finalTechnicalWrittenBatch.forEach(q => {
  if (!existingWrittenIds.has(q.id)) {
    written.push(q);
    existingWrittenIds.add(q.id);
  }
});

fs.writeFileSync(writtenFilePath, JSON.stringify(written, null, 2), 'utf8');
console.log(`Final Technical Written Questions: Total count is now ${written.length} (TARGET REACHED 25!)`);
