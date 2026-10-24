const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/written/english_written.json');
const currentData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const newQuestions = [
  {
    id: 3011,
    subject: "ইংরেজি",
    topic: "Appropriate Prepositions",
    question: "Fill in the blanks with appropriate prepositions:\n(a) He is thoroughly absorbed _______ his technical research.\n(b) The government agency must strictly adhere _______ the security protocol.\n(c) A civil servant should abstain _______ any conflict of interest.\n(d) The administrator is blind _______ the flaws of his subordinates.\n(e) The rural passport workstation is deficient _______ high-speed internet bandwidth.\n(f) He was accused of conniving _______ the illegal entry of travelers.",
    marks: 6,
    answer: "Answers with grammatical explanation:\n\n(a) absorbed **in** (নিবিষ্ট বা মগ্ন থাকা; 'absorbed in thought/work')\n(b) adhere **to** (দৃঢ়ভাবে লেগে থাকা বা নিয়ম মেনে চলা; 'adhere to rules/standards')\n(c) abstain **from** (বিরত থাকা; 'abstain from evil/malpractice')\n(d) blind **to** (দোষ দেখেও না দেখার ভান করা বা অন্ধ থাকা; 'blind to faults')\n(e) deficient **in** (কোনো কিছুর ঘাটতি থাকা; 'deficient in nutrients/bandwidth')\n(f) conniving **at** (দোষ দেখেও গোপন প্রশ্রয় দেওয়া; 'connive at a crime').",
    points_to_remember: [
      "'Blind of an eye' (এক চোখে অন্ধ), কিন্তু 'Blind to faults' (দোষের প্রতি অন্ধ)।",
      "'Abstain from', 'Refrain from', 'Prohibit from'—এগুলোর পর সর্বদা 'from' বসে।"
    ],
    tags: ["prepositions", "english_grammar", "written_english"]
  },
  {
    id: 3012,
    subject: "ইংরেজি",
    topic: "Right Form of Verbs",
    question: "Complete the following sentences with the right form of verbs given in brackets:\n(a) You had better (consult) the network engineer before resetting the core router.\n(b) Walk fast lest you (miss) the government biometric training session.\n(c) No sooner had the technician (replace) the faulty SMPS than the server started functioning.\n(d) It is high time we (upgrade) the legacy firewall systems.\n(e) He talks as if he (know) all the root passwords of the data center.",
    marks: 5,
    answer: "Corrected Sentences:\n\n(a) You had better **consult** the network engineer before resetting the core router.\n*(Rule: 'Had better', 'would rather' are modal idioms followed by base form of verb V1 without 'to').*\n\n(b) Walk fast lest you **should miss** (or **might miss**) the government biometric training session.\n*(Rule: 'Lest' is followed by Subject + should/might + base form of verb).* \n\n(c) No sooner had the technician **replaced** the faulty SMPS than the server started functioning.\n*(Rule: 'No sooner had' takes Past Participle V3, and the clause after 'than' takes Past Indefinite V2).*\n\n(d) It is high time we **upgraded** the legacy firewall systems.\n*(Rule: 'It is time' / 'It is high time' followed by a subject requires Past Indefinite V2).*\n\n(e) He talks as if he **knew** all the root passwords of the data center.\n*(Rule: Present Indefinite + 'as if' / 'as though' takes Past Indefinite; for 'be' verb it takes 'were').*",
    points_to_remember: [
      "'It is high time' + subject -> V2 (Past Indefinite).",
      "'Lest' এর পরে কখনো 'not' বসে না, কারণ 'lest' নিজেই নেতিবাচক।"
    ],
    tags: ["right_form_of_verbs", "english_grammar"]
  },
  {
    id: 3013,
    subject: "ইংরেজি",
    topic: "Transformation of Sentences",
    question: "Transform the following sentences as directed without changing their original meaning:\n(a) As soon as the biometric scanner read the fingerprint, the e-gate opened. (Make it Negative using 'No sooner had')\n(b) In spite of working day and night, the technician could not restore the corrupted database. (Make it Compound)\n(c) The server is so overloaded that it cannot handle additional concurrent requests. (Make it Simple using 'too...to')\n(d) No other security protocol in our department is as robust as PKI. (Make it Superlative)\n(e) Who does not wish to serve the motherland? (Make it Assertive)",
    marks: 5,
    answer: "Transformation Solutions:\n\n(a) **Negative:** No sooner had the biometric scanner read the fingerprint than the e-gate opened.\n\n(b) **Compound:** The technician worked day and night, but he could not restore the corrupted database.\n\n(c) **Simple:** The server is too overloaded to handle additional concurrent requests.\n\n(d) **Superlative:** PKI is the most robust security protocol in our department.\n\n(e) **Assertive:** Everyone wishes to serve the motherland.",
    points_to_remember: [
      "No sooner had + Sub + V3 ... than + Sub + V2.",
      "Too + adj + to + V1 replaces so...that + negative clause."
    ],
    tags: ["transformation", "english_grammar"]
  },
  {
    id: 3014,
    subject: "ইংরেজি",
    topic: "Correction of Grammatical Errors",
    question: "Correct the following sentences by rectifying the grammatical errors:\n(a) One of the server administrator have resigned yesterday.\n(b) The sceneries of the hilly district charmed the tourists.\n(c) This optical scanner is superior than that older model.\n(d) Neither the software developer nor the database engineers was present at the incident review meeting.\n(e) He gave me many valuable advices regarding network security.",
    marks: 5,
    answer: "Corrected Sentences:\n\n(a) **Incorrect:** One of the server administrator have resigned yesterday.\n    **Correct:** One of the server **administrators resigned** yesterday.\n    *(Rule: 'One of the' takes a plural noun 'administrators', and the past time marker 'yesterday' requires past indefinite 'resigned').*\n\n(b) **Incorrect:** The sceneries of the hilly district charmed the tourists.\n    **Correct:** The **scenery** of the hilly district charmed the tourists.\n    *(Rule: 'Scenery' is an uncountable noun with no plural form).*\n\n(c) **Incorrect:** This optical scanner is superior than that older model.\n    **Correct:** This optical scanner is **superior to** that older model.\n    *(Rule: Latin comparatives—superior, inferior, senior, junior, prior—take 'to', never 'than').*\n\n(d) **Incorrect:** Neither the software developer nor the database engineers was present at the incident review meeting.\n    **Correct:** Neither the software developer nor the database engineers **were** present at the incident review meeting.\n    *(Rule: In 'neither...nor', the verb agrees with the closer subject; here 'engineers' is plural).*\n\n(e) **Incorrect:** He gave me many valuable advices regarding network security.\n    **Correct:** He gave me **much valuable advice** (or: **many pieces of valuable advice**) regarding network security.\n    *(Rule: 'Advice' is uncountable; it cannot take 'many' or plural 'advices').*",
    points_to_remember: [
      "Uncountable nouns: Furniture, Information, Scenery, Advice, Luggage, Equipment.",
      "Latin comparatives are always followed by preposition 'to'."
    ],
    tags: ["error_correction", "english_written"]
  },
  {
    id: 3015,
    subject: "ইংরেজি",
    topic: "Idioms & Phrases",
    question: "Write down the meaning and make meaningful sentences with the following idioms and phrases:\n(a) Achilles' heel\n(b) At a stone's throw\n(c) Bite the bullet\n(d) Burn the midnight oil\n(e) Through thick and thin\n(f) A blessing in disguise",
    marks: 6,
    answer: "Idioms and Sentence Construction:\n\n(a) **Achilles' heel** (A fatal weakness or vulnerable spot):\n*Lack of automated offsite backup proved to be the Achilles' heel of their IT infrastructure.*\n\n(b) **At a stone's throw** (Very close by / Short distance):\n*The regional passport office is situated at a stone's throw from the central bus terminal.*\n\n(c) **Bite the bullet** (To face a difficult or unpleasant situation with courage):\n*The ministry had to bite the bullet and replace the entire legacy server array to prevent cyber intrusions.*\n\n(d) **Burn the midnight oil** (To work or study late into the night):\n*Our maintenance team burned the midnight oil to configure the e-gate biometric systems before the inauguration.*\n\n(e) **Through thick and thin** (Under all circumstances, good or bad):\n*The dedicated engineers stood by the department through thick and thin during the national database migration.*\n\n(f) **A blessing in disguise** (An apparent misfortune that eventually has good results):\n*The temporary network outage was a blessing in disguise as it prompted the installation of redundant fiber optic links.*",
    points_to_remember: [
      "Always write the precise meaning in parenthesis before making the sentence.",
      "Sentences should be contextual and reflect mature grammatical structure."
    ],
    tags: ["idioms_phrases", "vocabulary"]
  },
  {
    id: 3016,
    subject: "ইংরেজি",
    topic: "Clause Analysis & Synthesis",
    question: "(a) Identify the underlined clauses and name their types:\n  (i) We know *that the encrypted biometric chip cannot be cloned*.\n  (ii) The engineer *who configured the core firewall* received an award.\n  (iii) *When the power failed*, the online UPS took over seamlessly.\n\n(b) Join the pairs of sentences into a single Complex sentence:\n  (i) The biometric enrollment device was malfunctioning. We immediately swapped it with a standby unit.\n  (ii) He is a certified network specialist. Everyone knows this fact.",
    marks: 5,
    answer: "Clause Analysis & Synthesis:\n\n(a) Clause Identification:\n(i) *that the encrypted biometric chip cannot be cloned* $\\rightarrow$ **Noun Clause** (Functions as the direct object of the transitive verb 'know').\n(ii) *who configured the core firewall* $\\rightarrow$ **Adjective / Relative Clause** (Modifies the noun antecedent 'The engineer').\n(iii) *When the power failed* $\\rightarrow$ **Adverbial Clause of Time** (Modifies the verb 'took over').\n\n(b) Sentence Joining (Synthesis into Complex Sentences):\n(i) **Complex:** As (or Since) the biometric enrollment device was malfunctioning, we immediately swapped it with a standby unit.\n(ii) **Complex:** Everyone knows that he is a certified network specialist.",
    points_to_remember: [
      "Noun clause answers 'what' after the main verb.",
      "Adjective clause begins with relative pronoun (who, which, that) following a noun."
    ],
    tags: ["clause_analysis", "synthesis", "grammar"]
  },
  {
    id: 3017,
    subject: "ইংরেজি",
    topic: "Translation (Bengali to English)",
    question: "Translate the following passage into English:\n\"ডিজিটাল বাংলাদেশ বিনির্মাণের পর দেশ এখন স্মার্ট বাংলাদেশের লক্ষ্য বাস্তবায়নে এগিয়ে চলেছে। সরকারি সেবা জনগণের দোরগোড়ায় পৌঁছে দিতে তথ্যপ্রযুক্তি সবচেয়ে বড় হাতিয়ার হিসেবে কাজ করছে। পাসপোর্ট প্রাপ্তি, জন্মনিবন্ধন এবং জাতীয় পরিচয়পত্র সংশোধন এখন অনলাইনের মাধ্যমে ঘরে বসেই সম্পন্ন করা যায়। এই আধুনিক ডিজিটাইজেশন একদিকে যেমন সাধারণ মানুষের ভোগান্তি ও দালালদের দৌরাত্ম্য বন্ধ করেছে, অন্যদিকে জাতীয় রাজস্ব বৃদ্ধিতেও গুরুত্বপূর্ণ ভূমিকা রাখছে।\"",
    marks: 8,
    answer: "English Translation:\n\n\"Following the realization of Digital Bangladesh, the nation is now marching forward to achieve the vision of Smart Bangladesh. Information technology serves as the paramount instrument in delivering government services right to the doorsteps of the citizens. Obtaining passports, birth registrations, and correcting National Identity Cards (NID) can now be accomplished from home via online platforms. On the one hand, this modern digitization has eliminated public harassment and the extortion of intermediaries; on the other hand, it is playing a vital role in enhancing national revenue.\"",
    points_to_remember: [
      "'জনগণের দোরগোড়ায় পৌঁছে দেওয়া' -> 'delivering right to the doorsteps of the citizens'.",
      "'দালালদের দৌরাত্ম্য' -> 'extortion/influence of intermediaries/middlemen'."
    ],
    tags: ["translation", "bengali_to_english", "written_english"]
  },
  {
    id: 3018,
    subject: "ইংরেজি",
    topic: "Reading Comprehension & Critical Analysis",
    question: "Read the following passage and answer the questions that follow:\n\n\"Biometric technology has transformed border security from subjective human inspection into an objective, automated science. By measuring unique physiological characteristics—such as facial contours, fingerprint minutiae, and iris patterns—systems verify identity with unprecedented mathematical accuracy. However, this profound technical power introduces profound ethical responsibilities. Unlike passwords, cryptographic keys, or credit card numbers, biometric credentials cannot be reissued or reset if compromised. Once an individual's biometric template is breached, that person's physical identity is permanently jeopardized across all associated platforms. Therefore, national databases housing biometric records must implement zero-trust network architectures, end-to-end hardware encryption, and immutable audit logs to protect citizen privacy against state-sponsored advanced persistent threats (APTs).\"\n\nQuestions:\n(a) Why is a biometric breach considered far more catastrophic than a password leak?\n(b) What physiological features are utilized for identity verification in modern border security?\n(c) How can national databases protect biometric records against advanced cyber threats?\n(d) Suggest a suitable title for the passage.",
    marks: 8,
    answer: "Answers to Comprehension Questions:\n\n(a) A biometric breach is far more catastrophic because passwords or cryptographic tokens can be easily changed or reissued if compromised, whereas biometric credentials (like fingerprints or iris patterns) are permanent physiological traits that can never be reset or altered once leaked.\n\n(b) Modern border security systems utilize facial contours, fingerprint minutiae, and iris patterns as unique physiological characteristics for objective identity verification.\n\n(c) National databases can safeguard biometric records by implementing zero-trust network architectures, end-to-end hardware encryption, and immutable audit logs against advanced persistent threats.\n\n(d) **Suitable Title:** *Biometric Border Security: Technological Precision and the Imperative of Privacy Protection* (or: *The Double-Edged Sword of National Biometric Databases*).",
    points_to_remember: [
      "Answers must be written in complete, grammatically sound sentences without directly copying verbatim sentences where synthesis is possible."
    ],
    tags: ["reading_comprehension", "english_written"]
  },
  {
    id: 3019,
    subject: "ইংরেজি",
    topic: "Official Email Drafting",
    question: "Draft a formal official email to the Technical Account Manager of an international vendor (e.g., 'DERMALOG Identification Systems') reporting recurring optical fingerprint scanner driver crashes on Windows 11 client workstations and requesting an emergency patched firmware update and on-site engineer visit.",
    marks: 8,
    answer: "Formal Technical Email:\n\n**To:** support.contracts@dermalog.com\n**Cc:** director.ict@dip.gov.bd, maintenance.cell@dip.gov.bd\n**Subject:** URGENT: Recurring Driver Crash of Optical Fingerprint Scanners (Model: ZF1) on Windows 11 Workstations - DIP Bangladesh\n**Date:** October 23, 2026\n\nDear Mr. Henderson,\n\nI am writing on behalf of the Department of Immigration and Passports (DIP), Bangladesh, to draw your immediate attention to a critical technical issue currently affecting our e-passport enrollment workstations.\n\nFollowing the scheduled operating system upgrade to Windows 11 Enterprise (Build 23H2) across our Dhaka Divisional Passport Office, the optical fingerprint scanners (Model: DERMALOG ZF1, Firmware Rev: 3.4.1) have been experiencing intermittent driver crashes. Specifically, during multi-finger capture, the device driver fails with code `STATUS_DEVICE_POWER_FAILURE (0xC000009E)`, causing the enrollment application to freeze and necessitating repeated system reboots. This issue is causing substantial delays in public service delivery.\n\nIn accordance with Section 7.2 of our active Annual Maintenance Agreement (SLA ref: DIP-SLA-2025/08), we formally request the following urgent actions:\n1. Immediate provision of an updated, certified Windows 11 WHQL driver package and patched firmware.\n2. Deputation of a designated on-site field support engineer to our Agargaon headquarters within 24 hours to analyze the crash dumps and assist in firmware deployment.\n\nYour prompt technical intervention is crucial to restoring uninterrupted public service. We look forward to your immediate acknowledgment and deployment plan.\n\nSincerely,\n\n**Engr. Tanvir Ahmed**\nSub-Assistant Maintenance Engineer\nICT & Systems Maintenance Wing\nDepartment of Immigration and Passports (DIP)\nMinistry of Home Affairs, Dhaka, Bangladesh\nTel: +880-2-XXXXXXXX | Mobile: +880-17XXXXXXXX\nEmail: same.ict@dip.gov.bd",
    points_to_remember: [
      "A technical official email must include exact model numbers, error codes, SLA contract clauses, and specific time-bound requests."
    ],
    tags: ["email_drafting", "formal_writing", "english_written"]
  },
  {
    id: 3020,
    subject: "ইংরেজি",
    topic: "Technical Incident Report",
    question: "Draft a comprehensive 'Network Incident & Root Cause Analysis (RCA) Report' addressed to the Director (ICT) concerning an unexpected core distribution switch failure that caused a 45-minute outage at the central passport issuance division.",
    marks: 10,
    answer: "Network Incident Report:\n\n**DEPARTMENT OF IMMIGRATION & PASSPORTS**\n**ICT & INFRASTRUCTURE WING, HEADQUARTERS, DHAKA**\n\n**INCIDENT REPORT & ROOT CAUSE ANALYSIS (RCA)**\n\n**Incident Reference:** INC-2026-1023-NET-01\n**Date of Report:** October 23, 2026\n**To:** Director (ICT), Department of Immigration and Passports\n**From:** Sub-Assistant Maintenance Engineer, Network & Data Center Operations\n**Classification:** Severity-1 (High Impact)\n\n**1. Executive Summary:**\nOn October 23, 2026, at 10:15 AM, the Central Passport Personalization Division experienced an unexpected network outage lasting 45 minutes (10:15 AM to 11:00 AM). The outage temporarily halted passport printing and personalization queuing. Service was fully restored at 11:00 AM following emergency hardware bypass.\n\n**2. Incident Timeline:**\n• **10:15 AM:** Core Distribution Switch (Cisco Catalyst 9500) abruptly rebooted and entered a boot-loop.\n• **10:18 AM:** Monitoring system (Zabbix) raised high-priority alerts regarding unreachable subnets (VLAN 30 & VLAN 40).\n• **10:25 AM:** Maintenance engineers inspected the rack and observed redundant power supply failure (PSU-2 dead, PSU-1 overheating trip).\n• **10:35 AM:** Hot-standby switch was configured, and primary fiber uplinks were patched to the redundant switch.\n• **10:50 AM:** Spanning-tree protocol (RSTP) converged; database connectivity re-established.\n• **11:00 AM:** Full verification completed; all personalization lines resumed normal operation.\n\n**3. Root Cause Analysis (RCA):**\nThe primary root cause was an internal capacitor breakdown within Power Supply Unit 2 (PSU-2), which produced a power surge that tripped the thermal protection sensor of PSU-1. The automatic hardware failover failed because PSU-1 drew excessive thermal load due to dust accumulation in the secondary fan chassis.\n\n**4. Corrective and Preventive Actions (CAPA):**\n1. Replaced both faulty power supply modules with genuine OEM redundant units.\n2. Implemented active dual-bus UPS power feeds (Feed A from Online UPS-1, Feed B from Online UPS-2).\n3. Scheduled bi-weekly physical air-flow and temperature inspections across all core distribution racks.\n4. Configured SNMP trap alerting for switch fan RPM and PSU thermal fluctuations.\n\n**Submitted by:**\n*(Signature)*\nSub-Assistant Maintenance Engineer\nDepartment of Immigration and Passports",
    points_to_remember: [
      "An Incident Report must have standard headings: Executive Summary, Timeline, Root Cause Analysis (RCA), and Corrective & Preventive Actions (CAPA)."
    ],
    tags: ["incident_report", "technical_writing", "networking"]
  },
  {
    id: 3021,
    subject: "ইংরেজি",
    topic: "Formal Application Drafting",
    question: "Draft a formal official application to the Director General of the Department of Immigration & Passports requesting budget allocation and technical approval for procuring 10 units of Online UPS and redundant air conditioning systems for regional server rooms.",
    marks: 8,
    answer: "Formal Application:\n\nOctober 23, 2026\n\nTo\nThe Director General\nDepartment of Immigration and Passports\nAgargaon, Dhaka-1207.\n\n**Subject: Application for administrative and financial sanction to procure 10 units of Online UPS and precision air conditioning units for regional server rooms.**\n\nSir,\n\nI have the honor to submit that the regional passport offices at Chittagong, Sylhet, Rajshahi, and Khulna are handling an unprecedented volume of biometric passport enrollments and daily database sync operations. The server rooms at these vital regional hubs house critical rack servers, core switches, and biometric storage arrays that operate on a 24/7/365 basis.\n\nDuring recent technical performance audits, it was observed that frequent commercial power grid fluctuations and extreme summer ambient temperatures have caused repeated server thermal throttling and damaged several SMPS units. The existing offline backup units are inadequate to sustain server uptime during prolonged power cuts.\n\nTo safeguard these critical IT assets, prevent catastrophic hardware burnouts, and ensure uninterrupted citizen services, it is urgently imperative to install:\n1. 10 units of 6 KVA True Online Double-Conversion UPS (with 2-hour battery backup).\n2. Dual-redundant 2-ton inverter Precision Air Conditioning units with automatic temperature alternation controllers.\n\nA detailed technical specification sheet and an estimated budget of BDT 35,00,000 (Thirty-Five Lakh Taka only) have been prepared in compliance with the Public Procurement Rules (PPR-2008) and are attached herewith for your kind consideration.\n\nIn view of the above, I earnestly request your kind administrative approval and necessary financial allocation for the expeditious procurement and installation of the aforementioned equipment.\n\nYours obediently,\n\n*(Signature)*\n**(Engr. Md. Shakil Hossain)**\nSub-Assistant Maintenance Engineer\nCentral Maintenance & Electrical Division\nDepartment of Immigration and Passports, Dhaka.",
    points_to_remember: [
      "Official applications to high-ranking government officials must maintain respectful, clear, and professional administrative language."
    ],
    tags: ["official_application", "formal_writing", "english_written"]
  },
  {
    id: 3022,
    subject: "ইংরেজি",
    topic: "Précis Writing",
    question: "Write a précis of the following passage to approximately one-third of its original length and suggest an appropriate title:\n\n\"The widespread deployment of electronic government services has radically altered citizen expectations across the developing world. In the past, obtaining basic civic documents—such as birth certificates, trade licenses, land deeds, and passports—demanded physical travel, standing in agonizingly long queues, navigating opaque administrative layers, and frequently submitting to the corrupt demands of intermediaries. Today, online portals and centralized biometric repositories allow citizens to initiate applications from mobile devices, track processing statuses in real time, and make direct digital fee payments without bureaucratic friction. However, this transformation remains profoundly uneven. A substantial segment of the population, particularly rural elders, illiterate laborers, and marginalized communities, lacks access to broadband connectivity, digital literacy, and smartphone interfaces. If public administrations digitize procedures without establishing physical assisted-service touchpoints, e-governance risks alienating the very citizens who stand in greatest need of social inclusion and state protection.\"",
    marks: 8,
    answer: "Précis Solution:\n\n**Title: The Promise and Peril of Digital Public Services**\n\n**Précis:**\nElectronic governance has revolutionized public service delivery by eliminating cumbersome queues, bureaucratic delays, and intermediary exploitation through online applications, real-time tracking, and digital payments. Nevertheless, digital illiteracy and inadequate internet access among rural and disadvantaged populations create a severe digital divide. Unless governments provide accessible, assisted service centers alongside automation, digital transformation threatens to marginalize vulnerable citizens rather than empowering them.\n\n*(Word count: 64 words; Original passage: 172 words)*",
    points_to_remember: [
      "Précis must be approximately one-third of original length (between 30% and 35%).",
      "Avoid personal opinions; maintain objective third-person reporting style."
    ],
    tags: ["precis_writing", "english_written"]
  },
  {
    id: 3023,
    subject: "ইংরেজি",
    topic: "Focus Essay Writing",
    question: "Write a comprehensive analytical Focus Essay on:\n\"The Role of Cloud Computing and Data Sovereignty in Digital Governance\". (Include: Introduction, Benefits of Cloud for Public Sector, Concept of Data Sovereignty & National Security, Cybersecurity Implications, Bangladesh Perspective, Conclusion).",
    marks: 10,
    answer: "Focus Essay:\n\n**The Role of Cloud Computing and Data Sovereignty in Digital Governance**\n\n**1. Introduction:**\nIn an era defined by rapid technological acceleration, governments worldwide are migrating legacy administrative systems to modern cloud infrastructures. Cloud computing offers unprecedented scalability, cost efficiency, and real-time accessibility. However, as public institutions transition sensitive citizen information, tax registries, and biometric databases to virtualized platforms, the concept of 'Data Sovereignty' has emerged as an indispensable cornerstone of national security and digital sovereignty.\n\n**2. Transformative Benefits of Cloud Computing for the Public Sector:**\nTraditional on-premise government data centers face recurring hardware obsolescence, high capital expenditures, and rigid scaling limitations. Cloud computing resolves these bottlenecks by offering elastic computing power, high availability (99.99%), automated disaster recovery, and seamless inter-agency data interoperability. Cloud-hosted citizen portals allow millions of concurrent users to apply for e-passports, National Identity Cards, and utility services without system crashes during peak traffic hours.\n\n**3. The Crucial Concept of Data Sovereignty:**\nData sovereignty dictates that digital data is subject to the laws, legal frameworks, and jurisdictional authority of the nation where it is generated and collected. In an interconnected geopolitical environment, hosting national biometric or immigration records on foreign cloud servers exposes a sovereign state to foreign legal subpoenas (e.g., the US CLOUD Act), international espionage, and arbitrary service cutoffs during diplomatic disputes. Therefore, maintaining strict jurisdictional control over sovereign data is as critical as defending physical borders.\n\n**4. Cybersecurity Challenges and Defense In Depth:**\nWhile cloud providers offer robust physical security, shared-responsibility security models require government IT administrations to safeguard data encryption, access privileges, and API configurations. Major risks include multi-tenant data leaks, advanced persistent threats (APTs), and ransomware intrusions. To counter these vulnerabilities, digital governance frameworks must mandate zero-trust architecture, hardware-based key management (HSMs), and end-to-end data encryption both at rest and in transit.\n\n**5. The Bangladesh Perspective & Future Trajectory:**\nBangladesh has undertaken landmark initiatives, notably the establishment of the National Data Center (NDC) at Kaliakair, Gazipur—a Tier-IV certified facility ensuring sovereign government data hosting. As the country advances toward 'Smart Bangladesh 2041', government agencies like the Department of Immigration and Passports must leverage hybrid sovereign government clouds (G-Cloud). This guarantees that while modern microservices enjoy cloud agility, citizen biometrics and sovereign intelligence remain strictly on Bangladeshi soil.\n\n**6. Conclusion:**\nCloud computing is the indispensable engine powering modern, agile e-governance. However, technological convenience must never eclipse national independence. By harmonizing cloud innovation with uncompromising data sovereignty laws, Bangladesh can build a resilient, trustworthy, and impenetrable digital nation.",
    points_to_remember: [
      "A Focus Essay should be structured with numbered or bold analytical headings.",
      "Incorporate technical terms like Tier-IV, G-Cloud, Zero-Trust, and US CLOUD Act for superior marks."
    ],
    tags: ["focus_essay", "cloud_computing", "data_sovereignty"]
  },
  {
    id: 3024,
    subject: "ইংরেজি",
    topic: "Focus Essay Writing",
    question: "Write an analytical Focus Essay on:\n\"Cybersecurity Challenges for Public Critical Information Infrastructures (CII) in Bangladesh\". (Include: Definition of CII, Specific Cyber Threats, Case Study of Immigration & National ID, Mitigation Strategies, Conclusion).",
    marks: 10,
    answer: "Focus Essay:\n\n**Cybersecurity Challenges for Public Critical Information Infrastructures (CII) in Bangladesh**\n\n**1. Introduction & Definition of CII:**\nCritical Information Infrastructure (CII) refers to computerized networks, software systems, and data repositories whose disruption, degradation, or destruction would inflict catastrophic consequences on national security, public health, economic stability, or state sovereignty. Under Bangladesh's Cyber Security Act, vital entities—including the Department of Immigration and Passports, the Election Commission NID system, Bangladesh Bank, power grid controllers (SCADA), and telecom backbones—are designated as protected CIIs.\n\n**2. Specific Cyber Threats Confronting Public CIIs:**\nModern public cyber infrastructures are relentless targets of diverse, highly organized threat actors:\n• **Ransomware & Malware Intrusions:** Sophisticated malware engineered to encrypt core databases and extort public institutions.\n• **State-Sponsored Advanced Persistent Threats (APTs):** Stealthy, well-funded foreign intelligence groups attempting long-term espionage in defense and immigration databases.\n• **Distributed Denial of Service (DDoS):** Massive volumetric traffic assaults aimed at crippling e-visa and online passport application portals.\n• **Insider Threats & Social Engineering:** Breaches facilitated by compromised administrative credentials, spear-phishing, or disgruntled employees.\n\n**3. Case Study: Immigration, Passport & National ID Systems:**\nThe Department of Immigration and Passports manages one of the largest biometric databases in South Asia, containing facial templates, fingerprints, and iris scans of over 30 million citizens. A compromise in this infrastructure would undermine visa-free travel privileges, facilitate identity cloning, and compromise international border checkpoints. The 2016 Bangladesh Bank cyber heist remains a sobering historical reminder of the high stakes involved in safeguarding CII assets.\n\n**4. Multi-Layered Mitigation Strategies:**\nSecuring public CIIs demands an aggressive, defense-in-depth posture:\n1. **Zero-Trust Network Architecture (ZTNA):** Enforcing micro-segmentation where no user or device is trusted by default, regardless of whether they connect from inside or outside the office perimeter.\n2. **Security Operations Center (SOC) & SIEM:** Continuous 24/7/365 monitoring using AI-driven Security Information and Event Management (SIEM) tools to detect anomalous traffic.\n3. **Air-Gapped Systems & HSMs:** Storing cryptographic root signing keys and core biometric archives in air-gapped hardware security modules disconnected from public internet nodes.\n4. **Workforce Capability Building:** Regular red-team/blue-team penetration testing and rigorous cyber hygiene training for technical personnel.\n\n**5. Conclusion:**\nSafeguarding Critical Information Infrastructures is not merely a technical support task; it is an existential imperative for sovereign statehood. Through proactive investments in cutting-edge defense technologies, robust regulatory compliance, and skilled engineering personnel, Bangladesh can build an unassailable cyber defense fortress.",
    points_to_remember: [
      "Cite the 29 declared CII institutions in Bangladesh under the Cyber Security Act.",
      "Distinguish between IT security and CII defense."
    ],
    tags: ["focus_essay", "cyber_security", "cii_infrastructure"]
  },
  {
    id: 3025,
    subject: "ইংরেজি",
    topic: "Vocabulary & Contextual Usage",
    question: "Provide the precise meaning and a contextual sentence for each of the following words:\n(a) Ephemeral\n(b) Pragmatic\n(c) Resilient\n(d) Mitigate\n(e) Ubiquitous\n(f) Redundant",
    marks: 6,
    answer: "Vocabulary Analysis and Usage:\n\n(a) **Ephemeral** (Lasting for a very short time / Transitory):\n*Sentence:* The speed boost achieved by clearing the browser cache was ephemeral, as memory usage escalated again within minutes.\n\n(b) **Pragmatic** (Dealing with problems in a practical, realistic way):\n*Sentence:* The maintenance engineer took a pragmatic approach by installing an interim backup generator while awaiting the main power grid repairs.\n\n(c) **Resilient** (Able to withstand or recover quickly from difficult conditions):\n*Sentence:* The new microservices architecture is remarkably resilient, ensuring that a database failure in one regional office does not crash the central passport portal.\n\n(d) **Mitigate** (To make something bad less severe, serious, or painful):\n*Sentence:* Deploying hardware firewalls helped mitigate the risk of distributed denial-of-service (DDoS) attacks against the government server.\n\n(e) **Ubiquitous** (Present, appearing, or found everywhere):\n*Sentence:* Optical barcode and QR code scanners have become ubiquitous across all modern international airport departure gates.\n\n(f) **Redundant** (Exceeding what is strictly necessary; functioning as a duplicate for safety):\n*Sentence:* The data center was configured with redundant power supplies and twin fiber-optic uplinks to eliminate any single point of failure.",
    points_to_remember: [
      "In technical and administrative writing, 'redundant' often has a positive meaning (safety backup / fault tolerance), rather than superfluous."
    ],
    tags: ["vocabulary", "contextual_usage", "english_written"]
  }
];

const updatedData = [...currentData, ...newQuestions];
fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
console.log(`Successfully appended 15 new questions! Total english written questions: ${updatedData.length}`);
