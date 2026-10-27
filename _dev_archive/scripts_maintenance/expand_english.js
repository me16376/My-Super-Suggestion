const fs = require('fs');
const path = require('path');

const mcqFilePath = path.join(__dirname, '../data/preliminary/english_mcq.json');
const writtenFilePath = path.join(__dirname, '../data/written/english_written.json');

let mcqs = JSON.parse(fs.readFileSync(mcqFilePath, 'utf8'));
let written = JSON.parse(fs.readFileSync(writtenFilePath, 'utf8'));

const newMcqs = [
  {
    "id": 316,
    "subject": "ইংরেজি",
    "topic": "English Grammar",
    "question": "I look forward to _____ from you soon.",
    "options": [
      "A) hear",
      "B) hearing",
      "C) heard",
      "D) be heard"
    ],
    "answer": 1,
    "explanation": "'Look forward to', 'with a view to', 'accustomed to', 'be used to', 'confess to'-এর পর verb আসলে তার সাথে 'ing' যুক্ত হয় (Gerund)। তাই 'hearing' সঠিক।",
    "tags": ["gerund", "bcs_repeated"]
  },
  {
    "id": 317,
    "subject": "ইংরেজি",
    "topic": "English Grammar",
    "question": "Which of the following sentences has a correct use of conditional clause?",
    "options": [
      "A) If it will rain, we will postpone the match.",
      "B) If it rains, we will postpone the match.",
      "C) If it rained, we will postpone the match.",
      "D) If it had rained, we would postpone the match."
    ],
    "answer": 1,
    "explanation": "First Conditional-এর নিয়ম: If + Present Indefinite Tense, Future Indefinite Tense (Subject + will/shall + V1)। 'If' ক্লজে কখনো 'will' বা 'would' বসে না।",
    "tags": ["conditional", "english_grammar"]
  },
  {
    "id": 318,
    "subject": "ইংরেজি",
    "topic": "English Grammar",
    "question": "The government is trying to comply _____ international security protocols.",
    "options": [
      "A) to",
      "B) with",
      "C) by",
      "D) for"
    ],
    "answer": 1,
    "explanation": "'Comply with' একটি বহুল ব্যবহৃত Appropriate Preposition, যার অর্থ মেনে চলা বা সম্মত হওয়া (to obey a formal rule or agreement)। অনুরূপ: Abide by, Adhere to।",
    "tags": ["preposition", "bpsc_frequent"]
  },
  {
    "id": 319,
    "subject": "ইংরেজি",
    "topic": "English Grammar",
    "question": "Identify the correct indirect speech: He said, 'I have completed the task.'",
    "options": [
      "A) He said that he has completed the task.",
      "B) He said that he had completed the task.",
      "C) He said that he completed the task.",
      "D) He told that he would complete the task."
    ],
    "answer": 1,
    "explanation": "Reporting verb যদি Past Tense (said) হয়, তবে Reported Speech-এর Present Perfect Tense পরিবর্তিত হয়ে Past Perfect Tense (had completed) হয়।",
    "tags": ["narration", "english_grammar"]
  },
  {
    "id": 320,
    "subject": "ইংরেজি",
    "topic": "English Grammar",
    "question": "Choose the correctly punctuated and structured sentence:",
    "options": [
      "A) One of my friends are a database administrator.",
      "B) One of my friends is a database administrator.",
      "C) One of my friend is a database administrator.",
      "D) One of my friends were a database administrator."
    ],
    "answer": 1,
    "explanation": "'One of + Plural Noun (friends) + Singular Verb (is)' বসে। তাই 'One of my friends is...' ব্যাকরণগতভাবে সঠিক।",
    "tags": ["subject_verb_agreement", "bcs_frequent"]
  },
  {
    "id": 321,
    "subject": "ইংরেজি",
    "topic": "Vocabulary & Idioms",
    "question": "What is the synonym of the word 'Mitigate'?",
    "options": [
      "A) Aggravate",
      "B) Alleviate / Lessen",
      "C) Intensify",
      "D) Prolong"
    ],
    "answer": 1,
    "explanation": "'Mitigate' অর্থ উপশম করা বা তীব্রতা হ্রাস করা (Alleviate, reduce, lessen)। এর বিপরীত শব্দ (Antonym) হলো Aggravate বা Intensify।",
    "tags": ["vocabulary"]
  },
  {
    "id": 322,
    "subject": "ইংরেজি",
    "topic": "Vocabulary & Idioms",
    "question": "What is the antonym of the word 'Candid'?",
    "options": [
      "A) Frank",
      "B) Deceitful / Secretive",
      "C) Honest",
      "D) Outspoken"
    ],
    "answer": 1,
    "explanation": "'Candid' অর্থ স্পষ্টভাষী, অকপট বা খোলামেলা (Frank, honest)। এর বিপরীত শব্দ হলো Deceitful (ছলনাময়) বা Secretive।",
    "tags": ["vocabulary"]
  },
  {
    "id": 323,
    "subject": "ইংরেজি",
    "topic": "Vocabulary & Idioms",
    "question": "Choose the correct spelling:",
    "options": [
      "A) Maintainance",
      "B) Maintenance",
      "C) Maintenence",
      "D) Maintanence"
    ],
    "answer": 1,
    "explanation": "'Maintenance' শব্দের সঠিক বানান M-A-I-N-T-E-N-A-N-C-E (মনে রাখা: Maintain কিন্তু Maintenance)। সাব-অ্যাসিস্ট্যান্ট মেইনটেন্যান্স ইঞ্জিনিয়ার পরীক্ষার জন্য এটি অত্যন্ত প্রাসঙ্গিক ও কমন প্রশ্ন।",
    "tags": ["spelling", "most_important"]
  },
  {
    "id": 324,
    "subject": "ইংরেজি",
    "topic": "Vocabulary & Idioms",
    "question": "What does the idiom 'Burn the midnight oil' mean?",
    "options": [
      "A) To waste electricity",
      "B) To work or study late into the night",
      "C) To create chaos",
      "D) To feel disappointed"
    ],
    "answer": 1,
    "explanation": "'Burn the midnight oil' অর্থ গভীর রাত পর্যন্ত জেগে কঠোর পড়াশোনা বা কাজ করা।",
    "tags": ["idioms"]
  },
  {
    "id": 325,
    "subject": "ইংরেজি",
    "topic": "Vocabulary & Idioms",
    "question": "A remedy or cure for all diseases is called a _____.",
    "options": [
      "A) Panacea",
      "B) Antidote",
      "C) Antibiotic",
      "D) Placebo"
    ],
    "answer": 0,
    "explanation": "এককথায় প্রকাশ: সকল রোগের মহৌষধ বা সর্বরোগহর ঔষধকে 'Panacea' বলা হয়। Antidote হলো বিষের প্রতিষেধক।",
    "tags": ["one_word_substitution", "bcs_repeated"]
  }
];

const existingIds = new Set(mcqs.map(q => q.id));
newMcqs.forEach(q => {
  if (!existingIds.has(q.id)) {
    mcqs.push(q);
    existingIds.add(q.id);
  }
});

fs.writeFileSync(mcqFilePath, JSON.stringify(mcqs, null, 2), 'utf8');
console.log(`Updated English MCQs: Total count is now ${mcqs.length}`);

// New English Written Questions
const newWritten = [
  {
    "id": 3004,
    "subject": "ইংরেজি",
    "topic": "English Writing & Grammar",
    "question": "(A) Transform the sentences as directed:\n  i. Though he is poor, he is honest. (Make it Compound)\n  ii. As soon as the bell rang, the students entered the classroom. (Make it Negative using 'No sooner had')\n(B) Translate into English:\n  ১. জ্ঞানই শক্তি।\n  ২. বহিরাগমন ও পাসপোর্ট অধিদপ্তর জনগণের সেবায় নিয়োজিত।\n  ৩. প্রযুক্তির অপব্যবহার রোধে আমাদের সচেতন হতে হবে।",
    "marks": 7,
    "answer": "(A) Transformation of Sentences:\n  i. Compound: He is poor, but he is honest.\n  ii. Negative: No sooner had the bell rung than the students entered the classroom.\n\n(B) English Translation:\n  ১. Knowledge is power.\n  ২. The Department of Immigration and Passports is dedicated to the service of the citizens.\n  ৩. We must be conscious/vigilant to prevent the misuse of technology.",
    "points_to_remember": [
      "'Though/Although' থাকলে Compound করার সময় 'but/yet' বসে।",
      "'No sooner had + V3 ... than + Past Indefinite' বসে।"
    ],
    "tags": ["transformation", "translation", "written"]
  },
  {
    "id": 3005,
    "subject": "ইংরেজি",
    "topic": "Official Drafting & Email",
    "question": "Write a formal internal memo from the Sub-Assistant Maintenance Engineer to the Assistant Director (Admin) highlighting the urgent requirement for installing an Online UPS (10 KVA) in the passport server room to prevent database corruption during sudden power outages.",
    "marks": 7,
    "answer": "Formal Internal Memorandum:\n\nMEMORANDUM\n\nTo: Assistant Director (Administration)\nFrom: Sub-Assistant Maintenance Engineer\nDate: 23 October 2026\nSubject: Requisition for 10 KVA Online UPS for the Central Passport Server Room\n\n1. It is respectfully brought to your attention that the primary database servers and biometric matching units housed in our Server Room are currently operating on aged offline backup systems. \n\n2. Over the past week, frequent power grid fluctuations have caused momentary power drops. During switching delays, the core database server shut down abruptly, resulting in database lockouts and putting transactional records at risk of file corruption.\n\n3. To guarantee zero-millisecond transfer time, stable pure sine-wave voltage, and a minimum of 60 minutes emergency battery backup for 24/7 server stability, the procurement and installation of a 10 KVA True Online Double-Conversion UPS is critically required.\n\n4. Your kind approval and budgetary allocation for initiating the e-GP procurement process are earnestly solicited.\n\n(Signature)\nMd. Rafiqul Islam\nSub-Assistant Maintenance Engineer\nExtension: 204",
    "points_to_remember": [
      "State technical justification: 'True Online Double-Conversion UPS', 'zero transfer time', 'prevent database corruption'."
    ],
    "tags": ["official_memo", "english_drafting"]
  }
];

const existingWrittenIds = new Set(written.map(q => q.id));
newWritten.forEach(q => {
  if (!existingWrittenIds.has(q.id)) {
    written.push(q);
    existingWrittenIds.add(q.id);
  }
});

fs.writeFileSync(writtenFilePath, JSON.stringify(written, null, 2), 'utf8');
console.log(`Updated English Written Questions: Total count is now ${written.length}`);
