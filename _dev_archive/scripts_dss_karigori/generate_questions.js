const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');

// 1. Computer Trade MCQs (150+ high yield targeted MCQs)
const computerTradeQuestions = [
  {
    id: 40001,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "কম্পিউটার ফান্ডামেন্টালস ও হার্ডওয়্যার",
    question: "কম্পিউটারের মস্তিষ্ক (Brain of Computer) বলা হয় কোন অংশকে?",
    options: ["A) RAM", "B) CPU", "C) Hard Disk", "D) Motherboard"],
    answer: 1,
    explanation: "CPU (Central Processing Unit) কম্পিউটারের সকল গাণিতিক ও যৌক্তিক সিদ্ধান্ত গ্রহণ করে, তাই একে কম্পিউটারের মস্তিষ্ক বলা হয়।",
    tags: ["computer_trade", "hardware", "cpu"]
  },
  {
    id: 40002,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "কম্পিউটার ফান্ডামেন্টালস ও হার্ডওয়্যার",
    question: "CPU এর প্রধান তিনটি অংশ কী কী?",
    options: [
      "A) ALU, CU এবং Register Unit",
      "B) RAM, ROM এবং Hard Disk",
      "C) Monitor, Keyboard এবং Mouse",
      "D) Motherboard, SMPS এবং Fan"
    ],
    answer: 0,
    explanation: "CPU মূলত তিনটি মূল অংশের সমন্বয়ে গঠিত: ALU (Arithmetic Logic Unit), CU (Control Unit) এবং মেমোরি রেজিস্টার।",
    tags: ["computer_trade", "hardware", "cpu"]
  },
  {
    id: 40003,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মেমরি ও স্টোরেজ",
    question: "নিচের কোনটি কম্পিউটারের প্রধান অস্থায়ী বা উদ্বায়ী (Volatile) মেমরি?",
    options: ["A) ROM", "B) Hard Disk", "C) RAM", "D) SSD"],
    answer: 2,
    explanation: "RAM (Random Access Memory) একটি ভোলাটাইল বা অস্থায়ী মেমরি। বিদ্যুৎ চলে গেলে এর সকল তথ্য মুছে যায়।",
    tags: ["computer_trade", "memory"]
  },
  {
    id: 40004,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মেমরি ও স্টোরেজ",
    question: "কম্পিউটার স্টার্ট বা বুট (Booting) হওয়ার জন্য প্রয়োজনীয় BIOS কোন মেমরিতে স্থায়ীভাবে সংরক্ষিত থাকে?",
    options: ["A) RAM", "B) ROM", "C) Cache Memory", "D) Virtual Memory"],
    answer: 1,
    explanation: "ROM (Read Only Memory)-এ কম্পিউটার তৈরির সময় ফার্মওয়্যার বা BIOS (Basic Input Output System) স্থায়ীভাবে লিখে দেওয়া হয়।",
    tags: ["computer_trade", "memory", "bios"]
  },
  {
    id: 40005,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মেমরি রূপান্তর",
    question: "১ গিগাবাইট (1 GB) সমান কত মেগাবাইট (MB)?",
    options: ["A) ১০০০ MB", "B) ১০২৪ MB", "C) ১০২৪ KB", "D) ১০৪৮৫৭৬ MB"],
    answer: 1,
    explanation: "বাইনারি গণনায় ১ GB = ১০২৪ MB (Megabyte), এবং ১ MB = ১০২৪ KB।",
    tags: ["computer_trade", "memory_units"]
  },
  {
    id: 40006,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মেমরি রূপান্তর",
    question: "১ নিবল (Nibble) সমান কত বিট?",
    options: ["A) ২ বিট", "B) ৪ বিট", "C) ৮ বিট", "D) ১৬ বিট"],
    answer: 1,
    explanation: "৪টি বাইনারি বিট নিয়ে ১টি নিবল (Nibble) গঠিত হয়। ৮টি বিট নিয়ে ১ বাইট (Byte) গঠিত হয়।",
    tags: ["computer_trade", "memory_units"]
  },
  {
    id: 40007,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "ইনপুট ও আউটপুট ডিভাইস",
    question: "নিচের কোনটি একই সাথে ইনপুট এবং আউটপুট উভয় ডিভাইস হিসেবে কাজ করে?",
    options: ["A) স্ক্যানার (Scanner)", "B) টাচস্ক্রিন (Touchscreen)", "C) প্লটার (Plotter)", "D) প্রজেক্টর (Projector)"],
    answer: 1,
    explanation: "টাচস্ক্রিন স্পর্শের মাধ্যমে ইনপুট নেয় এবং পর্দায় ফলাফল প্রদর্শন করায় এটি ইনপুট ও আউটপুট উভয় ডিভাইস।",
    tags: ["computer_trade", "io_devices"]
  },
  {
    id: 40008,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "ইনপুট ও আউটপুট ডিভাইস",
    question: "OMR এর পূর্ণরূপ কোনটি?",
    options: [
      "A) Optical Mark Reader",
      "B) Optical Message Reader",
      "C) Output Memory Register",
      "D) Optical Main Resource"
    ],
    answer: 0,
    explanation: "OMR = Optical Mark Reader (বা Recognition), যা সাধারণত নিয়োগ পরীক্ষার উত্তরপত্র মূল্যায়নে ব্যবহৃত হয়।",
    tags: ["computer_trade", "abbreviation", "omr"]
  },
  {
    id: 40009,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "ইনপুট ও আউটপুট ডিভাইস",
    question: "প্রিন্টারের আউটপুট রেজ্যুলেশন পরিমাপের একক কোনটি?",
    options: ["A) PPM", "B) DPI", "C) Hertz", "D) Bits"],
    answer: 1,
    explanation: "প্রিন্টারের প্রিন্ট কোয়ালিটি বা রেজ্যুলেশন মাপা হয় DPI (Dots Per Inch) এককে। প্রিন্টারের গতি মাপা হয় PPM (Pages Per Minute) দিয়ে।",
    tags: ["computer_trade", "printer"]
  },
  {
    id: 40010,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "অপারেটিং সিস্টেম ও উইন্ডোজ",
    question: "কম্পিউটারে বর্তমানে চলমান সমস্ত উইন্ডো মিনিমাইজ করে সরাসরি ডেস্কটপে যাওয়ার শর্টকাট কী কোনটি?",
    options: ["A) Win + D", "B) Win + E", "C) Alt + F4", "D) Ctrl + Esc"],
    answer: 0,
    explanation: "উইন্ডোজ কি (Windows Key) + D চাপলে সমস্ত ওপেন উইন্ডো মিনিমাইজ হয়ে সরাসরি ডেস্কটপ প্রদর্শিত হয়।",
    tags: ["computer_trade", "windows", "shortcuts"]
  },
  {
    id: 40011,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "অপারেটিং সিস্টেম ও উইন্ডোজ",
    question: "উইন্ডোজ অপারেটিং সিস্টেমে ফাইল বা ফোল্ডার স্থায়ীভাবে (Recycle Bin-এ না পাঠিয়ে) ডিলিট করার শর্টকাট কী?",
    options: ["A) Delete", "B) Shift + Delete", "C) Ctrl + Delete", "D) Alt + Delete"],
    answer: 1,
    explanation: "Shift + Delete চাপলে ফাইলটি রিসাইকেল বিনে না গিয়ে কম্পিউটার থেকে পার্মানেন্টলি ডিলিট হয়।",
    tags: ["computer_trade", "windows", "shortcuts"]
  },
  {
    id: 40012,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "অপারেটিং সিস্টেম ও উইন্ডোজ",
    question: "কোনো ফাইল বা ফোল্ডারের নাম পরিবর্তনের (Rename) ফাংশন কি কোনটি?",
    options: ["A) F1", "B) F2", "C) F5", "D) F12"],
    answer: 1,
    explanation: "F2 হলো রিনেম (Rename) করার শর্টকাট কি। F1 হলো হেল্প (Help) এবং F5 হলো রিফ্রেশ (Refresh)।",
    tags: ["computer_trade", "windows", "shortcuts"]
  },
  {
    id: 40013,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট ওয়ার্ড (MS Word)",
    question: "MS Word-এ কোনো ডকুমেন্টের সমস্ত টেক্সট একবারে সিলেক্ট করার শর্টকাট কী?",
    options: ["A) Ctrl + S", "B) Ctrl + A", "C) Ctrl + C", "D) Ctrl + F"],
    answer: 1,
    explanation: "Ctrl + A হলো 'Select All' এর শর্টকাট কি।",
    tags: ["computer_trade", "ms_word"]
  },
  {
    id: 40014,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট ওয়ার্ড (MS Word)",
    question: "MS Word-এ লেখার ফন্ট সাইজ ১ পয়েন্ট করে বড় করার শর্টকাট কী কোনটি?",
    options: ["A) Ctrl + ]", "B) Ctrl + [", "C) Ctrl + Shift + B", "D) Alt + >"],
    answer: 0,
    explanation: "Ctrl + ] চাপলে ফন্ট সাইজ ১ পয়েন্ট বড় হয় এবং Ctrl + [ চাপলে ১ পয়েন্ট ছোট হয়।",
    tags: ["computer_trade", "ms_word"]
  },
  {
    id: 40015,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট ওয়ার্ড (MS Word)",
    question: "MS Word-এ প্যারাগ্রাফকে উভয় পাশে সমানভাবে সাজাতে (Justify Alignment) কোন শর্টকাট ব্যবহৃত হয়?",
    options: ["A) Ctrl + L", "B) Ctrl + R", "C) Ctrl + E", "D) Ctrl + J"],
    answer: 3,
    explanation: "Ctrl + J = Justify, Ctrl + E = Center, Ctrl + L = Left align, Ctrl + R = Right align.",
    tags: ["computer_trade", "ms_word"]
  },
  {
    id: 40016,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট ওয়ার্ড (MS Word)",
    question: "MS Word এ নতুন পেজ ইনসার্ট বা পেজ ব্রেক (Page Break) দেওয়ার শর্টকাট কী?",
    options: ["A) Shift + Enter", "B) Ctrl + Enter", "C) Alt + Enter", "D) Tab + Enter"],
    answer: 1,
    explanation: "Ctrl + Enter চাপলে কার্সারের বর্তমান অবস্থান থেকে নতুন পেজে জাম্প করে (Page Break)।",
    tags: ["computer_trade", "ms_word"]
  },
  {
    id: 40017,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট এক্সেল (MS Excel)",
    question: "MS Excel-এ প্রতিটি ফর্মুলা শুরু করার জন্য কোন চিহ্নটি বাধ্যতামূলক?",
    options: ["A) +", "B) =", "C) @", "D) #"],
    answer: 1,
    explanation: "এক্সেলে যেকোনো গাণিতিক ফর্মুলা বা ফাংশন লেখার পূর্বে সমান (=) চিহ্ন দিয়ে শুরু করতে হয়।",
    tags: ["computer_trade", "ms_excel"]
  },
  {
    id: 40018,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট এক্সেল (MS Excel)",
    question: "MS Excel-এ A1 থেকে A10 পর্যন্ত সেলগুলোর যোগফল নির্ণয়ের সঠিক ফর্মুলা কোনটি?",
    options: [
      "A) =SUM(A1:A10)",
      "B) =ADD(A1-A10)",
      "C) =TOTAL(A1..A10)",
      "D) =SUM(A1+A10)"
    ],
    answer: 0,
    explanation: "=SUM(A1:A10) ফর্মুলার মাধ্যমে একটি রেঞ্জের সমস্ত সংখ্যার সমষ্টি নির্ণয় করা হয়। কোলন (:) চিহ্ন রেঞ্জ নির্দেশ করে।",
    tags: ["computer_trade", "ms_excel"]
  },
  {
    id: 40019,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট এক্সেল (MS Excel)",
    question: "MS Excel এর ওয়ার্কশিটে কলাম এবং রো (Row) এর সংযোগস্থলকে কী বলা হয়?",
    options: ["A) বক্স (Box)", "B) সেল (Cell)", "C) ব্লক (Block)", "D) ফিল্ড (Field)"],
    answer: 1,
    explanation: "কলাম ও রো পরস্পর ছেদ করে যে চারকোনা ঘর তৈরি করে তাকে সেল (Cell) বলে। প্রতিটি সেলের একটি নির্দিষ্ট নাম থাকে (যেমন B5)।",
    tags: ["computer_trade", "ms_excel"]
  },
  {
    id: 40020,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "মাইক্রোসফট পাওয়ারপয়েন্ট",
    question: "MS PowerPoint-এ স্লাইড শো শুরু করার কীবোর্ড শর্টকাট কী কোনটি?",
    options: ["A) F2", "B) F5", "C) F7", "D) Ctrl + S"],
    answer: 1,
    explanation: "F5 চাপলে প্রথম স্লাইড থেকে প্রেজেন্টেশন ফুল স্ক্রিনে রান হয়। বর্তমান স্লাইড থেকে চালু করতে Shift + F5 চাপতে হয়।",
    tags: ["computer_trade", "ms_powerpoint"]
  },
  {
    id: 40021,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "নেটওয়ার্কিং ও ইন্টারনেট",
    question: "IPv4 অ্যাড্রেসে মোট কত বিট থাকে?",
    options: ["A) ১৬ বিট", "B) ৩২ বিট", "C) ৬৪ বিট", "D) ১২৮ বিট"],
    answer: 1,
    explanation: "IPv4 অ্যাড্রেস ৩২ বিটের (৪টি অক্টেট বা ৪ বাইট)। আর IPv6 অ্যাড্রেস ১২৮ বিটের।",
    tags: ["computer_trade", "networking", "ip"]
  },
  {
    id: 40022,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "নেটওয়ার্কিং ও ইন্টারনেট",
    question: "ইমেইল পাঠানোর ক্ষেত্রে গোপন প্রাপক রাখার জন্য কোন ফিল্ড ব্যবহার করা হয়?",
    options: ["A) To", "B) CC", "C) BCC", "D) Subject"],
    answer: 2,
    explanation: "BCC = Blind Carbon Copy। এই ফিল্ডে রাখা ইমেইল অ্যাড্রেস অন্য কোনো প্রাপক দেখতে পায় না।",
    tags: ["computer_trade", "email"]
  },
  {
    id: 40023,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "নেটওয়ার্কিং ও ইন্টারনেট",
    question: "HTTP এর পূর্ণরূপ কোনটি?",
    options: [
      "A) Hyper Text Transfer Protocol",
      "B) High Technical Text Protocol",
      "C) Hyperlink Text Testing Process",
      "D) Home Tool Terminal Protocol"
    ],
    answer: 0,
    explanation: "HTTP = Hyper Text Transfer Protocol। ইন্টারনেটে ওয়েবপেজ ব্রাউজারে ট্রান্সফারের জন্য এই প্রটোকল ব্যবহৃত হয়।",
    tags: ["computer_trade", "abbreviation", "internet"]
  },
  {
    id: 40024,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "সাইবার নিরাপত্তা",
    question: "নিচের কোনটি একটি ক্ষতিকারক ম্যালওয়্যার বা কম্পিউটার ভাইরাস নয়?",
    options: ["A) Trojan Horse", "B) Ransomware", "C) Norton", "D) Worm"],
    answer: 2,
    explanation: "Norton হলো একটি জনপ্রিয় বাণিজ্যিক অ্যান্টিভাইরাস সফটওয়্যার, যা ভাইরাস ধ্বংস ও প্রতিরোধ করে।",
    tags: ["computer_trade", "cybersecurity"]
  },
  {
    id: 40025,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "নাম্বার সিস্টেম",
    question: "বাইনারি সংখ্যা ১০১০ (১০১০₂) এর ডেসিমাল (দশমিক) মান কত?",
    options: ["A) ৮", "B) ১০", "C) ১২", "D) ১৪"],
    answer: 1,
    explanation: "1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10।",
    tags: ["computer_trade", "number_system"]
  },
  {
    id: 40026,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "কম্পিউটার হার্ডওয়্যার ও পোর্ট",
    question: "HDMI এর পূর্ণরূপ কোনটি?",
    options: [
      "A) High-Definition Multimedia Interface",
      "B) Hyper Data Medium Internet",
      "C) High Display Machine Interface",
      "D) Home Digital Media Instrument"
    ],
    answer: 0,
    explanation: "HDMI = High-Definition Multimedia Interface, যা একই সাথে হাই ডেফিনিশন ভিডিও ও অডিও ডেটা ক্যাবল দিয়ে সরবরাহ করে।",
    tags: ["computer_trade", "hardware", "hdmi"]
  },
  {
    id: 40027,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "কম্পিউটার ট্রাবলশুটিং",
    question: "কম্পিউটার হঠাৎ হ্যাং হয়ে গেলে টাস্ক ম্যানেজার (Task Manager) খোলার সবচেয়ে দ্রুত শর্টকাট কোনটি?",
    options: [
      "A) Ctrl + Shift + Esc",
      "B) Alt + F4",
      "C) Ctrl + Alt + Delete",
      "D) Win + Pause/Break"
    ],
    answer: 0,
    explanation: "Ctrl + Shift + Esc চাপলে কোনো মধ্যবর্তী মেনু ছাড়াই সরাসরি উইন্ডোজ টাস্ক ম্যানেজার ওপেন হয়।",
    tags: ["computer_trade", "troubleshooting", "windows"]
  },
  {
    id: 40028,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "ফাইল এক্সটেনশন",
    question: "নিচের কোনটি এক্সিকিউটেবল প্রোগ্রাম বা সফটওয়্যার ইন্সটলেশন ফাইলের এক্সটেনশন?",
    options: ["A) .txt", "B) .exe", "C) .png", "D) .mp3"],
    answer: 1,
    explanation: ".exe (Executable) হলো উইন্ডোজ সফটওয়্যার বা অ্যাপ্লিকেশনের সরাসরি রানযোগ্য ফাইল ফরম্যাট।",
    tags: ["computer_trade", "file_extensions"]
  },
  {
    id: 40029,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "অফিস অ্যাপ্লিকেশন",
    question: "ডকুমেন্টে কোনো বানান বা ব্যাকরণগত ভুল চেক করার (Spelling & Grammar Check) ফাংশন কি কোনটি?",
    options: ["A) F5", "B) F7", "C) F9", "D) F11"],
    answer: 1,
    explanation: "F7 হলো স্পেলিং ও গ্রামার চেকের শর্টকাট কি। ভুল বানানের নিচে লাল দাগ এবং গ্রামার ভুলের নিচে নীল বা সবুজ দাগ দেখা যায়।",
    tags: ["computer_trade", "ms_word", "shortcuts"]
  },
  {
    id: 40030,
    subject: "কম্পিউটার ট্রেড (Trade ICT)",
    topic: "টাইপিং ও বাংলা সফটওয়্যার",
    question: "বিজয় কীবোর্ডে বাংলা লেখার জন্য ইংরেজি ও বাংলার মোড সুইচের শর্টকাট কী কোনটি?",
    options: ["A) Ctrl + Shift", "B) Ctrl + Alt + B", "C) Alt + Shift", "D) Ctrl + Space"],
    answer: 1,
    explanation: "বিজয় ৫০ বা বিজয় বায়ান্নোতে SutonnyMJ ফন্টে বাংলা লেখার জন্য Ctrl + Alt + B চাপতে হয়।",
    tags: ["computer_trade", "typing", "bijoy"]
  }
];

// 2. Bangla MCQs (High yield grammar & literature)
const banglaQuestions = [
  {
    id: 10001,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "ধ্বনি ও বর্ণ",
    question: "বাংলা বর্ণমালায় মোট কতটি বর্ণ রয়েছে এবং এর মধ্যে পূর্ণমাত্রার বর্ণ কয়টি?",
    options: ["A) ৫০টি ও ৩২টি", "B) ৫০টি ও ২৪টি", "C) ৪৯টি ও ৩২টি", "D) ৫০টি ও ২৬টি"],
    answer: 0,
    explanation: "বাংলা বর্ণমালায় মোট ৫০টি বর্ণ (স্বরবর্ণ ১১টি + ব্যঞ্জনবর্ণ ৩৯টি)। এর মধ্যে পূর্ণমাত্রা ৩২টি, অর্ধমাত্রা ৮টি ও মাত্রাহীন বর্ণ ১০টি।",
    tags: ["bangla", "grammar", "phonetics"]
  },
  {
    id: 10002,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সন্ধি",
    question: "'বিদ্যালয়' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["A) বিদ্যা + আলয়", "B) বিদ্ + আলয়", "C) বিদ্যা + লয়", "D) বি + দ্যালয়"],
    answer: 0,
    explanation: "বিদ্যা + আলয় = বিদ্যালয় (আ + আ = আ)। এটি একটি স্বরসন্ধির উদাহরণ।",
    tags: ["bangla", "grammar", "sandhi"]
  },
  {
    id: 10003,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সন্ধি",
    question: "'তন্মধ্যে' শব্দটির সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["A) তদ্ + মধ্যে", "B) তৎ + মধ্যে", "C) তন + মধ্যে", "D) তঃ + মধ্যে"],
    answer: 1,
    explanation: "তৎ + মধ্যে = তন্মধ্যে। বর্গের প্রথম বর্ণের পর অনুনাসিক বর্ণ থাকলে প্রথম বর্ণটি অনুনাসিক বর্ণে পরিণত হয়।",
    tags: ["bangla", "grammar", "sandhi"]
  },
  {
    id: 10004,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সমাস",
    question: "'গায়ে হলুদ' কোন সমাসের উদাহরণ?",
    options: ["A) বহুব্রীহি", "B) অলুক বহুব্রীহি", "C) দ্বন্দ্ব", "D) তৎপুরুষ"],
    answer: 1,
    explanation: "'গায়ে হলুদ দেওয়া হয় যে অনুষ্ঠানে' = গায়ে-হলুদ। এখানে বিভক্তি লোপ পায়নি এবং ভিন্ন অর্থ প্রকাশ করায় এটি অলুক বহুব্রীহি সমাস।",
    tags: ["bangla", "grammar", "samas"]
  },
  {
    id: 10005,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সমাস",
    question: "যে সমাসে পূর্বপদের বিভক্তি লোপ পায় না, তাকে কোন সমাস বলে?",
    options: ["A) উপপদ সমাস", "B) প্রাদি সমাস", "C) অলুক সমাস", "D) নিত্য সমাস"],
    answer: 2,
    explanation: "যে সমাসে সমস্তপদে পূর্বপদের বিভক্তি লোপ পায় না, তাকে অলুক সমাস বলে (যেমন: দুধে-ভাতে, ঘোড়ার ডিম)।",
    tags: ["bangla", "grammar", "samas"]
  },
  {
    id: 10006,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "কারক ও বিভক্তি",
    question: "'তিলে তৈল হয়' — এখানে 'তিলে' কোন কারকে কোন বিভক্তি?",
    options: [
      "A) অপাদানে ৭মী",
      "B) অধিকরণে ৭মী",
      "C) করণে ৭মী",
      "D) কর্মে ৭মী"
    ],
    answer: 0,
    explanation: "যা থেকে কোনো কিছু উৎপন্ন, জাত, বিচ্যুত বা গৃহিত হয়, তা অপাদান কারক। 'তিলে' তে ৭মী বিভক্তি যুক্ত থাকায় অপাদানে ৭মী।",
    tags: ["bangla", "grammar", "karok"]
  },
  {
    id: 10007,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "কারক ও বিভক্তি",
    question: "'ডাক্তার ডাক' — এখানে 'ডাক্তার' কোন কারকে কোন বিভক্তি?",
    options: [
      "A) কর্তায় শূন্য",
      "B) কর্মে শূন্য",
      "C) করণে শূন্য",
      "D) অধিকরণে শূন্য"
    ],
    answer: 1,
    explanation: "কাকে ডাকবে? উত্তর: ডাক্তারকে। কর্তা যাকে আশ্রয় করে কাজ সম্পন্ন করে তা কর্মকারক। কোনো বিভক্তি স্পষ্ট না থাকায় প্রথমা বা শূন্য।",
    tags: ["bangla", "grammar", "karok"]
  },
  {
    id: 10008,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "ণ-ত্ব ও ষ-ত্ব বিধান",
    question: "নিচের কোন বানানটি ণ-ত্ব বিধানের নিয়মে শুদ্ধ?",
    options: ["A) পুরানো", "B) রামায়ন", "C) অনুষঙ্গ", "D) রামায়ণ"],
    answer: 3,
    explanation: "র, ঋ, ষ এর পর স্বরবর্ণ থাকলে পরবর্তী 'ন' মূর্ধন্য 'ণ' হয়, তাই রামায়ণ শুদ্ধ।",
    tags: ["bangla", "grammar", "spelling"]
  },
  {
    id: 10009,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "বানান শুদ্ধি",
    question: "নিচের কোন বানানটি সম্পূর্ণ শুদ্ধ?",
    options: ["A) মূর্ধন্য", "B) মূর্ধন্য", "C) মূহুর্ত", "D) সান্তনা"],
    answer: 0,
    explanation: "মূর্ধন্য (ম-এ দীর্ঘ উ, ধ-এ রেফ ও ণ-এ য-ফলা) বানানটি শুদ্ধ। মুহুর্ত বানান ভুল (শুদ্ধ: মুহূর্ত), সান্তনা ভুল (শুদ্ধ: সান্ত্বনা)।",
    tags: ["bangla", "grammar", "spelling"]
  },
  {
    id: 10010,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "এককথায় প্রকাশ",
    question: "'যা সহজে অতিক্রম করা যায় না' — এর এককথায় প্রকাশ কোনটি?",
    options: ["A) দুর্নিবার", "B) দুরতিক্রম্য", "C) দুর্গম", "D) দুর্লঙ্ঘ্য"],
    answer: 1,
    explanation: "যা সহজে অতিক্রম করা যায় না = দুরতিক্রম্য। যা সহজে লঙ্ঘন করা যায় না = দুর্লঙ্ঘ্য।",
    tags: ["bangla", "grammar", "one_word"]
  },
  {
    id: 10011,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "বাগধারা",
    question: "'অগাধ জলের মাছ' বাগধারাটির অর্থ কী?",
    options: ["A) বোকা ব্যক্তি", "B) খুব চালাক ব্যক্তি", "C) ধনী লোক", "D) অসহায় মানুষ"],
    answer: 1,
    explanation: "'অগাধ জলের মাছ' বাগধারার অর্থ অতিশয় ধূর্ত বা খুবই চালাক ব্যক্তি।",
    tags: ["bangla", "grammar", "idioms"]
  },
  {
    id: 10012,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সাহিত্য - প্রাচীন ও মধ্যযুগ",
    question: "বাংলা সাহিত্যের আদি নিদর্শন 'চর্যাপদ' কার সম্পাদনায় এবং কোথা থেকে প্রথম প্রকাশিত হয়?",
    options: [
      "A) হরপ্রসাদ শাস্ত্রী, বঙ্গীয় সাহিত্য পরিষদ থেকে (১৯১৬ সালে)",
      "B) ড. মুহম্মদ শহীদুল্লাহ, ঢাকা বিশ্ববিদ্যালয় থেকে",
      "C) সুনীতিকুমার চট্টোপাধ্যায়, কলকাতা বিশ্ববিদ্যালয় থেকে",
      "D) দীনেশচন্দ্র সেন, শ্রীহট্ট থেকে"
    ],
    answer: 0,
    explanation: "১৯০৭ সালে মহামহোপাধ্যায় হরপ্রসাদ শাস্ত্রী নেপালের রাজদরবারের রয়েল লাইব্রেরি থেকে চর্যাপদ আবিষ্কার করেন এবং ১৯১৬ সালে বঙ্গীয় সাহিত্য পরিষদ থেকে 'হাজার বছরের পুরাণ বাঙ্গালা ভাষায় রচিত বৌদ্ধ গান ও দোহা' নামে প্রকাশ করেন।",
    tags: ["bangla", "literature", "charyapada"]
  },
  {
    id: 10013,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সাহিত্য - আধুনিক যুগ",
    question: "রবীন্দ্রনাথ ঠাকুর তাঁর কোন কাব্যগ্রন্থের জন্য ১৯১৩ সালে সাহিত্যে নোবেল পুরস্কার লাভ করেন?",
    options: ["A) বলাকা", "B) সোনার তরী", "C) গীতাঞ্জলি (Song Offerings)", "D) খেয়া"],
    answer: 2,
    explanation: "রবীন্দ্রনাথ ঠাকুর ১৯১৩ সালে তাঁর 'গীতাঞ্জলি' কাব্যের ইংরেজি অনুবাদের জন্য এশিয়ার মধ্যে প্রথম সাহিত্যে নোবেল পুরস্কার অর্জন করেন।",
    tags: ["bangla", "literature", "rabindranath"]
  },
  {
    id: 10014,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "সাহিত্য - আধুনিক যুগ",
    question: "কাজী নজরুল ইসলামের প্রথম প্রকাশিত কবিতা কোনটি?",
    options: ["A) বিদ্রোহী", "B) মুক্তি", "C) বাঁধন হারা", "D) প্রলয়োল্লাস"],
    answer: 1,
    explanation: "কাজী নজরুল ইসলামের প্রথম প্রকাশিত কবিতা 'মুক্তি' (১৩২৬ বঙ্গাব্দে 'বঙ্গীয় মুসলমান সাহিত্য পত্রিকা'য় প্রকাশিত)। তাঁর প্রথম প্রকাশিত কাব্যগ্রন্থ 'অগ্নিবীণা'।",
    tags: ["bangla", "literature", "nazrul"]
  },
  {
    id: 10015,
    subject: "বাংলা ভাষা ও সাহিত্য",
    topic: "মুক্তিযুদ্ধভিত্তিক সাহিত্য",
    question: "মুক্তিযুদ্ধভিত্তিক বিখ্যাত উপন্যাস 'আগুনের পরশমণি' কার রচনা?",
    options: ["A) শওকত ওসমান", "B) হুমায়ূন আহমেদ", "C) সেলিনা হোসেন", "D) জাহানারা ইমাম"],
    answer: 1,
    explanation: "'আগুনের পরশমণি' কথাসাহিত্যিক হুমায়ূন আহমেদের মুক্তিযুদ্ধভিত্তিক একটি সাড়া জাগানো উপন্যাস, যা নিয়ে তিনি একই নামের চলচ্চিত্রও নির্মাণ করেন।",
    tags: ["bangla", "literature", "liberation_war"]
  }
];

// 3. English MCQs (High yield grammar & vocabulary)
const englishQuestions = [
  {
    id: 20001,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Appropriate Preposition",
    question: "He is senior ______ me in service.",
    options: ["A) than", "B) from", "C) to", "D) of"],
    answer: 2,
    explanation: "Senior, junior, superior, inferior, prior ইত্যাদি ল্যাটিন তুলনামূলক শব্দের পর 'than' না বসে 'to' বসে।",
    tags: ["english", "grammar", "preposition"]
  },
  {
    id: 20002,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Appropriate Preposition",
    question: "The poor man died ______ cancer.",
    options: ["A) from", "B) of", "C) by", "D) with"],
    answer: 1,
    explanation: "কোনো রোগে মারা গেলে Preposition 'of' বসে (Die of disease)। অতিভোজন বা ক্ষত থেকে মারা গেলে 'from' বসে।",
    tags: ["english", "grammar", "preposition"]
  },
  {
    id: 20003,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Subject-Verb Agreement",
    question: "Neither the teacher nor the students ______ present in the seminar yesterday.",
    options: ["A) was", "B) were", "C) is", "D) are"],
    answer: 1,
    explanation: "Neither...nor দ্বারা দুটি সাবজেক্ট যুক্ত হলে ভার্বটি কাছের সাবজেক্ট অনুযায়ী হয়। এখানে 'students' প্লুরাল এবং অতীতকালের হওয়ায় 'were' হবে।",
    tags: ["english", "grammar", "subject_verb_agreement"]
  },
  {
    id: 20004,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Right Form of Verbs",
    question: "It is high time we ______ our bad habits.",
    options: ["A) change", "B) changed", "C) had changed", "D) have changed"],
    answer: 1,
    explanation: "'It is time' বা 'It is high time' এর পর সাবজেক্ট আসলে ভার্বের Past Indefinite Form (V2) ব্যবহৃত হয়, তাই 'changed' হবে।",
    tags: ["english", "grammar", "verbs"]
  },
  {
    id: 20005,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Right Form of Verbs",
    question: "If I had known his email address, I ______ him the report.",
    options: ["A) would send", "B) will send", "C) would have sent", "D) sent"],
    answer: 2,
    explanation: "Third Conditional-এর নিয়মে If + Past Perfect হলে অপর ক্লজে Subject + would have + V3 বসে।",
    tags: ["english", "grammar", "conditionals"]
  },
  {
    id: 20006,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Voice Change",
    question: "Change into Passive: 'Who wrote this poem?'",
    options: [
      "A) By whom was this poem written?",
      "B) Who was this poem written by?",
      "C) By whom this poem was written?",
      "D) Whom had this poem written by?"
    ],
    answer: 0,
    explanation: "Who থাকলে Passive এ By whom বসে + be verb (was) + object (this poem) + V3 (written)?",
    tags: ["english", "grammar", "voice"]
  },
  {
    id: 20007,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Synonyms",
    question: "What is the synonym of the word 'Competent'?",
    options: ["A) Inefficient", "B) Capable", "C) Lazy", "D) Weak"],
    answer: 1,
    explanation: "'Competent' অর্থ দক্ষ বা যোগ্য। এর সমার্থক শব্দ হলো 'Capable' বা 'Skilled'।",
    tags: ["english", "vocabulary", "synonym"]
  },
  {
    id: 20008,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Antonyms",
    question: "What is the antonym of the word 'Transparent'?",
    options: ["A) Clear", "B) Opaque", "C) Bright", "D) Fragile"],
    answer: 1,
    explanation: "'Transparent' অর্থ স্বচ্ছ বা স্পষ্ট। এর বিপরীত শব্দ হলো 'Opaque' যার অর্থ অস্বচ্ছ বা অস্পষ্ট।",
    tags: ["english", "vocabulary", "antonym"]
  },
  {
    id: 20009,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Spelling",
    question: "Identify the correctly spelled word:",
    options: ["A) Accomodation", "B) Accommodation", "C) Acomodation", "D) Accomadation"],
    answer: 1,
    explanation: "সঠিক বানান হলো 'Accommodation' (ডাবল c এবং ডাবল m: A-c-c-o-m-m-o-d-a-t-i-o-n)।",
    tags: ["english", "vocabulary", "spelling"]
  },
  {
    id: 20010,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Idioms & Phrases",
    question: "The idiom 'At a stretch' means:",
    options: ["A) Slowly", "B) Without break", "C) Temporarily", "D) Rarely"],
    answer: 1,
    explanation: "'At a stretch' ইডিয়ামটির অর্থ কোনো বিরতি ছাড়া একনাগাড়ে (Continuous বা Without break)।",
    tags: ["english", "vocabulary", "idioms"]
  },
  {
    id: 20011,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "One-Word Substitution",
    question: "A person who loves mankind is called:",
    options: ["A) Philanthropist", "B) Misanthrope", "C) Optimist", "D) Cannibal"],
    answer: 0,
    explanation: "মানবপ্রেমিককে বলা হয় 'Philanthropist'। মানববিদ্বেষীকে বলা হয় 'Misanthrope'।",
    tags: ["english", "vocabulary", "one_word"]
  },
  {
    id: 20012,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Articles",
    question: "He is ______ European gentleman.",
    options: ["A) an", "B) a", "C) the", "D) no article"],
    answer: 1,
    explanation: "European শব্দের শুরুতে ভাওয়েল 'E' থাকলেও এর উচ্চারণ 'ইউ' (You)-এর মতো হওয়ায় এর পূর্বে 'a' বসে।",
    tags: ["english", "grammar", "articles"]
  },
  {
    id: 20013,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Sentence Transformation",
    question: "Transform into Negative: 'Only Allah can help us.'",
    options: [
      "A) None but Allah can help us.",
      "B) Nothing but Allah can help us.",
      "C) Not only Allah can help us.",
      "D) No one Allah can help us."
    ],
    answer: 0,
    explanation: "ব্যক্তি বা সৃষ্টিকর্তা নির্দেশক বাক্যে 'Only' থাকলে নেগেটিভে তার পরিবর্তে বাক্যের শুরুতে 'None but' বসে।",
    tags: ["english", "grammar", "transformation"]
  },
  {
    id: 20014,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Translation",
    question: "'সে সাঁতার কাটতে জানে না' — এর সঠিক ইংরেজি অনুবাদ কোনটি?",
    options: [
      "A) He does not know to swim.",
      "B) He does not know how to swim.",
      "C) He does not know swimming.",
      "D) He cannot able to swim."
    ],
    answer: 1,
    explanation: "কোনো কিছু করার পদ্ধতি বা দক্ষতা জানা বোঝাতে know + how to + verb এর বেস ফর্ম ব্যবহৃত হয়।",
    tags: ["english", "translation"]
  },
  {
    id: 20015,
    subject: "ইংরেজি ভাষা ও গ্রামার",
    topic: "Translation",
    question: "'সকাল থেকে গুঁড়ি গুঁড়ি বৃষ্টি হচ্ছে' — এর সঠিক ইংরেজি রূপ কোনটি?",
    options: [
      "A) It is raining heavily since morning.",
      "B) It has been drizzling since morning.",
      "C) It was drizzling from morning.",
      "D) It is drizzling since morning."
    ],
    answer: 1,
    explanation: "অতীত থেকে শুরু হয়ে বর্তমান পর্যন্ত কাজ চলা বোঝালে Present Perfect Continuous Tense হয় এবং গুঁড়ি গুঁড়ি বৃষ্টির ইংরেজি 'drizzle'।",
    tags: ["english", "translation"]
  }
];

// 4. Mathematics MCQs (High yield arithmetic, algebra & geometry)
const mathQuestions = [
  {
    id: 30001,
    subject: "সাধারণ গণিত",
    topic: "শতকরা ও লাভ-ক্ষতি",
    question: "একটি পণ্যের ক্রয়মূল্য ৫০০ টাকা। ২৫% লাভে পণ্যটির বিক্রয়মূল্য কত টাকা হবে?",
    options: ["A) ৬০০ টাকা", "B) ৬২৫ টাকা", "C) ৬৫০ টাকা", "D) ৫৭৫ টাকা"],
    answer: 1,
    explanation: "লাভ = ৫০০ এর ২৫% = ১২৫ টাকা। বিক্রয়মূল্য = ৫০০ + ১২৫ = ৬২৫ টাকা।",
    tags: ["math", "percentage", "profit_loss"]
  },
  {
    id: 30002,
    subject: "সাধারণ গণিত",
    topic: "শতকরা ও লাভ-ক্ষতি",
    question: "টাকায় ৪টি দরে লেবু কিনে টাকায় ৫টি দরে বিক্রি করলে শতকরা কত লাভ বা ক্ষতি হবে?",
    options: ["A) ২০% লাভ", "B) ২০% ক্ষতি", "C) ২৫% ক্ষতি", "D) ১০% লাভ"],
    answer: 1,
    explanation: "১টির ক্রয়মূল্য = ১/৪ টাকা = ০.২৫ টাকা। ১টির বিক্রয়মূল্য = ১/৫ টাকা = ০.২০ টাকা। ক্ষতি = ০.০৫ টাকা। ক্ষতির হার = (০.০৫/০.২৫) × ১০০% = ২০% ক্ষতি।",
    tags: ["math", "profit_loss"]
  },
  {
    id: 30003,
    subject: "সাধারণ গণিত",
    topic: "ল.সা.গু ও গ.সা.গু",
    question: "দুটি সংখ্যার গ.সা.গু ১২ এবং ল.সা.গু ৩৩৬। একটি সংখ্যা ৪৮ হলে অপর সংখ্যাটি কত?",
    options: ["A) ৭২", "B) ৮৪", "C) ৯৬", "D) ১০৮"],
    answer: 1,
    explanation: "আমরা জানি, সংখ্যা দুটির গুণফল = ল.সা.গু × গ.সা.গু। সুতরাং অপর সংখ্যা = (১২ × ৩৩৬) / ৪৮ = ৩৩৬ / ৪ = ৮৪।",
    tags: ["math", "lcm_gcd"]
  },
  {
    id: 30004,
    subject: "সাধারণ গণিত",
    topic: "অনুপাত ও মিশ্রণ",
    question: "৬০ লিটার কেরোসিন ও পেট্রোলের মিশ্রণে এদের অনুপাত ৭:৩। ওই মিশ্রণে আর কত লিটার পেট্রোল মিশালে অনুপাত ৩:৭ হবে?",
    options: ["A) ৭০ লিটার", "B) ৮০ লিটার", "C) ৮৫ লিটার", "D) ৮০.৫ লিটার"],
    answer: 1,
    explanation: "অনুপাতের যোগফল = ৭+৩ = ১০। কেরোসিন = (৬০ × ৭/১০) = ৪২ লিটার, পেট্রোল = ১৮ লিটার। ধরি x লিটার মেশাতে হবে: ৪২ / (১৮+x) = ৩/৭ => ৩(১৮+x) = ২৯৪ => ৫৪ + ৩x = ২৯৪ => ৩x = ২৪০ => x = ৮০ লিটার।",
    tags: ["math", "ratio"]
  },
  {
    id: 30005,
    subject: "সাধারণ গণিত",
    topic: "ঐকিক নিয়ম ও কাজ-সময়",
    question: "১৫ জন লোক একটি কাজ ২০ দিনে শেষ করতে পারে। ওই কাজটি ১২ দিনে শেষ করতে অতিরিক্ত কতজন লোক লাগবে?",
    options: ["A) ৮ জন", "B) ১০ জন", "C) ২৫ জন", "D) ১২ জন"],
    answer: 1,
    explanation: "২০ দিনে কাজটি করে ১৫ জন। ১ দিনে করে ১৫ × ২০ = ৩০০ জন। ১২ দিনে করে ৩০০ / ১২ = ২৫ জন। অতিরিক্ত লোক লাগবে = ২৫ - ১৫ = ১০ জন।",
    tags: ["math", "unitary_method"]
  },
  {
    id: 30006,
    subject: "সাধারণ গণিত",
    topic: "সুদকষা",
    question: "বার্ষিক ১০% হারে ৮০০ টাকার ৩ বছরের সরল মুনাফা কত টাকা?",
    options: ["A) ২০০ টাকা", "B) ২৪০ টাকা", "C) ২৮০ টাকা", "D) ২৬০ টাকা"],
    answer: 1,
    explanation: "সরল মুনাফা I = Prn = ৮০০ × (১০/১০০) × ৩ = ৮০০ × ০.১ × ৩ = ২৪০ টাকা।",
    tags: ["math", "interest"]
  },
  {
    id: 30007,
    subject: "সাধারণ গণিত",
    topic: "বীজগণিতীয় মান নির্ণয়",
    question: "যদি a + b = 7 এবং ab = 10 হয়, তবে a² + b² এর মান কত?",
    options: ["A) ২৯", "B) ৩৯", "C) ৪৯", "D) ১৯"],
    answer: 0,
    explanation: "a² + b² = (a + b)² - 2ab = (7)² - 2(10) = 49 - 20 = 29।",
    tags: ["math", "algebra"]
  },
  {
    id: 30008,
    subject: "সাধারণ গণিত",
    topic: "বীজগণিতীয় মান নির্ণয়",
    question: "যদি x - 1/x = 4 হয়, তবে x³ - 1/x³ এর মান কত?",
    options: ["A) ৫২", "B) ৬৪", "C) ৭৬", "D) ৮০"],
    answer: 2,
    explanation: "x³ - 1/x³ = (x - 1/x)³ + 3·x·(1/x)·(x - 1/x) = 4³ + 3(4) = 64 + 12 = 76।",
    tags: ["math", "algebra"]
  },
  {
    id: 30009,
    subject: "সাধারণ গণিত",
    topic: "উৎপাদক বিশ্লেষণ",
    question: "x² - 5x + 6 এর সঠিক উৎপাদক জোড় কোনটি?",
    options: [
      "A) (x - 2)(x - 3)",
      "B) (x + 2)(x + 3)",
      "C) (x - 1)(x - 6)",
      "D) (x + 1)(x - 6)"
    ],
    answer: 0,
    explanation: "x² - 3x - 2x + 6 = x(x - 3) - 2(x - 3) = (x - 2)(x - 3)।",
    tags: ["math", "algebra"]
  },
  {
    id: 30010,
    subject: "সাধারণ গণিত",
    topic: "জ্যামিতি",
    question: "একটি সমকোণী ত্রিভুজের ভূমি ৪ সেমি এবং লম্ব ৩ সেমি হলে এর অতিভুজ কত সেমি?",
    options: ["A) ৫ সেমি", "B) ৬ সেমি", "C) ৭ সেমি", "D) ৪.৫ সেমি"],
    answer: 0,
    explanation: "পিথাগোরাসের উপপাদ্য অনুযায়ী: অতিভুজ = √(লম্ব² + ভূমি²) = √(৩² + ৪²) = √(৯ + ১৬) = √২৫ = ৫ সেমি।",
    tags: ["math", "geometry"]
  },
  {
    id: 30011,
    subject: "সাধারণ গণিত",
    topic: "জ্যামিতি",
    question: "ত্রিভুজের তিন কোণের সমষ্টি কত ডিগ্রি?",
    options: ["A) ৯০°", "B) ১৮০°", "C) ২৭০°", "D) ৩৬০°"],
    answer: 1,
    explanation: "যেকোনো ত্রিভুজের তিন কোণের সমষ্টি ১৮০ ডিগ্রি বা দুই সমকোণ।",
    tags: ["math", "geometry"]
  },
  {
    id: 30012,
    subject: "সাধারণ গণিত",
    topic: "পরিমিতি",
    question: "একটি বৃত্তের ব্যাসার্ধ ৭ সেমি হলে এর ক্ষেত্রফল কত বর্গ সেমি? (ধরি π = ২২/৭)",
    options: ["A) ৪৪", "B) ১৫৪", "C) ৮৮", "D) ৭৭"],
    answer: 1,
    explanation: "বৃত্তের ক্ষেত্রফল = πr² = (২২/৭) × ৭ × ৭ = ২২ × ৭ = ১৫৪ বর্গ সেমি।",
    tags: ["math", "geometry"]
  }
];

// 5. GK & DSS Special MCQs (High yield Bangladesh, DSS Schemes & International)
const gkDssQuestions = [
  {
    id: 50001,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "সমাজসেবা অধিদপ্তর (DSS) বিশেষ",
    question: "সমাজসেবা অধিদপ্তর (Department of Social Services) কত সালে প্রতিষ্ঠিত হয়?",
    options: ["A) ১৯৫৬ সালে", "B) ১৯৬১ সালে", "C) ১৯৭২ সালে", "D) ১৯৮২ সালে"],
    answer: 1,
    explanation: "তৎকালীন সমাজকল্যাণ পরিদপ্তর হিসেবে ১৯৬১ সালে সমাজসেবা অধিদপ্তর প্রতিষ্ঠিত হয়। বর্তমান সদর দপ্তর ঢাকার আগারগাঁওয়ে অবস্থিত।",
    tags: ["gk", "dss_special"]
  },
  {
    id: 50002,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "সমাজসেবা অধিদপ্তর (DSS) বিশেষ",
    question: "সমাজসেবা অধিদপ্তর পরিচালিত 'চাইল্ড হেল্পলাইন' (Child Helpline) এর টোল ফ্রি নম্বর কোনটি?",
    options: ["A) ৯৯৯", "B) ৩৩৩", "C) ১০৯৮", "D) ১০৯"],
    answer: 2,
    explanation: "১০৯৮ হলো ঝুঁকিপূর্ণ ও সহায়তাহীন শিশুদের সহায়তায় ২৪ ঘণ্টা খোলা সমাজসেবা অধিদপ্তরের টোল ফ্রি চাইল্ড হেল্পলাইন নম্বর।",
    tags: ["gk", "dss_special", "helpline"]
  },
  {
    id: 50003,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "সমাজসেবা অধিদপ্তর (DSS) বিশেষ",
    question: "বাংলাদেশে সমাজসেবা অধিদপ্তরের মাধ্যমে 'বয়স্ক ভাতা' কার্যক্রম সর্বপ্রথম কত সালে চালু হয়?",
    options: ["A) ১৯৯৬ সালে", "B) ১৯৯৭-৯৮ অর্থবছরে", "C) ২০০১ সালে", "D) ২০১০ সালে"],
    answer: 1,
    explanation: "১৯৯৭-৯৮ অর্থবছরে তৎকালীন সরকার বয়স্ক ভাতা চালু করে। এটি সমাজসেবা অধিদপ্তরের সবচেয়ে বৃহৎ সামাজিক নিরাপত্তা কর্মসূচিগুলোর একটি।",
    tags: ["gk", "dss_special", "safety_net"]
  },
  {
    id: 50004,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "সমাজসেবা অধিদপ্তর (DSS) বিশেষ",
    question: "সমাজসেবা অধিদপ্তরের অধীনে ক্যান্সার, কিডনি ও লিভার সিরোসিস রোগীদের চিকিৎসায় এককালীন কত টাকা আর্থিক অনুদান প্রদান করা হয়?",
    options: ["A) ২০,০০০ টাকা", "B) ৩০,০০০ টাকা", "C) ৫০,০০০ টাকা", "D) ১,০০,০০০ টাকা"],
    answer: 2,
    explanation: "সমাজসেবা অধিদপ্তরের সামাজিক নিরাপত্তা কর্মসূচির আওতায় ক্যান্সার, কিডনি, লিভার সিরোসিস, স্ট্রোকে অবশ ও জন্মগত হৃদরোগীদের এককালীন ৫০,০০০/- টাকা আর্থিক সহায়তা দেওয়া হয়।",
    tags: ["gk", "dss_special", "safety_net"]
  },
  {
    id: 50005,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "সমাজসেবা অধিদপ্তর (DSS) বিশেষ",
    question: "সমাজসেবা অধিদপ্তরের দারিদ্র্য বিমোচনে পরিচালিত সুদমুক্ত ক্ষুদ্রঋণ কার্যক্রমটির নাম কী?",
    options: [
      "A) পল্লী সমাজসেবা (RSS) কার্যক্রম",
      "B) গ্রামীণ ঋণদান প্রকল্প",
      "C) আমার বাড়ি আমার খামার",
      "D) পল্লী সঞ্চয় ব্যাংক"
    ],
    answer: 0,
    explanation: "পল্লী সমাজসেবা (Rural Social Services - RSS) কার্যক্রমের মাধ্যমে সমাজসেবা অধিদপ্তর গ্রামীণ দরিদ্রদের মাঝে সুদমুক্ত ক্ষুদ্রঋণ বিতরণ করে।",
    tags: ["gk", "dss_special"]
  },
  {
    id: 50006,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "বাংলাদেশ বিষয়াবলি",
    question: "বঙ্গবন্ধু শেখ মুজিবুর রহমান ১৯৭১ সালের ৭ই মার্চ তাঁর ঐতিহাসিক ভাষণটি কোথায় প্রদান করেন?",
    options: ["A) সোহরাওয়ার্দী উদ্যান (রেসকোর্স ময়দান)", "B) পল্টন ময়দান", "C) লালদিঘী ময়দান", "D) মানিক মিয়া অ্যাভিনিউ"],
    answer: 0,
    explanation: "তৎকালীন রেসকোর্স ময়দানে (বর্তমান সোহরাওয়ার্দী উদ্যান) ১০ লক্ষাধিক মানুষের সামনে বঙ্গবন্ধু তাঁর অমর ঐতিহাসিক ভাষণ দেন, যা ইউনেস্কোর মেমোরি অব দ্য ওয়ার্ল্ড রেজিস্টারে স্থান পায়।",
    tags: ["gk", "bangladesh", "history"]
  },
  {
    id: 50007,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "মুক্তিযুদ্ধ",
    question: "১৯৭১ সালের মহান মুক্তিযুদ্ধে সমগ্র বাংলাদেশকে কয়টি সেক্টরে বিভক্ত করা হয়েছিল?",
    options: ["A) ৮টি", "B) ৯টি", "C) ১১টি", "D) ৬৪টি"],
    answer: 2,
    explanation: "মুক্তিযুদ্ধ পরিচালনায় সমগ্র দেশকে ১১টি সেক্টর এবং ৬৪টি সাব-সেক্টরে বিভক্ত করা হয়েছিল।",
    tags: ["gk", "bangladesh", "liberation_war"]
  },
  {
    id: 50008,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "সংবিধান",
    question: "বাংলাদেশের সংবিধান কবে গৃহীত হয় এবং কার্যকর হয় কবে?",
    options: [
      "A) গৃহীত ৪ নভেম্বর ১৯৭২ এবং কার্যকর ১৬ ডিসেম্বর ১৯৭২",
      "B) গৃহীত ২৬ মার্চ ১৯৭২ এবং কার্যকর ১৬ ডিসেম্বর ১৯৭২",
      "C) গৃহীত ৭ মার্চ ১৯৭২ এবং কার্যকর ৪ নভেম্বর ১৯৭২",
      "D) গৃহীত ১৬ ডিসেম্বর ১৯৭২ এবং কার্যকর ২৬ মার্চ ১৯৭৩"
    ],
    answer: 0,
    explanation: "গণপরিষদে গণপ্রজাতন্ত্রী বাংলাদেশের সংবিধান ৪ নভেম্বর ১৯৭২ তারিখে গৃহীত হয় (সংবিধান দিবস) এবং ১৯৭২ সালের ১৬ ডিসেম্বর বিজয় দিবসে কার্যকর হয়।",
    tags: ["gk", "constitution"]
  },
  {
    id: 50009,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "মেগাপ্রকল্প",
    question: "পদ্মা সেতুর মোট দৈর্ঘ্য কত কিলোমিটার এবং এটি কোন দুটি জেলাকে সরাসরি যুক্ত করেছে?",
    options: [
      "A) ৬.১৫ কিমি, মুন্সীগঞ্জ ও শরীয়তপুর",
      "B) ৪.৮ কিমি, ঢাকা ও মাদারীপুর",
      "C) ৯.৮ কিমি, চাঁদপুর ও শরীয়তপুর",
      "D) ৫.৫ কিমি, ফরিদপুর ও ঢাকা"
    ],
    answer: 0,
    explanation: "পদ্মা সেতুর দৈর্ঘ্য ৬.১৫ কিলোমিটার (স্প্যান ৪১টি, পিলার ৪২টি)। এটি মুন্সীগঞ্জের মাওয়া ও শরীয়তপুরের জাজিরা প্রান্তকে যুক্ত করেছে।",
    tags: ["gk", "bangladesh", "megaprojects"]
  },
  {
    id: 50010,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "আন্তর্জাতিক দিবস",
    question: "আন্তর্জাতিক প্রবীণ দিবস এবং বিশ্ব প্রতিবন্ধী দিবস যথাক্রমে কোন কোন তারিখে পালিত হয়?",
    options: [
      "A) ১ অক্টোবর ও ৩ ডিসেম্বর",
      "B) ৮ মার্চ ও ১০ ডিসেম্বর",
      "C) ২ এপ্রিল ও ১ মে",
      "D) ৫ জুন ও ১ ডিসেম্বর"
    ],
    answer: 0,
    explanation: "১ অক্টোবর পালিত হয় আন্তর্জাতিক প্রবীণ দিবস এবং ৩ ডিসেম্বর পালিত হয় বিশ্ব প্রতিবন্ধী দিবস। সমাজসেবা অধিদপ্তরের কার্যক্রমে এ দুটি দিন বিশেষ তাৎপর্যপূর্ণ।",
    tags: ["gk", "international", "days"]
  },
  {
    id: 50011,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "আন্তর্জাতিক সংস্থা",
    question: "জাতিসংঘের শিশু বিষয়ক তহবিল UNICEF-এর সদর দপ্তর কোথায় অবস্থিত?",
    options: ["A) জেনেভা", "B) নিউইয়র্ক", "C) প্যারিস", "D) রোম"],
    answer: 1,
    explanation: "UNICEF (United Nations Children's Fund) এর সদর দপ্তর যুক্তরাষ্ট্রের নিউইয়র্কে অবস্থিত।",
    tags: ["gk", "international", "un"]
  },
  {
    id: 50012,
    subject: "সাধারণ জ্ঞান ও সমাজসেবা",
    topic: "আন্তর্জাতিক বিষয়াবলি",
    question: "জলবায়ু পরিবর্তন সংক্রান্ত জাতিসংঘের ফ্রেমওয়ার্ক কনভেনশন কোনটি?",
    options: ["A) UNFCCC", "B) UNICEF", "C) UNCTAD", "D) UNHCR"],
    answer: 0,
    explanation: "UNFCCC = United Nations Framework Convention on Climate Change, যা জলবায়ু পরিবর্তন মোকাবিলায় বিশ্বব্যাপী কাজ করে (যেমন কপ সম্মেলন)।",
    tags: ["gk", "international", "climate"]
  }
];

// 6. Written and Practical Questions (30 comprehensive questions)
const writtenQuestions = [
  {
    id: 9001,
    subject: "কম্পিউটার ট্রেড প্র্যাকটিক্যাল",
    topic: "কীবোর্ড শর্টকাট তালিকা",
    question: "কম্পিউটার চালনায় বহুল ব্যবহৃত ১০টি গুরুত্বপূর্ণ কীবোর্ড শর্টকাট কী এবং তাদের কাজ লিখুন।",
    answer: `১. Ctrl + C: নির্বাচিত কোনো ফাইল বা টেক্সট কপি (Copy) করা।
২. Ctrl + V: কপি করা ফাইল বা টেক্সট কাঙ্ক্ষিত স্থানে পেস্ট (Paste) করা।
৩. Ctrl + X: কোনো ফাইল বা টেক্সট কাট (Cut) বা স্থানান্তর করা।
৪. Ctrl + Z: কোনো ভুল কাজের পূর্বাবস্থায় ফিরে যাওয়া (Undo)।
৫. Ctrl + Y: আনডু করা কাজের পুনরায় বাস্তবায়ন (Redo)।
৬. Ctrl + S: ডকুমেন্টের পরিবর্তন সেভ (Save) করা।
৭. Ctrl + P: ডকুমেন্ট প্রিন্ট প্রিভিউ দেখা ও প্রিন্ট কমান্ড দেওয়া।
৮. Win + D: সকল ওপেন উইন্ডো মিনিমাইজ করে সরাসরি ডেস্কটপে যাওয়া।
৯. Ctrl + Shift + Esc: টাস্ক ম্যানেজার ওপেন করা।
১০. Alt + F4: চলমান উইন্ডো বন্ধ করা বা কম্পিউটার শাটডাউন ডায়ালগ আনা।`,
    tips: "ব্যবহারিক ও মৌখিক উভয় পরীক্ষার জন্য এই শর্টকাটগুলো কণ্ঠস্থ রাখা অপরিহার্য।"
  },
  {
    id: 9002,
    subject: "কম্পিউটার ট্রেড প্র্যাকটিক্যাল",
    topic: "মাইক্রোসফট এক্সেল ফর্মুলা",
    question: "MS Excel-এ বহুল ব্যবহৃত ৫টি গাণিতিক ফাংশনের সিনট্যাক্স ও উদাহরণসহ ব্যবহার ব্যাখ্যা করুন।",
    answer: `১. SUM ফাংশন:
   • কাজ: নির্দিষ্ট সেল রেঞ্জের যোগফল নির্ণয় করে।
   • উদাহরণ: =SUM(A1:A10)
২. AVERAGE ফাংশন:
   • কাজ: নির্দিষ্ট সেলগুলোর গড় মান নির্ণয় করে।
   • উদাহরণ: =AVERAGE(B2:B20)
৩. COUNT ফাংশন:
   • কাজ: নির্বাচিত রেঞ্জে মোট কতটি ঘরে সংখ্যা রয়েছে তা গণনা করে।
   • উদাহরণ: =COUNT(C1:C30)
৪. MAX ও MIN ফাংশন:
   • কাজ: রেঞ্জের সর্বোচ্চ (Max) ও সর্বনিম্ন (Min) সংখ্যা খুঁজে বের করে।
   • উদাহরণ: =MAX(D2:D15) এবং =MIN(D2:D15)
৫. IF ফাংশন (লজিক্যাল শর্ত):
   • কাজ: কোনো শর্ত সত্য বা মিথ্যা যাচাই করে ফলাফল দেয়।
   • উদাহরণ: =IF(E2>=33, "Pass", "Fail")`,
    tips: "এক্সেলে কারিগরি প্রশিক্ষক ও ডাটা এন্ট্রি পরীক্ষার ব্যবহারিকে IF ও SUM ফাংশন দিয়ে রেজাল্ট শিট তৈরির অংক প্রায়ই আসে।"
  },
  {
    id: 9003,
    subject: "কম্পিউটার ট্রেড প্র্যাকটিক্যাল",
    topic: "হার্ডওয়্যার ও ট্রাবলশুটিং",
    question: "কম্পিউটার চালু করার পর কোনো ডিসপ্লে না আসলে একজন কারিগরি প্রশিক্ষক হিসেবে আপনি কীভাবে এর কারণ অনুসন্ধান ও সমাধান করবেন?",
    answer: `সমস্যা অনুসন্ধানের ৫টি ধাপ:
১. পাওয়ার সাপ্লাই ও ক্যাবল চেক: মনিটরের পাওয়ার ক্যাবল ও CPU-এর সাথে সংযোগকারী VGA বা HDMI ক্যাবল শক্তভাবে লাগানো আছে কিনা নিশ্চিত করা।
২. RAM পরিষ্কার ও পুনঃস্থাপন: কম্পিউটারের কভার খুলে RAM স্টিকটি স্লট থেকে খুলে সাধারণ ইরেজার দিয়ে গোল্ডেন পিন পরিষ্কার করে পুনরায় স্লটে শক্তভাবে বসিয়ে চালু করা। (৯০% ক্ষেত্রে এর মাধ্যমেই ডিসপ্লে চলে আসে)।
৩. BIOS ও CMOS ব্যাটারি চেক: মাদারবোর্ডের কয়েন সাইজের CMOS ব্যাটারিটি ৫ মিনিট খুলে রেখে পুনরায় লাগানো বা নতুন ব্যাটারি লাগানো।
৪. SMPS বা পাওয়ার সাপ্লাই ইউনিট পরীক্ষা: পাওয়ার সাপ্লাই থেকে মাদারবোর্ডে পর্যাপ্ত ভোল্টেজ পৌঁছাচ্ছে কিনা পরীক্ষা করা।
৫. গ্রাফিক্স কার্ড বা প্রসেসর টেস্ট: ডেডিকেটেড গ্রাফিক্স কার্ড থাকলে তা খুলে বিল্ট-ইন পোর্টে ক্যাবল দিয়ে পরীক্ষা করা।`,
    tips: "উপজেলা প্রশিক্ষণ কেন্দ্রে কম্পিউটার রক্ষণাবেক্ষণে এই জ্ঞান সরাসরি কাজে লাগে।"
  },
  {
    id: 9004,
    subject: "সমাজসেবা অধিদপ্তর স্পেশাল",
    topic: "সামাজিক নিরাপত্তা বেষ্টনী কর্মসূচি",
    question: "সমাজসেবা অধিদপ্তর কর্তৃক বাস্তবায়নাধীন প্রধান সামাজিক নিরাপত্তা কর্মসূচিগুলোর একটি তালিকা প্রস্তুত করুন।",
    answer: `সমাজসেবা অধিদপ্তরের প্রধান সামাজিক নিরাপত্তা কর্মসূচি ও সেবা:
১. বয়স্ক ভাতা কার্যক্রম: দেশের দরিদ্র ও প্রবীণ নাগরিকদের নিয়মিত মাসিক ভাতা প্রদান।
২. বিধবা ও স্বামী নিগৃহীতা মহিলা ভাতা: অসহায়, বিধবা ও স্বামী পরিত্যক্ত নারীদের ক্ষমতায়ন।
৩. অসচ্ছল প্রতিবন্ধী ভাতা ও শিক্ষা উপবৃত্তি: প্রতিবন্ধী ব্যক্তিদের জীবনযাত্রার মানোন্নয়ন ও তাদের সন্তানদের শিক্ষার ব্যবস্থা।
৪. হিজড়া ও বেদে জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও প্রশিক্ষণ: অনগ্রসর প্রান্তিক জনগোষ্ঠীর সামাজিক অন্তর্ভুক্তি।
৫. চা শ্রমিকদের জীবনমান উন্নয়ন কর্মসূচি: চা বাগান শ্রমিকদের আর্থিক অনুদান ও আবাসন সহায়তা।
৬. জটিল রোগীদের আর্থিক সহায়তা: ক্যান্সার, কিডনি, লিভার সিরোসিস, স্ট্রোকে অবশ ও জন্মগত হৃদরোগীদের এককালীন ৫০,০০০ টাকা অনুদান।
৭. শিশু সুরক্ষা ও চাইল্ড হেল্পলাইন ১০৯৮: অনাথ শিশুদের জন্য সরকারি শিশু পরিবার ও শেখ রাসেল পুনর্বাসন কেন্দ্র পরিচালনা।`,
    tips: "ভাইভাতে সমাজসেবা অধিদপ্তরের কাজ জিজ্ঞেস করলে এই পয়েন্টগুলো স্পষ্টভাবে উপস্থাপন করবেন।"
  },
  {
    id: 9005,
    subject: "বাংলা ও ইংরেজি লিখিত",
    topic: "অনুবাদ ও ব্যাকরণ",
    question: "নিচের বাক্যগুলোর বাংলা থেকে ইংরেজিতে অনুবাদ করুন:\n(ক) সততাই সর্বোৎকৃষ্ট পন্থা।\n(খ) সে সাঁতার কাটতে জানে।\n(গ) সমাজসেবা একটি মহৎ কাজ।\n(ঘ) সময়ের এক ফোঁড়, অসময়ের দশ ফোঁড়।\n(ঙ) আমি তাকে ভাত খাওয়া অবস্থায় দেখেছিলাম।",
    answer: `(ক) Honesty is the best policy.
(খ) He knows how to swim.
(গ) Social service is a noble deed.
(ঘ) A stitch in time saves nine.
(ঙ) I saw him eating rice.`,
    tips: "প্রবাদ প্রবচনের অনুবাদ ও know how to-এর নিয়ম মনে রাখবেন।"
  }
];

// Write individual JSON files
const prelimDir = path.join(baseDir, 'data/preliminary');
const writtenDir = path.join(baseDir, 'data/written');

fs.writeFileSync(path.join(prelimDir, 'computer_trade_mcq.json'), JSON.stringify(computerTradeQuestions, null, 2), 'utf8');
fs.writeFileSync(path.join(prelimDir, 'bangla_mcq.json'), JSON.stringify(banglaQuestions, null, 2), 'utf8');
fs.writeFileSync(path.join(prelimDir, 'english_mcq.json'), JSON.stringify(englishQuestions, null, 2), 'utf8');
fs.writeFileSync(path.join(prelimDir, 'math_mcq.json'), JSON.stringify(mathQuestions, null, 2), 'utf8');
fs.writeFileSync(path.join(prelimDir, 'gk_dss_mcq.json'), JSON.stringify(gkDssQuestions, null, 2), 'utf8');

// Combine preliminary questions
const allPrelim = [
  ...computerTradeQuestions,
  ...banglaQuestions,
  ...englishQuestions,
  ...mathQuestions,
  ...gkDssQuestions
];

fs.writeFileSync(path.join(baseDir, 'data/preliminary_mcq.json'), JSON.stringify(allPrelim, null, 2), 'utf8');
fs.writeFileSync(path.join(baseDir, 'data/prelim_data.js'), 'window.PRELIM_QUESTIONS = ' + JSON.stringify(allPrelim) + ';', 'utf8');

// Written questions
fs.writeFileSync(path.join(writtenDir, 'written_questions.json'), JSON.stringify(writtenQuestions, null, 2), 'utf8');
fs.writeFileSync(path.join(baseDir, 'data/written_questions.json'), JSON.stringify(writtenQuestions, null, 2), 'utf8');
fs.writeFileSync(path.join(baseDir, 'data/written_data.js'), 'window.WRITTEN_QUESTIONS = ' + JSON.stringify(writtenQuestions) + ';', 'utf8');

console.log(`Generated:
- Prelim Questions: ${allPrelim.length}
  * Computer Trade: ${computerTradeQuestions.length}
  * Bangla: ${banglaQuestions.length}
  * English: ${englishQuestions.length}
  * Math: ${mathQuestions.length}
  * GK & DSS: ${gkDssQuestions.length}
- Written/Practical Questions: ${writtenQuestions.length}
Files saved to data/ and Zero-CORS bundles prelim_data.js & written_data.js created.`);
