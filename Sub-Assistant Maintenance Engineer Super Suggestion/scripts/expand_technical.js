const fs = require('fs');
const path = require('path');

const mcqFilePath = path.join(__dirname, '../data/preliminary/technical_computer_mcq.json');
const writtenFilePath = path.join(__dirname, '../data/written/technical_written.json');

// Read existing data
let mcqs = JSON.parse(fs.readFileSync(mcqFilePath, 'utf8'));
let written = JSON.parse(fs.readFileSync(writtenFilePath, 'utf8'));

// New Batch of 45 High-Yield Technical MCQs
const newMcqs = [
  {
    id: 136,
    subject: "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "TCP-তে সংযোগ স্থাপনের (Connection Establishment) জন্য কত ধাপের হ্যান্ডশেক (Three-Way Handshake) সম্পন্ন হয়?",
    "options": [
      "A) Two-way (SYN, ACK)",
      "B) Three-way (SYN, SYN-ACK, ACK)",
      "C) Four-way (SYN, ACK, DATA, FIN)",
      "D) One-way"
    ],
    "answer": 1,
    "explanation": "TCP একটি নির্ভরযোগ্য ও কানেকশন-ওরিয়েন্টেড প্রোটোকল। এটি সংযোগ স্থাপনে ৩টি মেসেজ আদান-প্রদান করে: ক্লায়েন্ট পাঠায় SYN -> সার্ভার প্রত্যুত্তর দেয় SYN-ACK -> ক্লায়েন্ট নিশ্চিত করে ACK।",
    "tags": ["networking", "tcp", "frequent"]
  },
  {
    id: 137,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "একটি পয়েন্ট-টু-পয়েন্ট (Point-to-Point) রাউটার লিঙ্কের জন্য কোন সাবনেট প্রিফিক্সটি সবচেয়ে সাশ্রয়ী ও আদর্শ?",
    "options": [
      "A) /24",
      "B) /28",
      "C) /30",
      "D) /32"
    ],
    "answer": 2,
    "explanation": "/30 সাবনেটে মোট আইপি ৪টি (2^(32-30) = 4)। এর মধ্যে ২টি বাদ দিলে মাত্র ২টি ব্যবহারযোগ্য হোস্ট আইপি পাওয়া যায়, যা দুই প্রান্তের দুটি রাউটার ইন্টারফেসের জন্য একদম উপযুক্ত ও অপচয়হীন।",
    "tags": ["networking", "subnetting"]
  },
  {
    id: 138,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "DHCP ক্লায়েন্ট স্বয়ংক্রিয়ভাবে আইপি পাওয়ার প্রক্রিয়াটির সঠিক ক্রম কোনটি?",
    "options": [
      "A) DORA (Discover -> Offer -> Request -> Acknowledge)",
      "B) ROAD (Request -> Offer -> Acknowledge -> Discover)",
      "C) ARPO (Acknowledge -> Request -> Packet -> Offer)",
      "D) DROP (Discover -> Receive -> Open -> Ping)"
    ],
    "answer": 0,
    "explanation": "DHCP ক্লায়েন্ট আইপি সংগ্রহের জন্য DORA মেকানিজম অনুসরণ করে: ১. DHCP Discover (ব্রডকাস্ট), ২. DHCP Offer (সার্ভার অফার), ৩. DHCP Request (আইপি গ্রহণের আবেদন), ৪. DHCP Acknowledge (চূড়ান্ত স্বীকৃতি)।",
    "tags": ["networking", "dhcp", "protocols"]
  },
  {
    id: 139,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "OSPF (Open Shortest Path First) কোন অ্যালগরিদম ব্যবহার করে রাউটিং টেবিলের সেরা পথ নির্ধারণ করে?",
    "options": [
      "A) Bellman-Ford Algorithm",
      "B) Dijkstra's Shortest Path First (SPF) Algorithm",
      "C) Floyd-Warshall Algorithm",
      "D) Kruskal's Algorithm"
    ],
    "answer": 1,
    "explanation": "OSPF একটি লিংক-স্টেট রাউটিং প্রোটোকল যা ডাইকস্ট্রা (Dijkstra) অ্যালগরিদম ব্যবহার করে শর্টেস্ট পাথ ট্রি (SPF Tree) তৈরি করে এবং সর্বনিম্ন কস্টের পথ বেছে নেয়। RIP ব্যবহার করে বেলম্যান-ফোর্ড।",
    "tags": ["networking", "routing"]
  },
  {
    id: 140,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "নেটওয়ার্ক সুইচসমূহের মধ্যে ব্রডকাস্ট ঝড় (Broadcast Storm) ও লুপ প্রতিরোধে কোন প্রোটোকল ব্যবহৃত হয়?",
    "options": [
      "A) BGP",
      "B) Spanning Tree Protocol (STP - IEEE 802.1D)",
      "C) OSPF",
      "D) NAT"
    ],
    "answer": 1,
    "explanation": "STP (Spanning Tree Protocol) রিডানড্যান্ট সুইচড নেটওয়ার্কে লুপযুক্ত পথগুলোকে স্বয়ংক্রিয়ভাবে ব্লক করে লুপমুক্ত লজিক্যাল টপোলজি তৈরি করে এবং ব্রডকাস্ট স্টর্ম ঠেকায়।",
    "tags": ["networking", "switching"]
  },
  {
    id: 141,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "নিরাপদ দূরবর্তী সার্ভার ব্যবস্থাপনার জন্য কোন প্রোটোকল ও পোর্ট ব্যবহৃত হয়?",
    "options": [
      "A) Telnet (Port 23)",
      "B) SSH (Port 22)",
      "C) FTP (Port 21)",
      "D) SNMP (Port 161)"
    ],
    "answer": 1,
    "explanation": "SSH (Secure Shell) পোর্ট ২২-এ এনক্রিপ্টেড চ্যানেলের মাধ্যমে নিরাপদ রিমোট লগইন ও কমান্ড এক্সিকিউশন নিশ্চিত করে। টেলনেট প্লেইন টেক্সট ডাটা পাঠায় তাই তা অনিরাপদ।",
    "tags": ["networking", "security", "ports"]
  },
  {
    id: 142,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Data Communication & Networking",
    "question": "একটি ফুল ডুপ্লেক্স (Full-Duplex) ডেটা ট্রান্সমিশনের উদাহরণ কোনটি?",
    "options": [
      "A) ওয়াকি-টকি",
      "B) মোবাইল টেলিফোন যোগাযোগ",
      "C) রেডিও সম্প্রচার",
      "D) টিভি সম্প্রচার"
    ],
    "answer": 1,
    "explanation": "ফুল ডুপ্লেক্সে উভয় প্রান্ত একই সাথে একই সময়ে ডেটা পাঠাতে ও গ্রহণ করতে পারে (যেমন মোবাইল ফোন)। ওয়াকি-টকি হলো হাফ-ডুপ্লেক্স এবং রেডিও/টিভি হলো সিমপ্লেক্স।",
    "tags": ["networking", "basics"]
  },
  {
    id: 143,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "৮০৮৬ (8086) মাইক্রোপ্রসেসরের ইন্টারনাল ডেটা বাস ও অ্যাড্রেস বাস যথাক্রমে কত বিটের?",
    "options": [
      "A) ৮-বিট ডেটা বাস, ১৬-বিট অ্যাড্রেস বাস",
      "B) ১৬-বিট ডেটা বাস, ২০-বিট অ্যাড্রেস বাস",
      "C) ৩২-বিট ডেটা বাস, ৩২-বিট অ্যাড্রেস বাস",
      "D) ৬৪-বিট ডেটা বাস, ৩৬-বিট অ্যাড্রেস বাস"
    ],
    "answer": 1,
    "explanation": "ইন্টেল ৮০৮৬ একটি ১৬-বিট মাইক্রোপ্রসেসর যার ডেটা বাস ১৬-বিট এবং অ্যাড্রেস বাস ২০-বিট। ২০-বিট অ্যাড্রেস বাস দিয়ে এটি সর্বোচ্চ 2^20 = 1 MB ফিজিক্যাল মেমোরি অ্যাড্রেস করতে পারে।",
    "tags": ["microprocessor", "architecture"]
  },
  {
    id: 144,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "কোন ধরনের ইন্সট্রাকশন সেট আর্কিটেকচারে কম সংখ্যক সহজ ও দ্রুতগতিসম্পন্ন ইন্সট্রাকশন থাকে?",
    "options": [
      "A) CISC",
      "B) RISC",
      "C) VLIW",
      "D) MISD"
    ],
    "answer": 1,
    "explanation": "RISC (Reduced Instruction Set Computer) সরল, ফিক্সড-লেংথ ইন্সট্রাকশন ব্যবহার করে যা মূলত সিঙ্গেল ক্লক সাইকেলে সম্পন্ন হয় (যেমন ARM, MIPS প্রসেসর)।",
    "tags": ["architecture", "processors"]
  },
  {
    id: 145,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "হাফ অ্যাডার (Half Adder) সার্কিটে Sum (S) এবং Carry (C) এর সমীকরণ কোনটি?",
    "options": [
      "A) S = A . B, C = A + B",
      "B) S = A ⊕ B, C = A . B",
      "C) S = A + B, C = A ⊕ B",
      "D) S = A' B, C = A B'"
    ],
    "answer": 1,
    "explanation": "হাফ অ্যাডারে দুটি বিট যোগ করা হয়। যোগফল (Sum) পাওয়া যায় XOR গেট দিয়ে: S = A ⊕ B এবং ক্যারি পাওয়া যায় AND গেট দিয়ে: C = A . B।",
    "tags": ["digital_logic", "circuits"]
  },
  {
    id: 146,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "JK ফ্লিপ-ফ্লপে J=1 এবং K=1 হলে আউটপুটের অবস্থাকে কী বলা হয়?",
    "options": [
      "A) Reset",
      "B) Set",
      "C) Toggle (Race Condition)",
      "D) No Change"
    ],
    "answer": 2,
    "explanation": "JK ফ্লিপ-ফ্লপে J=1 ও K=1 ইনপুট দিলে আউটপুট তার আগের মানের উল্টো হয়ে যায় (Toggle করে)। ক্লক পালস দীর্ঘ হলে এটি রেস এরাউন্ড সমস্যায় রূপ নেয় যা মাস্টার-স্লেভ ফ্লিপ-ফ্লপ দিয়ে সমাধান করা হয়।",
    "tags": ["digital_logic", "flipflop"]
  },
  {
    "id": 147,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "CPU-এর হস্তক্ষেপ ছাড়া সরাসরি পেরিফেরাল ও মূল মেমোরির মধ্যে দ্রুত ডেটা স্থানান্তরের কন্ট্রোলার কোনটি?",
    "options": [
      "A) ALU",
      "B) DMA (Direct Memory Access) Controller",
      "C) Program Counter",
      "D) Cache Controller"
    ],
    "answer": 1,
    "explanation": "DMA (Direct Memory Access) কন্ট্রোলার CPU-কে বাইপাস করে সরাসরি হার্ডড্রাইভ/নেটওয়ার্ক কার্ড ও র‍্যামের মাঝে ডেটা ট্রান্সফার করে, ফলে CPU প্রসেসিংয়ের জন্য মুক্ত থাকে।",
    "tags": ["architecture", "dma"]
  },
  {
    "id": 148,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "লিনাক্স সিস্টেমে চলমান সকল প্রসেসের প্রসেস আইডি (PID) এবং স্ট্যাটাস দেখার প্রাথমিক কমান্ড কোনটি?",
    "options": [
      "A) ls -l",
      "B) ps aux",
      "C) ifconfig",
      "D) uname -a"
    ],
    "answer": 1,
    "explanation": "'ps aux' কমান্ডের মাধ্যমে লিনাক্স ওএস-এ সমস্ত ব্যবহারকারীর বর্তমান চলমান ব্যাকগ্রাউন্ড ও ফোরগ্রাউন্ড প্রসেস, তাদের মেমোরি ব্যবহার এবং PID বিস্তারিত দেখা যায়।",
    "tags": ["linux", "os", "commands"]
  },
  {
    id: 149,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "টাইম শেয়ারিং অপারেটিং সিস্টেমে সিপিইউ শিডিউলিংয়ের জন্য কোন অ্যালগরিদমটি সর্বাধিক জনপ্রিয়?",
    "options": [
      "A) FCFS (First Come First Served)",
      "B) Round Robin (RR) with Time Quantum",
      "C) Shortest Job First (SJF)",
      "D) Priority Non-preemptive"
    ],
    "answer": 1,
    "explanation": "রাউন্ড রবিন (Round Robin) অ্যালগরিদমে প্রতিটি প্রসেসকে একটি নির্দিষ্ট সময়সীমা (Time Quantum বা Slice) বরাদ্দ দেওয়া হয়। সময় শেষ হলে প্রসেসটি রেডি কিউ-এর শেষে চলে যায়, যা মাল্টিটাস্কিংয়ের জন্য সেরা।",
    "tags": ["os_theory", "scheduling"]
  },
  {
    id: 150,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "উইন্ডোজ অপারেটিং সিস্টেমে সক্রিয় ডিরেক্টরি গ্রুপ পলিসি জোরপূর্বক আপডেট করার কমান্ড কোনটি?",
    "options": [
      "A) ipconfig /all",
      "B) gpupdate /force",
      "C) netsh winsock reset",
      "D) chkdsk /scan"
    ],
    "answer": 1,
    "explanation": "Active Directory ডোমেইন নেটওয়ার্কে ক্লায়েন্ট কম্পিউটারে তাৎক্ষণিকভাবে নতুন গ্রুপ পলিসি অবজেক্ট (GPO) কার্যকর করার জন্য 'gpupdate /force' কমান্ড ব্যবহার করা হয়।",
    "tags": ["server_admin", "windows"]
  },
  {
    id: 151,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "অপারেটিং সিস্টেমে 'Thrashing' ঘটে যখন—",
    "options": [
      "A) সিপিইউ ব্যবহারের হার ১০০% এ পৌঁছে যায়",
      "B) পেজ রিপ্লেসমেন্ট এবং পেজিং কার্যক্রমে ওএস এতো ব্যস্ত থাকে যে মূল এক্সিকিউশন প্রায় বন্ধ হয়ে যায়",
      "C) হার্ডডিস্ক সম্পূর্ণ পূর্ণ হয়ে যায়",
      "D) ভাইরাস আক্রমণ করে"
    ],
    "answer": 1,
    "explanation": "যখন ফিজিক্যাল র‍্যামের তুলনায় বেশি ভার্চুয়াল মেমোরি পেজ ফল্ট হতে থাকে এবং ওএস পেজ লোড ও সোয়াপিংয়েই বেশিরভাগ সময় ব্যয় করে, তখন সিপিইউ ব্যবহার তলানিতে নেমে যায়। এই বিপর্যয়কে Thrashing বলে।",
    "tags": ["os_theory", "virtual_memory"]
  },
  {
    id: 152,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "কোন এসকিউএল (SQL) স্টেটমেন্টটি DDL (Data Definition Language) ক্যাটাগরির অন্তর্ভুক্ত?",
    "options": [
      "A) INSERT INTO",
      "B) ALTER TABLE",
      "C) UPDATE",
      "D) DELETE"
    ],
    "answer": 1,
    "explanation": "DDL কমান্ডগুলো ডাটাবেজের স্কিমা বা স্ট্রাকচার পরিবর্তন করে: CREATE, ALTER, DROP, TRUNCATE। অন্যদিকে INSERT, UPDATE, DELETE হলো DML (Data Manipulation Language)।",
    "tags": ["dbms", "sql"]
  },
  {
    id: 153,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "ডাটাবেজ রিলেশনে কোন দুটি সেটের মধ্যে 'M:N' (Many-to-Many) সম্পর্ক বাস্তবায়নের সঠিক উপায় কোনটি?",
    "options": [
      "A) একটি টেবিলে একাধিক প্রাইমারি কি রাখা",
      "B) একটি মধ্যবর্তী জাংশন টেবিল (Junction/Bridge Table) তৈরি করে দুটি 1:M সম্পর্ক স্থাপন করা",
      "C) উভয় টেবিলে একই নামের কলাম তৈরি করা",
      "D) ভিউ (View) তৈরি করা"
    ],
    "answer": 1,
    "explanation": "Many-to-Many রিলেশন সরাসরি ফিজিক্যাল টেবিলে রাখা যায় না; এটি একটি মধ্যবর্তী জাংশন বা অ্যাসোসিয়েটিভ টেবিল তৈরি করে উভয় টেবিলের প্রাইমারি কি দিয়ে কম্পোজিট কি তৈরি করে সমাধান করা হয়।",
    "tags": ["dbms", "er_diagram"]
  },
  {
    id: 154,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "বি-ট্রি (B-Tree) ইনডেক্সিং ডাটাবেজে কেন ব্যবহৃত হয়?",
    "options": [
      "A) ডাটাবেজের সাইজ কমানোর জন্য",
      "B) ডিস্ক থেকে ডেটা সার্চ ও কুয়েরি এক্সিকিউশন টাইম O(log n) সময়ে সম্পন্ন করার জন্য",
      "C) ব্যাকআপ দ্রুত করার জন্য",
      "D) পাসওয়ার্ড এনক্রিপ্ট করার জন্য"
    ],
    "answer": 1,
    "explanation": "B-Tree এবং B+ Tree সেলফ-ব্যালান্সিং সার্চ ট্রি যা রিলেশনাল ডাটাবেজে রেকর্ড অনুসন্ধান ও রেঞ্জ কুয়েরির গতি বহুগুণ বাড়িয়ে জটিল সার্চ অপারেশনকে O(log n) সময়ে নামিয়ে আনে।",
    "tags": ["dbms", "indexing"]
  },
  {
    "id": 155,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "ডেস্কটপ কম্পিউটারের এসএমপিএস (SMPS)-এর মেইন ২৪-পিন পাওয়ার কানেক্টরে +12V ভোল্টেজ তারের রঙ কী হয়?",
    "options": [
      "A) লাল (Red)",
      "B) হলুদ (Yellow)",
      "C) কমলা (Orange)",
      "D) নীল (Blue)"
    ],
    "answer": 1,
    "explanation": "এটিএক্স (ATX) স্ট্যান্ডার্ড অনুযায়ী: হলুদ তার = +12V (CPU ও ফ্যানের জন্য), লাল তার = +5V (লজিক চিপ), কমলা তার = +3.3V (মেমোরি), কালো তার = Ground (0V), এবং সবুজ তার = PS-ON।",
    "tags": ["hardware", "smps", "maintenance"]
  },
  {
    "id": 156,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "কম্পিউটার প্রসেসরের ওপরে হিটসিংক ও ফ্যান বসানোর পূর্বে 'Thermal Paste' কেন প্রয়োগ করা হয়?",
    "options": [
      "A) প্রসেসরকে আঠার মতো আটকে রাখার জন্য",
      "B) প্রসেসরের মেটাল সারফেস ও হিটসিংকের মধ্যকার মাইক্রোস্কোপিক বায়ুশূন্য ফাঁকা স্থান পূরণ করে তাপ পরিবহন বৃদ্ধি করতে",
      "C) শর্ট সার্কিট থেকে রক্ষা করতে",
      "D) প্রসেসরের বিদ্যুৎ প্রবাহ কমাতে"
    ],
    "answer": 1,
    "explanation": "থার্মাল পেস্ট (Thermal Grease) ধাতব সারফেস দুটির মাঝে থাকা বাতাস দূর করে তাপ পরিবাহিতা নিশ্চিত করে। বাতাস ভালো তাপ কুপরিবাহী, তাই পেস্ট না দিলে প্রসেসর ওভারহিট হয়ে বন্ধ হয়ে যায়।",
    "tags": ["hardware", "thermal_management"]
  },
  {
    "id": 157,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "একটি ই-পাসপোর্টের কন্ট্যাক্টলেস ইন্টিগ্রেটেড চিপ (Contactless RFID Chip) সাধারণত কোন আইসো (ISO) প্রমিত স্ট্যান্ডার্ড সমর্থন করে?",
    "options": [
      "A) ISO/IEC 14443 Type A/B",
      "B) ISO 9001:2015",
      "C) IEEE 802.3",
      "D) ISO 27001"
    ],
    "answer": 0,
    "explanation": "ই-পাসপোর্টে এমবেডেড আরএফআইডি স্মার্ট চিপটি ISO/IEC 14443 Type A বা Type B কন্ট্যাক্টলেস কমিউনিকেশন স্ট্যান্ডার্ড অনুসরণ করে, যা ১৩.৫৬ মেগাহার্টজ ফ্রিকোয়েন্সিতে রিডারের সাথে তথ্য আদান-প্রদান করে।",
    "tags": ["passport_tech", "specialized"]
  },
  {
    "id": 158,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "বায়োমেট্রিক সিস্টেমের নির্ভরযোগ্যতা মূল্যায়নে 'EER' (Equal Error Rate) বলতে কী বোঝায়?",
    "options": [
      "A) সিস্টেমের সর্বোচ্চ গতি",
      "B) যে পয়েন্টে False Acceptance Rate (FAR) এবং False Rejection Rate (FRR) সমান হয়",
      "C) ত্রুটিহীন ডেটা সংরক্ষণের হার",
      "D) ক্যামেরার রেজোলিউশন"
    ],
    "answer": 1,
    "explanation": "EER হলো সেই থ্রেশহোল্ড পয়েন্ট যেখানে ভুল ব্যক্তিকে অনুমোদন (FAR) এবং সঠিক ব্যক্তিকে প্রত্যাখ্যান (FRR) এর হার পরস্পর সমান হয়। EER-এর মান যত কম হয়, বায়োমেট্রিক সিস্টেম তত নিখুঁত।",
    "tags": ["passport_tech", "biometrics"]
  },
  {
    "id": 159,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Cyber Security & Maintenance",
    "question": "কোন সাইবার আক্রমণ পদ্ধতিতে লক্ষ্যবস্তুর সার্ভারকে লক্ষ লক্ষ ভুয়া ট্রাফিক বা রিকোয়েস্ট পাঠিয়ে অকার্যকর করে দেওয়া হয়?",
    "options": [
      "A) Man-in-the-middle attack",
      "B) DDoS (Distributed Denial of Service) Attack",
      "C) SQL Injection",
      "D) Cross-Site Scripting (XSS)"
    ],
    "answer": 1,
    "explanation": "DDoS অ্যাটাকে একাধিক আপোষকৃত কম্পিউটার বা বটনেট (Botnet) ব্যবহার করে একটি নির্দিষ্ট সার্ভারে অস্বাভাবিক পরিমাণ ট্রাফিক পাঠানো হয়, যার ফলে সার্ভারের ব্যান্ডউইথ বা প্রসেসিং ক্ষমতা শেষ হয়ে সেবা বন্ধ হয়ে যায়।",
    "tags": ["security", "cyber_attacks"]
  },
  {
    "id": 160,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Cyber Security & Maintenance",
    "question": "কোন ধরনের নেটওয়ার্ক আর্কিটেকচারে সংস্থার অভ্যন্তরীণ সার্ভারগুলোকে পাবলিক ইন্টারনেট ও লোকাল নেটওয়ার্ক উভয়ের মাঝে একটি বাফার জোনে রাখা হয়?",
    "options": [
      "A) VLAN",
      "B) DMZ (Demilitarized Zone)",
      "C) VPN Gateway",
      "D) WAN Core"
    ],
    "answer": 1,
    "explanation": "ডিএমজেড (DMZ) হলো ফায়ারওয়াল নিয়ন্ত্রিত একটি সুরক্ষিত উপ-নেটওয়ার্ক, যেখানে বহিঃস্থ ব্যবহারকারীদের সেবা দেওয়া ওয়েব সার্ভার, মেইল সার্ভার বা পাবলিক পাসপোর্ট সার্ভার রাখা হয় যাতে ইন্টারনাল ল্যানে কোনো সরাসরি ঝুঁকি তৈরি না হয়।",
    "tags": ["security", "networking"]
  }
];

// Merge and deduplicate by ID
const existingIds = new Set(mcqs.map(q => q.id));
newMcqs.forEach(q => {
  if (!existingIds.has(q.id)) {
    mcqs.push(q);
    existingIds.add(q.id);
  }
});

fs.writeFileSync(mcqFilePath, JSON.stringify(mcqs, null, 2), 'utf8');
console.log(`Updated Technical MCQs: Total count is now ${mcqs.length}`);

// New Batch of Technical Written Questions
const newWritten = [
  {
    "id": 1010,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Networking & Subnetting",
    "question": "একটি প্রতিষ্ঠানের ক্লাস 'C' এর প্রাইভেট নেটওয়ার্ক 192.168.1.0/24 রয়েছে। প্রতিষ্ঠানটিতে ৪টি পৃথক বিভাগ (HR, IT, Accounts, Passport Processing) রয়েছে যাদের প্রত্যেকের জন্য কমপক্ষে ৩০টি করে হোস্ট আইপি প্রয়োজন।\n(ক) প্রয়োজনীয় নতুন সাবনেট মাস্ক নির্ণয় করুন।\n(খ) প্রতি বিভাগের সাবনেটের নেটওয়ার্ক অ্যাড্রেস ও ব্রডকাস্ট অ্যাড্রেস টেবিল তৈরি করুন।",
    "marks": 8,
    "answer": "গাণিতিক সমাধান:\n\n(ক) নতুন সাবনেট মাস্ক নির্ধারণ:\nপ্রতিটি বিভাগে হোস্ট প্রয়োজন কমপক্ষে ৩০টি।\nআমরা জানি, ব্যবহারযোগ্য হোস্ট সূত্র: 2^h - 2 >= 30\nএখানে h = 5 হলে, 2^5 - 2 = 32 - 2 = 30 টি ব্যবহারযোগ্য হোস্ট পাওয়া যায়।\nঅতএব, হোস্ট বিট h = 5।\nযেহেতু IPv4 অ্যাড্রেস ৩২ বিটের, সুতরাং সাবনেট প্রিফিক্স = 32 - 5 = /27।\n\nসাবনেট মাস্ক:\nপ্রথম ২৭টি বিট '1' এবং শেষ ৫টি বিট '0'।\nবাইনারিতে: 11111111.11111111.11111111.11100000\nডেসিমাল মান: 255.255.255.224\nব্লক সাইজ (Block Size) = 256 - 224 = 32।\n\n(খ) ৪টি বিভাগের সাবনেট বিবরণী টেবিল:\n\n১. সাবনেট ১ (HR Division):\n• Network Address: 192.168.1.0\n• Usable Host IP Range: 192.168.1.1 হতে 192.168.1.30\n• Broadcast Address: 192.168.1.31\n\n২. সাবনেট ২ (IT Division):\n• Network Address: 192.168.1.32\n• Usable Host IP Range: 192.168.1.33 হতে 192.168.1.62\n• Broadcast Address: 192.168.1.63\n\n৩. সাবনেট ৩ (Accounts Division):\n• Network Address: 192.168.1.64\n• Usable Host IP Range: 192.168.1.65 হতে 192.168.1.94\n• Broadcast Address: 192.168.1.95\n\n৪. সাবনেট ৪ (Passport Processing Division):\n• Network Address: 192.168.1.96\n• Usable Host IP Range: 192.168.1.97 হতে 192.168.1.126\n• Broadcast Address: 192.168.1.127",
    "points_to_remember": [
      "ব্লক সাইজ ৩২ ধরে প্রতি সাবনেটের শুরুতে নেটওয়ার্ক আইপি এবং শেষে ব্রডকাস্ট আইপি বসে।",
      "হোস্ট সংখ্যা ৩০ চাইলে /27 ব্যবহার করতে হয়।"
    ],
    "tags": ["networking", "subnetting", "math", "practical"]
  },
  {
    "id": 1011,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Computer Architecture & Hardware",
    "question": "হাফ অ্যাডার (Half Adder) এবং ফুল অ্যাডার (Full Adder) কী? লজিক গেটের সাহায্যে একটি ফুল অ্যাডার সার্কিটের সত্যক সারণি (Truth Table) এবং লজিক ডায়াগ্রামের সমীকরণ ব্যাখ্যা করুন।",
    "marks": 7,
    "answer": "• হাফ অ্যাডার (Half Adder):\nযে সমন্বিত বর্তনী (Combinational Circuit) দুটি বাইনারি বিট যোগ করে যোগফল (Sum) ও ক্যারি (Carry) তৈরি করে, তাকে হাফ অ্যাডার বলে। এতে পূর্ববর্তী কোনো ক্যারি যোগ করা যায় না।\n- Sum = A ⊕ B\n- Carry = A . B\n\n• ফুল অ্যাডার (Full Adder):\nযে সমন্বিত বর্তনী দুটি বাইনারি বিট এবং পূর্ববর্তী ধাপের ক্যারি বিট (Cin) সহ মোট তিনটি বিট যোগ করতে পারে, তাকে ফুল অ্যাডার বলে।\n\n• সত্যক সারণি (Truth Table):\n| A | B | Cin | Sum (S) | Cout |\n|---|---|-----|---------|------|\n| 0 | 0 |  0  |    0    |  0   |\n| 0 | 0 |  1  |    1    |  0   |\n| 0 | 1 |  0  |    1    |  0   |\n| 0 | 1 |  1  |    0    |  1   |\n| 1 | 0 |  0  |    1    |  0   |\n| 1 | 0 |  1  |    0    |  1   |\n| 1 | 1 |  0  |    0    |  1   |\n| 1 | 1 |  1  |    1    |  1   |\n\n• বুলিয়ান সমীকরণ ও লজিক:\n১. Sum (S) = A ⊕ B ⊕ Cin\n২. Carry out (Cout) = (A . B) + (Cin . (A ⊕ B))\n\nদুটি হাফ অ্যাডার এবং একটি OR গেট একত্র করে একটি ফুল অ্যাডার তৈরি করা যায়।",
    "points_to_remember": [
      "ফুল অ্যাডারের সাম সমীকরণে ৩টি ইনপুটের XOR অপারেশন হয়।",
      "২টি হাফ অ্যাডার + ১টি OR গেট = ১টি ফুল অ্যাডার।"
    ],
    "tags": ["digital_logic", "circuits", "architecture"]
  },
  {
    "id": 1012,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Operating System & Administration",
    "question": "অপারেটিং সিস্টেমে প্রসেস শিডিউলিং কী? প্রি-এম্পটিভ (Preemptive) ও নন-প্রি-এম্পটিভ (Non-preemptive) শিডিউলিংয়ের তুলনামূলক পার্থক্য লিখুন। Round Robin শিডিউলিংয়ে 'Time Quantum' বেশি বা কম হলে কী প্রভাব পড়ে?",
    "marks": 7,
    "answer": "• প্রসেস শিডিউলিং:\nযে প্রক্রিয়ার মাধ্যমে অপারেটিং সিস্টেমের শিডিউলার রেডি কিউ (Ready Queue)-তে থাকা প্রসেসগুলোর মধ্য থেকে নির্দিষ্ট নীতিমালার ভিত্তিতে সিপিইউ বরাদ্দ দেয়, তাকে প্রসেস শিডিউলিং বলে।\n\n• Preemptive বনাম Non-preemptive শিডিউলিং পার্থক্য:\n১. বাধা প্রদান: Preemptive শিডিউলিংয়ে চলমান প্রসেসকে জোরপূর্বক থামিয়ে বেশি অগ্রাধিকারপ্রাপ্ত প্রসেসকে সিপিইউ দেওয়া যায়। Non-preemptive-এ প্রসেস কাজ শেষ না করা পর্যন্ত সিপিইউ ছাড়ে না।\n২. উদাহরণ: Preemptive: Round Robin, SRTF। Non-preemptive: FCFS, SJF।\n৩. প্রতিক্রিয়া সময়: Preemptive-এ রেসপন্স টাইম অত্যন্ত ভালো ও দ্রুত হয়, যা রিয়েল-টাইম সিস্টেমের জন্য জরুরি।\n\n• Round Robin-এ Time Quantum-এর প্রভাব:\n- টাইম কোয়ান্টাম খুব বেশি বড় হলে: এটি মূলত FCFS (First Come First Served) এর মতো আচরণ করে, ফলে ইন্টারঅ্যাক্টিভ রেসপন্স টাইম খারাপ হয়ে যায়।\n- টাইম কোয়ান্টাম খুব ছোট হলে: সিপিইউ বারবার কনটেক্সট সুইচিং (Context Switching) করতে বাধ্য হয়, যার ফলে সিস্টেম ওভারহেড বাড়ে এবং সিপিইউর কাজের অপচয় হয়।\n- আদর্শ নিয়ম: টাইম কোয়ান্টাম এমন হতে হবে যাতে অন্তত ৮০% সিপিইউ বার্স্ট সম্পন্ন হতে পারে এবং কনটেক্সট সুইচ টাইম ১০% এর কম হয়।",
    "points_to_remember": [
      "Time Quantum খুব ছোট হলে Context Switch Overhead বাড়ে।",
      "Time Quantum খুব বড় হলে FCFS হয়ে যায়।"
    ],
    "tags": ["os_theory", "scheduling"]
  },
  {
    "id": 1013,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "Database Management Systems",
    "question": "ডাটাবেজে ACID বৈশিষ্ট্যের গুরুত্ব ব্যাখ্যা করুন। ব্যাংক একাউন্ট ফান্ড ট্রান্সফারের বাস্তব উদাহরণের সাহায্যে Atomicity এবং Consistency কীভাবে কাজ করে তা বুঝিয়ে লিখুন।",
    "marks": 6,
    "answer": "• ACID প্রোপার্টি ডাটাবেজের যেকোনো ট্রানজেকশনের অখণ্ডতা ও নিরাপত্তা নিশ্চিত করে:\n১. Atomicity (অল অর নাথিং নীতি)\n২. Consistency (শর্ত ও স্থিতিশীলতা রক্ষা)\n৩. Isolation (অন্যান্য ট্রানজেকশনের প্রভাবমুক্ত রাখা)\n৪. Durability (সিস্টেম ক্র্যাশের পরও স্থায়ী ডেটা সংরক্ষণ)\n\n• ব্যাংক ফান্ড ট্রান্সফার উদাহরণ (Account A থেকে Account B-তে ৫,০০০ টাকা ট্রান্সফার):\n১. ট্রানজেকশনের ধাপসমূহ:\n   ধাপ ১: Read(A)\n   ধাপ ২: A = A - 5000\n   ধাপ ৩: Write(A)\n   ধাপ ৪: Read(B)\n   ধাপ ৫: B = B + 5000\n   ধাপ ৬: Write(B)\n\n• Atomicity-র প্রয়োগ:\nধাপ ৩ সম্পন্ন হওয়ার পর যদি বিদ্যুৎ চলে যায় বা ডাটাবেজ ক্র্যাশ করে, তবে Atomicity নিশ্চিত করে যে পুরো লেনদেনটি পূর্বের অবস্থায় রোলব্যাক (Rollback) হবে। এমন হবে না যে A থেকে ৫,০০০ টাকা কেটে নেওয়া হয়েছে কিন্তু B একাউন্টে যোগ হয়নি।\n\n• Consistency-র প্রয়োগ:\nট্রানজেকশন শুরু হওয়ার আগে A ও B-এর মোট ব্যালেন্স যা ছিল (ধরি, ৫০,০০০ + ২০,০০০ = ৭০,০০০ টাকা), ট্রানজেকশন সফলভাবে শেষ হওয়ার পরও মোট ব্যালেন্স ঠিক ৭০,০০০ টাকাই থাকবে (৪৫,০০০ + ২৫,০০০ = ৭০,০০০)। কোনো প্রকার ডাটা নষ্ট বা নিয়মের লঙ্ঘন হবে না।",
    "points_to_remember": [
      "Atomicity = 'All or Nothing' (সম্পূর্ণ হবে নয়তো কিছুই হবে না)।",
      "Consistency = ডাটাবেজের সকল রুল ও মোট ব্যালেন্সের সামঞ্জস্য বজায় রাখা।"
    ],
    "tags": ["dbms", "acid", "transactions"]
  },
  {
    "id": 1014,
    "subject": "টেকনিক্যাল (কম্পিউটার)",
    "topic": "System Maintenance & Office Automation",
    "question": "কম্পিউটারের SMPS (Switch Mode Power Supply) নষ্ট কিনা তা মাদারবোর্ড থেকে খুলে পেপারক্লিপের সাহায্যে কীভাবে পরীক্ষা (Paperclip Test) করবেন এবং মাল্টিমিটার দিয়ে ভোল্টেজ পরিমাপের পদ্ধতি বর্ণনা করুন।",
    "marks": 7,
    "answer": "এসএমপিএস পরীক্ষা ও ডায়াগনস্টিক মেথডোলজি:\n\n১. পেপারক্লিপ দিয়ে 'Power-On' জাম্পার টেস্ট (Paperclip Test):\n- ধাপ ১: পিসি থেকে বিদ্যুৎ সংযোগ বিচ্ছিন্ন করে মাদারবোর্ড থেকে ২৪-পিন এটিএক্স (ATX) পাওয়ার কানেক্টরটি সাবধানে খুলে নিন।\n- ধাপ ২: একটি পেপারক্লিপকে 'U' আকারে বাঁকা করুন।\n- ধাপ ৩: ২৪-পিন কানেক্টরের সবুজ তার (Green wire - পিন ১৬: PS_ON) এবং যেকোনো একটি কালো তারের (Black wire - Ground / COM) পোর্টে পেপারক্লিপের দুই প্রান্ত প্রবেশ করিয়ে শর্ট করুন।\n- ধাপ ৪: এবার এসএমপিএসের পেছনের পাওয়ার ক্যাবল প্লাগে দিয়ে পাওয়ার সুইচ অন করুন।\n- ফলাফল বিশ্লেষণ: যদি এসএমপিএসের অভ্যন্তরীণ কুলিং ফ্যানটি মসৃণভাবে ঘোরে, তবে প্রাথমিক পাওয়ার সুইচিং সার্কিট ভালো রয়েছে। ফ্যান না ঘুরলে এসএমপিএস অভ্যন্তরীণ ফিউজ বা সার্কিট নষ্ট।\n\n২. ডিজিটাল মাল্টিমিটার দিয়ে ভোল্টেজ পরিমাপ পদ্ধতি:\nমাল্টিমিটারকে ২০V ডিসি (DC Voltage) রেঞ্জে সেট করে কালো প্রোবটি যেকোনো কালো (Ground) পিনে রাখুন এবং লাল প্রোব দিয়ে পিনগুলো মেপে দেখুন:\n• হলুদ পিন (Yellow): +11.4V থেকে +12.6V থাকা উচিত (আদর্শ +12V)।\n• লাল পিন (Red): +4.75V থেকে +5.25V থাকা উচিত (আদর্শ +5V)।\n• কমলা পিন (Orange): +3.14V থেকে +3.47V থাকা উচিত (আদর্শ +3.3V)।\n• পার্পল পিন (Purple - 5VSB): স্ট্যান্ডবাই মোডে সর্বদা +5V থাকা আবশ্যক।\nকোনো একটি ভোল্টেজ যদি নির্দিষ্ট রেঞ্জের নিচে নামে, তবে লোড দিলে পিসি রিস্টার্ট বা ডিসপ্লে অফ হয়ে যাবে এবং এসএমপিএস পরিবর্তন করতে হবে।",
    "points_to_remember": [
      "সবুজ (PS_ON) এবং কালো (Ground) শর্ট করতে হয়।",
      "মাল্টিমিটারে অবশ্যই DC 20V মোডে মাপতে হবে।"
    ],
    "tags": ["hardware", "smps", "maintenance", "practical"]
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
console.log(`Updated Technical Written Questions: Total count is now ${written.length}`);
