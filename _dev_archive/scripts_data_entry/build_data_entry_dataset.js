const fs = require('fs');
const path = require('path');

const targetBase = path.resolve(__dirname, '../../DSS Data Entry Operator Super Suggestion');
fs.mkdirSync(targetBase, { recursive: true });

console.log('=== GENERATING COMPREHENSIVE DATASET FOR DSS DATA ENTRY OPERATOR ===\n');

// Helper to generate preliminary MCQs
function getPrelimMCQs() {
  const mcqs = [];
  let idCounter = 1;

  function addQ(subject, topic, question, options, answer, explanation, tags = []) {
    mcqs.push({
      id: idCounter++,
      subject,
      topic,
      question,
      options,
      answer,
      explanation,
      tags: [...tags, 'DSS', 'Data Entry Operator', '১৬তম গ্রেড']
    });
  }

  // ==========================================
  // ১. কম্পিউটার ও ডাটা এন্ট্রি (Computer & Data Entry)
  // ==========================================
  const compTopics = [
    {
      topic: 'এমএস এক্সেল ও স্প্রেডশিট ফর্মুলা',
      qs: [
        { q: 'MS Excel-এ কোনো রেঞ্জের সংখ্যাগুলোর যোগফল বের করার জন্য কোন ফাংশনটি ব্যবহৃত হয়?', o: ['=TOTAL()', '=SUM()', '=ADD()', '=SUMMATION()'], a: '=SUM()', exp: 'এক্সেলে কোনো সেল রেঞ্জের যোগফলের সাধারণ সিনট্যাক্স হলো =SUM(number1, [number2], ...)।' },
        { q: 'Excel-এ শর্তসাপেক্ষে কোনো ডাটা যোগ করার সঠিক ফাংশন কোনটি?', o: ['=IFSUM()', '=SUMIF()', '=CONDITIONALSUM()', '=SUMCONDITION()'], a: '=SUMIF()', exp: '=SUMIF(range, criteria, [sum_range]) নির্দিষ্ট শর্ত পূরণকারী সেলসমূহের মান যোগ করে।' },
        { q: 'Excel-এ উল্লম্বভাবে (Vertically) কোনো ডাটা টেবিল থেকে নির্দিষ্ট মান খুঁজতে কোনটি ব্যবহৃত হয়?', o: ['HLOOKUP', 'VLOOKUP', 'INDEX-MATCH', 'FIND'], a: 'VLOOKUP', exp: 'VLOOKUP ফাংশনের পূর্ণরূপ হলো Vertical Lookup, যা টেবিলের প্রথম কলামে নির্দিষ্ট মান খুঁজে একই সারির অন্য কলামের মান প্রদর্শন করে।' },
        { q: 'MS Excel-এ নির্দিষ্ট শর্ত পূরণকারী ঘরের সংখ্যা গণনা করার সূত্র কোনটি?', o: ['=COUNT()', '=COUNTIF()', '=COUNTA()', '=NUMIF()'], a: '=COUNTIF()', exp: '=COUNTIF(range, criteria) নির্দিষ্ট শর্ত সাপেক্ষে ঘরের সংখ্যা গণনা করে, যেখানে COUNT শুধুমাত্র সংখ্যাযুক্ত ঘর গুনে।' },
        { q: 'Excel ওয়ার্কশিটে কোনো নির্দিষ্ট সেলের অ্যাবসোলিউট রেফারেন্স (Absolute Reference) তৈরিতে কোন প্রতীক ব্যবহৃত হয়?', o: ['#', '%', '$', '&'], a: '$', exp: 'রো এবং কলামের আগে $ চিহ্ন দিয়ে (যেমন: $A$1) রেফারেন্স লক বা অ্যাবসোলিউট করা হয়।' },
        { q: 'Excel ফাইলে নতুন রো বা কলাম যোগ করার কীবোর্ড শর্টকাট কোনটি?', o: ['Ctrl + Shift + +', 'Ctrl + Alt + +', 'Alt + Shift + I', 'Ctrl + N'], a: 'Ctrl + Shift + +', exp: 'সেল বা রো সিলেক্ট থাকা অবস্থায় Ctrl + Shift + + চাপলে ইনসার্ট ডায়ালগ বক্স আসে।' },
        { q: 'Excel-এ একাধিক টেক্সট স্ট্রিং একত্রিত করার ফাংশন কোনটি?', o: ['=MERGE()', '=CONCATENATE()', '=JOIN()', '=COMBINE()'], a: '=CONCATENATE()', exp: '=CONCATENATE(text1, text2) বা নতুন ভার্সনে =CONCAT() টেক্সট স্ট্রিং যুক্ত করে।' },
        { q: 'MS Excel-এ আজকের বর্তমান তারিখ দেখানোর ফাংশন কোনটি?', o: ['=CURRENT()', '=TODAY()', '=NOW()', '=DATE()'], a: '=TODAY()', exp: '=TODAY() ফাংশন বর্তমান তারিখ রিটার্ন করে, আর =NOW() বর্তমান তারিখ ও সময় উভয়ই প্রদর্শন করে।' },
        { q: 'Excel ফাইলে কোনো সেলে ভুল ডাটা টাইপ বন্ধ করার ফিচারের নাম কী?', o: ['Data Filtering', 'Data Validation', 'Conditional Formatting', 'Data Sorting'], a: 'Data Validation', exp: 'Data Validation ফিচারের মাধ্যমে সেলে গ্রহণযোগ্য ডাটার ধরন (যেমন: পূর্ণসংখ্যা, নির্দিষ্ট দৈর্ঘ্য, ড্রপডাউন লিস্ট) সীমাবদ্ধ করা যায়।' },
        { q: 'Excel-এ কোনো সেলের সর্বোচ্চ মান বের করতে কোন ফাংশন ব্যবহৃত হয়?', o: ['=TOP()', '=MAX()', '=HIGH()', '=PEAK()'], a: '=MAX()', exp: '=MAX(range) ফাংশন নির্বাচিত রেঞ্জের সর্বোচ্চ সাংখ্যিক মান প্রদর্শন করে।' }
      ]
    },
    {
      topic: 'এমএস ওয়ার্ড ও ডকুমেন্ট প্রসেসিং',
      qs: [
        { q: 'MS Word-এ কোনো টেক্সটকে জাস্টিফাই (Justify Alignment) করার শর্টকাট কোনটি?', o: ['Ctrl + J', 'Ctrl + E', 'Ctrl + L', 'Ctrl + R'], a: 'Ctrl + J', exp: 'Ctrl + J প্যারাগ্রাফকে উভয় পাশে সমানভাবে জাস্টিফাই করে। Ctrl + E সেন্টার এবং Ctrl + L বামে অ্যালাইন করে।' },
        { q: 'MS Word ডকুমেন্টে Find & Replace ডায়ালগ ওপেন করার শর্টকাট কী?', o: ['Ctrl + F', 'Ctrl + H', 'Ctrl + R', 'Ctrl + G'], a: 'Ctrl + H', exp: 'Ctrl + H সরাসরি Replace উইন্ডো আনে এবং Ctrl + F শুধুমাত্র Find উইন্ডো আনে।' },
        { q: 'এমএস ওয়ার্ডে ফন্ট সাইজ এক পয়েন্ট বড় করার কীবোর্ড শর্টকাট কোনটি?', o: ['Ctrl + ]', 'Ctrl + Shift + >', 'Ctrl + [', 'উভয় ক ও খ'], a: 'উভয় ক ও খ', exp: 'Ctrl + ] এবং Ctrl + Shift + > উভয়ই ফন্ট সাইজ বড় করতে কার্যকর।' },
        { q: 'ডকুমেন্টে পৃষ্ঠার নিচে ফুটনোট (Footnote) ইনসার্ট করার শর্টকাট কোনটি?', o: ['Alt + Ctrl + F', 'Alt + Ctrl + D', 'Ctrl + Shift + F', 'Alt + F'], a: 'Alt + Ctrl + F', exp: 'Alt + Ctrl + F কমান্ডে ফুটনোট এবং Alt + Ctrl + D দিয়ে এন্ডনোট যুক্ত হয়।' },
        { q: 'এমএস ওয়ার্ডে টেবিল তৈরি করার অপশন কোন ট্যাবে থাকে?', o: ['Home', 'Insert', 'Page Layout', 'References'], a: 'Insert', exp: 'Insert ট্যাবের অধীনে Table, Picture, Shapes, Chart ইত্যাদি ইনসার্ট করার কমান্ড রয়েছে।' },
        { q: 'একই চিঠি বিভিন্ন ঠিকানায় দ্রুত প্রেরণের জন্য ওয়ার্ডের কোন ফিচারটি ব্যবহৃত হয়?', o: ['AutoText', 'Mail Merge', 'Macro', 'Track Changes'], a: 'Mail Merge', exp: 'Mail Merge এর মাধ্যমে একক মূল চিঠি বিভিন্ন ডেটাবেজ বা তালিকার সদস্যদের নামে স্বয়ংক্রিয়ভাবে তৈরি করা যায়।' },
        { q: 'MS Word-এ পেজ ব্রেক (Page Break) দেওয়ার কীবোর্ড শর্টকাট কোনটি?', o: ['Shift + Enter', 'Ctrl + Enter', 'Alt + Enter', 'Ctrl + Shift + Enter'], a: 'Ctrl + Enter', exp: 'Ctrl + Enter চাপলে কার্সরের স্থান থেকে তাৎক্ষণিক নতুন পৃষ্ঠা শুরু হয়।' },
        { q: 'কোনো ডকুমেন্টের বানান ও ব্যাকরণ (Spelling & Grammar) পরীক্ষার ফাংশন কী কোনটি?', o: ['F1', 'F5', 'F7', 'F12'], a: 'F7', exp: 'F7 চাপলে স্পেলিং ও গ্রামার চেকার ওপেন হয়। F12 দিয়ে Save As হয়।' }
      ]
    },
    {
      topic: 'কম্পিউটার টাইপিং ও ডাটা এন্ট্রি স্ট্যান্ডার্ডস',
      qs: [
        { q: 'সমাজসেবা অধিদপ্তরের ডাটা এন্ট্রি অপারেটর পদে প্রতি মিনিটে সর্বনিম্ন কত শব্দ টাইপ করতে হবে?', o: ['বাংলা ১৫ ও ইংরেজি ২০', 'বাংলা ২০ ও ইংরেজি ২০', 'বাংলা ২৫ ও ইংরেজি ৩০', 'বাংলা ৩০ ও ইংরেজি ৩৫'], a: 'বাংলা ২০ ও ইংরেজি ২০', exp: 'অফিশিয়াল সার্কুলার শর্তানুযায়ী বাংলা ও ইংরেজি উভয় ভাষায় প্রতি মিনিটে সর্বনিম্ন ২০ শব্দ টাইপিং গতি থাকা আবশ্যক।' },
        { q: 'বাংলা টাইপিংয়ে বিজয় কীবোর্ডে ‘ক্ষ’ লেখার সঠিক কী সিকোয়েন্স কোনটি?', o: ['k + g + k', 'k + G + N', 'k + G + shift + k', 'k + G + K'], a: 'k + G + Shift + k', exp: 'বিজয় কীবোর্ডে ক (k) + হসন্ত (g) + মূর্ধন্য ষ (Shift + k) চাপলে ‘ক্ষ’ যুক্তাক্ষর গঠিত হয়।' },
        { q: 'অভ্র কীবোর্ডে ফোনেটিক পদ্ধতিতে ‘জ্ঞান’ টাইপ করতে কী লিখতে হয়?', o: ['ggan', 'jñan', 'j+g+g+an', 'z+g+an'], a: 'jñan', exp: 'অভ্রতে ‘জ্ঞ’ এর জন্য j এবং Shift + n (ঞ) চেপে jñan লিখলে ‘জ্ঞান’ হয়।' },
        { q: 'ডাটা এন্ট্রির ক্ষেত্রে "Double Entry Verification" পদ্ধতির মূল উদ্দেশ্য কী?', o: ['দ্বিগুণ গতিতে টাইপ করা', 'ভুল ও টাইপো ত্রুটি শূন্যে নামানো', 'ডেটাবেজের আকার বড় করা', 'অপারেটরের বেতন বৃদ্ধি'], a: 'ভুল ও টাইপো ত্রুটি শূন্যে নামানো', exp: 'দুজন ভিন্ন অপারেটর একই তথ্য ইনপুট দেন এবং সফটওয়্যার স্বয়ংক্রিয়ভাবে অমিল চিহ্নিত করে শতভাগ নির্ভুলতা নিশ্চিত করে।' },
        { q: 'কীবোর্ডের হোম রো (Home Row)-তে বাম ও ডান হাতের তর্জনী কোন দুটি কী-এর উপর স্থাপন করতে হয়?', o: ['A এবং L', 'S এবং K', 'F এবং J', 'D এবং H'], a: 'F এবং J', exp: 'টাচ টাইপিংয়ের মূল ভিত্তি হলো F এবং J কী, যার উপর স্পর্শনির্ভর ছোট চিহ্ন (Bump) থাকে।' },
        { q: 'উইন্ডোজে বাংলা ফন্ট ‘SutonnyMJ’ কোন ধরনের এনকোডিং ব্যবহার করে?', o: ['Unicode', 'ANSI', 'ASCII-7', 'UTF-8'], a: 'ANSI', exp: 'সুতোন্নিএমজে একটি এএনএসআই (ANSI) কাস্টম এনকোডেড ফন্ট, যা ইউনিকোড প্ল্যাটফর্মে কনভার্সন ছাড়া ভুল দেখায়।' }
      ]
    },
    {
      topic: 'ডাটাবেজ ও এমএস অ্যাক্সেস বেসিকস',
      qs: [
        { q: 'একটি রিলেশনাল ডাটাবেজে প্রতিটি রেকর্ডকে স্বতন্ত্রভাবে শনাক্ত করতে কোনটি আবশ্যক?', o: ['Foreign Key', 'Primary Key', 'Candidate Key', 'Composite Key'], a: 'Primary Key', exp: 'Primary Key হলো এমন একটি ফিল্ড বা ফিল্ড সমষ্টি যা টেবিলের প্রতিটি রেকর্ডকে অদ্বিতীয়ভাবে শনাক্ত করে এবং নাল (Null) হতে পারে না।' },
        { q: 'MS Access ফাইলে ফাইল এক্সটেনশন কোনটি (আধুনিক সংস্করণসমূহে)?', o: ['.mdb', '.accdb', '.dbf', '.sql'], a: '.accdb', exp: 'অ্যাক্সেস ২০০৭ হতে পরবর্তী সকল সংস্করণে ডিফল্ট ফাইল এক্সটেনশন হলো .accdb (পূর্বে ছিল .mdb)।' },
        { q: 'ডাটাবেজ টেবিলে একটি অনুভূমিক সারিকে (Row) কী বলা হয়?', o: ['Field', 'Record / Tuple', 'Attribute', 'Domain'], a: 'Record / Tuple', exp: 'ডাটাবেজ টেবিলের সারিকে রেকর্ড (Record) বা টাপল (Tuple) এবং কলামকে ফিল্ড (Field) বা অ্যাট্রিবিউট বলা হয়।' },
        { q: 'SQL এর পূর্ণরূপ কী?', o: ['Structured Query Language', 'Simple Question Language', 'Standard Query Logic', 'Sequential Query List'], a: 'Structured Query Language', exp: 'SQL হলো রিলেশনাল ডাটাবেজ পরিচালনার সার্বজনীন প্রমিত ভাষা।' },
        { q: 'ডাটাবেজে তথ্য প্রদর্শনের সুবিধাজনক ও প্রিন্ট-রেডি ফরম্যাটকে কী বলা হয়?', o: ['Query', 'Form', 'Report', 'Table'], a: 'Report', exp: 'অ্যাক্সেসে ডাটা এন্ট্রির জন্য Form, অনুসন্ধানের জন্য Query এবং চূড়ান্ত উপস্থাপনা/মুদ্রণের জন্য Report ব্যবহৃত হয়।' }
      ]
    },
    {
      topic: 'কম্পিউটার হার্ডওয়্যার, নেটওয়ার্কিং ও ইন্টারনেট',
      qs: [
        { q: 'কম্পিউটারের প্রধান অস্থায়ী মেমোরি কোনটি?', o: ['ROM', 'RAM', 'SSD', 'HDD'], a: 'RAM', exp: 'Random Access Memory (RAM) হলো বিদ্যুৎ নির্ভর ভোলাটাইল বা অস্থায়ী মেমোরি।' },
        { q: 'ইন্টারনেটে ডাটা আদান-প্রদানে তথ্য এনক্রিপ্ট করার নিরাপদ প্রটোকল কোনটি?', o: ['HTTP', 'HTTPS', 'FTP', 'SMTP'], a: 'HTTPS', exp: 'Hypertext Transfer Protocol Secure (HTTPS) এসএসএল/টিএলএস এনক্রিপশন ব্যবহার করে তথ্যের নিরাপত্তা দেয়।' },
        { q: 'কম্পিউটার সিস্টেমের মেমোরি পরিমাপের সঠিক ঊর্ধ্বক্রম কোনটি?', o: ['KB < MB < GB < TB', 'MB < KB < GB < TB', 'KB < GB < MB < TB', 'TB < GB < MB < KB'], a: 'KB < MB < GB < TB', exp: '১০২৪ বাইট = ১ KB, ১০২৪ KB = ১ MB, ১০২৪ MB = ১ GB, ১০২৪ GB = ১ TB।' },
        { q: 'কোনো নেটওয়ার্কে প্রতিটি কম্পিউটারের যে স্বতন্ত্র ডিজিটাল ঠিকানা থাকে তাকে কী বলে?', o: ['MAC Address', 'IP Address', 'URL', 'DNS'], a: 'IP Address', exp: 'Internet Protocol (IP) Address হলো নেটওয়ার্ক ডিভাইসকে শনাক্তকারী যৌক্তিক ঠিকানা।' },
        { q: 'ফিশিং (Phishing) আক্রমণ বলতে কী বোঝায়?', o: ['কম্পিউটার পানিতে ফেলা', 'নকল ওয়েবসাইটের মাধ্যমে পাসওয়ার্ড/তথ্য চুরি', 'হার্ডওয়্যার নষ্ট করা', 'ভাইরাস দিয়ে ফাইল ডিলিট করা'], a: 'নকল ওয়েবসাইটের মাধ্যমে পাসওয়ার্ড/তথ্য চুরি', exp: 'বিশ্বাসযোগ্য প্রতিষ্ঠানের ছদ্মবেশে প্রতারণামূলক লিংক পাঠিয়ে গোপন তথ্য হাতিয়ে নেওয়াকে ফিশিং বলে।' }
      ]
    }
  ];

  compTopics.forEach(t => {
    t.qs.forEach(item => {
      addQ('কম্পিউটার ও ডাটা এন্ট্রি', t.topic, item.q, item.o, item.a, item.exp, ['Computer', 'MS Office']);
    });
  });

  // ==========================================
  // ২. বাংলা ভাষা ও ব্যাকরণ (Bangla)
  // ==========================================
  const banglaTopics = [
    {
      topic: 'বানান ও বাক্য শুদ্ধিকরণ',
      qs: [
        { q: 'নিচের কোন বানানটি শুদ্ধ?', o: ['মুহুর্ত', 'মুহূর্ত', 'মুহুর্থ', 'মুহুত্ব'], a: 'মুহূর্ত', exp: 'শুদ্ধ বানান হলো ম-হ্রস্ব উ, হ-দীর্ঘ ঊ, ত-রেফ = ‘মুহূর্ত’।' },
        { q: 'কোন বানানটি প্রমিত বাংলা বানানের নিয়মে সঠিক?', o: ['পুরস্কার', 'পুরষ্কার', 'পুরস্কার্য', 'পুরসকার'], a: 'পুরস্কার', exp: 'অ-কার বা আ-কারের পর বিসর্গ থাকলে দন্ত্য-স হয় (যেমন: পুরস্কার, নমস্কার)।' },
        { q: 'নিচের কোন বাক্যটি সম্পূর্ণ শুদ্ধ?', o: ['সকল সদস্যগণ উপস্থিত ছিলেন।', 'তিনি সস্ত্রীক এসেছেন।', 'বিদ্বান মূর্খ অপেক্ষা শ্রেষ্ঠতর।', 'দারিদ্রতা আমাদের প্রধান শত্রু।'], a: 'তিনি সস্ত্রীক এসেছেন।', exp: '‘সস্ত্রীক’ অর্থ স্ত্রীসহ। ‘সকল সদস্যগণ’ বাহুল্য দোষে দুষ্ট, ‘দারিদ্র্য’ বা ‘দরিদ্রতা’ সঠিক রূপ।' },
        { q: '‘মুমূর্ষু’ শব্দের সঠিক বানান কোনটি?', o: ['মুমুর্যু', 'মুমূর্ষু', 'মুমুর্ষূ', 'মুমূর্ষূ'], a: 'মুমূর্ষু', exp: 'হ্রস্ব উ + দীর্ঘ ঊ + হ্রস্ব উ = মু + মূ + র্ষু = মুমূর্ষু।' }
      ]
    },
    {
      topic: 'সন্ধি ও সমাস',
      qs: [
        { q: '‘পরীক্ষা’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?', o: ['পরি + ঈক্ষা', 'পরী + ক্ষা', 'পর + ইক্ষা', 'পরি + ইক্ষা'], a: 'পরি + ঈক্ষা', exp: 'পরি (হ্রস্ব ই) + ঈক্ষা (দীর্ঘ ঈ) = পরীক্ষা।' },
        { q: '‘মহর্ষি’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?', o: ['মহা + ঋষি', 'মহ + ঋষি', 'মহা + ঋষিঃ', 'মহৎ + ঋষি'], a: 'মহা + ঋষি', exp: 'আ + ঋ = অর্ (যেমন: মহা + ঋষি = মহর্ষি)।' },
        { q: '‘সিংহপুরুষ’ কোন সমাসের উদাহরণ?', o: ['উপমিত কর্মধারয়', 'উপমান কর্মধারয়', 'রূপক কর্মধারয়', 'মধ্যপদলোপী কর্মধারয়'], a: 'উপমিত কর্মধারয়', exp: 'সাধারণ গুণের উল্লেখ না করে উপমেয় পদের সাথে উপমানের সমাস হলে তাকে উপমিত কর্মধারয় বলে (পুরুষ সিংহের ন্যায়)।' },
        { q: '‘গায়ে-হলুদ’ কোন সমাস?', o: ['বহুব্রীহি (অলুক)', 'দ্বন্দ্ব', 'তৎপুরুষ', 'কর্মধারয়'], a: 'বহুব্রীহি (অলুক)', exp: 'গায়ে হলুদ দেওয়া হয় যে অনুষ্ঠানে = গায়ে-হলুদ (অলুক বহুব্রীহি সমাস)।' }
      ]
    },
    {
      topic: 'এককথায় প্রকাশ ও বাগধারা',
      qs: [
        { q: '‘যা পূর্বে দেখা যায় নাই’—এককথায় কী হবে?', o: ['অপূর্ব', 'অদৃষ্টপূর্ব', 'অশ্রুতপূর্ব', 'অনুপম'], a: 'অদৃষ্টপূর্ব', exp: 'যা পূর্বে দেখা যায় নাই = অদৃষ্টপূর্ব। যা পূর্বে শোনা যায় নাই = অশ্রুতপূর্ব।' },
        { q: '‘উপকারের অপকার করে যে’—তাকে কী বলে?', o: ['কৃতঘ্ন', 'কৃতজ্ঞ', 'অকৃতজ্ঞ', 'অপকারী'], a: 'কৃতঘ্ন', exp: 'উপকারের উপকার স্বীকার করে যে = কৃতজ্ঞ; উপকারীর অপকার করে যে = কৃতঘ্ন।' },
        { q: '‘আকাশ কুসুম’ বাগধারাটির অর্থ কী?', o: ['অসম্ভব কল্পনা', 'আকাশের ফুল', 'সৌভাগ্য', 'মূল্যহীন বস্তু'], a: 'অসম্ভব কল্পনা', exp: 'আকাশ কুসুম অর্থ অসম্ভব অবাস্তব কল্পনা করা।' },
        { q: '‘ডুমুরের ফুল’ বাগধারার যথার্থ অর্থ কী?', o: ['অদৃশ্য ফুল', 'দুর্লভ বস্তু', 'সুন্দর ফুল', 'অনুপস্থিত ব্যক্তি'], a: 'দুর্লভ বস্তু', exp: 'ডুমুরের ফুল সহজে দেখা যায় না, তাই এর অর্থ দুর্লভ বস্তু।' }
      ]
    },
    {
      topic: 'দাপ্তরিক ও প্রশাসনিক পরিভাষা',
      qs: [
        { q: '‘Notification’ শব্দের সঠিক সরকারি পরিভাষা কোনটি?', o: ['বিজ্ঞপ্তি', 'প্রজ্ঞাপন', 'নোটিশ', 'পরিপত্র'], a: 'প্রজ্ঞাপন', exp: 'Notification = প্রজ্ঞাপন; Circular = পরিপত্র; Notice = নোটিশ; Advertisement = বিজ্ঞপ্তি।' },
        { q: '‘Quorum’ শব্দের বাংলা প্রশাসনিক পরিভাষা কী?', o: ['উপস্থিতি', 'সদস্য কোরাম', 'গণপূর্তি', 'সভার ন্যূনতম সদস্য সংখ্যা'], a: 'গণপূর্তি', exp: 'সভা পরিচালনার জন্য প্রয়োজনীয় ন্যূনতম সদস্য উপস্থিতিকে ‘গণপূর্তি’ (Quorum) বলে।' },
        { q: 'সরকারি ফাইলে ‘Note Sheet’ এর পারিভাষিক অর্থ কী?', o: ['চিঠি কাগজ', 'নথিপত্র', 'নোট পত্র / নথি উপস্থাপন পাতা', 'স্মারক লিপি'], a: 'নোট পত্র / নথি উপস্থাপন পাতা', exp: 'সরকারি সিদ্ধান্তে কর্মকর্তা-কর্মচারীদের লিখিত মতামত উপস্থাপন পাতাকে নোট শিট বলা হয়।' }
      ]
    }
  ];

  banglaTopics.forEach(t => {
    t.qs.forEach(item => {
      addQ('বাংলা', t.topic, item.q, item.o, item.a, item.exp, ['Bangla', 'Grammar']);
    });
  });

  // ==========================================
  // ৩. ইংরেজি ভাষা ও ব্যাকরণ (English)
  // ==========================================
  const engTopics = [
    {
      topic: 'Appropriate Prepositions',
      qs: [
        { q: 'He is proficient _____ English data entry.', o: ['in', 'at', 'with', 'on'], a: 'in', exp: 'Proficient in something (কোনো বিষয়ে দক্ষ)। Good at কিন্তু Proficient in হয়।' },
        { q: 'The clerk complied _____ the official order.', o: ['to', 'with', 'by', 'for'], a: 'with', exp: 'Comply with অর্থ নিয়ম বা আদেশ মান্য করা।' },
        { q: 'He is accused _____ stealing office documents.', o: ['for', 'with', 'of', 'by'], a: 'of', exp: 'Accuse of অর্থ অভিযুক্ত করা।' },
        { q: 'The project is funded _____ the Department of Social Services.', o: ['with', 'by', 'from', 'in'], a: 'by', exp: 'Funded by an organization (কোনো সংস্থা কর্তৃক অর্থায়িত)।' }
      ]
    },
    {
      topic: 'Right Form of Verbs & Tense',
      qs: [
        { q: 'Neither of the operators _____ present yesterday.', o: ['were', 'was', 'are', 'have been'], a: 'was', exp: 'Neither of + plural noun-এর পর verb সর্বদা singular হয়।' },
        { q: 'The data entry operator _____ the report before the officer arrived.', o: ['submitted', 'has submitted', 'had submitted', 'was submitting'], a: 'had submitted', exp: 'Past Perfect টেন্সে Before-এর পূর্ববর্তী ক্লজ had + V3 হয়।' },
        { q: 'It is high time we _____ the digital database.', o: ['update', 'updated', 'have updated', 'will update'], a: 'updated', exp: 'It is high time / It is time-এর পর past indefinite tense হয়।' }
      ]
    },
    {
      topic: 'Spelling & Vocabulary',
      qs: [
        { q: 'Choose the correct spelling of the following word:', o: ['Occurence', 'Occurrence', 'Ocurrence', 'Occurance'], a: 'Occurrence', exp: 'সঠিক বানান O-c-c-u-r-r-e-n-c-e (Occurrence)।' },
        { q: 'Identify the correctly spelled word:', o: ['Questionaire', 'Questionnaire', 'Questionair', 'Questionnare'], a: 'Questionnaire', exp: 'সঠিক বানান Q-u-e-s-t-i-o-n-n-a-i-r-e (Questionnaire - প্রশ্নমালা)।' },
        { q: 'What is the synonym of the word "Meticulous"?', o: ['Careless', 'Diligent / Thorough', 'Hasty', 'Vague'], a: 'Diligent / Thorough', exp: 'Meticulous অর্থ অতি সতর্ক ও খুঁটিনাটি নির্ভুলকারী, যার সমার্থক Thorough বা Diligent।' }
      ]
    },
    {
      topic: 'Translation & Idioms',
      qs: [
        { q: '“তিনি ডাটা এন্ট্রিতে সিদ্ধহস্ত”—এর সঠিক ইংরেজি অনুবাদ কোনটি?', o: ['He is skilled with data entry.', 'He is an adept at data entry.', 'He has a hand in data entry.', 'He knows data entry well.'], a: 'He is an adept at data entry.', exp: 'Adept at / Expert in অর্থ সিদ্ধহস্ত বা সুদক্ষ।' },
        { q: 'What is the meaning of the idiom "At a glance"?', o: ['Immediately after looking', 'Blindly', 'Slowly', 'Carefully'], a: 'Immediately after looking', exp: 'At a glance অর্থ এক পলকে বা এক নজরেই।' }
      ]
    }
  ];

  engTopics.forEach(t => {
    t.qs.forEach(item => {
      addQ('ইংরেজি', t.topic, item.q, item.o, item.a, item.exp, ['English', 'Grammar']);
    });
  });

  // ==========================================
  // ৪. সাধারণ গণিত (General Mathematics)
  // ==========================================
  const mathTopics = [
    {
      topic: 'শতকরা ও লাভ-ক্ষতি',
      qs: [
        { q: 'একটি কীবোর্ড ৮০০ টাকায় ক্রয় করে ১,০০০ টাকায় বিক্রয় করলে শতকরা কত লাভ হবে?', o: ['২০%', '২৫%', '১৫%', '৩০%'], a: '২৫%', exp: 'লাভ = ১০০০ - ৮০০ = ২০০ টাকা। শতকরা লাভ = (২০০ / ৮০০) × ১০০ = ২৫%।' },
        { q: 'কোনো সংখ্যার ৬০% থেকে ৬০ বিয়োগ করলে বিয়োগফল ৬০ হয়। সংখ্যাটি কত?', o: ['১০০', '২০০', '১২০', '৩০০'], a: '২০০', exp: 'ধরি সংখ্যাটি x। ০.৬০x - ৬০ = ৬০ => ০.৬০x = ১২০ => x = ১২০ / ০.৬০ = ২০০।' }
      ]
    },
    {
      topic: 'ঐকিক নিয়ম, কাজ ও সময়',
      qs: [
        { q: 'একজন ডাটা এন্ট্রি অপারেটর ১ ঘণ্টায় ১,২০০ শব্দ টাইপ করতে পারেন। ৫ মিনিটে তিনি কত শব্দ টাইপ করবেন?', o: ['১০০ টি', '১২০ টি', '১৫০ টি', '৮০ টি'], a: '১০০ টি', exp: '৬০ মিনিটে টাইপ করেন ১২০০ শব্দ। অতএব ১ মিনিটে ২০ শব্দ, ৫ মিনিটে ২০ × ৫ = ১০০ শব্দ।' },
        { q: '১০ জন লোক একটি ডাটা এন্ট্রি কাজ ৬ দিনে সম্পন্ন করতে পারে। ৪ দিনে কাজটি সম্পন্ন করতে কতজন লোক লাগবে?', o: ['১২ জন', '১৫ জন', '১৮ জন', '২০ জন'], a: '১৫ জন', exp: 'লোকসংখ্যা ও দিনের সম্পর্ক ব্যস্তানুপাতিক: (১০ × ৬) / ৪ = ৬০ / ৪ = ১৫ জন।' }
      ]
    },
    {
      topic: 'অনুপাত ও সাধারণ বীজগণিত',
      qs: [
        { q: 'দুটি সংখ্যার অনুপাত ৫ : ৭ এবং তাদের গসাগু ৪ হলে, ছোট সংখ্যাটি কত?', o: ['১৫', '২০', '২৮', '৩৫'], a: '২০', exp: 'সংখ্যা দুটি ৫x ও ৭x। গসাগু x = ৪। অতএব ছোট সংখ্যাটি = ৫ × ৪ = ২০।' },
        { q: 'যদি a + b = 7 এবং ab = 12 হয়, তবে a² + b² এর মান কত?', o: ['২৫', '৪৯', '৩৭', '১৩'], a: '২৫', exp: 'a² + b² = (a + b)² - 2ab = (৭)² - ২(১২) = ৪৯ - ২৪ = ২৫।' }
      ]
    }
  ];

  mathTopics.forEach(t => {
    t.qs.forEach(item => {
      addQ('সাধারণ গণিত', t.topic, item.q, item.o, item.a, item.exp, ['Math', 'Aptitude']);
    });
  });

  // ==========================================
  // ৫. সাধারণ জ্ঞান ও সমাজসেবা অধিদপ্তর
  // ==========================================
  const gkTopics = [
    {
      topic: 'সমাজসেবা অধিদপ্তর ও সমাজকল্যাণ কর্মসূচি',
      qs: [
        { q: 'সমাজসেবা অধিদপ্তর (DSS) কোন মন্ত্রণালয়ের অধীনস্থ অধিদপ্তর?', o: ['মহিলা ও শিশু বিষয়ক মন্ত্রণালয়', 'সমাজকল্যাণ মন্ত্রণালয়', 'স্থানীয় সরকার মন্ত্রণালয়', 'স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়'], a: 'সমাজকল্যাণ মন্ত্রণালয়', exp: 'সমাজসেবা অধিদপ্তর গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের সমাজকল্যাণ মন্ত্রণালয়ের আওতাধীন প্রধান সেবাধর্মী অধিদপ্তর।' },
        { q: 'বাংলাদেশে জাতীয় সমাজসেবা দিবস কবে পালিত হয়?', o: ['২ জানুয়ারি', '৮ মার্চ', '২৩ জুন', '১০ ডিসেম্বর'], a: '২ জানুয়ারি', exp: 'প্রতি বছর ২ জানুয়ারি দেশব্যাপী জাতীয় সমাজসেবা দিবস উদযাপন করা হয়।' },
        { q: 'সমাজসেবা অধিদপ্তরের ভাতা সরাসরি উপকারভোগীর অ্যাকাউন্টে পাঠাতে কোন পদ্ধতি ব্যবহৃত হয়?', o: ['ক্যাশ অন ডেলিভারি', 'G2P (Government to Person)', 'ড্রাফট চেক', 'পোস্টাল অর্ডার'], a: 'G2P (Government to Person)', exp: 'ডিজিটাল বাংলাদেশ বিনির্মাণে ভাতা শতভাগ স্বচ্ছতার সাথে ইলেকট্রনিক ফান্ড ট্রান্সফারের (G2P) মাধ্যমে বিতরণ করা হয়।' },
        { q: 'সমাজসেবা অধিদপ্তরের প্রধান কার্যালয় ঢাকার কোথায় অবস্থিত?', o: ['আগারগাঁও', 'সেগুনবাগিচা', 'সমাজসেবা ভবন, আগারগাঁও', 'মতিঝিল'], a: 'সমাজসেবা ভবন, আগারগাঁও', exp: 'সমাজসেবা অধিদপ্তরের সদর দপ্তর ই-৮/বি-১, সমাজসেবা ভবন, আগারগাঁও, শেরেবাংলা নগর, ঢাকা-১২০৭ এ অবস্থিত।' }
      ]
    },
    {
      topic: 'মুক্তিযুদ্ধ, সংবিধান ও স্মার্ট বাংলাদেশ',
      qs: [
        { q: 'বাংলাদেশের সংবিধানে নাগরিকদের সামাজিক নিরাপত্তার অধিকার কোন অনুচ্ছেদে নিশ্চিত করা হয়েছে?', o: ['অনুচ্ছেদ ১৫ (ঘ)', 'অনুচ্ছেদ ১৭', 'অনুচ্ছেদ ২০', 'অনুচ্ছেদ ২৭'], a: 'অনুচ্ছেদ ১৫ (ঘ)', exp: '১৫ (ঘ) অনুচ্ছেদে সামাজিক নিরাপত্তা অর্থাৎ বেকারত্ব, ব্যাধি বা বার্ধক্যজনিত কারণে সরকারি সাহায্য লাভের অধিকার বর্ণিত।' },
        { q: 'মুজিবনগর সরকার আনুষ্ঠানিকভাবে কবে শপথ গ্রহণ করে?', o: ['১০ এপ্রিল ১৯৭১', '১৭ এপ্রিল ১৯৭১', '২৬ মার্চ ১৯৭১', '১৬ ডিসেম্বর ১৯৭১'], a: '১৭ এপ্রিল ১৯৭১', exp: 'মেহেরপুরের বৈদ্যনাথতলার (বর্তমান মুজিবনগর) আম্রকাননে ১৯৭১ সালের ১৭ এপ্রিল বাংলাদেশের প্রথম সরকার শপথ গ্রহণ করে।' },
        { q: 'স্মার্ট বাংলাদেশ ২০৪১ এর ভিত্তি কয়টি স্তম্ভের ওপর প্রতিষ্ঠিত?', o: ['৩টি', '৪টি', '৫টি', '৭টি'], a: '৪টি', exp: 'চারটি মূল ভিত্তি: স্মার্ট সিটিজেন, স্মার্ট গভর্নমেন্ট, স্মার্ট ইকোনমি এবং স্মার্ট সোসাইটি।' }
      ]
    }
  ];

  gkTopics.forEach(t => {
    t.qs.forEach(item => {
      addQ('সমাজসেবা ও সাধারণ জ্ঞান', t.topic, item.q, item.o, item.a, item.exp, ['GK', 'Social Services']);
    });
  });

  return mcqs;
}

// Helper to generate Written & Standard Aptitude questions
function getWrittenQuestions() {
  const written = [];
  let idCounter = 2001;

  function addW(subject, topic, question, marks, answer, points = [], tags = []) {
    written.push({
      id: idCounter++,
      subject,
      topic,
      question,
      marks,
      answer,
      points_to_remember: points,
      tags: [...tags, 'DSS', 'Data Entry Written', 'Aptitude Test']
    });
  }

  // 1. কম্পিউটার ও স্ট্যান্ডার্ড অ্যাপটিটিউড টেস্ট
  addW(
    'কম্পিউটার ও স্ট্যান্ডার্ড অ্যাপটিটিউড',
    'এমএস এক্সেল প্র্যাকটিক্যাল ফর্মুলা ও ডাটা এনালাইসিস',
    'MS Excel-এ VLOOKUP ফাংশনের সিনট্যাক্স লিখুন এবং এর প্রতিটি প্যারামিটারের কাজ উদাহরণসহ ব্যাখ্যা করুন।',
    10,
    `### VLOOKUP সিনট্যাক্স ও ব্যবহারবিধি:
\`\`\`excel
=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
\`\`\`

#### প্যারামিটারসমূহের বিস্তারিত বিবরণ:
1. **lookup_value:** যে নির্দিষ্ট মানটি আপনি টেবিলের প্রথম কলামে খুঁজতে চান (যেমন: কোনো কর্মচারীর আইডি A2)।
2. **table_array:** যে ডাটা টেবিল বা রেঞ্জে অনুসন্ধান চালানো হবে (যেমন: \`$E$2:$H$100\`)।
3. **col_index_num:** ফলাফল হিসেবে যে কলামের মান প্রদর্শন করতে চান তার কলাম সংখ্যা (যেমন: ৩য় কলাম হলে \`3\`)।
4. **range_lookup:** নিখুঁত (Exact) মিলের জন্য \`FALSE\` বা \`0\`, এবং আনুমানিক মিলের জন্য \`TRUE\` বা \`1\`।

#### ব্যবহারিক উদাহরণ:
\`\`\`excel
=VLOOKUP(101, A2:D50, 2, FALSE)
\`\`\`
*ব্যাখ্যা:* A কলামে রোল ১০১ খুঁজে তার সংশ্লিষ্ট ২য় কলামে থাকা শিক্ষার্থীর নাম প্রদর্শন করবে।`,
    ['টেবিলের প্রথম কলামে অবশ্যই lookup_value থাকতে হবে', 'অ্যাবসোলিউট সেল রেফারেন্স ($) ব্যবহার করা নিরাপদ', 'নিখুঁত মিলের জন্য সর্বদা FALSE বা 0 ব্যবহার করুন']
  );

  addW(
    'কম্পিউটার ও স্ট্যান্ডার্ড অ্যাপটিটিউড',
    'ডাটা ভ্যালিডেশন ও নির্ভুলতা নিশ্চিতকরণ কৌশল',
    'ডাটা এন্ট্রির ক্ষেত্রে ডুপ্লিকেট ডাটা রোধ এবং নির্দিষ্ট সীমার ভেতর ইনপুট নেওয়ার জন্য Excel-এর Data Validation কীভাবে কনফিগার করবেন?',
    8,
    `### ডাটা ভ্যালিডেশন কনফিগারেশন ধাপসমূহ:

#### ক. নির্দিষ্ট সীমার মধ্যে সংখ্যা ইনপুট (যেমন: বয়স ১৮ থেকে ৬০ বছর):
1. যে সেলে শর্ত প্রযোজ্য তা নির্বাচন করুন।
2. **Data Tab** -> **Data Validation** এ ক্লিক করুন।
3. **Settings** ট্যাবে Allow থেকে **Whole number** সিলেক্ট করুন।
4. Data ড্রপডাউনে **between** বেছে নিয়ে Minimum: 18 এবং Maximum: 60 দিন।
5. **Error Alert** ট্যাবে সতর্কবার্তা লিখুন: "বয়স ১৮ থেকে ৬০ এর মধ্যে হতে হবে"।

#### খ. ডুপ্লিকেট এন্ট্রি প্রতিরোধে কাস্টম ফর্মুলা:
1. কলাম A সিলেক্ট করুন।
2. Data Validation এ গিয়ে Allow অপশনে **Custom** সিলেক্ট করুন।
3. ফর্মুলা বক্সে লিখুন:
\`\`\`excel
=COUNTIF(A:A, A1)=1
\`\`\`
*ফলাফল:* যদি কোনো ডেটা দ্বিতীয়বার ইনপুট দেওয়ার চেষ্টা করা হয়, এক্সেল তা স্বয়ংক্রিয়ভাবে ব্লক করে দেবে।`,
    ['Data Validation ডাটা টাইপো প্রতিরোধ করে', 'COUNTIF কাস্টম ফর্মুলা ডুপ্লিকেট এন্ট্রি শতভাগ আটকায়']
  );

  addW(
    'কম্পিউটার ও স্ট্যান্ডার্ড অ্যাপটিটিউড',
    'কম্পিউটার টাইপিং স্পিড ও নির্ভুলতা টেকনিক (২০ wpm)',
    'বাংলা ও ইংরেজিতে প্রতি মিনিটে ২০ শব্দ টাইপিং গতি অর্জনের জন্য টাচ টাইপিংয়ের মূল নিয়ম ও কীবোর্ড ফিঙ্গার পজিশন বর্ণনা করুন।',
    7,
    `### ২০ wpm টাইপিং গতি অর্জনের কার্যকরী ফ্রেমওয়ার্ক:

1. **হোম রো (Home Row) পজিশনিং:**
   - বাম হাত: \`A\` (কনিষ্ঠা), \`S\` (অনমিকা), \`D\` (মধ্যমা), \`F\` (তর্জনী)
   - ডান হাত: \`J\` (তর্জনী), \`K\` (মধ্যমা), \`L\` (অনমিকা), \`;\` (কনিষ্ঠা)
   - স্পেসবার: যেকোনো এক হাতের বৃদ্ধাঙ্গুলি দ্বারা পরিচালিত হবে।

2. **কীবোর্ডের দিকে না তাকানো (Touch Typing):**
   - F এবং J কী-এর উপর থাকা স্পর্সনোট (Raised Bar) দিয়ে হাত পজিশন নিশ্চিত করতে হবে।
   - স্ক্রিনের দিকে তাকিয়ে টাইপ করার অভ্যাস গড়ে তুলতে হবে।

3. **বাংলা যুক্তাক্ষর মাস্টারি (বিজয় ও অভ্র):**
   - হসন্ত (\`g\`) দিয়ে দ্রুত যুক্তাক্ষর তৈরির প্র্যাকটিস:
     - ক + ষ = ক্ষ (\`k + g + Shift+k\`)
     - জ + ঞ = জ্ঞ (\`j + g + Shift+n\`)
     - ব + দ + ধ = ব্ধ (\`h + g + l + g + L\`)

4. **গতি বনাম নির্ভুলতা (Speed vs Accuracy):**
   - শুরুতে ১০০% নির্ভুলতার (Accuracy) উপর জোর দিতে হবে, গতি স্বয়ংক্রিয়ভাবে বৃদ্ধি পেয়ে ২০-৩০ wpm ছাড়িয়ে যাবে।`,
    ['হোম রো পজিশন মেনে টাইপিং বাধ্যতামূলক', 'ভুল কমানোই গতি বাড়ানোর মূল চাবিকাঠি']
  );

  addW(
    'কম্পিউটার ও স্ট্যান্ডার্ড অ্যাপটিটিউড',
    'জরুরি কীবোর্ড শর্টকাট তালিকা',
    'ডাটা এন্ট্রি অপারেটরদের জন্য অত্যন্ত প্রয়োজনীয় ১০টি দ্রুত কীবোর্ড শর্টকাট লিখুন।',
    5,
    `| ক্রম | শর্টকাট কী | কার্যকারিতা |
| :---: | :--- | :--- |
| ১ | **Ctrl + C / Ctrl + V** | নির্বাচিত ডাটা কপি ও পেস্ট করা |
| ২ | **Ctrl + Z / Ctrl + Y** | শেষ কমান্ড আনডু (Undo) ও রিডু (Redo) করা |
| ৩ | **Ctrl + Arrow Keys** | ডাটা টেবিলের একেবারে শেষ বা শুরুতে দ্রুত জাম্প করা |
| ৪ | **Shift + Spacebar** | এক্সেল শিটে সম্পূর্ণ রো (Row) নির্বাচন করা |
| ৫ | **Ctrl + Spacebar** | এক্সেল শিটে সম্পূর্ণ কলাম (Column) নির্বাচন করা |
| ৬ | **Ctrl + D** | উপরের সেলের মান নিচে স্বয়ংক্রিয়ভাবে ফিল করা (Fill Down) |
| ৭ | **Ctrl + R** | বামের সেলের মান ডানে স্বয়ংক্রিয়ভাবে ফিল করা (Fill Right) |
| ৮ | **Ctrl + ; (সেমিকোলন)** | এক্সেল সেলে বর্তমান তারিখ স্বয়ংক্রিয়ভাবে ইনসার্ট করা |
| ৯ | **Ctrl + Shift + :** | এক্সেল সেলে বর্তমান সময় স্বয়ংক্রিয়ভাবে ইনসার্ট করা |
| ১০ | **Alt + =** | সংলগ্ন ঘরের স্বয়ংক্রিয় যোগফল (AutoSum) সূত্র প্রয়োগ করা |`,
    ['কীবোর্ড শর্টকাট ডাটা এন্ট্রি সময় ৩০% বাঁচায়']
  );

  // 2. বাংলা লিখিত অংশ
  addW(
    'বাংলা লিখিত',
    'দাপ্তরিক পত্র ও নথি উপস্থাপন',
    'উপজেলা সমাজসেবা কার্যালয়ে ডাটা এন্ট্রি কার্যক্রম সুষ্ঠুভাবে পরিচালনার জন্য প্রয়োজনীয় কম্পিউটার যন্ত্রাংশ বরাদ্দের আবেদন জানিয়ে উপপরিচালক বরাবর একটি দাপ্তরিক আবেদনপত্র লিখুন।',
    10,
    `তারিখ: ২৭ অক্টোবর ২০২৬  
বরাবর,  
উপপরিচালক,  
জেলা সমাজসেবা কার্যালয়, ঢাকা।  

**বিষয়: উপজেলা সমাজসেবা কার্যালয়ে ডাটা এন্ট্রি কাজের জন্য আনুষঙ্গিক কম্পিউটার সামগ্রী বরাদ্দ প্রসঙ্গে।**  

মহোদয়,  
যথাবিহিত সম্মান প্রদর্শনপূর্বক বিনীত নিবেদন এই যে, অত্র উপজেলা সমাজসেবা কার্যালয়ে সরকারের অগ্রাধিকারমূলক কর্মসূচি বয়স্ক ভাতা, বিধবা ভাতা এবং প্রতিবন্ধী ভাতা সংক্রান্ত সামাজিক নিরাপত্তা বেষ্টনীর উপকারভোগীদের তথ্য ডিজিটাল প্ল্যাটফর্মে (G2P ডাটাবেজ) এন্ট্রি ও হালনাগাদকরণের কাজ পুরোদমে চলমান রয়েছে।  

কিন্তু অত্যন্ত উদ্বেগের সাথে লক্ষ্য করা যাচ্ছে যে, ডাটা এন্ট্রি শাখায় ব্যবহৃত প্রিন্টারটি দীর্ঘদিন যাবত ত্রুটিপূর্ণ থাকায় জরুরি রিপোর্ট ও বেনিফিশিয়ারি লিস্ট মুদ্রণ ব্যাহত হচ্ছে। তদুপরি, বিদ্যুৎ বিভ্রাটের সময় নিরবচ্ছিন্নভাবে সার্ভার পরিচালনার জন্য কার্যকর কোনো ইউপিএস (UPS) নেই। ফলে মাঠপর্যায়ের ডাটা এন্ট্রি নির্ধারিত সময়সীমার মধ্যে সমাপ্ত করা দুরূহ হয়ে পড়েছে।  

এমতাবস্থায়, জনস্বার্থে এবং সামাজিক নিরাপত্তা কর্মসূচির ডাটা এন্ট্রি কার্যক্রম নির্বিঘ্ন রাখার লক্ষ্যে একটি লেজার প্রিন্টার এবং দুটি উচ্চক্ষমতাসম্পন্ন অনলাইন ইউপিএস জরুরি ভিত্তিতে বরাদ্দ প্রদানে আপনার সদয় মর্জি কামনা করছি।  

বিনীত,  
ডাটা এন্ট্রি অপারেটর  
উপজেলা সমাজসেবা কার্যালয়, সাভার, ঢাকা।`,
    ['দাপ্তরিক পত্রের প্রমিত সরকারি কাঠামো মেনে চলুন', 'স্পষ্ট যুক্তি ও সুনির্দিষ্ট চাহিদার উল্লেখ করুন']
  );

  // 3. ইংরেজি লিখিত অংশ
  addW(
    'ইংরেজি লিখিত',
    'Official Email Drafting',
    'Draft an official email to the System Analyst reporting a data synchronization error in the social safety net database.',
    10,
    `**Subject:** Urgent: Resolution Required for G2P Database Synchronization Failure in Savar Upazila  

**Dear Sir,**  

I hope this email finds you well.  

I am writing to formally report an unexpected data synchronization error encountered in the National Social Safety Net (G2P) database portal today during the entry of quarterly beneficiary payment records for Savar Upazila.  

While uploading the batch file containing 250 validated records of the Disability Allowance program, the system generated an "Error Code: 504 - Gateway Timeout & Database Lock", and approximately 78 records failed to commit to the central server. To avoid duplicate disbursements, we have temporarily paused the batch entry process.  

The error log file and the pending CSV data sheets are attached herewith for your technical investigation. Kindly review the server sync protocol and guide us on safely resuming the data entry.  

Thank you for your prompt assistance.  

**Sincerely,**  
Data Entry Operator  
Upazila Social Services Office  
Savar, Dhaka.  
Contact: +8801700-000000`,
    ['Professional tone and subject line', 'Clear description of error code and impact', 'Attachment notice']
  );

  // 4. গণিত লিখিত অংশ
  addW(
    'গণিত লিখিত',
    'পাটিগণিত লিখিত সমাধান',
    'একটি উপজেলা সমাজসেবা কার্যালয়ে ৩ জন ডাটা এন্ট্রি অপারেটর দৈনিক ৬ ঘণ্টা কাজ করে ৫ দিনে ৯,০০০ উপকারভোগীর ডাটা এন্ট্রি করতে পারেন। সমপরিমাণ দক্ষতাসম্পন্ন ৫ জন অপারেটর দৈনিক ৮ ঘণ্টা কাজ করে কত দিনে ২৪,০০০ উপকারভোগীর ডাটা এন্ট্রি করতে পারবেন?',
    10,
    `### গাণিতিক সমাধান:

**১ম ক্ষেত্রে:**
- অপারেটর সংখ্যা ($M_1$) = ৩ জন
- দৈনিক কাজের সময় ($H_1$) = ৬ ঘণ্টা
- দিন সংখ্যা ($D_1$) = ৫ দিন
- মোট কাজ বা এন্ট্রি সংখ্যা ($W_1$) = ৯,০০০ টি

**২য় ক্ষেত্রে:**
- অপারেটর সংখ্যা ($M_2$) = ৫ জন
- দৈনিক কাজের সময় ($H_2$) = ৮ ঘণ্টা
- দিন সংখ্যা ($D_2$) = ?
- মোট কাজ বা এন্ট্রি সংখ্যা ($W_2$) = ২৪,০০০ টি

**ঐকিক নিয়মের সর্বজনীন সূত্র:**
$$\\frac{M_1 \\times D_1 \\times H_1}{W_1} = \\frac{M_2 \\times D_2 \\times H_2}{W_2}$$

মান বসিয়ে পাই:
$$\\frac{৩ \\times ৫ \\times ৬}{৯,০০০} = \\frac{৫ \\times D_2 \\times ৮}{২৪,০০০}$$

$$\\frac{৯০}{৯,০০০} = \\frac{৪০ \\times D_2}{২৪,০০০}$$

$$\\frac{১}{১০০} = \\frac{৪০ \\times D_2}{২৪,০০০}$$

$$৪০ \\times D_2 \\times ১০০ = ২৪,০০০$$

$$৪,০০০ \\times D_2 = ২৪,০০০$$

$$D_2 = \\frac{২৪,০০০}{৪,০০০} = ৬ \\text{ দিন}$$

**উত্তর:** ৫ জন অপারেটর দৈনিক ৮ ঘণ্টা কাজ করে **৬ দিনে** উক্ত কাজ সম্পন্ন করতে পারবেন।`,
    ['MDH/W সূত্রের সঠিক প্রয়োগ', 'প্রতিটি ধাপ ও একক স্পষ্টভাবে উল্লেখ করুন']
  );

  return written;
}

// Write the main datasets
const prelimMCQs = getPrelimMCQs();
const writtenQs = getWrittenQuestions();

fs.writeFileSync(path.join(targetBase, 'preliminary_mcq.json'), JSON.stringify(prelimMCQs, null, 2), 'utf8');
fs.writeFileSync(path.join(targetBase, 'written_questions.json'), JSON.stringify(writtenQs, null, 2), 'utf8');

console.log(`Generated preliminary_mcq.json: ${prelimMCQs.length} questions.`);
console.log(`Generated written_questions.json: ${writtenQs.length} questions.`);

// Now split into MCQ/ and Written/ topic folders according to user rules
function sanitizeFilename(name) {
  return name.replace(/[\\/:*?"<>|]/g, '-').replace(/\s+/g, ' ').trim();
}

// 1. Process MCQ
const mcqBySub = {};
prelimMCQs.forEach(q => {
  const s = q.subject || 'সাধারণ';
  if (!mcqBySub[s]) mcqBySub[s] = {};
  const topic = q.topic || 'সাধারণ ' + s;
  if (!mcqBySub[s][topic]) mcqBySub[s][topic] = [];
  mcqBySub[s][topic].push(q);
});

for (const [subName, topics] of Object.entries(mcqBySub)) {
  const subDir = path.join(targetBase, 'MCQ', subName);
  fs.mkdirSync(subDir, { recursive: true });
  for (const [topic, questions] of Object.entries(topics)) {
    const filename = sanitizeFilename(topic) + '.json';
    fs.writeFileSync(path.join(subDir, filename), JSON.stringify(questions, null, 2), 'utf8');
  }
}

// 2. Process Written
const writtenBySub = {};
writtenQs.forEach(q => {
  const s = q.subject || 'সাধারণ';
  if (!writtenBySub[s]) writtenBySub[s] = {};
  const topic = q.topic || 'সাধারণ ' + s;
  if (!writtenBySub[s][topic]) writtenBySub[s][topic] = [];
  writtenBySub[s][topic].push(q);
});

for (const [subName, topics] of Object.entries(writtenBySub)) {
  const subDir = path.join(targetBase, 'Written', subName);
  fs.mkdirSync(subDir, { recursive: true });
  for (const [topic, questions] of Object.entries(topics)) {
    const filename = sanitizeFilename(topic) + '.json';
    fs.writeFileSync(path.join(subDir, filename), JSON.stringify(questions, null, 2), 'utf8');
  }
}

console.log('Successfully structured MCQ/ and Written/ topic-wise directories for Data Entry Operator!');
