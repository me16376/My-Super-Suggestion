const fs = require('fs');
const path = require('path');

const englishWrittenPath = path.join(__dirname, '..', 'data', 'written', 'english_written.json');
const currentQuestions = JSON.parse(fs.readFileSync(englishWrittenPath, 'utf8'));

const newQuestions = [
  {
    "id": 3051,
    "subject": "ইংরেজি",
    "topic": "English Grammar & Phrasal Verbs",
    "question": "Construct professional sentences using the following phrasal verbs, illustrating their precise contextual meaning:\n(a) Call for\n(b) Call off\n(c) Look into\n(d) Put up with\n(e) Bring about\n(f) Carry out\n(g) Turn down\n(h) Set up",
    "marks": 8,
    "answer": "Phrasal Verbs Solution:\n\n(a) **Call for** (To demand, require, or necessitate):\n*Sentence:* The sudden server breach calls for an immediate forensic audit of all firewall access logs.\n\n(b) **Call off** (To cancel an event or operation):\n*Sentence:* Due to severe power grid instability, the director decided to call off the scheduled weekend database migration.\n\n(c) **Look into** (To investigate or examine facts):\n*Sentence:* A three-member technical committee was formed to look into the recurring hardware failure of the biometric enrollment scanners.\n\n(d) **Put up with** (To tolerate or endure an unpleasant situation):\n*Sentence:* The passport delivery department can no longer put up with frequent software crashes during peak service hours.\n\n(e) **Bring about** (To cause something to happen):\n*Sentence:* The introduction of automated e-Gates brought about a monumental reduction in airport immigration processing times.\n\n(f) **Carry out** (To execute or perform a task or order):\n*Sentence:* The maintenance engineer must carry out routine diagnostic inspections on all online UPS battery banks.\n\n(g) **Turn down** (To reject or refuse an offer, request, or application):\n*Sentence:* The procurement committee had to turn down the vendor's bid because it failed to comply with the mandatory ICAO Doc 9303 specifications.\n\n(h) **Set up** (To establish, configure, or assemble):\n*Sentence:* The ICT team worked overnight to set up an interim disaster recovery data repository in Kaliakair.",
    "points_to_remember": [
      "'Call for' = demand; 'Look into' = investigate; 'Put up with' = tolerate.",
      "Ensure formal and administrative contexts in sentence creation."
    ],
    "tags": ["phrasal_verbs", "english_grammar", "vocabulary"]
  },
  {
    "id": 3052,
    "subject": "ইংরেজি",
    "topic": "English Grammar & Inversion",
    "question": "Rewrite the following sentences by using Negative Inversion for stylistic emphasis:\n(a) The maintenance team has rarely seen such an intricate network loop.\n(b) The server crashed no sooner than the automated backup initiated.\n(c) The administrator seldom logged into the database without multi-factor authentication.\n(d) We realized that the optical cable was severed only then.\n(e) He not only configured the primary firewall, but he also fortified the DMZ subnets.\n(f) The system will never accept fraudulent biometric submissions under any circumstance.",
    "marks": 6,
    "answer": "Negative Inversion Solution:\n\n(a) The maintenance team has rarely seen such an intricate network loop.\n$\\rightarrow$ **Inversion:** **Rarely has the maintenance team seen** such an intricate network loop.\n\n(b) The server crashed no sooner than the automated backup initiated.\n$\\rightarrow$ **Inversion:** **No sooner had the automated backup initiated than** the server crashed.\n\n(c) The administrator seldom logged into the database without multi-factor authentication.\n$\\rightarrow$ **Inversion:** **Seldom did the administrator log** into the database without multi-factor authentication.\n\n(d) We realized that the optical cable was severed only then.\n$\\rightarrow$ **Inversion:** **Only then did we realize** that the optical cable was severed.\n\n(e) He not only configured the primary firewall, but he also fortified the DMZ subnets.\n$\\rightarrow$ **Inversion:** **Not only did he configure** the primary firewall, but he also fortified the DMZ subnets.\n\n(f) The system will never accept fraudulent biometric submissions under any circumstance.\n$\\rightarrow$ **Inversion:** **Under no circumstance will the system accept** fraudulent biometric submissions.",
    "points_to_remember": [
      "In negative inversion: Negative word + Auxiliary verb + Subject + Main verb.",
      "Demonstrating inversion in competitive exams scores top grammatical marks."
    ],
    "tags": ["inversion", "stylistic_grammar", "english_written"]
  },
  {
    "id": 3053,
    "subject": "ইংরেজি",
    "topic": "English Grammar & Error Identification",
    "question": "Correct the structural and grammatical errors in each of the following sentences:\n(a) Having analyzed the log files, the hardware error was resolved by the technician.\n(b) The database administrator is responsible for monitoring traffic, patching vulnerabilities, and to maintain backups.\n(c) Every applicant must submit their biometric records at counter four.\n(d) The system crashed because the power failed, however the UPS failed to switch over.\n(e) More faster processors are required to handle millions of daily e-Passport queries.\n(f) He insisted on me attending the emergency network briefing.",
    "marks": 6,
    "answer": "Error Correction Solution:\n\n(a) Incorrect (Dangling Modifier): Having analyzed the log files, the hardware error was resolved by the technician.\n**Correct:** **Having analyzed the log files, the technician resolved** the hardware error.\n*Reason:* The participial phrase must modify the actual subject performing the action ('the technician', not 'the hardware error').\n\n(b) Incorrect (Faulty Parallelism): ...monitoring traffic, patching vulnerabilities, and to maintain backups.\n**Correct:** The database administrator is responsible for monitoring traffic, patching vulnerabilities, and **maintaining** backups.\n*Reason:* Parallel grammatical structures require consistent gerund forms (-ing).\n\n(c) Incorrect (Pronoun Agreement): Every applicant must submit their biometric records...\n**Correct:** Every applicant must submit **his or her** biometric records at counter four. (or: **All applicants must submit their** biometric records...)\n*Reason:* 'Every applicant' is a singular distributive subject.\n\n(d) Incorrect (Run-on / Comma Splice): ...because the power failed, however the UPS...\n**Correct:** The system crashed because the power failed; **however, the UPS** failed to switch over. (or: ...failed. However, the UPS...)\n*Reason:* Conjunctive adverbs ('however') must be preceded by a semicolon or period.\n\n(e) Incorrect (Double Comparative): More faster processors...\n**Correct:** **Faster processors** (or: Significantly faster processors) are required...\n*Reason:* 'Faster' is already comparative; using 'more' is a double comparative error.\n\n(f) Incorrect (Gerund Object): He insisted on me attending...\n**Correct:** He insisted on **my attending** the emergency network briefing.\n*Reason:* A gerund ('attending') requires a possessive adjective ('my') before it.",
    "points_to_remember": [
      "Dangling modifiers occur when the introductory participial phrase lacks a logical subject.",
      "Gerunds are preceded by possessive pronouns (my, his, her, their)."
    ],
    "tags": ["error_correction", "parallelism", "dangling_modifier", "grammar"]
  },
  {
    "id": 3054,
    "subject": "ইংরেজি",
    "topic": "English Grammar & Sentence Transformation",
    "question": "Transform the following sentences as directed:\n(a) Only the authorized system administrator can reset the root password. (Make it Negative)\n(b) As soon as the lightning struck the transformer, the core switch shut down. (Make it Negative using 'Hardly had...when')\n(c) May you succeed in the BPSC Non-Cadre examination. (Identify the Sentence Type)\n(d) How beautiful the national data center looks at night! (Make it Assertive)\n(e) We know that the Department of Immigration and Passports provides smart services. (Change the Voice into Passive)\n(f) He worked hard so that he could configure the server correctly. (Make it Simple)",
    "marks": 6,
    "answer": "Sentence Transformation Solution:\n\n(a) Only the authorized system administrator can reset the root password.\n$\\rightarrow$ **Negative:** **None but** the authorized system administrator can reset the root password.\n\n(b) As soon as the lightning struck the transformer, the core switch shut down.\n$\\rightarrow$ **Negative:** **Hardly had the lightning struck the transformer when** the core switch shut down.\n\n(c) \"May you succeed in the BPSC Non-Cadre examination.\"\n$\\rightarrow$ **Sentence Type:** **Optative Sentence** (expresses a prayer, wish, or benediction).\n\n(d) How beautiful the national data center looks at night!\n$\\rightarrow$ **Assertive:** **The national data center looks very beautiful at night.**\n\n(e) We know that the Department of Immigration and Passports provides smart services.\n$\\rightarrow$ **Passive:** **It is known to us that smart services are provided by the Department of Immigration and Passports.**\n\n(f) He worked hard so that he could configure the server correctly.\n$\\rightarrow$ **Simple:** **He worked hard to configure the server correctly.** (or: ...in order to configure the server correctly).",
    "points_to_remember": [
      "'Only' with persons becomes 'None but'.",
      "'Hardly had + V3 ... when + V2'.",
      "Optative sentences express wishes and prayers."
    ],
    "tags": ["transformation", "negative_sentences", "voice_change"]
  },
  {
    "id": 3055,
    "subject": "ইংরেজি",
    "topic": "Official Incident Report & Security Investigation",
    "question": "Draft an official Security Incident Investigation Report to the Director General concerning an unauthorized physical access attempt at the Central Server Room after regular office hours, utilizing CCTV footage analysis and electronic badge door access logs.",
    "marks": 9,
    "answer": "Official Security Incident Investigation Report:\n\n**CONFIDENTIAL & RESTRICTED**  \n**INCIDENT REPORT REF:** DIP/SEC-INV/2026-10-88  \n**DATE:** 23 October 2026  \n\n**TO:**  \nThe Director General  \nDepartment of Immigration and Passports  \nE-7 Agargaon, Dhaka-1207.  \n\n**SUBJECT: INVESTIGATION REPORT ON UNAUTHORIZED PHYSICAL ACCESS ATTEMPT AT CENTRAL SERVER ROOM (ZONE-A)**  \n\n**1. INCIDENT OVERVIEW:**  \nOn the night of 22 October 2026 at 21:42 hours, an unauthorized entry attempt was recorded at the biometric magnetic access door of Central Server Room (Zone-A). The automated security controller triggered a silent alarm to the Security Operations Center (SOC). Immediate intervention by the on-duty maintenance engineer and security guards prevented any physical breach.\n\n**2. FORENSIC & LOG FINDINGS:**  \n• **Electronic Badge Access Log:** At 21:42:15, a deactivated RFID proximity badge (Card ID #DIP-CL-0412, formerly issued to a contractual cleaning supervisor whose tenure expired on 30 September 2026) was swiped three times consecutively at the biometric door reader. The access controller recorded 'Access Denied: Invalid Credential'.  \n• **High-Definition CCTV Footage Analysis:** Optical surveillance camera (CAM-SR-02) captured an unidentified individual wearing a maintenance jumpsuit attempting to forcefully manipulate the door latch handle following badge rejection. Upon the sounding of the perimeter buzzer, the suspect fled toward the basement staircase exit.  \n• **Hardware & Data Verification:** A thorough physical audit confirmed all server racks, SAN storage arrays, and cryptographic HSM modules remained locked and untampered. Network telemetry confirmed zero internal data exfiltration.\n\n**3. CORRECTIVE ACTIONS & RECOMMENDATIONS:**  \n1. **Immediate Credential Invalidation:** Conduct a comprehensive Active Directory and physical access card database audit to purge all expired vendor and contractual credentials.  \n2. **Two-Factor Door Interlock:** Upgrade Server Room access from single-factor RFID cards to multi-factor authentication requiring biometric fingerprint verification alongside the smart card.  \n3. **Legal Redress:** Forward CCTV footage and timestamp logs to law enforcement agencies for suspect tracing and formal prosecution under the Cyber Security Act.\n\n**INVESTIGATING OFFICER:**  \n(Signature)  \n(Engr. Md. Ashraful Alam)  \nSub-Assistant Maintenance Engineer (Security & Infrastructure)  \nDepartment of Immigration and Passports.",
    "points_to_remember": [
      "Include precise timestamps, badge IDs, CCTV camera codes, and concrete security recommendations."
    ],
    "tags": ["security_report", "incident_investigation", "official_drafting", "cctv_audit"]
  },
  {
    "id": 3056,
    "subject": "ইংরেজি",
    "topic": "Official Drafting & Legal Tender Notice",
    "question": "Draft an official 'Tender Disqualification and Blacklisting Show-Cause Notice' from the Department of Immigration and Passports to a vendor for supplying counterfeit NVMe Solid State Drives (SSDs) under a public e-GP procurement contract.",
    "marks": 8,
    "answer": "Official Tender Disqualification & Show-Cause Notice:\n\nGOVERNMENT OF THE PEOPLE'S REPUBLIC OF BANGLADESH\nDEPARTMENT OF IMMIGRATION AND PASSPORTS\nOFFICE OF THE SUPERINTENDING ENGINEER & HEAD OF PROCUREMENT\nE-7 Agargaon, Dhaka-1207\n\nMemo No: 44.01.0000.405.14.022.26-615\nDate: 23 October 2026\n\nTo:\nThe Managing Director\nNexTech Solutions & Distribution Ltd.\nLevel-5, BCS Computer City, Agargaon, Dhaka.\n\nSUBJECT: SHOW-CAUSE NOTICE: SUPPLY OF COUNTERFEIT NVMe SOLID STATE DRIVES UNDER E-GP TENDER ID: 948215 AND PROPOSED BLACKLISTING\n\nDear Sir,\n\nYou are hereby notified that under Public e-GP Tender ID: 948215 (Package: Supply of High-Speed Enterprise Storage Drives for e-Passport Database Kiosks), your firm delivered one hundred (100) units of purported 'Samsung PM9A3 Enterprise 3.84TB NVMe SSDs' on 18 October 2026.\n\n2. During the mandatory pre-commissioning testing conducted by our Technical Evaluation and Inspection Committee, the following fraudulent discrepancies were uncovered:\n   (a) The storage drives failed SMART diagnostic integrity checks, displaying fake controller firmware and counterfeit serial labels.\n   (b) Benchmark throughput revealed sequential read speeds of barely 450 MB/s instead of the mandatory PCIe Gen4 specification of 6,500 MB/s.\n   (c) Formal manufacturer serial validation confirmed that the supplied drives are unauthorized counterfeit consumer modules relabeled as enterprise hardware.\n\n3. Supplying counterfeit hardware for a Critical Information Infrastructure constitutes fraudulent practice and a grave breach of Rule 127 of the Public Procurement Rules (PPR-2008).\n\n4. You are hereby directed to show cause in writing within **seven (07) calendar days** from the receipt of this notice as to why your firm should not be disqualified, your Performance Security (BDT 1,200,000/-) forfeited, and your business entity permanently blacklisted from participating in all future public procurement across Bangladesh.\n\nYours faithfully,\n\n(Signature)\n(Engr. Farid Uddin Ahmed)\nSuperintending Engineer & Chairman, Technical Inspection Committee\nDepartment of Immigration and Passports\nEmail: se.procure@dip.gov.bd",
    "points_to_remember": [
      "Cite relevant procurement laws (Rule 127 of PPR-2008) and technical forensic evidence (SMART logs, throughput deficits)."
    ],
    "tags": ["show_cause_notice", "blacklisting", "procurement", "english_drafting"]
  },
  {
    "id": 3057,
    "subject": "ইংরেজি",
    "topic": "Bangla to English Translation",
    "question": "Translate the following passage into professional, sophisticated English:\n\"বিগত এক দশকে বাংলাদেশের অর্থনীতিতে তথ্যপ্রযুক্তি খাতের অভাবনীয় বিস্তার ঘটেছে। একসময় যা ছিল কেবল স্বপ্ন, আজ তা কোটি নাগরিকের হাতের মুঠোয় দৃশ্যমান বাস্তবতা। জাতীয় পরিচয়পত্র, ই-পাসপোর্ট, জমির ডিজিটাল খতিয়ান এবং মোবাইল ব্যাংকিংয়ের মাধ্যমে তৃণমূল পর্যায়ে সরকারি সেবার বিকেন্দ্রীকরণ সম্পন্ন হয়েছে। এই ডিজিটাল রূপান্তর কেবল কর্মসংস্থান ও বৈদেশিক মুদ্রা আয়ের নতুন দিগন্তই উন্মোচন করেনি, বরং বৈশ্বিক প্রযুক্তি মানচিত্রে বাংলাদেশকে একটি আত্মমর্যাদাশীল ও সম্ভাবনাময় প্রযুক্তি হাব হিসেবে প্রতিষ্ঠিত করেছে।\"",
    "marks": 8,
    "answer": "Professional English Translation:\n\n\"Over the past decade, Bangladesh's economy has witnessed an extraordinary expansion across the information technology sector. What was once a distant aspiration has today evolved into a tangible reality within the grasp of millions of citizens. Through the deployment of smart National Identity cards, biometric e-passports, digitized land records, and mobile financial services, the decentralization of public services has reached the grassroots level. This digital transformation has not only unlocked dynamic frontiers for youth employment and foreign remittance earnings, but has also firmly established Bangladesh as a dignified, high-potential technology hub on the global innovation landscape.\"",
    "points_to_remember": [
      "'Witnessed an extraordinary expansion' translates 'অভাবনীয় বিস্তার ঘটেছে'।",
      "'Tangible reality within the grasp' for 'হাতের মুঠোয় দৃশ্যমান বাস্তবতা'।",
      "'Decentralization of public services' for 'সরকারি সেবার বিকেন্দ্রীকরণ'।",
      "'Grassroots level' for 'তৃণমূল পর্যায়ে'।"
    ],
    "tags": ["translation", "bangla_to_english", "written_english"]
  },
  {
    "id": 3058,
    "subject": "ইংরেজি",
    "topic": "English to Bangla Translation",
    "question": "Translate the following analytical text into natural, expressive Bengali:\n\"Sustainable green computing has transitioned from an environmental luxury to an urgent economic necessity for enterprise data centers. Modern cloud facilities consume staggering amounts of electrical power, primarily driven by compute clusters and continuous refrigeration chillers. By adopting hot-aisle containment, high-efficiency liquid immersion cooling, and transitioning to on-site solar photovoltaic energy, public institutions can drastically reduce their Power Usage Effectiveness (PUE) metrics while safeguarding sovereign digital records against escalating utility costs.\"",
    "marks": 8,
    "answer": "বাংলায় প্রাঞ্জল ভাবানুবাদ:\n\n\"পরিবেশবান্ধব টেকসই গ্রিন কম্পিউটিং আজ নিছক কোনো বিলাসী পরিবেশবাদী ধারণা নয়, বরং করপোরেট ডেটাসেন্টারগুলোর জন্য এক অত্যন্ত জরুরি অর্থনৈতিক প্রয়োজনীয়তায় রূপ নিয়েছে। আধুনিক ক্লাউড অবকাঠামোগুলো বিপুল পরিমাণ বিদ্যুৎ শক্তি গ্রাস করে, যার প্রধান কারণ হাই-পারফরম্যান্স সার্ভার ক্লাস্টার চালানো এবং নিরবচ্ছিন্ন চিলার দিয়ে সেগুলো ঠান্ডা রাখা। সার্ভার রুমে হট-আইল কনটেইনমেন্ট পদ্ধতি চালু, অত্যন্ত দক্ষ তরল নিমজ্জন কুলিং (Liquid Immersion Cooling) গ্রহণ এবং অন-সাইট সৌর প্যানেল ব্যবহারের মাধ্যমে সরকারি প্রতিষ্ঠানগুলো তাদের পাওয়ার ইউসেজ ইফেক্টিভনেস (PUE) সূচক উল্লেখযোগ্যভাবে কমিয়ে আনতে পারে; যার ফলে বিদ্যুৎ খরচের ক্রমাগত বৃদ্ধির ধাক্কা সামলে জাতীয় ডিজিটাল তথ্যভাণ্ডারকে নিরাপদে রাখা সম্ভব হবে।\"",
    "points_to_remember": [
      "'Hot-aisle containment' -> উষ্ণ-বাতাস নির্গমন রোধ পদ্ধতি।",
      "'Liquid immersion cooling' -> তরল নিমজ্জন কুলিং প্রযুক্তি।",
      "'PUE (Power Usage Effectiveness)' -> ডেটাসেন্টারের বিদ্যুৎ ব্যবহারের দক্ষতা পরিমাপক।"
    ],
    "tags": ["translation", "english_to_bangla", "green_computing"]
  },
  {
    "id": 3059,
    "subject": "ইংরেজি",
    "topic": "Précis Writing",
    "question": "Write a précis of the following passage in about one-third of its length and assign an appropriate title:\n\n\"The modern global economy is fundamentally reliant on semiconductor microchips, the tiny silicon wafers that power everything from household appliances and smartphones to advanced fighter aircraft and national biometric passport readers. However, the semiconductor supply chain represents one of the most fragile and highly concentrated industrial ecosystems in human history. The production of the most advanced microprocessors (sub-3 nanometer architecture) is concentrated predominantly in a single geographic hotspot—Taiwan—relying on ultra-precise extreme ultraviolet (EUV) photolithography machinery manufactured exclusively by a single Dutch company, ASML. Any military conflict in the Taiwan Strait, natural calamity, or diplomatic embargo could instantly paralyze global automotive assembly, halt server manufacturing, and trigger an unprecedented technological depression. Recognizing this existential vulnerability, global economic powers are currently investing hundreds of billions of dollars into sovereign semiconductor manufacturing initiatives, aiming to re-shore silicon fabrication and safeguard their technological independence against future geopolitical shocks.\"",
    "marks": 8,
    "answer": "Précis Solution:\n\n**Title: The Fragility and Geopolitics of the Global Semiconductor Supply Chain**\n\n**Précis:**\nMicrochips are the vital foundation of modern industry, powering consumer devices and defense technologies alike. However, extreme manufacturing concentration—primarily in Taiwan and dependent on exclusive Dutch lithography—makes the global semiconductor supply chain dangerously fragile. Geopolitical conflicts or disasters could trigger catastrophic worldwide technological collapse, prompting global superpowers to invest billions in domestic silicon fabrication to secure sovereign resilience.\n\n*(Word count: 61 words; Original passage: 164 words)*",
    "points_to_remember": [
      "Preserve the central argument: the global dependency and acute geographic concentration of microchip production.",
      "Title should encapsulate both technology and geopolitics."
    ],
    "tags": ["precis_writing", "semiconductors", "supply_chain", "english_written"]
  },
  {
    "id": 3060,
    "subject": "ইংরেজি",
    "topic": "Reading Comprehension & Technical Analysis",
    "question": "Read the following technical passage and answer the questions in concise, analytical sentences:\n\n\"In decentralized public registries, balancing biometric identity validation with citizen privacy has long posed a cryptographic paradox. Traditional authentication models require citizens to share their raw biometric credentials—such as high-resolution fingerprints or facial templates—with remote database servers, leaving private records susceptible to interception and insider exfiltration. Zero-Knowledge Proofs (ZKP), particularly Non-Interactive Zero-Knowledge Arguments of Knowledge (zk-SNARKs), offer a revolutionary cryptographic resolution to this dilemma. A zero-knowledge proof enables a 'Prover' to mathematically demonstrate to a 'Verifier' that a specific statement is true, without disclosing any underlying confidential information whatsoever. In modern e-Passport and border management architectures, a traveler can prove to an automated e-Gate that they possess a valid, government-certified passport and are over eighteen years old, without revealing their identity card number, exact date of birth, or raw biometric hashes. By decoupling proof of authenticity from the exposure of raw personal data, ZKP establishes an impenetrable paradigm for privacy-preserving digital citizenship.\"\n\n**Questions:**\n(a) What fundamental vulnerability exists in traditional biometric authentication models?\n(b) Explain the core mathematical principle of a Zero-Knowledge Proof (ZKP).\n(c) How can an automated e-Gate utilize ZKP to verify an applicant's travel eligibility while protecting their privacy?\n(d) Provide an antonym for 'Susceptible' and a synonym for 'Decoupling'.",
    "marks": 8,
    "answer": "Comprehension Answers:\n\n(a) Traditional models require users to transmit raw biometric records (such as fingerprints or facial images) across remote servers, leaving sensitive personal data vulnerable to network interception, server compromise, and insider theft.\n\n(b) The core mathematical principle of a Zero-Knowledge Proof (ZKP) allows a prover to prove to a verifier that a statement is mathematically true without disclosing any of the underlying confidential data itself.\n\n(c) An e-Gate using ZKP can confirm that a traveler possesses an authentic government passport and satisfies specific age thresholds (e.g., over 18) through cryptographic proof, without requiring the passenger to reveal their raw date of birth, passport number, or biometric templates.\n\n(d) **Vocabulary:**\n• **Antonym of 'Susceptible':** Immune, resistant, invulnerable, protected.\n• **Synonym of 'Decoupling':** Disconnecting, separating, dissociating, detaching.",
    "points_to_remember": [
      "Zero-Knowledge Proofs allow proving truth without exposing secrets.",
      "Answer in complete, grammatically sound prose."
    ],
    "tags": ["comprehension", "zkp", "cryptography", "biometrics", "english_written"]
  },
  {
    "id": 3061,
    "subject": "ইংরেজি",
    "topic": "Focus Essay Writing",
    "question": "Write a comprehensive Focus Essay on:\n\"Green Computing and Sustainable IT Architecture in Public Sector Administration\". (Include: Introduction, The Carbon Footprint of Government Data Centers, Core Pillars of Green Computing: Hardware, Software & Infrastructure, Economic and Environmental Dividends, Roadmap for Bangladesh, Conclusion).",
    "marks": 10,
    "answer": "Focus Essay:\n\n**Green Computing and Sustainable IT Architecture in Public Sector Administration**\n\n**1. Introduction:**\nAs governments worldwide accelerate digital governance to streamline public services, the exponential expansion of server farms, network backbones, and end-user hardware has introduced a critical environmental consequence: a soaring carbon and electronic waste footprint. 'Green Computing'—the practice of environmentally sustainable computing—has transitioned from an idealistic concept into an indispensable operational mandate for responsible public administration.\n\n**2. The Carbon Footprint of Public Data Centers:**\nPublic institutions host massive compute infrastructures to power electronic identity (NID), biometric passport issuance, and digital revenue collections. Traditional server facilities consume colossal amounts of electricity, with up to 40% of energy expended solely on cooling systems rather than computation. Furthermore, premature hardware retirements generate toxic e-waste containing lead, cadmium, and mercury, which contaminate groundwater ecosystems.\n\n**3. Core Pillars of Green Computing Architecture:**\nTransforming public IT into an eco-friendly engine requires interventions across three dimensions:\n1. **Hardware Efficiency:** Procuring Energy Star certified low-power processors, adopting solid-state storage (SSDs) which consume 70% less power than mechanical drives, and utilizing modular servers engineered for component-level upgrades rather than total chassis disposal.\n2. **Infrastructure Optimization:** Transitioning data centers to modern cooling architectures—such as hot-aisle containment and evaporative liquid cooling—alongside powering data centers through dedicated on-site solar arrays.\n3. **Software Virtualization:** Consolidating hundreds of underutilized physical servers into agile virtual machines and lightweight Docker containers, boosting average hardware utilization from 15% to over 80%.\n\n**4. Economic and Environmental Dividends:**\nGreen computing yields tangible economic benefits. Slashing power usage directly reduces public expenditure on electricity subsidies, freeing budget for citizen welfare. Environmentally, lowering carbon intensity aligns with national commitments under the Paris Climate Agreement and the Delta Plan 2100.\n\n**5. Roadmap for Bangladesh & Conclusion:**\nFor Bangladesh, building a sustainable 'Smart Bangladesh 2041' necessitates mandating green IT procurement guidelines across all government departments. Establishing certified e-waste recycling plants and designing Tier-IV data centers with sub-1.2 Power Usage Effectiveness (PUE) metrics will ensure that technological progress does not come at the expense of our ecological future. Green computing proves that technological excellence and environmental stewardship can harmoniously co-exist.",
    "points_to_remember": [
      "Detail the three pillars: Hardware, Infrastructure, and Software virtualization.",
      "Reference Power Usage Effectiveness (PUE) and Energy Star standards."
    ],
    "tags": ["focus_essay", "green_computing", "sustainability", "data_center"]
  },
  {
    "id": 3062,
    "subject": "ইংরেজি",
    "topic": "Focus Essay Writing",
    "question": "Write an analytical Focus Essay on:\n\"Public-Private Partnerships (PPP) in Modernizing Bangladesh's ICT Infrastructure\". (Include: Introduction, Rationale for PPP in Public Technology, Case Studies: e-Passport & Hi-Tech Parks, Risk Allocation & Governance Challenges, Policy Recommendations, Conclusion).",
    "marks": 10,
    "answer": "Focus Essay:\n\n**Public-Private Partnerships (PPP) in Modernizing Bangladesh's ICT Infrastructure**\n\n**1. Introduction:**\nThe modernization of national digital infrastructure demands massive capital investments, cutting-edge technical expertise, and rapid innovation cycles. Traditional government procurement models are frequently impeded by rigid bureaucratic delays and budgetary constraints. To overcome these limitations, Public-Private Partnerships (PPP) have emerged as a powerful governance mechanism to mobilize private capital and global technology expertise for public welfare.\n\n**2. Rationale for PPP in Public Technology:**\nUnlike static physical infrastructures (like bridges or highways), digital technologies evolve with breakneck velocity. Partnering with specialized private tech enterprises enables governments to:\n• Share technical and financial risks across the system lifecycle.\n• Procure state-of-the-art technological architectures without exorbitant upfront public treasury outlays.\n• Ensure continuous maintenance, software patching, and professional service level agreements (SLAs).\n\n**3. Case Studies: e-Passport System and National Hi-Tech Parks:**\n• **e-Passport Implementation:** Bangladesh's landmark transition to polycarbonate biometric e-passports was achieved through a successful government-to-government (G2G) partnership with Veridos GmbH (Germany). This partnership enabled the Department of Immigration and Passports to deploy state-of-the-art personalization centers and airport e-Gates with world-class German security technology, establishing national pride.\n• **High-Tech Parks:** The development of Kaliakair High-Tech City through private concessionaires has attracted international hardware manufacturers and software exporters, catalyzing high-skilled youth employment.\n\n**4. Risk Allocation and Governance Pitfalls:**\nWhile PPPs offer immense benefits, they present distinctive governance hazards:\n• **Vendor Lock-In:** Reliance on proprietary private software can leave public departments captive to escalating licensing fees.\n• **Data Privacy & Sovereignty Risks:** Partnering with international vendors necessitates strict legal firewalls to prevent private commercial access to sovereign biometric records.\n• **Opaque Concession Agreements:** Flawed financial modeling can lead to unanticipated public liabilities if projected citizen service volumes are not achieved.\n\n**5. Policy Recommendations & Conclusion:**\nTo optimize PPP outcomes, Bangladesh must enforce transparent competitive bidding under the PPP Authority, mandate open-source interoperability standards to avoid vendor capture, and maintain an uncompromising legal boundary protecting citizen data sovereignty. Structured prudently, Public-Private Partnerships provide the dynamic financial and technological bridge required to propel Bangladesh into the ranks of developed digital nations by 2041.",
    "points_to_remember": [
      "Highlight the Veridos e-Passport partnership as a prime practical case study.",
      "Address vendor lock-in and data sovereignty risks."
    ],
    "tags": ["focus_essay", "ppp", "ict_infrastructure", "epassport", "governance"]
  },
  {
    "id": 3063,
    "subject": "ইংরেজি",
    "topic": "Focus Essay Writing",
    "question": "Write an analytical Focus Essay on:\n\"Bridging the Rural-Urban Digital Divide: Equitable Access to Citizen Services in Bangladesh\". (Include: Introduction, Manifestations of the Digital Divide, Infrastructure Interventions: Info-Sarker & Union Digital Centers, Socio-Economic Empowerment of Marginalized Groups, Persistent Hurdles, Conclusion).",
    "marks": 10,
    "answer": "Focus Essay:\n\n**Bridging the Rural-Urban Digital Divide: Equitable Access to Citizen Services in Bangladesh**\n\n**1. Introduction:**\nDigital transformation is truly democratic only when its dividends reach the most vulnerable, remote, and disenfranchised segments of society. While urban centers enjoy high-speed fiber broadband and automated kiosks, rural communities frequently struggle with connectivity gaps, digital illiteracy, and economic disparity. Bridging this 'Digital Divide' is the defining moral and developmental imperative for Bangladesh's inclusive progress.\n\n**2. Manifestations of the Digital Divide:**\nThe digital divide operates across multiple interconnected tiers:\n• **The Physical Connectivity Gap:** Rural and char areas endure unstable electricity grids and reliance on patchy 3G/4G cellular connections.\n• **The Affordability Barrier:** The cost of modern smartphones, laptop computers, and data packages remains disproportionately high for marginal farming and wage-earning households.\n• **The Cognitive Literacy Divide:** Navigating complex online government portals and identity verification forms presents a formidable barrier for illiterate and elderly rural citizens.\n\n**3. Infrastructural Interventions: Info-Sarker & Union Digital Centers:**\nBangladesh has implemented world-renowned initiatives to democratize access:\n• **Info-Sarker Project (Phase I - III):** Extended high-speed optical fiber backbones down to over 4,500 Union Parishads across the country, connecting rural schools, health complexes, and local administrative offices.\n• **Union Digital Centers (UDCs):** Staffed by local male and female micro-entrepreneurs, UDCs function as localized service hubs where rural villagers can apply for passports, birth registrations, electricity bills, and overseas job permits without traveling to distant district headquarters.\n\n**4. Socio-Economic Empowerment of Marginalized Communities:**\nEquitable digital access has generated profound social dividends. Rural women have established cottage industry e-commerce businesses via social media platforms, while marginal farmers utilize mobile apps to check fair wholesale crop prices, bypassing predatory middlemen. Furthermore, rural students access high-quality academic lectures through digital classrooms.\n\n**5. Remaining Bottlenecks & Conclusion:**\nTo completely close the divide, the state must subsidize rural broadband infrastructure, incentivize affordable domestic smartphone assembly, and integrate foundational digital literacy into primary school curricula. True national development is not measured by the technological luxury of the metropolitan elite, but by the dignity, empowerment, and opportunity delivered to the humblest citizen at the furthest periphery.",
    "points_to_remember": [
      "Highlight the role of Union Digital Centers (UDCs) and the Info-Sarker project.",
      "Distinguish between connectivity, affordability, and digital literacy gaps."
    ],
    "tags": ["focus_essay", "digital_divide", "udc", "inclusive_governance"]
  },
  {
    "id": 3064,
    "subject": "ইংরেজি",
    "topic": "English Idioms & Phrases",
    "question": "Construct meaningful, grammatically sound professional sentences illustrating the contextual application of the following idioms:\n(a) Touch and go\n(b) Back to the drawing board\n(c) Cut corners\n(d) Bite the bullet\n(e) Hit the nail on the head\n(f) A dime a dozen",
    "marks": 6,
    "answer": "Idioms and Practical Usage Solution:\n\n(a) **Touch and go** (Precarious, uncertain, or risky):\n*Sentence:* It was touch and go whether the failing primary database could be restored before the immigration counters opened at dawn.\n\n(b) **Back to the drawing board** (To start planning something anew after an initial plan fails):\n*Sentence:* When the initial routing configuration precipitated a massive packet loop, the network engineering team had to go back to the drawing board.\n\n(c) **Cut corners** (To do something poorly or cheaply to save time or money):\n*Sentence:* Procurement officers must never cut corners when purchasing mission-critical server power supplies and fire suppression systems.\n\n(d) **Bite the bullet** (To face a painful or difficult situation with courage and determination):\n*Sentence:* The administration had to bite the bullet and shut down the legacy server for a full twelve hours to execute the mandatory database overhaul.\n\n(e) **Hit the nail on the head** (To state or describe a situation exactly right):\n*Sentence:* The maintenance engineer hit the nail on the head when he diagnosed the server reboot issue as a faulty RAM parity mismatch.\n\n(f) **A dime a dozen** (Very common and having little special value):\n*Sentence:* In the modern job market, basic computer literacy is a dime a dozen; candidates must master specialized skills like cybersecurity and Linux administration to excel.",
    "points_to_remember": [
      "Idiomatic accuracy enhances written essay and comprehension scores."
    ],
    "tags": ["idioms", "phrases", "vocabulary", "english_grammar"]
  },
  {
    "id": 3065,
    "subject": "ইংরেজি",
    "topic": "High-Impact Vocabulary & Analytical Usage",
    "question": "For each of the following advanced vocabulary words, provide: (1) its precise definition, (2) an exact antonym, and (3) an administrative or technical sentence:\n(a) Tenacious\n(b) Impeccable\n(c) Superfluous\n(d) Vulnerable\n(e) Exemplary\n(f) Dichotomy",
    "marks": 6,
    "answer": "High-Impact Vocabulary Analysis:\n\n(a) **Tenacious** (Adjective):\n• Definition: Tending to keep a firm hold of something; persistent and determined.\n• Antonym: Irresolute / Weak / Yielding.\n• *Sentence:* The forensic engineer's tenacious investigation eventually pinpointed the stealthy backdoor script buried deep within the application logs.\n\n(b) **Impeccable** (Adjective):\n• Definition: In accordance with the highest standards; faultless and spotless.\n• Antonym: Flawed / Defective / Blemished.\n• *Sentence:* The data center maintained an impeccable track record of 99.999% uptime throughout the entire fiscal year.\n\n(c) **Superfluous** (Adjective):\n• Definition: Unnecessary, especially through being more than enough; redundant.\n• Antonym: Essential / Indispensable / Necessary.\n• *Sentence:* Upgrading the network switch firmware rendered several legacy diagnostic scripts completely superfluous.\n\n(d) **Vulnerable** (Adjective):\n• Definition: Susceptible to physical or emotional attack or damage.\n• Antonym: Invulnerable / Resilient / Immune.\n• *Sentence:* Unpatched operating systems leave critical passport enrollment workstations vulnerable to automated ransomware worms.\n\n(e) **Exemplary** (Adjective):\n• Definition: Serving as a desirable model; representing the best of its kind.\n• Antonym: Reprehensible / Substandard / Deplorable.\n• *Sentence:* The Sub-Assistant Maintenance Engineer received an official commendation for his exemplary leadership during the data center power crisis.\n\n(f) **Dichotomy** (Noun):\n• Definition: A division or contrast between two things that are represented as being entirely opposed or different.\n• Antonym: Harmony / Unity / Uniformity.\n• *Sentence:* Modern border security must bridge the dichotomy between impenetrable national defense and smooth, expedited passenger transit.",
    "points_to_remember": [
      "Precise definitions and relevant technical sentences show deep vocabulary mastery."
    ],
    "tags": ["vocabulary", "advanced_words", "english_written"]
  }
];

currentQuestions.push(...newQuestions);

fs.writeFileSync(englishWrittenPath, JSON.stringify(currentQuestions, null, 2), 'utf8');
console.log(`Successfully appended 15 new questions! Total english written questions: ${currentQuestions.length}`);
