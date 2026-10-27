const fs = require('fs');
const path = require('path');

const englishWrittenPath = path.join(__dirname, '..', 'data', 'written', 'english_written.json');
const currentQuestions = JSON.parse(fs.readFileSync(englishWrittenPath, 'utf8'));

const newQuestions = [
  {
    "id": 3026,
    "subject": "ইংরেজি",
    "topic": "English Grammar & Prepositions",
    "question": "Fill in the blanks with appropriate prepositions:\n(a) We must abide _____ the official rules of the department.\n(b) The government adheres _____ the international ICAO 9303 standards.\n(c) The officer abstained _____ taking any hasty decision.\n(d) He connived _____ his subordinate's illegal activities.\n(e) The biometric system is deficient _____ adequate memory storage.\n(f) Candidates must be eligible _____ the 10th grade technical post.\n(g) Cyber attacks are hostile _____ national sovereignty.\n(h) Disobeying security protocols is tantamount _____ negligence of duty.",
    "marks": 8,
    "answer": "Appropriate Prepositions Solution:\n\n(a) We must abide **by** the official rules of the department. (abide by = মেনে চলা)\n(b) The government adheres **to** the international ICAO 9303 standards. (adhere to = দৃঢ়ভাবে লেগে থাকা/মান্য করা)\n(c) The officer abstained **from** taking any hasty decision. (abstain from = বিরত থাকা)\n(d) He connived **at** his subordinate's illegal activities. (connive at = জেনেও উপেক্ষা করা/মৌন সম্মতি দেওয়া)\n(e) The biometric system is deficient **in** adequate memory storage. (deficient in = ঘাটতি থাকা/অপূর্ণ)\n(f) Candidates must be eligible **for** the 10th grade technical post. (eligible for = উপযুক্ত/যোগ্য)\n(g) Cyber attacks are hostile **to** national sovereignty. (hostile to = প্রতিকূল/শত্রুভাবাপন্ন)\n(h) Disobeying security protocols is tantamount **to** negligence of duty. (tantamount to = সমতুল্য/একই সমার্থক)।",
    "points_to_remember": [
      "'Abide by', 'Adhere to', 'Tantamount to', and 'Connive at' are frequent questions in BPSC written exams."
    ],
    "tags": ["preposition", "english_grammar", "bpsc_written"]
  },
  {
    "id": 3027,
    "subject": "ইংরেজি",
    "topic": "English Grammar & Right Form of Verbs",
    "question": "Complete the sentences using the correct form of verbs given in parentheses:\n(a) If the maintenance engineer (arrive) on time, the server could have been restored earlier.\n(b) It is high time we (upgrade) the firmware of the core routers.\n(c) He talks as if he (know) everything about database architecture.\n(d) Run the automated backup script carefully lest the transaction logs (be) corrupted.\n(e) Had I known the IP conflict, I (prevent) the network outage.\n(f) The Director General insisted that the security audit (conduct) immediately.\n(g) I wish I (be) a certified ethical hacker.\n(h) Neither the system analyst nor the network engineers (be) present at the incident briefing.",
    "marks": 8,
    "answer": "Right Form of Verbs Solution:\n\n(a) If the maintenance engineer **had arrived** on time, the server could have been restored earlier.\n*Rule:* Third Conditional: If + Past Perfect, Subject + could/would/might + have + V3.\n\n(b) It is high time we **upgraded** the firmware of the core routers.\n*Rule:* 'It is high time / It is time' followed by a subject requires a Past Indefinite verb.\n\n(c) He talks as if he **knew** (or **were**) everything about database architecture.\n*Rule:* Present Tense + 'as if / as though' + Past Subjunctive (V2 or were).\n\n(d) Run the automated backup script carefully lest the transaction logs **should be** (or **might be**) corrupted.\n*Rule:* 'Lest' is followed by Subject + should/might + base form of verb.\n\n(e) Had I known the IP conflict, I **would have prevented** the network outage.\n*Rule:* Inverted Third Conditional: Had + Subject + V3 ..., Subject + would have + V3.\n\n(f) The Director General insisted that the security audit **be conducted** immediately.\n*Rule:* Mandative Subjunctive (insist that + Subject + base verb 'be' + V3 in passive).\n\n(g) I wish I **were** a certified ethical hacker.\n*Rule:* Unreal wish takes the subjunctive 'were'.\n\n(h) Neither the system analyst nor the network engineers **were** present at the incident briefing.\n*Rule:* In 'Neither...nor', the verb agrees with the closer subject ('engineers' is plural).",
    "points_to_remember": [
      "'It is high time' takes V2.",
      "'Lest' requires 'should' + V1.",
      "'Neither...nor' follows proximity rule."
    ],
    "tags": ["verbs", "subjunctive", "conditionals", "english_grammar"]
  },
  {
    "id": 3028,
    "subject": "ইংরেজি",
    "topic": "English Grammar & Error Correction",
    "question": "Identify the grammatical errors in each of the following sentences and rewrite them correctly:\n(a) The server cannot cope up with the excessive user traffic.\n(b) One of the computer in the enrollment booth are damaged.\n(c) The technician returned back the faulty RAM to the vendor.\n(d) Neither of the two backup plans were successful.\n(e) He is senior than me in service seniority.\n(f) Although he worked hard, but he failed to configure the VLAN.",
    "marks": 6,
    "answer": "Sentence Error Correction Solution:\n\n(a) Incorrect: The server cannot cope up with the excessive user traffic.\n**Correct:** The server cannot **cope with** the excessive user traffic.\n*Reason:* 'Cope with' is the standard idiom; adding 'up' is an erroneous colloquialism.\n\n(b) Incorrect: One of the computer in the enrollment booth are damaged.\n**Correct:** One of the **computers** in the enrollment booth **is** damaged.\n*Reason:* 'One of the' must be followed by a plural noun ('computers') and a singular verb ('is').\n\n(c) Incorrect: The technician returned back the faulty RAM to the vendor.\n**Correct:** The technician **returned** the faulty RAM to the vendor.\n*Reason:* 'Return' inherently means to give or send back; 'returned back' is a redundancy.\n\n(d) Incorrect: Neither of the two backup plans were successful.\n**Correct:** Neither of the two backup plans **was** successful.\n*Reason:* 'Neither of' refers to one at a time and takes a singular verb ('was').\n\n(e) Incorrect: He is senior than me in service seniority.\n**Correct:** He is **senior to me** in service seniority.\n*Reason:* Latin comparatives ending in -ior (senior, junior, superior, inferior, prior) take the preposition 'to', never 'than'.\n\n(f) Incorrect: Although he worked hard, but he failed to configure the VLAN.\n**Correct:** **Although he worked hard, he failed** to configure the VLAN. (or: He worked hard, but he failed...)\n*Reason:* 'Although/Though' and 'but' cannot be used concurrently in the same sentence.",
    "points_to_remember": [
      "Never say 'cope up with'—always use 'cope with'.",
      "Latin adjectives (senior, junior, superior) take 'to', not 'than'."
    ],
    "tags": ["error_correction", "redundancy", "subject_verb_agreement"]
  },
  {
    "id": 3029,
    "subject": "ইংরেজি",
    "topic": "English Grammar & Transformation of Sentences",
    "question": "Transform the following sentences as directed:\n(a) Dhaka is more crowded than any other city in Bangladesh. (Make it Superlative)\n(b) No other protocol in the suite is as reliable as TCP. (Make it Comparative)\n(c) Who does not want high-speed internet connectivity? (Make it Assertive)\n(d) Shut down the rogue server immediately. (Change the Voice into Passive)\n(e) Honey tastes sweet. (Change the Voice into Passive)\n(f) He admitted his fault. (Make it Complex)",
    "marks": 6,
    "answer": "Transformation of Sentences Solution:\n\n(a) Dhaka is more crowded than any other city in Bangladesh.\n$\\rightarrow$ **Superlative:** Dhaka is the most crowded city in Bangladesh.\n\n(b) No other protocol in the suite is as reliable as TCP.\n$\\rightarrow$ **Comparative:** TCP is more reliable than any other protocol in the suite.\n\n(c) Who does not want high-speed internet connectivity?\n$\\rightarrow$ **Assertive:** Everyone / Everybody wants high-speed internet connectivity.\n\n(d) Shut down the rogue server immediately.\n$\\rightarrow$ **Passive:** Let the rogue server be shut down immediately.\n\n(e) Honey tastes sweet. (Quasi-passive)\n$\\rightarrow$ **Passive:** Honey is sweet when it is tasted.\n\n(f) He admitted his fault.\n$\\rightarrow$ **Complex:** He admitted that he was at fault. (or: He admitted that he had made a fault).",
    "points_to_remember": [
      "Quasi-passive voice uses 'when it is tasted / felt'.",
      "Imperative sentences in passive begin with 'Let + object + be + V3'."
    ],
    "tags": ["transformation", "voice_change", "degrees_of_comparison"]
  },
  {
    "id": 3030,
    "subject": "ইংরেজি",
    "topic": "English Idioms & Phrases",
    "question": "Construct meaningful sentences using the following idioms and phrases, illustrating their clear contextual meaning:\n(a) Bone of contention\n(b) Burn the midnight oil\n(c) At sixes and sevens\n(d) Through thick and thin\n(e) A blessing in disguise\n(f) Null and void\n(g) Kith and kin\n(h) Call it a day",
    "marks": 8,
    "answer": "Idioms and Contextual Usage Solution:\n\n(a) **Bone of contention** (A subject of dispute or argument):\n*Sentence:* The allocation of budget for server procurement became a major bone of contention between the finance department and the ICT cell.\n\n(b) **Burn the midnight oil** (To work or study late into the night):\n*Sentence:* The technical team had to burn the midnight oil to successfully migrate the e-Passport database before the morning office hours.\n\n(c) **At sixes and sevens** (In a state of total confusion or disarray):\n*Sentence:* When the centralized Active Directory domain server crashed, the administrative staff were all at sixes and sevens.\n\n(d) **Through thick and thin** (Under all circumstances, good or bad):\n*Sentence:* The senior system administrator supported his junior engineers through thick and thin during the high-pressure system launch.\n\n(e) **A blessing in disguise** (Something that seems bad at first, but turns out to be beneficial):\n*Sentence:* The minor network glitch proved to be a blessing in disguise as it exposed a critical firewall misconfiguration before a major cyber attack could occur.\n\n(f) **Null and void** (Having no legal force or validity):\n*Sentence:* Due to fraudulent biometric submissions, the applicant's previous passport was declared null and void by the immigration authorities.\n\n(g) **Kith and kin** (Friends, family, and relatives):\n*Sentence:* Thousands of expatriate workers rejoiced with their kith and kin after receiving their smart e-passports without delays.\n\n(h) **Call it a day** (To stop working for the rest of the day):\n*Sentence:* Having resolved the routing loop and verified all switch uplinks, the engineering team finally decided to call it a day.",
    "points_to_remember": [
      "Ensure contextual relevance in sentence construction to demonstrate comprehensive comprehension of the idiom."
    ],
    "tags": ["idioms", "phrases", "vocabulary", "english_written"]
  },
  {
    "id": 3031,
    "subject": "ইংরেজি",
    "topic": "English Grammar & Clause Analysis",
    "question": "Identify the dependent clauses in the following sentences and state whether they are Noun Clauses, Adjective (Relative) Clauses, or Adverbial Clauses, with grammatical justification:\n(a) What the maintenance engineer reported was completely accurate.\n(b) The server which was installed in 2020 has reached its end-of-life.\n(c) The network will remain vulnerable unless you enable dynamic ARP inspection.\n(d) He asked whether the database backup had finished.\n(e) This is the data center where biometric records are safely encrypted.",
    "marks": 5,
    "answer": "Clause Analysis Solution:\n\n(a) \"**What the maintenance engineer reported** was completely accurate.\"\n$\\rightarrow$ **Noun Clause.**\n*Justification:* It functions as the grammatical Subject of the main verb 'was'.\n\n(b) \"The server **which was installed in 2020** has reached its end-of-life.\"\n$\\rightarrow$ **Adjective (Relative) Clause.**\n*Justification:* It modifies and qualifies the antecedent noun 'server'.\n\n(c) \"The network will remain vulnerable **unless you enable dynamic ARP inspection**.\"\n$\\rightarrow$ **Adverbial Clause of Condition.**\n*Justification:* It modifies the main verb phrase 'will remain' by establishing the condition.\n\n(d) \"He asked **whether the database backup had finished**.\"\n$\\rightarrow$ **Noun Clause.**\n*Justification:* It acts as the Direct Object of the transitive verb 'asked'.\n\n(e) \"This is the data center **where biometric records are safely encrypted**.\"\n$\\rightarrow$ **Adjective (Relative) Clause.**\n*Justification:* Introduced by the relative adverb 'where', it modifies the noun 'data center'.",
    "points_to_remember": [
      "Noun clauses can act as Subject, Object, or Complement of a sentence.",
      "Adjective clauses always modify a preceding noun (antecedent)."
    ],
    "tags": ["clause_analysis", "noun_clause", "adverbial_clause", "english_grammar"]
  },
  {
    "id": 3032,
    "subject": "ইংরেজি",
    "topic": "English Grammar & Narration",
    "question": "Change the following sentences from Direct to Indirect Speech:\n(a) The System Analyst said to the engineer, \"Have you patched the kernel vulnerability today?\"\n(b) The Director said, \"Do not tamper with the biometric scanner seals under any circumstance.\"\n(c) The user said, \"Alas! All my unsaved passport application data is lost!\"\n(d) The technician said, \"Let us replace the malfunctioning SMPS before testing the display.\"\n(e) The instructor said, \"Light travels faster than sound in a vacuum.\"",
    "marks": 5,
    "answer": "Direct to Indirect Speech Solution:\n\n(a) Direct: The System Analyst said to the engineer, \"Have you patched the kernel vulnerability today?\"\n$\\rightarrow$ **Indirect:** The System Analyst asked the engineer if (or whether) he had patched the kernel vulnerability that day.\n\n(b) Direct: The Director said, \"Do not tamper with the biometric scanner seals under any circumstance.\"\n$\\rightarrow$ **Indirect:** The Director forbade them to tamper with the biometric scanner seals under any circumstance. (or: The Director ordered not to tamper with...)\n\n(c) Direct: The user said, \"Alas! All my unsaved passport application data is lost!\"\n$\\rightarrow$ **Indirect:** The user exclaimed with sorrow that all his unsaved passport application data was lost.\n\n(d) Direct: The technician said, \"Let us replace the malfunctioning SMPS before testing the display.\"\n$\\rightarrow$ **Indirect:** The technician proposed (or suggested) that they should replace the malfunctioning SMPS before testing the display.\n\n(e) Direct: The instructor said, \"Light travels faster than sound in a vacuum.\"\n$\\rightarrow$ **Indirect:** The instructor said that light travels faster than sound in a vacuum. *(Universal truth tense remains unchanged)*.",
    "points_to_remember": [
      "Universal truths or scientific facts do not change tense in indirect speech.",
      "'Today' transforms into 'that day'.",
      "'Let us' changes into 'suggested/proposed that they should'."
    ],
    "tags": ["narration", "indirect_speech", "english_grammar"]
  },
  {
    "id": 3033,
    "subject": "ইংরেজি",
    "topic": "Bangla to English Translation",
    "question": "Translate the following passage into lucid and professional English:\n\"বাংলাদেশ সরকার ডিজিটাল সেবা প্রসারের মাধ্যমে নাগরিকদের জীবনমান সহজ ও গতিশীল করার লক্ষ্যে নিরবচ্ছিন্নভাবে কাজ করে যাচ্ছে। ই-পাসপোর্ট এবং বিমানবন্দরগুলোতে আধুনিক ই-গেট স্থাপনের ফলে সাধারণ মানুষ অত্যন্ত স্বাচ্ছন্দ্যে আন্তর্জাতিক ভ্রমণ সম্পন্ন করতে পারছে। এতে কেবল দালালদের দৌরাত্ম্যই দূর হয়নি, বরং আন্তর্জাতিক পরিমণ্ডলে বাংলাদেশের পাসপোর্টের ভাবমূর্তি বহুলাংশে উজ্জ্বল হয়েছে। জাতীয় প্রযুক্তিগত অগ্রগতি সমুন্নত রাখতে দক্ষ প্রকৌশলীদের ভূমিকা অপরিসীম।\"",
    "marks": 8,
    "answer": "Professional English Translation:\n\n\"The Government of Bangladesh is relentlessly working to streamline and elevate the living standards of its citizens through the widespread expansion of digital public services. Following the introduction of biometric e-passports and the installation of state-of-the-art automated e-Gates at international airports, citizens can now undertake international travel with remarkable ease and comfort. This transformation has not only eradicated the menace of unscrupulous middlemen, but has also substantially elevated the prestige and credibility of the Bangladeshi passport in the international arena. In upholding such sovereign technological milestones, the contribution of skilled maintenance engineers is truly indispensable.\"",
    "points_to_remember": [
      "'Streamline and elevate' translates 'সহজ ও গতিশীল করা'।",
      "'State-of-the-art automated e-Gates' for 'আধুনিক ই-গেট'।",
      "'Menace of unscrupulous middlemen' for 'দালালদের দৌরাত্ম্য'।",
      "'Indispensable' for 'অপরিসীম/অপরিহার্য'।."
    ],
    "tags": ["translation", "bangla_to_english", "written_english"]
  },
  {
    "id": 3034,
    "subject": "ইংরেজি",
    "topic": "Bangla to English Translation",
    "question": "Translate the following analytical paragraph into professional English:\n\"বৈশ্বিক উষ্ণায়ন ও জলবায়ু পরিবর্তনের ক্ষতিকর প্রভাব মোকাবিলায় বাংলাদেশ বিশ্বের অন্যতম অগ্রগামী দেশ হিসেবে পরিচিত। শতবর্ষী 'বদ্বীপ পরিকল্পনা ২১০০' প্রণয়ন এবং নিজস্ব অর্থায়নে ক্লাইমেট ট্রাস্ট ফান্ড গঠনের মাধ্যমে বাংলাদেশ পরিবেশগত সুরক্ষায় টেকসই দৃষ্টান্ত স্থাপন করেছে। তবে আন্তর্জাতিক আর্থিক প্রতিশ্রুতি এবং নবায়নযোগ্য জ্বালানির প্রযুক্তির অবাধ হস্তান্তর ছাড়া এই মহৎ উদ্যোগ টেকসই করা অত্যন্ত কঠিন।\"",
    "marks": 7,
    "answer": "Professional English Translation:\n\n\"Bangladesh is widely recognized as one of the forefront nations in combatting the adverse impacts of global warming and climate change. Through the formulation of the century-long 'Bangladesh Delta Plan 2100' and the establishment of a self-financed Climate Change Trust Fund, the country has set a sustainable paradigm in environmental stewardship. Nevertheless, sustaining these monumental endeavors remains exceptionally challenging without the timely fulfillment of international climate finance pledges and the unhindered transfer of renewable green technology.\"",
    "points_to_remember": [
      "'Adverse impacts' for ক্ষতিকর প্রভাব।",
      "'Environmental stewardship' for পরিবেশগত সুরক্ষা।",
      "'Pledges' for আর্থিক প্রতিশ্রুতি।"
    ],
    "tags": ["translation", "bangla_to_english", "climate_change"]
  },
  {
    "id": 3035,
    "subject": "ইংরেজি",
    "topic": "English to Bangla Translation",
    "question": "Translate the following passage into expressive and lucid Bengali:\n\"Zero Trust is not merely a piece of cybersecurity software, but an overarching strategic philosophy that eliminates implicit trust from enterprise networks. Traditional security architectures operated on the flawed assumption that everything inside an organization's local area network could be trusted. In contrast, Zero Trust mandates continuous cryptographic authentication, dynamic privilege authorization, and comprehensive session inspection, thereby preventing lateral threat proliferation even when a perimeter workstation is compromised.\"",
    "marks": 8,
    "answer": "বাংলায় প্রাঞ্জল ভাবানুবাদ:\n\n\"জিরো ট্রাস্ট নিছক কোনো সাইবার নিরাপত্তা সফটওয়্যার নয়, বরং এটি একটি সর্বাত্মক ও সমন্বিত কৌশলগত দর্শন যা করপোরেট নেটওয়ার্ক থেকে অন্ধ ও অন্তর্নিহিত বিশ্বাসের ধারণাকে সম্পূর্ণ নির্মূল করে। সনাতন নিরাপত্তা ব্যবস্থাগুলো এই ত্রুটিপূর্ণ ধারণার ওপর প্রতিষ্ঠিত ছিল যে সংস্থার নিজস্ব লোকাল এরিয়া নেটওয়ার্কের (ল্যান) ভেতরের সবকিছুই বিশ্বস্ত ও নিরাপদ। এর বিপরীতে, জিরো ট্রাস্ট প্রতিটি ধাপে সার্বক্ষণিক ক্রিপ্টোগ্রাফিক যাচাইকরণ, গতিশীল সুবিধা অনুমোদন এবং প্রতিটি সেশনের পুঙ্খানুপুঙ্খ পর্যবেক্ষণকে বাধ্যতামূলক করে; যার ফলে নেটওয়ার্কের কোনো সীমানার কম্পিউটার হ্যাকড হলেও আক্রমণকারীর পক্ষে ভেতরের অন্যান্য সার্ভারে ছড়িয়ে পড়া (ল্যাটারাল বিস্তার) সম্পূর্ণরূপে প্রতিহত করা সম্ভব হয়।\"",
    "points_to_remember": [
      "'Overarching strategic philosophy' -> সর্বাত্মক ও সমন্বিত কৌশলগত দর্শন।",
      "'Implicit trust' -> অন্ধ বা অন্তর্নিহিত বিশ্বাস।",
      "'Lateral threat proliferation' -> ল্যাটারাল বিস্তার বা পার্শ্ববর্তী সার্ভারে ছড়িয়ে পড়া।"
    ],
    "tags": ["translation", "english_to_bangla", "zero_trust"]
  },
  {
    "id": 3036,
    "subject": "ইংরেজি",
    "topic": "Official Drafting & Formal Letter",
    "question": "As a Sub-Assistant Maintenance Engineer at the Divisional Passport and Visa Office, draft an official requisition letter to the Central Store Officer requesting the supply of critical consumable hardware items and replacement parts (Thermal Receipt Paper Rolls, RFID Passport Validation Tags, CMOS Batteries, and Cat-6 RJ-45 Connectors).",
    "marks": 8,
    "answer": "Model Official Requisition Letter:\n\nGovernment of the People's Republic of Bangladesh\nDepartment of Immigration and Passports\nDivisional Passport and Visa Office, Agargaon, Dhaka.\n\nMemo No: 44.01.2600.004.05.019.26-302\nDate: 23 October 2026\n\nTo:\nThe Central Store Officer\nDepartment of Immigration and Passports\nCentral Warehouse, Agargaon, Dhaka-1207.\n\nSubject: Official Requisition for Consumable IT Hardware and Maintenance Supplies for Q4.\n\nDear Sir,\n\nI have the honor to state that the current inventory of critical IT consumables and diagnostic hardware at our Divisional Enrollment and Biometric Data Center is nearing exhaustion due to a high volume of citizen applications processed daily. To ensure uninterrupted service delivery and preempt hardware downtime, the following supplies are urgently required for the upcoming quarter:\n\n| Item No. | Description of Supplies | Specification / Model | Required Quantity |\n| :---: | :--- | :--- | :---: |\n| 1 | Thermal Receipt Paper Rolls | 80mm x 80mm, High-density Grade | 500 Rolls |\n| 2 | RFID Validation Test Tags | 13.56 MHz ISO 14443 Type A/B | 200 Units |\n| 3 | Lithium Button Cell CMOS Batteries | CR2032 3V (Energizer/Panasonic) | 50 Pieces |\n| 4 | Modular RJ-45 Connectors & Boots | Cat-6 UTP Gold-Plated 8P8C | 300 Pieces |\n| 5 | Anti-Static Optical Cleaning Wipes | 99% Isopropyl Lint-Free | 20 Packs |\n\n2. It is therefore respectfully requested that you arrange the necessary allocation and issuance of the aforementioned items from the central store at your earliest convenience.\n\nYours faithfully,\n\n(Signature)\n(Md. Asif Mahmud)\nSub-Assistant Maintenance Engineer\nDivisional Passport and Visa Office, Dhaka\nPhone: +880 2-XXXXXXXX\nEmail: same.dhaka@dip.gov.bd\n\nCopy forwarded for kind information to:\n1. Deputy Director, Divisional Passport and Visa Office, Dhaka.\n2. System Analyst, ICT Cell, Department of Immigration and Passports, Dhaka.\n3. Office Guard File.",
    "points_to_remember": [
      "Include a formatted tabular item list with precise technical specifications and quantities.",
      "Follow standard government memo layout with distribution list."
    ],
    "tags": ["official_letter", "requisition", "english_drafting"]
  },
  {
    "id": 3037,
    "subject": "ইংরেজি",
    "topic": "Official Drafting & Memorandum",
    "question": "Draft an official administrative memorandum from the ICT Division to all regional passport offices instructing mandatory enforcement of Two-Factor Authentication (2FA) and a Strict Clean Desk Policy on all biometric enrollment terminals.",
    "marks": 7,
    "answer": "Model Administrative Memorandum:\n\nDEPARTMENT OF IMMIGRATION AND PASSPORTS\nICT & INFORMATION SECURITY CELL\nHeadquarters, E-7 Agargaon, Dhaka-1207\n\nMEMORANDUM\n\nRef No: 44.01.0000.701.12.008.26-112\nDate: 23 October 2026\n\nTO: All Assistant Directors, Maintenance Engineers & Data Entry Supervisors\n    Regional Passport Offices (All)\n\nSUBJECT: MANDATORY ENFORCEMENT OF TWO-FACTOR AUTHENTICATION (2FA) AND STRICT CLEAN DESK POLICY FOR ALL BIOMETRIC ENROLLMENT TERMINALS\n\n1. Recent national vulnerability assessments indicate that credential theft and unauthorized terminal access represent the highest threat vectors targeting citizen identity databases. To fortify our Critical Information Infrastructure against illicit intrusion, the following security directives are hereby promulgated for immediate and strict compliance:\n\n   (a) **Mandatory 2FA Enforcement:** Effective from 01 November 2026, no operator shall access the e-Passport Central Portal using single-factor static passwords. Access will strictly require user credentials paired with a hardware FIDO2 Security Token or mobile-based authenticator OTP.\n   (b) **Clean Desk and Clear Screen Policy:** All enrollment desks must remain clear of physical applicant files, handwritten passport numbers, or removable media (USB drives) when unattended. Workstations must be configured to lock automatically after two (02) minutes of inactivity.\n   (c) **Prohibition of Unauthorized Hardware:** Under no circumstances shall personal smartphones, external webcams, or unauthorized Wi-Fi dongles be connected to the government network switch or PC USB ports.\n\n2. Regional Sub-Assistant Maintenance Engineers are instructed to conduct bi-weekly audit sweeps and log terminal compliance. Any breach of this directive will trigger disciplinary action under the Government Servants (Conduct) Rules.\n\nBy Order of the Director General,\n\n(Signature)\n(Engr. Tanvir Ahmed)\nDirector (Systems & ICT)\nDepartment of Immigration and Passports, Dhaka.",
    "points_to_remember": [
      "Numbered instructions provide clarity and authority in administrative memos.",
      "Specify compliance deadlines and consequences of non-compliance."
    ],
    "tags": ["official_memo", "cybersecurity_policy", "english_drafting"]
  },
  {
    "id": 3038,
    "subject": "ইংরেজি",
    "topic": "Technical Root Cause Analysis (RCA) Report",
    "question": "Draft an executive Technical Incident & Root Cause Analysis (RCA) Report concerning a 45-minute total network outage at a Regional Passport Office caused by a physical switching loop and Spanning Tree Protocol (STP) misconfiguration.",
    "marks": 9,
    "answer": "Executive Technical Incident & Root Cause Analysis (RCA) Report:\n\n**DOCUMENT CLASSIFICATION:** INTERNAL RESTRICTED  \n**INCIDENT TRACKING ID:** INC-2026-1023-NET  \n**AFFECTED FACILITY:** Regional Passport Office, Sylhet  \n**DATE OF INCIDENT:** 23 October 2026 | **DURATION:** 45 Minutes (10:15 AM – 11:00 AM)  \n\n**1. EXECUTIVE SUMMARY:**  \nAt 10:15 AM, the local area network serving twenty-two (22) biometric enrollment counters and eight (8) delivery stations experienced a total connectivity failure. Applicants could not be enrolled, and e-Gate verification timed out. Full service was restored at 11:00 AM following the isolation of a loop and configuration of Rapid Spanning Tree Protocol (RSTP).\n\n**2. TIMELINE OF EVENTS:**  \n• **10:15 AM:** Core Switch CPU utilization surged to 100%; inter-VLAN ping latency spiked from 1ms to over 3500ms, followed by 98% packet loss.  \n• **10:25 AM:** Maintenance Engineer diagnosed a broadcast radiation storm (over 120,000 broadcast packets/sec) saturating all trunk ports.  \n• **10:40 AM:** Physical inspection identified that an unmanaged 8-port desktop switch in the training room had both ends of a patch cable inadvertently plugged into two adjacent wall ports connected to Access Switch-02.  \n• **10:45 AM:** Loop cable physically disconnected; broadcast storm ceased immediately.  \n• **10:55 AM:** Spanning Tree BPDU Guard and Loop Guard enabled globally across all access ports.  \n• **11:00 AM:** Full system operational verification confirmed; incident resolved.\n\n**3. ROOT CAUSE:**  \n1. **Human Error:** An operator mistakenly connected both ends of an Ethernet patch cable into two live data jacks, forming a physical bridging loop.  \n2. **Configuration Gap:** Access Switch-02 had 'BPDU Guard' disabled on edge ports. Consequently, when loop frames circulated, the switch failed to automatically err-disable the rogue port, precipitating an uncontained Layer-2 broadcast storm.\n\n**4. PREVENTIVE ACTIONS & RECOMMENDATIONS:**  \n• Enable `spanning-tree portfast bpduguard default` on all edge ports across all switches nationwide.  \n• Enforce strict physical port locking on unallocated wall sockets.  \n• Deploy automated SNMP trap alerts to notify the NOC when switch CPU exceeds 80%.\n\n**SUBMITTED BY:**  \n(Md. Shakil Hossain)  \nSub-Assistant Maintenance Engineer  \nRegional Passport Office, Sylhet.",
    "points_to_remember": [
      "Technical incident reports require Executive Summary, Timeline, Root Cause, and Action Items.",
      "Incorporate precise networking terms (broadcast storm, BPDU guard, trunk ports, err-disable)."
    ],
    "tags": ["rca_report", "incident_report", "networking", "technical_writing"]
  },
  {
    "id": 3039,
    "subject": "ইংরেজি",
    "topic": "Official Drafting & Contractual Notice",
    "question": "Draft an official 'Cure Notice / Penalty Warning Letter' from the Department of Immigration and Passports to the authorized Annual Maintenance Contract (AMC) vendor for repeated failure to replace degraded UPS battery banks within the agreed SLA timeframe.",
    "marks": 8,
    "answer": "Model Contractual Cure Notice:\n\nGOVERNMENT OF THE PEOPLE'S REPUBLIC OF BANGLADESH\nDEPARTMENT OF IMMIGRATION AND PASSPORTS\nOFFICE OF THE SYSTEM ANALYST\nE-7 Agargaon, Dhaka-1207\n\nRef: 44.01.0000.301.08.004.26-789\nDate: 23 October 2026\n\nTo:\nThe Managing Director\nElectroTech Power Solutions Ltd.\nHouse-14, Road-07, Banani, Dhaka-1213.\n\nSUBJECT: FORMAL CURE NOTICE: PERSISTENT DELAY IN REPLACING FAULTY 10 KVA ONLINE UPS BATTERY BANKS UNDER AMC CONTRACT NO: DIP/AMC-UPS/2025-26\n\nDear Sir,\n\nThis serves as a formal written notice regarding your repeated breach of performance commitments under the active Annual Maintenance Contract (Contract Ref: DIP/AMC-UPS/2025-26, dated 15 January 2026).\n\n2. As per Clause 8.2 (Service Level Agreement) of the said contract, your technical personnel are contractually obligated to rectify or replace defective UPS battery cells within twenty-four (24) hours of ticket issuance. However, Ticket #UPS-DH-402 (issued on 12 October 2026) and Ticket #UPS-CTG-409 (issued on 16 October 2026) regarding swollen and degraded 12V 100Ah VRLA battery strings remain unaddressed despite three formal reminders.\n\n3. This prolonged negligence has deprived our production passport servers of clean redundant power, exposing national immigration databases to severe risks of catastrophic power surges and unbudgeted downtime.\n\n4. You are hereby called upon to **cure this default within forty-eight (48) hours** of receipt of this notice by delivering and commissioning genuine replacement battery modules. Failure to comply will compel this Department to invoke Clause 14.1, imposing liquidated damages at 0.5% per week of the contract value and initiating forfeiture of your Performance Guarantee Security, alongside prospective blacklisting from future public tenders.\n\nPlease treat this notice as extremely urgent.\n\nYours faithfully,\n\n(Signature)\n(Engr. Kazi Mahfuzur Rahman)\nSystem Analyst & Head of Maintenance\nDepartment of Immigration and Passports\nEmail: sysanalyst@dip.gov.bd",
    "points_to_remember": [
      "A legal/contractual cure notice must cite specific contract clauses, dates, ticket IDs, and exact legal remedies/penalties."
    ],
    "tags": ["official_letter", "contractual_notice", "sla_warning", "english_drafting"]
  },
  {
    "id": 3040,
    "subject": "ইংরেজি",
    "topic": "Précis Writing",
    "question": "Write a précis of the following passage in about one-third of its length and suggest a suitable title:\n\n\"The integration of Artificial Intelligence into public sector administration and immigration border control offers tremendous opportunities to streamline operations, enhance document fraud detection, and eliminate long queues at international airports. Machine learning algorithms can analyze passport security features, facial landmarks, and behavioral biometrics in fractions of a second, far outpacing the capacity of human border guards. However, this profound technological leap forward is accompanied by substantial ethical and societal hazards. If trained on skewed or unrepresentative demographic datasets, facial recognition models can exhibit dangerous algorithmic bias, leading to disproportionate false rejections of specific ethnic minorities. Furthermore, the ubiquitous harvesting and long-term retention of private biometric information in centralized databases expose citizens to perpetual state surveillance and severe risks of catastrophic cyber breaches. Therefore, deploying artificial intelligence in sovereign public spheres must be strictly balanced with transparent algorithmic governance, independent oversight committees, robust privacy laws, and unconditional human-in-the-loop validation mechanisms to protect fundamental civil liberties.\"",
    "marks": 8,
    "answer": "Précis Solution:\n\n**Title: Balancing AI Innovation and Civil Liberties in Public Governance**\n\n**Précis:**\nWhile artificial intelligence significantly enhances border control and fraud detection by accelerating biometric verification beyond human speed, it introduces severe ethical risks. Flawed algorithmic datasets can cause discriminatory racial bias, while centralized biometric storage threatens personal privacy and invites catastrophic cyber theft. Consequently, public AI deployment mandates transparent governance, independent audit oversight, and human verification to protect democratic freedoms.\n\n*(Word count: 62 words; Original text: 168 words)*",
    "points_to_remember": [
      "Précis must capture the core paradox (benefits vs. risks) in approximately 30-35% of the original text.",
      "A concise and relevant title is mandatory."
    ],
    "tags": ["precis_writing", "summary", "ai_ethics", "english_written"]
  },
  {
    "id": 3041,
    "subject": "ইংরেজি",
    "topic": "Reading Comprehension & Analysis",
    "question": "Read the following passage and answer the questions that follow in complete analytical sentences:\n\n\"Network Function Virtualization (NFV) and Software-Defined Networking (SDN) represent a paradigm shift in modern data center architecture. Traditional enterprise networks rely heavily on proprietary, dedicated hardware appliances such as physical firewalls, load balancers, and edge routers. This hardware-centric model incurs exorbitant capital expenditures, demands complex manual recabling, and creates rigid architectural vendor lock-ins. Conversely, SDN decouples the network control plane—which makes routing and forwarding decisions—from the data plane that forwards physical network packets. By centralizing network intelligence into software controllers, SDN empowers network administrators to dynamically orchestrate traffic flows, automate bandwidth allocation, and provision virtual network slices through programmatic APIs. Complementary to SDN, NFV abstracts essential network functions from specialized hardware and executes them as virtual machines or lightweight microservice containers on commodity x86 servers. Together, these complementary technologies foster hyper-resilient, scalable, and cost-effective digital infrastructures, which are indispensable for managing the immense data flows of modern e-governance.\"\n\n**Questions:**\n(a) What are the principal drawbacks of traditional hardware-centric network infrastructures?\n(b) How does Software-Defined Networking (SDN) achieve architectural agility?\n(c) In what way does NFV complement SDN in an enterprise data center?\n(d) Give synonyms for: 'Exorbitant' and 'Decouples'.",
    "marks": 8,
    "answer": "Comprehension Answers:\n\n(a) The primary drawbacks of traditional hardware-centric networks include exorbitant capital expenditures, the requirement of cumbersome manual physical recabling, and rigid dependency on proprietary vendor hardware (vendor lock-in).\n\n(b) SDN achieves architectural agility by decoupling the intelligent control plane from the packet-forwarding data plane. By centralizing network logic into a software controller, administrators can dynamically orchestrate traffic flows, automate bandwidth provisioning, and enforce policies programmatically via APIs without reconfiguring physical devices.\n\n(c) While SDN centralizes the logic and flow control of the network, NFV complements it by replacing proprietary hardware appliances (like physical firewalls and routers) with virtualized software instances running on standardized, commodity x86 server hardware, thereby slashing hardware costs and boosting scalability.\n\n(d) **Synonyms:**\n• **Exorbitant:** Extravagant, excessive, prohibitive, disproportionate.\n• **Decouples:** Separates, disassociates, disconnects, detaches.",
    "points_to_remember": [
      "Formulate answers in your own words rather than lifting verbatim sentences from the text.",
      "Clear distinction between SDN (Control vs Data plane) and NFV (Hardware to Software abstraction)."
    ],
    "tags": ["comprehension", "sdn", "nfv", "english_written"]
  },
  {
    "id": 3042,
    "subject": "ইংরেজি",
    "topic": "Focus Essay Writing",
    "question": "Write a comprehensive analytical Focus Essay on:\n\"Digital Public Infrastructure (DPI) as the Catalyst for Bangladesh's Socio-Economic Transformation\". (Include: Conceptual Foundation of DPI, The Three Core Pillars: Digital Identity, Real-Time Payments, and Data Exchange, Economic Impact and Financial Inclusion, Overcoming Implementation Bottlenecks, Conclusion).",
    "marks": 10,
    "answer": "Focus Essay:\n\n**Digital Public Infrastructure (DPI) as the Catalyst for Bangladesh's Socio-Economic Transformation**\n\n**1. Introduction & Conceptual Framework:**\nDigital Public Infrastructure (DPI) represents the digital equivalent of roads, bridges, and electric grids in the modern information society. Rather than constructing fragmented, siloed IT applications for individual ministries, DPI provides open, interoperable, and reusable digital building blocks upon which both the public and private sectors can innovate. Globally recognized as the bedrock of digital empowerment, DPI is propelling Bangladesh toward an inclusive, high-income knowledge economy by 2041.\n\n**2. The Three Core Pillars of DPI:**\nAn effective DPI architecture rests upon three interconnected foundational layers:\n1. **Verifiable Digital Identity:** The foundational layer providing every citizen with a legally recognized, unique digital persona. Bangladesh's smart National Identity (NID) and biometric e-Passport systems under the Department of Immigration and Passports ensure tamper-proof authentication across government and financial portals.\n2. **Fast & Interoperable Digital Payment Systems:** Systems such as the National Payment Switch Bangladesh (NPSB), Mobile Financial Services (bKash, Nagad), and the Interoperable Digital Transaction Platform (Binimoy) have democratized commerce, enabling unbanked citizens to transfer funds, pay utility bills, and receive social safety-net allowances instantly.\n3. **Consent-Based Data Exchange:** Secure API platforms (such as the National e-Service Bus) allowing inter-agency data sharing—such as validating academic credentials, land ownership records, and tax clearances—eliminating repetitive paperwork.\n\n**3. Economic Impact and Financial Inclusion:**\nThe proliferation of DPI has unlocked unprecedented socio-economic dividends. Direct Benefit Transfers (DBT) during economic crises eliminated leakage and corruption, delivering aid directly to impoverished families. Furthermore, rural entrepreneurs, freelance software developers, and women-led micro-enterprises now participate seamlessly in global digital commerce, contributing significantly to foreign exchange reserves.\n\n**4. Key Challenges & Remedial Strategies:**\nDespite monumental strides, significant bottlenecks persist:\n• **The Digital Literacy Divide:** A large segment of marginal and elderly populations struggles to navigate automated self-service portals, necessitating grassroots digital service kiosks.\n• **Cybersecurity & Data Privacy:** Centralizing national identity records attracts adversarial cyber syndicates. Strict enforcement of data protection laws and zero-trust security postures are paramount.\n• **Regulatory Interoperability:** Ensuring legacy banking platforms and emerging fintech startups cooperate without predatory monopolistic barriers.\n\n**5. Conclusion:**\nDigital Public Infrastructure is not merely a modern convenience; it is an equalizer of human opportunity. By fortifying its digital identity infrastructure, expanding interoperable payments, and guaranteeing unwavering cybersecurity, Bangladesh can transform DPI into an unyielding engine of sovereign prosperity and social equity.",
    "points_to_remember": [
      "Highlight the three global pillars of DPI: Identity, Payments, Data Exchange.",
      "Link directly to national systems (NID, e-Passport, NPSB, Binimoy)."
    ],
    "tags": ["focus_essay", "dpi", "digital_governance", "english_written"]
  },
  {
    "id": 3043,
    "subject": "ইংরেজি",
    "topic": "Focus Essay Writing",
    "question": "Write an analytical Focus Essay on:\n\"Artificial Intelligence in Public Service Delivery: Opportunities, Ethics, and Governance in Bangladesh\". (Include: Introduction, Practical AI Applications in e-Governance, Ethical Dilemmas & Algorithmic Transparency, Human-Centric AI Governance Framework, Conclusion).",
    "marks": 10,
    "answer": "Focus Essay:\n\n**Artificial Intelligence in Public Service Delivery: Opportunities, Ethics, and Governance in Bangladesh**\n\n**1. Introduction:**\nArtificial Intelligence (AI) has emerged as the definitive general-purpose technology of the Fourth Industrial Revolution. In public administration, where traditional bureaucracies are frequently constrained by paperwork, processing delays, and manpower shortages, AI offers the transformative capability to process unstructured citizen inquiries, optimize resource distribution, and automate document scrutiny with unparalleled precision.\n\n**2. Practical Applications in Bangladesh's Public Administration:**\n• **Automated Border Control & Immigration:** Machine learning vision models power international airport e-Gates, performing facial landmark analysis and anti-spoofing verification against e-passport chip data in under twenty seconds.\n• **Natural Language Citizen Assistance:** AI chatbots deployed on government portals provide 24/7 localized guidance for passport tracking, national identity corrections, and land record queries.\n• **Predictive Disaster Management:** Analyzing satellite telemetry from Bangabandhu Satellite-1 enables authorities to predict flash floods and agricultural drought patterns days in advance, saving millions in emergency relief expenditures.\n\n**3. Ethical Quandaries and Algorithmic Vulnerabilities:**\nThe integration of algorithmic governance introduces profound ethical challenges:\n• **Algorithmic Discrimination:** AI systems trained on historical datasets may inadvertently perpetuate socioeconomic or gender biases in public recruitment and welfare distribution.\n• **The 'Black Box' Problem:** Deep neural networks often arrive at critical decisions through convoluted mathematical weights that lack human interpretability, undermining the constitutional right to administrative justification.\n• **Data Exploitation and Mass Surveillance:** Excessive tracking of citizen movements and biometric trails poses existential threats to individual privacy and democratic freedoms.\n\n**4. Constructing a Robust AI Governance Framework:**\nTo harness AI beneficially, Bangladesh must implement a human-centric regulatory paradigm:\n1. **Statutory Algorithmic Audits:** Mandating independent third-party audits of government AI algorithms to eliminate bias and verify accuracy before live deployment.\n2. **Human-in-the-Loop Safeguards:** Ensuring automated systems serve as assistive decision-support tools, with final adjudications on citizen rights reserved strictly for accountable human officers.\n3. **National AI Ethics Council:** Establishing an interdisciplinary oversight body comprising computer scientists, legal jurists, and human rights advocates to oversee sovereign AI implementations.\n\n**5. Conclusion:**\nArtificial intelligence possesses the power to democratize and humanize bureaucratic governance. However, technological capability must always be subservient to human dignity. By embedding transparency, ethical stewardship, and strict oversight into its AI architecture, Bangladesh can craft a smarter, fairer, and more compassionate public service for all citizens.",
    "points_to_remember": [
      "Address the 'Black Box' dilemma and 'Human-in-the-Loop' safeguards.",
      "Reference the National AI Strategy of Bangladesh."
    ],
    "tags": ["focus_essay", "ai_in_governance", "ethics", "public_service"]
  },
  {
    "id": 3044,
    "subject": "ইংরেজি",
    "topic": "Focus Essay Writing",
    "question": "Write an analytical Focus Essay on:\n\"Climate-Induced Migration and Border Security: A Contemporary Geopolitical Challenge\". (Include: Introduction, The Dynamics of Climate Displacement, Cross-Border Security & Human Rights Implications, Technological Interventions in Border Management, Conclusion).",
    "marks": 10,
    "answer": "Focus Essay:\n\n**Climate-Induced Migration and Border Security: A Contemporary Geopolitical Challenge**\n\n**1. Introduction:**\nClimate change is no longer solely an ecological catastrophe; it is an urgent driver of human displacement and a complex geopolitical security challenge. As rising sea levels, salinization, and prolonged droughts render vast regions uninhabitable, millions of vulnerable people are forced to abandon ancestral lands, precipitating unprecedented internal and cross-border demographic shifts.\n\n**2. The Dynamics of Climate Displacement:**\nIn low-lying riverine deltas like Bangladesh, coastal erosion and super-cyclones displace hundreds of thousands annually from coastal districts like Satkhira and Bhola into already overcrowded urban megacities. Globally, the United Nations estimates that over two hundred million people could be permanently displaced by climate shocks by 2050. When internal coping capacities are exhausted, desperate populations inevitably seek refuge across international borders.\n\n**3. Border Security vs. Humanitarian Rights:**\nTraditional border security paradigms view irregular migration predominantly through a punitive, law-enforcement lens—deploying physical fences, militarized patrols, and deportation protocols. However, climate refugees fit into an ambiguous legal vacuum: international refugee treaties (such as the 1951 Refugee Convention) strictly define refugees around political, racial, or religious persecution, offering zero statutory protections to those fleeing environmental devastation. This discord breeds exploitation, human trafficking, and regional geopolitical tensions.\n\n**4. Technological and Diplomatic Solutions in Border Management:**\nModern sovereign border management must transition from blunt militarization to intelligent, humanitarian border governance:\n• **Integrated Biometric Verification:** Biometric e-passports and Automated Border Control (ABC) gates ensure that legitimate humanitarian corridors can be managed with ironclad security, separating vulnerable migrants from organized criminal syndicates.\n• **Satellite Predictive Surveillance:** Utilizing remote sensing to monitor vulnerable coastal zones and early-warning environmental stress indicators, enabling pre-emptive humanitarian intervention.\n• **Global Climate Justice & Legal Recognition:** Developed nations, who bear historical responsibility for greenhouse emissions, must fund loss-and-damage adaptation and establish multilateral legal frameworks granting asylum and rehabilitation to climate-displaced populations.\n\n**5. Conclusion:**\nClimate displacement cannot be halted by barbed-wire barriers. True security lies in addressing the root ecological causes while instituting humane, technologically advanced, and legally codified border architectures. Managing climate migration with both firm security and profound empathy is the defining moral and geopolitical test of our century.",
    "points_to_remember": [
      "Critically analyze the gap in the 1951 UN Refugee Convention regarding climate displacement.",
      "Balance national security concerns with humanitarian human rights."
    ],
    "tags": ["focus_essay", "climate_migration", "border_security", "geopolitics"]
  },
  {
    "id": 3045,
    "subject": "ইংরেজি",
    "topic": "Pairs of Confusing Words",
    "question": "Distinguish between the following pairs of words by writing clear, grammatically sound contextual sentences:\n(a) Complement vs Compliment\n(b) Principal vs Principle\n(c) Stationary vs Stationery\n(d) Affect vs Effect\n(e) Illicit vs Elicit\n(f) Eminent vs Imminent",
    "marks": 6,
    "answer": "Pairs of Confusing Words Solution:\n\n(a) **Complement** vs **Compliment**:\n• **Complement** (To complete or enhance something):\n*Sentence:* The software-defined firewall acts as an essential complement to the physical hardware perimeter.\n• **Compliment** (An expression of praise or admiration):\n*Sentence:* The Director General paid a rich compliment to the maintenance team for restoring server operations without delay.\n\n(b) **Principal** vs **Principle**:\n• **Principal** (Head of an institution / Primary / Main sum):\n*Sentence:* High latency was the principal cause behind the failure of remote database synchronization.\n• **Principle** (A fundamental truth, rule, or doctrine):\n*Sentence:* Zero-trust security operates on the uncompromising principle of continuous verification.\n\n(c) **Stationary** vs **Stationery**:\n• **Stationary** (Not moving / Fixed in one place):\n*Sentence:* The network radar detected a stationary device connected to the switch port for over twelve hours.\n• **Stationery** (Writing materials like paper, envelopes, pens):\n*Sentence:* The administrative assistant submitted an official requisition for office stationery and thermal printer ribbons.\n\n(d) **Affect** vs **Effect**:\n• **Affect** (Verb: To influence or alter something):\n*Sentence:* Severe power fluctuations can adversely affect the sensitive optical sensors of biometric scanners.\n• **Effect** (Noun: The result or consequence of an action):\n*Sentence:* The new load-balancing algorithm had an immediate positive effect on website response times.\n\n(e) **Illicit** vs **Elicit**:\n• **Illicit** (Illegal / Forbidden by law or rules):\n*Sentence:* The forensic investigator intercepted an illicit transmission of citizen records across an unencrypted port.\n• **Elicit** (To evoke, draw out, or obtain information):\n*Sentence:* The technician's diagnostic questions were designed to elicit specific error codes from the user.\n\n(f) **Eminent** vs **Imminent**:\n• **Eminent** (Famous, distinguished, and respected):\n*Sentence:* An eminent computer science professor was invited to conduct the specialized cybersecurity training.\n• **Imminent** (About to happen very soon / Impending):\n*Sentence:* Hearing the high-pitch warning siren from the UPS, the engineers realized that an automatic shutdown was imminent.",
    "points_to_remember": [
      "Station**e**ry with an 'e' = **E**nvelopes / pap**e**r.",
      "Affect is typically a verb, while Effect is typically a noun."
    ],
    "tags": ["confusing_words", "vocabulary", "english_grammar"]
  },
  {
    "id": 3046,
    "subject": "ইংরেজি",
    "topic": "One-Word Substitution",
    "question": "Provide the precise single-word substitute for each of the following descriptions:\n(a) A person who speaks or knows many languages.\n(b) That which cannot be corrected or reformed.\n(c) One who is all-knowing and has infinite knowledge.\n(d) One who sacrifices his own interests for the welfare of others.\n(e) A universal remedy or cure for all diseases and difficulties.\n(f) Occurring, awarded, or published after a person's death.\n(g) A person who believes in or advocates the overthrow of government authority.\n(h) A person who hates or distrusts humankind.",
    "marks": 8,
    "answer": "One-Word Substitution Solution:\n\n(a) A person who speaks or knows many languages = **Polyglot** (or Linguist)\n(b) That which cannot be corrected or reformed = **Incorrigible**\n(c) One who is all-knowing and has infinite knowledge = **Omniscient**\n(d) One who sacrifices his own interests for the welfare of others = **Altruist**\n(e) A universal remedy or cure for all diseases and difficulties = **Panacea**\n(f) Occurring, awarded, or published after a person's death = **Posthumous**\n(g) A person who believes in or advocates the overthrow of government authority = **Anarchist**\n(h) A person who hates or distrusts humankind = **Misanthrope** (or Misanthropist)।",
    "points_to_remember": [
      "'Incorrigible', 'Panacea', and 'Omniscient' are very common in PSC written examinations."
    ],
    "tags": ["one_word_substitution", "vocabulary", "english_written"]
  },
  {
    "id": 3047,
    "subject": "ইংরেজি",
    "topic": "Word Formation & Parts of Speech Conversion",
    "question": "Convert the following words into the specified parts of speech and write one meaningful sentence with the newly formed word:\n(a) Maintain (into Noun)\n(b) Secure (into Noun)\n(c) Resilient (into Noun)\n(d) Execute (into Noun)\n(e) Pure (into Verb)\n(f) Clear (into Verb)",
    "marks": 6,
    "answer": "Word Formation & Usage Solution:\n\n(a) **Maintain** $\\rightarrow$ Noun: **Maintenance**\n*Sentence:* Routine preventive maintenance of biometric kiosks minimizes sudden hardware breakdowns during peak hours.\n\n(b) **Secure** $\\rightarrow$ Noun: **Security**\n*Sentence:* Multi-factor authentication provides an indispensable layer of security for public database systems.\n\n(c) **Resilient** $\\rightarrow$ Noun: **Resilience**\n*Sentence:* The remarkable resilience of the Tier-IV data center ensured zero data loss despite a localized power grid failure.\n\n(d) **Execute** $\\rightarrow$ Noun: **Execution**\n*Sentence:* The precise execution of the disaster recovery failover plan completed within twenty-five seconds.\n\n(e) **Pure** $\\rightarrow$ Verb: **Purify**\n*Sentence:* Air scrubbers are installed inside the server hall to continuously purify the air of airborne dust particulates.\n\n(f) **Clear** $\\rightarrow$ Verb: **Clarify**\n*Sentence:* The circular was issued to clarify the revised technical specifications for digital signature cards.",
    "points_to_remember": [
      "Pay attention to spelling shifts: Maintain $\\rightarrow$ Maint**e**nance (not maintainance)."
    ],
    "tags": ["word_formation", "parts_of_speech", "english_grammar"]
  },
  {
    "id": 3048,
    "subject": "ইংরেজি",
    "topic": "Official Drafting & Inaugural Speech",
    "question": "Draft a formal Welcome and Technical Overview Speech (around 150-180 words) to be delivered by the Lead Maintenance Engineer at the inaugural ceremony of the newly installed 'e-Passport Rapid Self-Service Delivery Kiosks' at Hazrat Shahjalal International Airport.",
    "marks": 8,
    "answer": "Model Inaugural Speech:\n\n\"Honorable Chief Guest, Distinguished Officers, and Respected Guests,\n\nA very warm welcome to this momentous inauguration ceremony celebrating the operational launch of our state-of-the-art e-Passport Rapid Self-Service Delivery Kiosks at Hazrat Shahjalal International Airport.\n\nToday marks a revolutionary leap forward in citizen service automation. These newly commissioned kiosks are equipped with high-speed optical barcode readers, multi-spectrum polycarbonate document verifiers, and sub-second dual-camera facial matching engines. When an applicant approaches the terminal, the machine verifies their digital token, cross-references biometric parameters against the central immigration database, and dispenses the physical smart e-passport in under forty-five seconds—without requiring human desk intervention.\n\nEngineered with an impenetrable zero-trust architecture, automated audit logging, and dual uninterruptible power units, these kiosks guarantee 99.9% uptime and bulletproof data integrity. This achievement stands as a shining testament to our engineering dedication toward realizing the vision of 'Smart Bangladesh 2041'.\n\nThank you all for being part of this inspiring technological milestone!\"",
    "points_to_remember": [
      "A formal speech requires a dignified salutation, technical substance, and an uplifting conclusion."
    ],
    "tags": ["inaugural_speech", "public_speaking", "english_drafting"]
  },
  {
    "id": 3049,
    "subject": "ইংরেজি",
    "topic": "Sentence Synthesis & Combining",
    "question": "Combine each set of simple sentences into a single well-structured sentence as directed:\n(a) The server had overheated. It triggered an automated shutdown alarm. (Combine using a Participial Phrase)\n(b) The engineer configured the firewall rules. He then verified the port status on the core switch. (Combine into a Simple Sentence using 'Having + V3')\n(c) The e-Passport chip contains encrypted biometric data. It is validated via Public Key Directory (PKD). (Combine into a Complex Sentence with a Relative Clause)\n(d) The power went off. The backup diesel generator started automatically. (Combine using 'As soon as' or 'No sooner had')",
    "marks": 6,
    "answer": "Sentence Synthesis Solution:\n\n(a) Combine using a Participial Phrase:\n$\\rightarrow$ **Having overheated, the server triggered an automated shutdown alarm.** (or: Overheating rapidly, the server triggered...)\n\n(b) Combine into a Simple Sentence using 'Having + V3':\n$\\rightarrow$ **Having configured the firewall rules, the engineer verified the port status on the core switch.**\n\n(c) Combine into a Complex Sentence with a Relative Clause:\n$\\rightarrow$ **The e-Passport chip contains encrypted biometric data which is validated via Public Key Directory (PKD).**\n\n(d) Combine using 'No sooner had':\n$\\rightarrow$ **No sooner had the power gone off than the backup diesel generator started automatically.**",
    "points_to_remember": [
      "Perfect participle: 'Having + V3' clearly indicates one action preceding another.",
      "'No sooner had + past participle ... than + past indefinite'."
    ],
    "tags": ["sentence_synthesis", "combining_sentences", "grammar"]
  },
  {
    "id": 3050,
    "subject": "ইংরেজি",
    "topic": "High-Frequency Vocabulary & Contextual Mastery",
    "question": "For each of the following advanced vocabulary words, provide: (1) its precise grammatical definition, (2) an exact antonym, and (3) an exemplary sentence in an IT or administrative context:\n(a) Alacrity\n(b) Cacophony\n(c) Paradigm\n(d) Quintessential\n(e) Fastidious\n(f) Obsolete",
    "marks": 6,
    "answer": "High-Frequency Vocabulary Analysis:\n\n(a) **Alacrity** (Noun):\n• Definition: Brisk, cheerful readiness and promptness in response.\n• Antonym: Reluctance / Hesitation / Sluggishness.\n• *Sentence:* The on-call engineering team responded with remarkable alacrity to resolve the critical server database deadlock.\n\n(b) **Cacophony** (Noun):\n• Definition: A harsh, discordant, and jarring mixture of sounds.\n• Antonym: Harmony / Euphony / Symphony.\n• *Sentence:* Amidst the cacophony of screeching UPS warning alarms in the server room, the senior technician methodically identified the tripping circuit breaker.\n\n(c) **Paradigm** (Noun):\n• Definition: A typical example, model, or conceptual framework of something.\n• Antonym: Anomaly / Deviation.\n• *Sentence:* The migration from monolithic codebases to microservices represents a profound paradigm shift in modern software development.\n\n(d) **Quintessential** (Adjective):\n• Definition: Representing the most perfect or typical embodiment of a quality or class.\n• Antonym: Substandard / Mediocre / Atypical.\n• *Sentence:* The Tier-IV National Data Center stands as the quintessential model of high-availability public infrastructure.\n\n(e) **Fastidious** (Adjective):\n• Definition: Very attentive to and concerned about accuracy, detail, and cleanliness.\n• Antonym: Careless / Sloppy / Negligent.\n• *Sentence:* The database administrator is fastidious about maintaining transaction log integrity and verifying backup checksums daily.\n\n(f) **Obsolete** (Adjective):\n• Definition: No longer produced or used; completely out of date.\n• Antonym: Contemporary / Modern / State-of-the-art.\n• *Sentence:* Traditional legacy passbooks have become entirely obsolete following the nationwide adoption of polycarbonate biometric e-passports.",
    "points_to_remember": [
      "Using precise grammatical categories and sophisticated contextual sentences demonstrates linguistic mastery in written tests."
    ],
    "tags": ["vocabulary", "gre_words", "english_written"]
  }
];

currentQuestions.push(...newQuestions);

fs.writeFileSync(englishWrittenPath, JSON.stringify(currentQuestions, null, 2), 'utf8');
console.log(`Successfully appended 25 new questions! Total english written questions: ${currentQuestions.length}`);
