const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');

// Let's run generate_questions.js first
require('./generate_questions.js');

const prelimPath = path.join(baseDir, 'data/preliminary_mcq.json');
let allPrelim = JSON.parse(fs.readFileSync(prelimPath, 'utf8'));

// More Computer Trade MCQs
const extraComputerTrade = [
  {
    id: 40031,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মেমরি ও স্টোরেজ",
    question: "কম্পিউটারের প্রসেসর এবং প্রধান মেমরি (RAM)-এর মধ্যে গতির ভারসাম্য রক্ষা করে কোন মেমরি?",
    options: ["A) Virtual Memory", "B) Cache Memory", "C) Flash Memory", "D) Secondary Memory"],
    answer: 1,
    explanation: "ক্যাশ মেমরি (Cache Memory) অত্যন্ত দ্রুতগতির একটি বাফার মেমরি, যা CPU এবং RAM-এর মধ্যকার গতির ব্যবধান দূর করে ঘন ঘন ব্যবহৃত ডেটা ধারণ করে।",
    tags: ["computer_trade", "memory", "cache"]
  },
  {
    id: 40032,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "হার্ডওয়্যার ও আর্কিটেকচার",
    question: "মাদারবোর্ডের বিভিন্ন চিপসেট ও প্রসেসরের মধ্যে ডেটা পরিবহনের বৈদ্যুতিক পথকে কী বলে?",
    options: ["A) Port", "B) System Bus", "C) Cable", "D) Slot"],
    answer: 1,
    explanation: "কম্পিউটারের ভেতরে ডেটা, অ্যাড্রেস ও কন্ট্রোল সিগন্যাল আদান-প্রদানের জন্য ব্যবহৃত পরিবাহী তারের সমাহারকে সিস্টেম বাস (System Bus) বলে।",
    tags: ["computer_trade", "hardware", "bus"]
  },
  {
    id: 40033,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "ইনপুট ও আউটপুট ডিভাইস",
    question: "বারকোড রিডারে কোন প্রযুক্তি ব্যবহার করে পণ্যের তথ্য স্ক্যান করা হয়?",
    options: ["A) রেডিও ওয়েভ", "B) লেজার বা অপটিক্যাল সেন্সর", "C) ম্যাগনেটিক স্ট্রিপ", "D) আল্ট্রাসাউন্ড"],
    answer: 1,
    explanation: "বারকোড রিডার লেজার লাইট বা অপটিক্যাল সেন্সরের মাধ্যমে কাল-সাদা লাইনের প্রতিফলন শনাক্ত করে পণ্যের কোড পাঠ করে।",
    tags: ["computer_trade", "barcode", "hardware"]
  },
  {
    id: 40034,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "অপারেটিং সিস্টেম",
    question: "উইন্ডোজ অপারেটিং সিস্টেমে সরাসরি 'Run' কমান্ড ডায়ালগ বক্স ওপেন করার শর্টকাট কী কোনটি?",
    options: ["A) Win + R", "B) Win + E", "C) Ctrl + R", "D) Alt + R"],
    answer: 0,
    explanation: "উইন্ডোজ কি (Win) + R চাপলে 'Run' ডায়ালগ বক্স ওপেন হয়, যেখান থেকে cmd, excel, winword, calc ইত্যাদি কমান্ড দিয়ে সরাসরি ওপেন করা যায়।",
    tags: ["computer_trade", "windows", "shortcuts"]
  },
  {
    id: 40035,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "অপারেটিং সিস্টেম",
    question: "উইন্ডোজ ফাইল এক্সপ্লোরার (File Explorer) ওপেন করার শর্টকাট কী কোনটি?",
    options: ["A) Win + E", "B) Win + F", "C) Ctrl + E", "D) Alt + E"],
    answer: 0,
    explanation: "উইন্ডোজ কি (Win) + E চাপলে সরাসরি ফাইল এক্সপ্লোরার (This PC) ওপেন হয়।",
    tags: ["computer_trade", "windows", "shortcuts"]
  },
  {
    id: 40036,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট ওয়ার্ড (MS Word)",
    question: "MS Word-এ কোনো শব্দ খুঁজে বের করে অন্য শব্দ দিয়ে প্রতিস্থাপন (Find & Replace) করার শর্টকাট কী কোনটি?",
    options: ["A) Ctrl + F", "B) Ctrl + H", "C) Ctrl + R", "D) Ctrl + G"],
    answer: 1,
    explanation: "Ctrl + H চাপলে 'Find and Replace' উইন্ডো আসে। শুধু খোঁজার (Find) শর্টকাট হলো Ctrl + F।",
    tags: ["computer_trade", "ms_word", "shortcuts"]
  },
  {
    id: 40037,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট ওয়ার্ড (MS Word)",
    question: "ডকুমেন্টে টেক্সটের নিচে আন্ডারলাইন (Underline) দেওয়ার কীবোর্ড শর্টকাট কোনটি?",
    options: ["A) Ctrl + U", "B) Ctrl + I", "C) Ctrl + B", "D) Ctrl + D"],
    answer: 0,
    explanation: "Ctrl + U = Underline, Ctrl + B = Bold, Ctrl + I = Italic.",
    tags: ["computer_trade", "ms_word", "shortcuts"]
  },
  {
    id: 40038,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট এক্সেল (MS Excel)",
    question: "MS Excel-এ অ্যাবসোলিউট সেল রেফারেন্সিং (Absolute Cell Reference) করতে কোন চিহ্নের ব্যবহার করা হয়?",
    options: ["A) #", "B) $", "C) %", "D) &"],
    answer: 1,
    explanation: "এক্সেলে কলাম বা রো ফিক্সড রাখতে ডলার ($) চিহ্ন ব্যবহার করা হয়, যেমন $A$1।",
    tags: ["computer_trade", "ms_excel", "formulas"]
  },
  {
    id: 40039,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট এক্সেল (MS Excel)",
    question: "MS Excel-এ একাধিক সেলকে একত্রিত করে একটি বড় সেলে রূপান্তর করার কমান্ড কোনটি?",
    options: ["A) Wrap Text", "B) Merge & Center", "C) AutoSum", "D) Split Cell"],
    answer: 1,
    explanation: "'Merge & Center' কমান্ডের মাধ্যমে নির্বাচিত একাধিক সেলকে একটি সেলে রূপান্তর করে টেক্সট মাঝখানে বিন্যস্ত করা হয়।",
    tags: ["computer_trade", "ms_excel"]
  },
  {
    id: 40040,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট পাওয়ারপয়েন্ট",
    question: "MS PowerPoint-এ একটি নতুন খালি স্লাইড (New Slide) যুক্ত করার শর্টকাট কী কোনটি?",
    options: ["A) Ctrl + N", "B) Ctrl + M", "C) Ctrl + S", "D) Alt + S"],
    answer: 1,
    explanation: "Ctrl + M হলো পাওয়ারপয়েন্টে নতুন স্লাইড যোগ করার শর্টকাট। Ctrl + N হলো সম্পূর্ণ নতুন প্রেজেন্টেশন ফাইল খোলার শর্টকাট।",
    tags: ["computer_trade", "ms_powerpoint", "shortcuts"]
  },
  {
    id: 40041,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "কম্পিউটার নেটওয়ার্কিং",
    question: "একটি নির্দিষ্ট ভৌগোলিক এলাকায় যেমন একই রুম বা ভবনের কম্পিউটারগুলোর সংযোগকে কী নেটওয়ার্ক বলে?",
    options: ["A) WAN", "B) MAN", "C) LAN", "D) PAN"],
    answer: 2,
    explanation: "LAN = Local Area Network। সীমিত এলাকায় (একই অফিস, স্কুল বা ল্যাবরেটরিতে) এই নেটওয়ার্ক তৈরি করা হয়।",
    tags: ["computer_trade", "networking"]
  },
  {
    id: 40042,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "কম্পিউটার নেটওয়ার্কিং",
    question: "ইন্টারনেটে ডোমেন নামকে (যেমন www.google.com) আইপি অ্যাড্রেসে রূপান্তর করে কোনটি?",
    options: ["A) DHCP", "B) DNS", "C) FTP", "D) SMTP"],
    answer: 1,
    explanation: "DNS = Domain Name System। এটি মানুষের বোধগম্য ডোমেন নামকে কম্পিউটারের পাঠযোগ্য আইপি অ্যাড্রেসে ট্রান্সলেট করে।",
    tags: ["computer_trade", "networking", "dns"]
  },
  {
    id: 40043,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "ইমেইল প্রোটোকল",
    question: "ইমেইল প্রেরণের (Sending Mail) জন্য কোন প্রোটোকলটি ব্যবহৃত হয়?",
    options: ["A) POP3", "B) IMAP", "C) SMTP", "D) HTTP"],
    answer: 2,
    explanation: "SMTP = Simple Mail Transfer Protocol। ইমেইল সার্ভার থেকে অন্য সার্ভারে ইমেইল পাঠানোর কাজে এটি ব্যবহৃত হয়। রিসিভ করতে POP3 বা IMAP ব্যবহৃত হয়।",
    tags: ["computer_trade", "networking", "smtp"]
  },
  {
    id: 40044,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "সাইবার নিরাপত্তা",
    question: "প্রতারণামূলক নকল ইমেইল বা ওয়েবসাইটের মাধ্যমে ব্যবহারকারীর পাসওয়ার্ড বা আর্থিক তথ্য চুরি করার প্রক্রিয়াকে কী বলে?",
    options: ["A) Hacking", "B) Phishing", "C) Spoofing", "D) Cracking"],
    answer: 1,
    explanation: "ফিশিং (Phishing) হলো আসল প্রতিষ্ঠানের মতো দেখতে ভুয়া ফাঁদ তৈরি করে ব্যবহারকারীর গোপন তথ্য হাতিয়ে নেওয়ার সোশ্যাল ইঞ্জিনিয়ারিং কৌশল।",
    tags: ["computer_trade", "cybersecurity", "phishing"]
  },
  {
    id: 40045,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "কম্পিউটার পোর্ট ও ক্যাবল",
    question: "LAN ক্যাবলের মাথায় কোন আরজে (RJ) কানেক্টরটি ব্যবহৃত হয়?",
    options: ["A) RJ-11", "B) RJ-45", "C) RJ-12", "D) USB-C"],
    answer: 1,
    explanation: "ইথারনেট বা LAN ক্যাবলে ৮ পিনের RJ-45 (Registered Jack-45) কানেক্টর ব্যবহৃত হয়। টেলিফোন লাইনে ৪ পিনের RJ-11 ব্যবহৃত হয়।",
    tags: ["computer_trade", "cabling", "networking"]
  },
  {
    id: 40046,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "নাম্বার সিস্টেম",
    question: "হেক্সাডেসিমাল সংখ্যা পদ্ধতিতে 'F' এর সমতুল্য দশমিক (Decimal) মান কত?",
    options: ["A) ১৫", "B) ১৬", "C) ১০", "D) ১৪"],
    answer: 0,
    explanation: "হেক্সাডেসিমালে A=10, B=11, C=12, D=13, E=14 এবং F=15।",
    tags: ["computer_trade", "number_system"]
  },
  {
    id: 40047,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "কম্পিউটার হার্ডওয়্যার",
    question: "কম্পিউটারে ব্যবহৃত SSD এর পূর্ণরূপ কোনটি?",
    options: [
      "A) Solid State Drive",
      "B) Simple Storage Device",
      "C) System Soft Disk",
      "D) Super Speed Drive"
    ],
    answer: 0,
    explanation: "SSD = Solid State Drive। এটি ফ্ল্যাশ মেমরি ভিত্তিক হওয়ায় প্রচলিত মেকানিক্যাল HDD (Hard Disk Drive) এর চেয়ে অনেক দ্রুত ও টেকসই।",
    tags: ["computer_trade", "hardware", "ssd"]
  },
  {
    id: 40048,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "টাইপিং ও কীবোর্ড",
    question: "কীবোর্ডে সাধারণত মোট কতটি ফাংশন কি (Function Keys) থাকে?",
    options: ["A) ১০টি", "B) ১২টি (F1 থেকে F12)", "C) ১৪টি", "D) ৮টি"],
    answer: 1,
    explanation: "স্ট্যান্ডার্ড কিবোর্ডের উপরের সারিতে F1 থেকে F12 পর্যন্ত মোট ১২টি ফাংশন কি থাকে।",
    tags: ["computer_trade", "keyboard"]
  },
  {
    id: 40049,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "উইন্ডোজ ট্রাবলশুটিং",
    question: "উইন্ডোজে কোনো ডকুমেন্টের স্ক্রিনশট নেওয়ার জন্য বিল্ট-ইন টুল কোনটি?",
    options: ["A) Paint", "B) Snipping Tool", "C) Notepad", "D) Calculator"],
    answer: 1,
    explanation: "উইন্ডোজের 'Snipping Tool' (বা Win + Shift + S) দিয়ে স্ক্রিনের যেকোনো অংশের দ্রুত স্ক্রিনশট ও ক্রপ করা যায়।",
    tags: ["computer_trade", "windows", "tools"]
  },
  {
    id: 40050,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "ইন্টারনেট ও সার্চ",
    question: "নিচের কোনটি একটি ওয়েব ব্রাউজার নয়?",
    options: ["A) Google Chrome", "B) Mozilla Firefox", "C) Google Search Engine", "D) Microsoft Edge"],
    answer: 2,
    explanation: "Google মূলত একটি সার্চ ইঞ্জিন। Chrome, Firefox ও Edge হলো ওয়েব ব্রাউজার সফটওয়্যার।",
    tags: ["computer_trade", "internet", "browser"]
  }
];

// More Bangla MCQs
const extraBangla = [
  {
    id: 10016,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সমাস",
    question: "'সিংহাসন' কোন সমাসের অন্তর্গত?",
    options: ["A) মধ্যপদলোপী কর্মধারয়", "B) রূপক কর্মধারয়", "C) উপমিত কর্মধারয়", "D) তৎপুরুষ"],
    answer: 0,
    explanation: "'সিংহ চিহ্নিত আসন' = সিংহাসন। এখানে মাঝের পদ 'চিহ্নিত' লোপ পাওয়ায় এটি মধ্যপদলোপী কর্মধারয় সমাস।",
    tags: ["bangla", "grammar", "samas"]
  },
  {
    id: 10017,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সমাস",
    question: "'পঙ্কজ' কোন সমাসের উদাহরণ?",
    options: ["A) উপপদ তৎপুরুষ", "B) বহুব্রীহি", "C) দ্বিগু", "D) কর্মধারয়"],
    answer: 0,
    explanation: "'পঙ্কে জন্মে যা' = পঙ্কজ। কৃদন্ত পদের পূর্বে উপপদ থাকলে তাকে উপপদ তৎপুরুষ সমাস বলে।",
    tags: ["bangla", "grammar", "samas"]
  },
  {
    id: 10018,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "কারক ও বিভক্তি",
    question: "'মেঘে বৃষ্টি হয়' — এখানে 'মেঘে' কোন কারক?",
    options: ["A) অপাদান কারক", "B) অধিকরণ কারক", "C) করণ কারক", "D) কর্ম কারক"],
    answer: 0,
    explanation: "মেঘ থেকে বৃষ্টি উৎপন্ন বা পতিত হয়, তাই এটি অপাদান কারক।",
    tags: ["bangla", "grammar", "karok"]
  },
  {
    id: 10019,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সন্ধি",
    question: "'ষড়ানন' এর সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["A) ষট্ + আনন", "B) ষড় + আনন", "C) ষট + নন", "D) ষড় + নন"],
    answer: 0,
    explanation: "ষট্ + আনন = ষড়ানন। বর্গের প্রথম বর্ণের পর স্বরবর্ণ থাকলে তা ৩য় বর্ণে (ট্变为ড্/ড়) রূপ নেয়।",
    tags: ["bangla", "grammar", "sandhi"]
  },
  {
    id: 10020,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "বানান শুদ্ধি",
    question: "নিচের কোন বানানগুচ্ছের সবগুলো বানানই শুদ্ধ?",
    options: [
      "A) মরিচীকা, পিপিলিকা",
      "B) মরিচিকা, পিপীলিকা",
      "C) কনিষ্ঠ, সান্ত্বনা, উজ্জ্বল",
      "D) পুরষ্কার, শশ্রুষা"
    ],
    answer: 2,
    explanation: "কনিষ্ঠ, সান্ত্বনা এবং উজ্জ্বল—তিনটি বানানই যথাযথভাবে শুদ্ধ।",
    tags: ["bangla", "grammar", "spelling"]
  },
  {
    id: 10021,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "বিপরীত শব্দ",
    question: "'অর্বাচীন' শব্দের সঠিক বিপরীতার্থক শব্দ কোনটি?",
    options: ["A) প্রাচীন", "B) নবীন", "C) আধুনিক", "D) চঞ্চল"],
    answer: 0,
    explanation: "'অর্বাচীন' অর্থ আধুনিক বা নতুন। এর বিপরীত শব্দ হলো 'প্রাচীন'।",
    tags: ["bangla", "grammar", "antonym"]
  },
  {
    id: 10022,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "বাগধারা",
    question: "'ডুমুরের ফুল' বাগধারাটির সঠিক অর্থ কোনটি?",
    options: ["A) চমৎকার বস্তু", "B) দুর্লভ বস্তু", "C) ক্ষণস্থায়ী বস্তু", "D) মূল্যবান বস্তু"],
    answer: 1,
    explanation: "'ডুমুরের ফুল' বাগধারার অর্থ দুর্লভ বস্তু (যা সহজে দেখা যায় না)।",
    tags: ["bangla", "grammar", "idioms"]
  },
  {
    id: 10023,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সাহিত্য - আধুনিক যুগ",
    question: "মাইকেল মধুসূদন দত্তের অমর মহাকাব্য 'মেঘনাদবধ কাব্য' কত সালে প্রকাশিত হয় এবং এতে কয়টি সর্গ আছে?",
    options: ["A) ১৮৬১ সালে, ৯টি সর্গ", "B) ১৮৫৮ সালে, ৭টি সর্গ", "C) ১৮৬৫ সালে, ৮টি সর্গ", "D) ১৮৬১ সালে, ১২টি সর্গ"],
    answer: 0,
    explanation: "১৮৬১ সালে অমিত্রাক্ষর ছন্দে রচিত বাংলা সাহিত্যের প্রথম সার্থক মহাকাব্য 'মেঘনাদবধ কাব্য' প্রকাশিত হয় এবং এতে ৯টি সর্গ রয়েছে।",
    tags: ["bangla", "literature", "madhusudan"]
  },
  {
    id: 10024,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সাহিত্য - আধুনিক যুগ",
    question: "বাংলা সাহিত্যের অন্যতম শ্রেষ্ঠ ট্র্যাজেডি নাটক 'মীরজাফর' বা 'পলাশীর যুদ্ধ' এর প্রেক্ষাপটে 'সিরাজউদ্দৌলা' নাটকের রচয়িতা কে?",
    options: ["A) গিরিশচন্দ্র ঘোষ", "B) দ্বিজেন্দ্রলাল রায়", "C) মীর মশাররফ হোসেন", "D) সিকান্দার আবু জাফর"],
    answer: 3,
    explanation: "ঐতিহাসিক 'সিরাজউদ্দৌলা' নাটকের রচয়িতা সিকান্দার আবু জাফর।",
    tags: ["bangla", "literature", "drama"]
  },
  {
    id: 10025,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সাহিত্য",
    question: "পল্লীকবি জসীমউদ্দীনের বিখ্যাত শোকগাথা কবিতা 'কবর' তাঁর কোন কাব্যের অন্তর্গত?",
    options: ["A) নকশী কাঁথার মাঠ", "B) রাখালী", "C) বালুচর", "D) সোজন বাদিয়ার ঘাট"],
    answer: 1,
    explanation: "জসীমউদ্দীনের 'কবর' কবিতাটি তাঁর প্রথম কাব্যগ্রন্থ 'রাখালী' (১৯২৭)-তে প্রকাশিত হয়।",
    tags: ["bangla", "literature", "jasimuddin"]
  }
];

// More English MCQs
const extraEnglish = [
  {
    id: 20016,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Appropriate Preposition",
    question: "The teacher congratulated the student ______ his brilliant result.",
    options: ["A) for", "B) on", "C) with", "D) to"],
    answer: 1,
    explanation: "Congratulate somebody 'on' something (অভিনন্দন জানানো)। তাই 'on' বসবে।",
    tags: ["english", "grammar", "preposition"]
  },
  {
    id: 20017,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Appropriate Preposition",
    question: "We should refrain ______ making malicious remarks.",
    options: ["A) to", "B) with", "C) from", "D) of"],
    answer: 2,
    explanation: "Refrain, abstain, prevent ইত্যাদির পর Preposition 'from' বসে।",
    tags: ["english", "grammar", "preposition"]
  },
  {
    id: 20018,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Subject-Verb Agreement",
    question: "Bread and butter ______ his favourite breakfast.",
    options: ["A) are", "B) is", "C) were", "D) have been"],
    answer: 1,
    explanation: "Bread and butter যখন একত্রে একটি খাবার হিসেবে একক ধারণা প্রকাশ করে, তখন ভার্বটি Singular (is) হয়।",
    tags: ["english", "grammar", "subject_verb_agreement"]
  },
  {
    id: 20019,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Voice Change",
    question: "Change into Passive: 'Do not make a noise.'",
    options: [
      "A) Let not a noise be made.",
      "B) You are told not to make noise.",
      "C) Let a noise not made.",
      "D) A noise should not make."
    ],
    answer: 0,
    explanation: "ইম্পারেটিভ নেগেটিভ বাক্যের প্যাসিভ রূপ: Let not + object + be + V3।",
    tags: ["english", "grammar", "voice"]
  },
  {
    id: 20020,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Narration",
    question: "Direct: He said to me, 'Are you reading the book?' Indirect:",
    options: [
      "A) He asked me if I was reading the book.",
      "B) He told me that was I reading the book.",
      "C) He asked me whether am I reading the book.",
      "D) He questioned me if you were reading the book."
    ],
    answer: 0,
    explanation: "Interrogative বাক্যে reporting verb 'asked' হয়, লিঙ্কার 'if' বসে এবং tense প্রেজেন্ট কন্টিনিউয়াস থেকে পাস্ট কন্টিনিউয়াস (was reading) হয়।",
    tags: ["english", "grammar", "narration"]
  },
  {
    id: 20021,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Synonyms",
    question: "What is the synonym of 'Frugal'?",
    options: ["A) Economical", "B) Extravagant", "C) Careless", "D) Generous"],
    answer: 0,
    explanation: "'Frugal' অর্থ মিতব্যয়ী বা হিসেবী। এর সমার্থক শব্দ হলো 'Economical' বা 'Thrifty'। অপচয়কারী হলো 'Extravagant'।",
    tags: ["english", "vocabulary", "synonym"]
  },
  {
    id: 20022,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Idioms & Phrases",
    question: "The phrase 'A white elephant' denotes:",
    options: [
      "A) A very rare animal",
      "B) A very costly but useless possession",
      "C) An auspicious symbol",
      "D) An unexpected fortune"
    ],
    answer: 1,
    explanation: "'A white elephant' অর্থ অতি ব্যয়বহুল কিন্তু অকেজো বা কোনো কাজে লাগে না এমন সামগ্রী।",
    tags: ["english", "vocabulary", "idioms"]
  },
  {
    id: 20023,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Spelling",
    question: "Choose the correctly spelled word:",
    options: ["A) Bureaucracy", "B) Beuracracy", "C) Bureacracy", "D) Bureaucrasy"],
    answer: 0,
    explanation: "সঠিক বানান হলো 'Bureaucracy' (আমলাতন্ত্র): B-u-r-e-a-u-c-r-a-c-y।",
    tags: ["english", "vocabulary", "spelling"]
  }
];

// More Math MCQs
const extraMath = [
  {
    id: 30013,
    subject: "সাধারণ গণিত",
    topic: "পাটিগণিত - গড়",
    question: "৫টি সংখ্যার গড় ২০। এদের সাথে একটি নতুন সংখ্যা যোগ করায় ৬টি সংখ্যার গড় হলো ২২। নতুন সংখ্যাটি কত?",
    options: ["A) ৩০", "B) ৩২", "C) ৩৪", "D) ২৮"],
    answer: 1,
    explanation: "৫টি সংখ্যার সমষ্টি = ৫ × ২০ = ১০০। ৬টি সংখ্যার সমষ্টি = ৬ × ২২ = ১৩২। সুতরাং নতুন সংখ্যা = ১৩২ - ১০০ = ৩২।",
    tags: ["math", "average"]
  },
  {
    id: 30014,
    subject: "সাধারণ গণিত",
    topic: "পাটিগণিত - নল ও চৌবাচ্চা",
    question: "একটি চৌবাচ্চা একটি নল দ্বারা ১২ মিনিটে এবং অপর একটি নল দ্বারা ১৮ মিনিটে পূর্ণ হয়। দুটি নল একসাথে খুলে দিলে চৌবাচ্চাটি কত মিনিটে পূর্ণ হবে?",
    options: ["A) ৬ মিনিট", "B) ৭.২ মিনিট", "C) ৮ মিনিট", "D) ৭.৫ মিনিট"],
    answer: 1,
    explanation: "১ মিনিটে পূর্ণ হয় = ১/১২ + ১/১৮ = (৩+২)/৩৬ = ৫/৩৬ অংশ। সম্পূর্ণ চৌবাচ্চা পূর্ণ হতে সময় লাগবে = ৩৬/৫ = ৭.২ মিনিট।",
    tags: ["math", "pipe_cistern"]
  },
  {
    id: 30015,
    subject: "সাধারণ গণিত",
    topic: "বীজগণিতীয় সূত্রাবলি",
    question: "যদি x + y = 8 এবং x - y = 2 হয়, তবে xy এর মান কত?",
    options: ["A) ১০", "B) ১২", "C) ১৫", "D) ১৬"],
    answer: 2,
    explanation: "xy = {(x + y)/2}² - {(x - y)/2}² = (8/2)² - (2/2)² = 4² - 1² = 16 - 1 = 15।",
    tags: ["math", "algebra"]
  },
  {
    id: 30016,
    subject: "সাধারণ গণিত",
    topic: "জ্যামিতি",
    question: "একটি চতুর্ভুজের চার কোণের সমষ্টি কত সমকোণ?",
    options: ["A) ২ সমকোণ", "B) ৪ সমকোণ (৩৬০°)", "C) ৩ সমকোণ", "D) ৬ সমকোণ"],
    answer: 1,
    explanation: "যেকোনো চতুর্ভুজের চার কোণের সমষ্টি ৩৬০ ডিগ্রি বা ৪ সমকোণ।",
    tags: ["math", "geometry"]
  },
  {
    id: 30017,
    subject: "সাধারণ গণিত",
    topic: "পরিমিতি",
    question: "একটি আয়তাকার ক্ষেত্রের দৈর্ঘ্য ২০ মিটার এবং প্রস্থ ১৫ মিটার হলে এর কর্ণের দৈর্ঘ্য কত মিটার?",
    options: ["A) ২২ মিটার", "B) ২৫ মিটার", "C) ২৮ মিটার", "D) ৩০ মিটার"],
    answer: 1,
    explanation: "আয়তক্ষেত্রের কর্ণ = √(দৈর্ঘ্য² + প্রস্থ²) = √(২০² + ১৫²) = √(৪০০ + ২২৫) = √৬২৫ = ২৫ মিটার।",
    tags: ["math", "geometry"]
  }
];

// More GK & DSS MCQs
const extraGkDss = [
  {
    id: 50013,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "সমাজসেবা অধিদপ্তর (DSS) বিশেষ",
    question: "সমাজসেবা অধিদপ্তর পরিচালিত 'পল্লী মাতৃকেন্দ্র' (Rural Mother Center - RMC) কার্যক্রমের মূল লক্ষ্য কী?",
    options: [
      "A) গ্রামীণ নারীদের জনসংখ্যা নিয়ন্ত্রণ ও অর্থনৈতিক ক্ষমতায়ন",
      "B) শিশুদের বিনামূল্যে বই বিতরণ",
      "C) বয়স্ক পুরুষদের আশ্রয় প্রদান",
      "D) হাসপাতাল স্থাপন"
    ],
    answer: 0,
    explanation: "পল্লী মাতৃকেন্দ্র (RMC) গ্রামীণ সুবিধাবঞ্চিত মহিলাদের পরিবার পরিকল্পনা সচেতনতা ও ক্ষুদ্রঋণের মাধ্যমে অর্থনৈতিকভাবে স্বাবলম্বী করার জন্য সমাজসেবা অধিদপ্তরের একটি ঐতিহ্যবাহী কার্যক্রম।",
    tags: ["gk", "dss_special"]
  },
  {
    id: 50014,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "সমাজসেবা অধিদপ্তর (DSS) বিশেষ",
    question: "অসচ্ছল প্রতিবন্ধী ভাতাভোগীদের বর্তমানে সরকার প্রতি মাসে কত টাকা করে ভাতা প্রদান করে?",
    options: ["A) ৫০০ টাকা", "B) ৭৫০ টাকা", "C) ৮৫০ টাকা", "D) ১,০০০ টাকা"],
    answer: 2,
    explanation: "বর্তমানে অসচ্ছল প্রতিবন্ধীদের মাসিক ভাতার পরিমাণ ৮৫০/- টাকা (যা সরাসরি উপকারভোগীদের জিটুপি - G2P পদ্ধতিতে মোবাইল ব্যাংকিংয়ে পাঠানো হয়)।",
    tags: ["gk", "dss_special", "safety_net"]
  },
  {
    id: 50015,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "সমাজসেবা অধিদপ্তর (DSS) বিশেষ",
    question: "সমাজসেবা অধিদপ্তরের ভবনের নাম এবং এটি ঢাকার কোন এলাকায় অবস্থিত?",
    options: [
      "A) সমাজসেবা ভবন, আগারগাঁও, শেরেবাংলা নগর",
      "B) পরিবার পরিকল্পনা ভবন, কারওয়ান বাজার",
      "C) মাতৃসদন ভবন, মিরপুর",
      "D) পরিবহন পুল, সচিবালয়"
    ],
    answer: 0,
    explanation: "সমাজসেবা অধিদপ্তরের প্রধান কার্যালয়ের নাম 'সমাজসেবা ভবন', প্লট নং ই-৮/বি-১, আগারগাঁও, শেরেবাংলা নগর, ঢাকা-১২০৭।",
    tags: ["gk", "dss_special"]
  },
  {
    id: 50016,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "বাংলাদেশ বিষয়াবলি",
    question: "বাংলাদেশের একমাত্র প্রবাল দ্বীপ কোনটি?",
    options: ["A) সেন্টমার্টিন (নারিকেল জিঞ্জিরা)", "B) মহেশখালী", "C) কুতুবদিয়া", "D) মনপুরা"],
    answer: 0,
    explanation: "কক্সবাজারের টেকনাফে অবস্থিত সেন্টমার্টিন দ্বীপ (স্থানীয় নাম নারিকেল জিঞ্জিরা) বাংলাদেশের একমাত্র প্রবাল দ্বীপ।",
    tags: ["gk", "bangladesh", "geography"]
  },
  {
    id: 50017,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "বাংলাদেশ বিষয়াবলি",
    question: "বঙ্গবন্ধু টানেল কোন নদীর তলদেশে নির্মিত হয়েছে?",
    options: ["A) কর্ণফুলী নদী", "B) মেঘনা নদী", "C) রূপসা নদী", "D) গোমতী নদী"],
    answer: 0,
    explanation: "চট্টগ্রামের কর্ণফুলী নদীর তলদেশে নির্মিত বঙ্গবন্ধু শেখ মুজিবুর রহমান টানেল হলো দক্ষিণ এশিয়ার প্রথম নদীর তলদেশীয় টানেল।",
    tags: ["gk", "bangladesh", "megaprojects"]
  },
  {
    id: 50018,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "আন্তর্জাতিক দিবস ও সংস্থা",
    question: "বিশ্ব অটিজম সচেতনতা দিবস (World Autism Awareness Day) প্রতি বছর কোন তারিখে পালিত হয়?",
    options: ["A) ২ এপ্রিল", "B) ২১ মার্চ", "C) ১০ ডিসেম্বর", "D) ৫ মে"],
    answer: 0,
    explanation: "প্রতি বছর ২ এপ্রিল বিশ্বব্যাপী অটিজম সচেতনতা দিবস হিসেবে পালিত হয়, যা বিশেষ চাহিদাসম্পন্ন শিশুদের অধিকার রক্ষায় তাৎপর্যপূর্ণ।",
    tags: ["gk", "international", "days"]
  }
];

// Append all extra questions
allPrelim = [
  ...allPrelim,
  ...extraComputerTrade,
  ...extraBangla,
  ...extraEnglish,
  ...extraMath,
  ...extraGkDss
];

// Update specific preliminary json files
const prelimDir = path.join(baseDir, 'data/preliminary');
const compTradeFile = path.join(prelimDir, 'computer_trade_mcq.json');
const banglaFile = path.join(prelimDir, 'bangla_mcq.json');
const engFile = path.join(prelimDir, 'english_mcq.json');
const mathFile = path.join(prelimDir, 'math_mcq.json');
const gkFile = path.join(prelimDir, 'gk_dss_mcq.json');

const currentComp = JSON.parse(fs.readFileSync(compTradeFile, 'utf8'));
const currentBangla = JSON.parse(fs.readFileSync(banglaFile, 'utf8'));
const currentEng = JSON.parse(fs.readFileSync(engFile, 'utf8'));
const currentMath = JSON.parse(fs.readFileSync(mathFile, 'utf8'));
const currentGk = JSON.parse(fs.readFileSync(gkFile, 'utf8'));

fs.writeFileSync(compTradeFile, JSON.stringify([...currentComp, ...extraComputerTrade], null, 2), 'utf8');
fs.writeFileSync(banglaFile, JSON.stringify([...currentBangla, ...extraBangla], null, 2), 'utf8');
fs.writeFileSync(engFile, JSON.stringify([...currentEng, ...extraEnglish], null, 2), 'utf8');
fs.writeFileSync(mathFile, JSON.stringify([...currentMath, ...extraMath], null, 2), 'utf8');
fs.writeFileSync(gkFile, JSON.stringify([...currentGk, ...extraGkDss], null, 2), 'utf8');

// Write updated master prelim
fs.writeFileSync(prelimPath, JSON.stringify(allPrelim, null, 2), 'utf8');
fs.writeFileSync(path.join(baseDir, 'data/prelim_data.js'), 'window.PRELIM_QUESTIONS = ' + JSON.stringify(allPrelim) + ';', 'utf8');

console.log(`Expansion complete!
Total Prelim MCQs now: ${allPrelim.length}
- Computer Trade: ${currentComp.length + extraComputerTrade.length}
- Bangla: ${currentBangla.length + extraBangla.length}
- English: ${currentEng.length + extraEnglish.length}
- Math: ${currentMath.length + extraMath.length}
- GK & DSS Special: ${currentGk.length + extraGkDss.length}`);
