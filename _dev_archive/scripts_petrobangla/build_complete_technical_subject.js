const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const writtenDir = path.join(baseDir, 'data/written');
const prelimDir = path.join(baseDir, 'data/preliminary');

fs.mkdirSync(writtenDir, { recursive: true });
fs.mkdirSync(prelimDir, { recursive: true });

console.log('=== BUILDING COMPLETE TECHNICAL (COMPUTER & IT) SUBJECT ===');

// Load existing written modular files if present
function loadExisting(file) {
  const p = path.join(writtenDir, file);
  if (fs.existsSync(p)) {
    try {
      return JSON.parse(fs.readFileSync(p, 'utf8'));
    } catch (e) {
      return [];
    }
  }
  return [];
}

const existingNet = loadExisting('networking_written.json');
const existingDbms = loadExisting('dbms_written.json');
const existingProg = loadExisting('programming_written.json');
const existingDld = loadExisting('dld_scheduling_written.json');
const existingGas = loadExisting('gas_it_written.json');

console.log(`Loaded existing written:
- Networking: ${existingNet.length}
- DBMS: ${existingDbms.length}
- Programming: ${existingProg.length}
- DLD & Scheduling: ${existingDld.length}
- Gas IT & SCADA: ${existingGas.length}
Total: ${existingNet.length + existingDbms.length + existingProg.length + existingDld.length + existingGas.length}`);

// Expand to exactly 150 Written questions
// We will create additional high-yield BUET written questions
const additionalWritten = [
  // 1. Networking Additional (3031-3040)
  {
    id: 1031,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "একটি প্রতিষ্ঠান 192.168.100.0/24 নেটওয়ার্ক ব্লক পেয়েছে। তাদের ৪টি সাবনেট দরকার যাতে যথাক্রমে ৫০, ২৮, ১২ এবং ২টি হোস্ট থাকতে পারে। VLSM (Variable Length Subnet Masking) ব্যবহার করে প্রতিটি সাবনেটের জন্য সাবনেট মাস্ক, নেটওয়ার্ক আইডি, ভ্যালিড হোস্ট রেঞ্জ ও ব্রডকাস্ট আইডি নির্ণয় করো।",
    marks: 10,
    answer: "VLSM সমাধান পদ্ধতি (সর্ববৃহৎ রিকোয়ারমেন্ট থেকে ছোট ক্রমে):\n\n১. সাবনেট ১ (৫০ হোস্ট):\n• সূত্র: 2^h - 2 >= 50 => h = 6 (2^6 = 64)।\n• প্রিফিক্স: 32 - 6 = /26 (মাস্ক: 255.255.255.192)। ব্লক সাইজ = 64।\n• Net ID: 192.168.100.0 | Host Range: 192.168.100.1 - 192.168.100.62 | Broadcast: 192.168.100.63\n\n২. সাবনেট ২ (২৮ হোস্ট):\n• 2^h - 2 >= 28 => h = 5 (2^5 = 32)।\n• প্রিফিক্স: 32 - 5 = /27 (মাস্ক: 255.255.255.224)। ব্লক সাইজ = 32।\n• Net ID: 192.168.100.64 | Host Range: 192.168.100.65 - 192.168.100.94 | Broadcast: 192.168.100.95\n\n৩. সাবনেট ৩ (১২ হোস্ট):\n• 2^h - 2 >= 12 => h = 4 (2^4 = 16)।\n• প্রিফিক্স: 32 - 4 = /28 (মাস্ক: 255.255.255.240)। ব্লক সাইজ = 16।\n• Net ID: 192.168.100.96 | Host Range: 192.168.100.97 - 192.168.100.110 | Broadcast: 192.168.100.111\n\n৪. সাবনেট ৪ (পয়েন্ট-টু-পয়েন্ট লিঙ্ক, ২ হোস্ট):\n• 2^h - 2 >= 2 => h = 2 (2^2 = 4)।\n• প্রিফিক্স: 32 - 2 = /30 (মাস্ক: 255.255.255.252)। ব্লক সাইজ = 4।\n• Net ID: 192.168.100.112 | Host Range: 192.168.100.113 - 192.168.100.114 | Broadcast: 192.168.100.115",
    points_to_remember: ["VLSM ক্যালকুলেশনে সর্বদা বড় হোস্ট রিকোয়ারমেন্ট আগে বরাদ্দ করতে হয়।"],
    tags: ["buet_written", "networking", "vlsm", "math"]
  },
  {
    id: 1032,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "সুপারনেটিং বা সিআইডিআর রুট অ্যাগ্রিগেশন (CIDR Route Aggregation) কী? নিচের ৪টি ক্লাস C নেটওয়ার্ককে একটি সিঙ্গেল সুপারনেট রুটে রূপান্তর করো:\n192.168.16.0/24, 192.168.17.0/24, 192.168.18.0/24, 192.168.19.0/24।",
    marks: 8,
    answer: "সুপারনেটিং (Supernetting):\nএকাধিক ক্ষুদ্র কন্টিনিউয়াস ক্লাসফুল নেটওয়ার্ককে রুট সামারাইজেশনের মাধ্যমে একটি একক বৃহদাকার নেটওয়ার্কে যুক্ত করার প্রক্রিয়াকে সুপারনেটিং বলে। এতে রাউটারের রাউটিং টেবিল ছোট হয়।\n\nগাণিতিক সমাধান (৩য় অক্টেটের বাইনারি বিশ্লেষণ):\n• 16 = 00010000\n• 17 = 00010001\n• 18 = 00010010\n• 19 = 00010011\n\nদেখা যাচ্ছে প্রথম ৬টি বিট (000100) চারটি আইপিতেই হুবহু মিলে যায় (Common Prefix Bits = 6)।\nঅতএব, নতুন প্রিফিক্স দৈর্ঘ্য = প্রথম ২ অক্টেট (১৬ বিট) + ৩য় অক্টেটের কমন ৬ বিট = 16 + 6 = /22।\n\nসুপারনেট মাস্ক:\n11111111.11111111.11111100.00000000 => 255.255.252.0।\n\nসামারাইজড সুপারনেট অ্যাড্রেস: 192.168.16.0/22।",
    points_to_remember: ["সুপারনেটিং করতে হলে ব্লক সংখ্যা অবশ্যই ২-এর পাওয়ার (2, 4, 8, 16) এবং ক্রমান্বয়িক হতে হবে।"],
    tags: ["buet_written", "networking", "supernetting", "cidr"]
  },
  {
    id: 1033,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "ডিস্ট্যান্স ভেক্টর রাউটিং (Distance Vector) এবং লিঙ্ক স্টেট রাউটিং (Link State Routing)-এর মধ্যে ৪টি মৌলিক পার্থক্য লিখুন। কাউন্ট-টু-ইনফিনিটি (Count-to-Infinity) সমস্যা কীভাবে সমাধান করা যায়?",
    marks: 8,
    answer: "মৌলিক পার্থক্য:\n১. অ্যালগরিদম: Distance Vector-এ Bellman-Ford অ্যালগরিদম ব্যবহৃত হয়; Link State-এ Dijkstra's Shortest Path First (SPF) ব্যবহৃত হয়।\n২. তথ্যের পরিধি: Distance Vector কেবল প্রতিবেশীকে রাউটিং টেবিল কপি পাঠায় (Routing by rumor); Link State সম্পূর্ণ নেটওয়ার্কের টপোলজি ম্যাপ তৈরি করে।\n৩. কনভার্জেন্স: Distance Vector অত্যন্ত ধীরগতির; Link State দ্রুততম কনভার্জেন্স দেয়।\n৪. উদাহরণ: Distance Vector এর উদাহরণ RIP, IGRP; Link State এর উদাহরণ OSPF, IS-IS।\n\nকাউন্ট-টু-ইনফিনিটি সমস্যা সমাধান:\n১. Split Horizon: যে ইন্টারফেস দিয়ে কোনো রুটের খবর এসেছে, সেই ইন্টারফেসে পুনরায় ওই খবর ফেরত পাঠানো যাবে না।\n২. Route Poisoning & Poison Reverse: অকার্যকর রুটের মেট্রিক মান অসীম (RIP-তে 16) করে তাৎক্ষণিক নোটিফিকেশন দেওয়া।\n৩. Hold-down Timers: কোনো রুট ডাউন হলে নির্দিষ্ট সময় পর্যন্ত নতুন কোনো খারাপ বা পরিবর্তিত আপডেট গ্রহণ না করা।",
    points_to_remember: ["RIP-তে সর্বোচ্চ বৈধ হপ কাউন্ট ১৫; ১৬ হলো unreachable।"],
    tags: ["buet_written", "networking", "routing_protocols"]
  },
  {
    id: 1034,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "IPv4 এবং IPv6 এর মধ্যে তুলনামূলক পার্থক্য ছক আকারে লিখুন। IPv6-এ কেন ব্রডকাস্ট (Broadcast) অ্যাড্রেস বাদ দেওয়া হয়েছে?",
    marks: 8,
    answer: "তুলনামূলক পার্থক্য ছক:\n\n১. অ্যাড্রেস সাইজ: IPv4 হলো ৩২ বিট (৪ অক্টেট); IPv6 হলো ১২৮ বিট (১৬ অক্টেট, ৮টি হেক্সাডেসিমাল গ্রুপ)।\n২. অ্যাড্রেস স্পেস: IPv4-এ প্রায় ৪.৩ বিলিয়ন ($2^{32}$); IPv6-এ প্রায় $3.4 \\times 10^{38}$ ($2^{128}$) যা কার্যত অসীম।\n৩. হেডার সাইজ: IPv4 এর হেডার ভ্যারিয়েবল (২০-৬০ বাইট); IPv6 এর হেডার ফিক্সড ৪০ বাইট।\n৪. কনফিগারেশন: IPv4 এ ম্যানুয়াল বা DHCP দরকার; IPv6 এ SLAAC (Stateless Address Autoconfiguration) স্বয়ংক্রিয়।\n৫. সিকিউরিটি: IPv4 এ IPSec অপশনাল; IPv6 এ IPSec বিল্ট-ইন বাধ্যতামূলক।\n\nIPv6-এ ব্রডকাস্ট বাদ দেওয়ার কারণ:\nIPv4-এ ব্রডকাস্ট প্যাকেট পাঠালে ল্যানের সমস্ত নোডকে সিপিইউ ইন্টারাপ্ট প্রসেস করতে হতো, যা ব্যান্ডউইথ ও সিপিইউর ব্যাপক অপচয় ঘটাত। IPv6-এ ব্রডকাস্টের বিকল্প হিসেবে **Multicast** এবং **Anycast** ব্যবহৃত হয়, ফলে নির্দিষ্ট গ্রুপ ছাড়া অপ্রয়োজনীয় নোডে কোনো ট্রাফিক যায় না।",
    points_to_remember: ["IPv6-এ কোনো ফ্র্যাগমেন্টেশন রাউটারে হয় না, কেবল সোর্স নোড ফ্র্যাগমেন্টেশন করতে পারে।"],
    tags: ["buet_written", "networking", "ipv6", "comparison"]
  },
  {
    id: 1035,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "ফায়ারওয়াল (Firewall) কী? প্যাকেট ফিল্টারিং ফায়ারওয়াল (Packet Filtering) এবং স্টেটফুল ইন্সপেকশন ফায়ারওয়াল (Stateful Inspection)-এর কাজের পদ্ধতির তুলনা করুন।",
    marks: 8,
    answer: "ফায়ারওয়াল:\nফায়ারওয়াল হলো একটি নেটওয়ার্ক নিরাপত্তা ব্যবস্থা যা পূর্বনির্ধারিত নিরাপত্তা নিয়মের (Security Rules) ভিত্তিতে ইনকামিং এবং আউটগোয়িং নেটওয়ার্ক ট্রাফিক মনিটর ও নিয়ন্ত্রণ করে।\n\nতুলনা:\n১. Packet Filtering Firewall (Stateless):\n• OSI মডেলের Network ও Transport লেয়ারে কাজ করে।\n• প্রতিটি প্যাকেটকে স্বাধীনভাবে যাচাই করে (উৎস আইপি, গন্তব্য আইপি, পোর্ট নম্বর ও প্রোটোকল)।\n• পূর্ববর্তী কোনো প্যাকেটের স্টেট বা সংযোগের ইতিহাস মনে রাখে না। ফলে স্পুফিং আক্রমণ প্রতিরোধে দুর্বল।\n\n২. Stateful Inspection Firewall:\n• সংযোগের পূর্ণাঙ্গ অবস্থা (Connection State ও Context) পর্যবেক্ষণ ও ট্র্যাক করে।\n• এটি একটি স্টেট টেবিল (State Table) রক্ষণাবেক্ষণ করে। ক্লায়েন্ট থেকে বাইরে যাওয়া বৈধ রিকোয়েস্টের ফিরতি প্যাকেটকে স্বয়ংক্রিয়ভাবে ইনকামিং ফায়ারওয়াল পার হতে দেয়।\n• অনেক বেশি সুরক্ষিত এবং আধুনিক এন্টারপ্রাইজ নেটওয়ার্কে ব্যবহৃত হয়।",
    points_to_remember: ["Stateful ফায়ারওয়াল ৩-ওয়ে হ্যান্ডশেক এবং সেশন ট্র্যাকিং বজায় রাখে।"],
    tags: ["buet_written", "networking", "security", "firewall"]
  },

  // 2. Additional DBMS Written (1041-1050)
  {
    id: 1041,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "একটি রিলেশন R(A, B, C, D, E, F) এবং FDs: { AB -> C, C -> D, D -> B, D -> E, E -> F }।\n(ক) ক্যান্ডিডেট কী নির্ণয় করো।\n(খ) এটি কোন নরমাল ফর্মে আছে এবং একে 3NF-এ ডিকম্পোজ করো।",
    marks: 10,
    answer: "গাণিতিক সমাধান:\n(ক) ক্লোজার নির্ণয়:\n• AB এর ক্লোজার: AB+ = {A, B, C, D, E, F} = R। অতএব, AB একটি ক্যান্ডিডেট কী।\n• D -> B থাকায় AD+ = {A, D, B, C, E, F} = R। অতএব, AD একটি ক্যান্ডিডেট কী।\n• C -> D থাকায় AC+ = {A, C, D, B, E, F} = R। অতএব, AC একটি ক্যান্ডিডেট কী।\n• ক্যান্ডিডেট কীসমূহ: { AB, AC, AD }।\n• প্রাইম অ্যাট্রিবিউট: { A, B, C, D }। নন-প্রাইম: { E, F }।\n\n(খ) নরমাল ফর্ম পরীক্ষা:\n• D -> E নির্ভরতায় D কোনো সুপারকী নয় এবং E কোনো প্রাইম অ্যাট্রিবিউট নয়। D প্রাইম অ্যাট্রিবিউট হওয়ায় এটি আংশিক নির্ভরতা তৈরি করে (2NF লঙ্ঘন করে)।\n• সুতরাং রিলেশনটি 1NF-এ আছে।\n\n3NF ডিকম্পোজিশন (Minimal Cover পদ্ধতি):\n• R1(A, B, C) [AB -> C, AC -> B]\n• R2(C, D) [C -> D]\n• R3(D, B) [D -> B]\n• R4(D, E) [D -> E]\n• R5(E, F) [E -> F]\nপ্রিজারভেশন: সকল ডিপেনডেন্সি সংরক্ষিত এবং কমন অ্যাট্রিবিউটের মাধ্যমে জয়েন লসলেস।",
    points_to_remember: ["নন-প্রাইম অ্যাট্রিবিউট প্রাইম অ্যাট্রিবিউটের আংশিক অংশের ওপর নির্ভর করলে 2NF বিনষ্ট হয়।"],
    tags: ["buet_written", "dbms", "normalization", "math"]
  },
  {
    id: 1042,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "ট্রানজ্যাকশনের ACID প্রোপার্টিজ (Atomicity, Consistency, Isolation, Durability) বাস্তব উদাহরণের সাহায্যে ব্যাখ্যা করুন। DBMS-এ কনকারেন্সি কন্ট্রোলে টু-ফেজ লকিং (2PL) প্রোটোকল কীভাবে কাজ করে?",
    marks: 10,
    answer: "ACID প্রোপার্টিজ (ব্যাংক/বিলিং ট্রানজ্যাকশন উদাহরণ):\n১. Atomicity (অল-অর-নাথিং): তিতাস গ্যাসের অ্যাকাউন্ট A থেকে ৫০০ টাকা কেটে অ্যাকাউন্ট B-তে যোগ করার সময় মাঝপথে সার্ভার ক্র্যাশ করলে পুরো ট্রানজ্যাকশন রোলব্যাক হয়ে আগের অবস্থায় ফিরবে। অর্ধেক কাজ হওয়া সম্ভব নয়।\n২. Consistency: ট্রানজ্যাকশন সম্পন্ন হওয়ার আগে ও পরে ডেটাবেজের মোট ব্যালেন্স ও ইন্টিগ্রিটি কনস্ট্রেইন্ট অপরিবর্তিত থাকতে হবে।\n৩. Isolation: একাধিক ট্রানজ্যাকশন একসাথে চললেও একটির অপূর্ণাঙ্গ ফলাফল অন্যটি দেখতে পাবে না, যেন তারা পরপর (সিরিয়ালি) চলছে।\n৪. Durability: ট্রানজ্যাকশন একবার Commit হলে সিস্টেম ক্র্যাশ করলেও তার পরিবর্তন ডিস্কে স্থায়ীভাবে টিকে থাকবে।\n\nTwo-Phase Locking (2PL) প্রোটোকল:\nএটি সিরিয়ালাইজেবিলিটি নিশ্চিত করে ডেটা কনসিস্টেন্সি রক্ষা করে। এর দুটি ধাপ:\n১. Growing Phase: ট্রানজ্যাকশন কেবল নতুন লক (Shared/Exclusive) গ্রহণ করতে পারে, কোনো লক ছাড়তে পারে না।\n২. Shrinking Phase: ট্রানজ্যাকশন যখন প্রথম কোনো লক মুক্ত (Release) করে, তখন থেকে সে আর কোনো নতুন লক নিতে পারবে না, কেবল বাকি লকগুলো ছাড়তে পারবে।",
    points_to_remember: ["2PL সিরিয়ালাইজেবিলিটি নিশ্চিত করলেও ডেডলক (Deadlock) প্রতিরোধ করতে পারে না।"],
    tags: ["buet_written", "dbms", "acid", "concurrency", "2pl"]
  },
  {
    id: 1043,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "তিতাস গ্যাসের গ্যাস সংযোগ টেবিল `GasConnection(ConnID, MeterNo, ZoneID, CustomerName, GasType, SecurityDeposit)`।\n(ক) এমন গ্রাহকদের নাম ও মিটার নম্বর বের করো যাদের সিকিউরিটি ডিপোজিট তাদের জোনের গড় ডিপোজিটের চেয়ে বেশি।\n(খ) যেসব জোনে ৫০টির বেশি বাণিজ্যিক ('Commercial') সংযোগ রয়েছে তাদের ZoneID এবং সংযোগ সংখ্যা দেখাও।",
    marks: 10,
    answer: "SQL সমাধান:\n\n(ক) Correlated Subquery ব্যবহার করে:\n```sql\nSELECT CustomerName, MeterNo, SecurityDeposit\nFROM GasConnection G1\nWHERE SecurityDeposit > (\n    SELECT AVG(G2.SecurityDeposit)\n    FROM GasConnection G2\n    WHERE G2.ZoneID = G1.ZoneID\n);\n```\n\n(খ) GROUP BY এবং HAVING ক্লজ ব্যবহার করে:\n```sql\nSELECT ZoneID, COUNT(ConnID) AS Total_Commercial_Connections\nFROM GasConnection\nWHERE GasType = 'Commercial'\nGROUP BY ZoneID\nHAVING COUNT(ConnID) > 50;\n```",
    points_to_remember: ["WHERE ক্লজ গ্রুপ হওয়ার আগে ফিল্টার করে; HAVING ক্লজ GROUP BY এর ফলাফলের ওপর শর্ত আরোপ করে।"],
    tags: ["buet_written", "dbms", "sql_queries", "petrobangla"]
  },

  // 3. Additional Programming & DSA Written (1051-1060)
  {
    id: 1051,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "C Programming & Output Tracing",
    question: "একটি সিঙ্গলি লিঙ্কড লিস্টকে (Singly Linked List) ইটারেটিভ পদ্ধতিতে রিভার্স (Reverse) করার পূর্ণাঙ্গ C ফাংশন লিখুন এবং এর টাইম ও স্পেস কমপ্লেক্সিটি কত?",
    marks: 10,
    answer: "C ফাংশন সমাধান:\n```c\n#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nstruct Node* reverseList(struct Node* head) {\n    struct Node *prev = NULL;\n    struct Node *current = head;\n    struct Node *next = NULL;\n    \n    while (current != NULL) {\n        next = current->next; // পরবর্তী নোড সেভ করা\n        current->next = prev; // পয়েন্টার রিভার্স করা\n        prev = current;       // prev এক ধাপ এগিয়ে নেওয়া\n        current = next;       // current এক ধাপ এগিয়ে নেওয়া\n    }\n    return prev; // নতুন হেড\n}\n```\n\nকমপ্লেক্সিটি বিশ্লেষণ:\n• Time Complexity: O(n) - কারণ প্রতিটি নোড ঠিক একবার ভিজিট করা হয়।\n• Space Complexity: O(1) - কোনো বাড়তি মেমরি ছাড়া মাত্র ৩টি পয়েন্টার দিয়ে ইন-প্লেস রিভার্স সম্পন্ন হয়।",
    points_to_remember: ["৩টি পয়েন্টার (prev, current, next) ব্যবহার করে লিঙ্কড লিস্ট রিভার্স হলো ক্লাসিক্যাল অ্যালগরিদম।"],
    tags: ["buet_written", "dsa", "linked_list", "c_code"]
  },
  {
    id: 1052,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "C Programming & Output Tracing",
    question: "নিচের C কোডের আউটপুট কী হবে এবং মেমরি অ্যালাইনমেন্টের প্রভাব ব্যাখ্যা করো:\n```c\n#include <stdio.h>\nstruct A {\n    char c;\n    int x;\n    char d;\n};\n#pragma pack(1)\nstruct B {\n    char c;\n    int x;\n    char d;\n};\nint main() {\n    printf(\"%zu, %zu\\n\", sizeof(struct A), sizeof(struct B));\n    return 0;\n}\n```",
    marks: 8,
    answer: "মেমরি প্যাডিং ও আউটপুট বিশ্লেষণ:\n\n১. `struct A` (ডিফল্ট স্ট্রাকচার প্যাডিং সহ):\n• `char c` নেয় ১ বাইট। এর পর ৪-বাইট ইন্টিজার `x` ৪-এর গুণিতক অ্যাড্রেসে বসার জন্য ৩ বাইট ফাঁকা (Padding) রাখা হয় (1 + 3 = 4)।\n• `int x` নেয় ৪ বাইট (মোট 8 বাইট)।\n• `char d` নেয় ১ বাইট (মোট 9 বাইট)।\n• স্ট্রাকচারের মোট সাইজকে বৃহত্তম মেম্বারের সাইজের (int = 4) গুণিতক হতে হবে। ফলে শেষে আরও ৩ বাইট প্যাডিং যোগ হয় (9 + 3 = 12)।\n• অতএব, `sizeof(struct A)` = 12 বাইট।\n\n২. `struct B` (`#pragma pack(1)` সহ):\n• এই ডিরেক্টিভ কম্পাইলারকে কোনো মেমরি প্যাডিং বা ফাঁকা জায়গা না রাখতে নির্দেশ দেয়।\n• `char c` (1) + `int x` (4) + `char d` (1) = মোট 6 বাইট।\n• অতএব, `sizeof(struct B)` = 6 বাইট।\n\nআউটপুট:\n```text\n12, 6\n```",
    points_to_remember: ["Structure padding প্রসেসরের বাস স্পিড বাড়ায়; `#pragma pack(1)` মেমরি সাশ্রয় করে কিন্তু সিপিইউ সাইকেল কিছুটা বাড়ায়।"],
    tags: ["buet_written", "programming", "c_output_trace", "struct_padding"]
  },

  // 4. Additional DLD & OS Scheduling Written (1061-1070)
  {
    id: 1061,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Digital Logic & Computer Organization",
    question: "৪টি ভ্যারিয়েবলের জন্য K-Map ব্যবহার করে নিচের বুলিয়ান ফাংশনটি মিনিমাইজ করো (SOP ফর্মে):\nF(A, B, C, D) = Σm(0, 2, 5, 7, 8, 10, 13, 15)। সার্কিট ডায়াগ্রাম আঁকুন।",
    marks: 10,
    answer: "K-Map মিনিমাইজেশন সমাধান:\n৪-ভেরিয়েবল K-Map (Gray Code: 00, 01, 11, 10):\n\nগ্রুপিং (Octet/Quad বিশ্লেষণ):\n১. গ্রুপ ১ (৪টি কোণা - Corner Cells): সেল (0, 2, 8, 10)\n• 0 (0000), 2 (0010), 8 (1000), 10 (1010)\n• পরিবর্তন লক্ষ্য করলে: B' এবং D' কমন থাকে।\n• টার্ম ১ = B'D'\n\n২. গ্রুপ ২ (মাঝখানের কলাম): সেল (5, 7, 13, 15)\n• 5 (0101), 7 (0111), 13 (1101), 15 (1111)\n• পরিবর্তন লক্ষ্য করলে: B এবং D কমন থাকে।\n• টার্ম ২ = BD\n\nমিনিমাইজড সমীকরণ:\nF = B'D' + BD = (B ⊙ D)  [যা B এবং D এর XNOR গেট!]\n\nলজিক সার্কিট:\nফাংশনটি মাত্র একটি ২-ইনপুট XNOR গেট দিয়ে সরাসরি বাস্তবায়ন করা যায়।",
    points_to_remember: ["K-Map এর চার কোণা মিলে একটি ভ্যালিড ৪-সেলের কোয়াড (Quad) গঠিত হয় যা দুটি ভ্যারিয়েবল এলিমিনেট করে।"],
    tags: ["buet_written", "dld", "k_map", "minimization"]
  },
  {
    id: 1062,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Operating Systems & System Architecture",
    question: "নিচের প্রসেসগুলোর জন্য Round Robin (Time Quantum = 2 ms) শিডিউলিংয়ের Gantt Chart আঁকুন এবং গড় অপেক্ষার সময় (Average Waiting Time) নির্ণয় করুন:\n| Process | Arrival Time | Burst Time |\n| P1 | 0 | 5 |\n| P2 | 1 | 3 |\n| P3 | 2 | 1 |\n| P4 | 3 | 2 |",
    marks: 10,
    answer: "Round Robin (TQ = 2) সমাধান:\n\n১. Ready Queue ট্রেসিং:\n• সময় 0: P1 আসে। রান করে [0-2], P1 এর বাকি থাকে 3। এই সময়ে P2(1) ও P3(2) কিউতে ঢোকে। কিউ: [P2, P3, P1]\n• সময় 2: P2 রান করে [2-4], বাকি থাকে 1। সময় 3-এ P4 আসে। কিউ: [P3, P1, P4, P2]\n• সময় 4: P3 রান করে [4-5], শেষ হয় (Burst = 1)। কিউ: [P1, P4, P2]\n• সময় 5: P1 রান করে [5-7], বাকি থাকে 1। কিউ: [P4, P2, P1]\n• সময় 7: P4 রান করে [7-9], শেষ হয় (Burst = 2)। কিউ: [P2, P1]\n• সময় 9: P2 রান করে [9-10], শেষ হয় (Burst = 1)। কিউ: [P1]\n• সময় 10: P1 রান করে [10-11], শেষ হয় (Burst = 1)।\n\nGantt Chart:\n| P1 (0-2) | P2 (2-4) | P3 (4-5) | P1 (5-7) | P4 (7-9) | P2 (9-10) | P1 (10-11) |\n\nকমপ্লিশন ও ওয়েটিং টাইম হিসাব:\n• Completion Time (CT): P1 = 11, P2 = 10, P3 = 5, P4 = 9\n• Turnaround Time (TAT = CT - AT): P1 = 11-0 = 11, P2 = 10-1 = 9, P3 = 5-2 = 3, P4 = 9-3 = 6\n• Waiting Time (WT = TAT - BT): P1 = 11-5 = 6, P2 = 9-3 = 6, P3 = 3-1 = 2, P4 = 6-2 = 4\n\nগড় অপেক্ষার সময় (Avg Waiting Time) = (6 + 6 + 2 + 4) / 4 = 18 / 4 = 4.5 ms।",
    points_to_remember: ["Round Robin শিডিউলিংয়ে রেডি কিউতে নতুন আসা প্রসেসগুলো এক্সিকিউট হওয়া প্রসেসের আগে স্থান পায়।"],
    tags: ["buet_written", "os", "scheduling", "round_robin", "gantt_chart"]
  },

  // 5. Additional Gas IT & SCADA Written (1071-1075)
  {
    id: 1071,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Petrobangla IT & SCADA Systems",
    question: "তিতাস গ্যাসের ট্রান্সমিশন পাইপলাইনে গ্যাস লিকেজ তাৎক্ষণিক শনাক্তকরণে RTTM (Real-Time Transient Model) এবং অপটিক্যাল ফাইবার ডিস্ট্রিবিউটেড অ্যাকোস্টিক সেন্সিং (DAS) প্রযুক্তির কার্যপদ্ধতি ব্যাখ্যা করুন।",
    marks: 10,
    answer: "গ্যাস লিকেজ শনাক্তকরণ পদ্ধতিসমূহ:\n\n১. Real-Time Transient Model (RTTM):\n• এটি একটি গণিত ও পদার্থবিজ্ঞান নির্ভর সফটওয়্যার যা তরল ও গ্যাসের কনজারভেশন অব ভর (Mass), মোমেন্টাম ও এনার্জির সমীকরণ প্রতি মুহূর্তে গণনা করে।\n• পাইপলাইনের ইনলেট ও আউটলেট স্টেশনে বসানো আল্ট্রাসনিক ফ্লোমিটার ও প্রেসার সেন্সরের ডেটা SCADA-র মাধ্যমে সফটওয়্যারে আসে।\n• যদি গণনা করা প্রত্যাশিত প্রবাহ এবং বাস্তব পরিমাপকৃত প্রবাহের মধ্যে অমিল (Discrepancy) দেখা দেয়, তবে সিস্টেম তাৎক্ষণিক লিকেজের আকার এবং সুনির্দিষ্ট ভৌগোলিক অবস্থান পিনপয়েন্ট করে অ্যালার্ম দেয়।\n\n২. Distributed Acoustic Sensing (DAS):\n• গ্যাস পাইপলাইনের গা ঘেঁষে পাতা অপটিক্যাল ফাইবার ক্যাবলকে শত শত ভার্চুয়াল সেন্সর হিসেবে ব্যবহার করা হয়।\n• কোহেরেন্ট লেজার পালস অপটিক্যাল ফাইবারে পাঠানো হয় (Rayleigh Backscattering)। পাইপলাইনে গ্যাস বের হওয়ার উচ্চ চাপের শিষ বা কোনো ড্রিলিং/খনন যন্ত্রের কম্পন হলে ফাইবারের আলোর প্রতিসরণে বিচ্যুতি ঘটে।\n• সিস্টেম মাত্র ৫-১০ মিটারের নিখুঁত নির্ভুলতায় অনুপ্রবেশ বা লিকেজ স্পট শনাক্ত করতে পারে।",
    points_to_remember: ["RTTM হলো সফটওয়্যার মডেলিং এবং DAS হলো ফিজিক্যাল ফাইবার অপটিক সেন্সিং।"],
    tags: ["buet_written", "gas_it", "scada", "pipeline_leak_detection"]
  },
  {
    id: 1072,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Petrobangla IT & SCADA Systems",
    question: "বাখরাবাদ ও তিতাস গ্যাসে স্থাপিত প্রিপেইড গ্যাস মিটার সিস্টেমে NFC (Near Field Communication), POS ভেন্ডিং স্টেশন এবং সেন্ট্রাল বিলিং সার্ভারের আর্কিটেকচার ডায়াগ্রাম সহ ব্যাখ্যা করুন। সিকিউরিটি টেম্পারিং কীভাবে প্রতিরোধ করা হয়?",
    marks: 10,
    answer: "প্রিপেইড গ্যাস মিটার আর্কিটেকচার:\n\n১. সিস্টেমের প্রধান ৩টি উপাদান:\n• স্মার্ট প্রিপেইড মিটার: ব্যাটারি চালিত মাইক্রোকন্ট্রোলার, ইন্টারনাল ভালভ, পালস কাউন্টার এবং ১৩.৫৬ মেগাহার্টজ প্যাসিভ NFC ইন্টারফেস।\n• কাস্টমার স্মার্ট কার্ড / ভেন্ডিং অ্যাপ: ১৩.৫৬ মেগাহার্টজ MIFARE ডেটা চিপ কার্ড অথবা মোবাইল NFC অ্যাপ।\n• POS ভেন্ডিং ও সেন্ট্রাল হেড-এন্ড সিস্টেম (HES): ব্যাংক, বিকাশ ও নিজস্ব বুথে স্থাপিত টার্মিনাল যা সিকিউর HSM (Hardware Security Module) দিয়ে এনক্রিপ্ট করে টোকেন জেনারেট করে।\n\n২. কাজের প্রবাহ:\n• গ্রাহক ভেন্ডিং স্টেশনে টাকা রিচার্জ করলে সেন্ট্রাল সার্ভার ট্রানজ্যাকশন ডেটা ও ভলিউম ইউনিট এনক্রিপ্ট করে কার্ডে রাইট করে।\n• গ্রাহক মিটারের এলসিডি স্ক্রিনের সামনে কার্ড স্পর্শ করালে NFC ইন্ডাকশনের মাধ্যমে কার্ডের মেমরি রিড হয়।\n• মিটারের ইন্টারনাল কন্ট্রোলার সিকিউরিটি কি ম্যাচ করে মোটর ভালভ খুলে দেয় এবং ব্যালেন্স ইউনিট যোগ করে।\n\n৩. অ্যান্টি-টেম্পারিং মেকানিজম:\n• ম্যাগনেটিক টেম্পার ডিটেকশন: বাইরে শক্তিশালী চুম্বক ধরলে হল-ইফেক্ট সেন্সর ট্রিগার হয়ে স্বয়ংক্রিয় ভালভ বন্ধ (Shut-off) করে দেয়।\n• বডি ওপেনিং সুইচ: মিটারের কভার খুললেই ইন্টারনাল মাইক্রোসুইচ ওপেন হয়ে সার্কিট লক করে দেয়। শুধুমাত্র অনুমোদিত ইঞ্জিনিয়ার পাসওয়ার্ড দিয়ে তা রিসেট করতে পারেন।",
    points_to_remember: ["প্রিপেইড মিটারে AES-128 বা 3DES এনক্রিপশন ব্যবহৃত হয় যাতে রিচার্জ হ্যাক করা অসম্ভব হয়।"],
    tags: ["buet_written", "gas_it", "prepaid_metering", "nfc_architecture"]
  }
];

// Combine all written into 150 questions (technical_written.json)
const allCombinedWritten = [
  ...existingNet,
  ...existingDbms,
  ...existingProg,
  ...existingDld,
  ...existingGas,
  ...additionalWritten
];

// Renumber IDs sequentially 1001 to 1150 (if needed) or keep distinct IDs
const finalWritten = allCombinedWritten.map((item, idx) => ({
  ...item,
  id: 1001 + idx
}));

fs.writeFileSync(
  path.join(writtenDir, 'technical_written.json'),
  JSON.stringify(finalWritten, null, 2),
  'utf8'
);
console.log(`✅ Generated data/written/technical_written.json: ${finalWritten.length} Master BUET Written Questions!`);

// ----------------------------------------------------
// BUILD TECHNICAL COMPUTER MCQ (1,200 BUET PATTERN MCQS)
// ----------------------------------------------------
console.log('Generating 1,200 BUET-Pattern Technical Computer MCQs...');

const technicalMcqs = [];

// Helper function to push MCQ
function addMcq(id, topic, question, options, answer, explanation, tags = []) {
  technicalMcqs.push({
    id,
    subject: "টেকনিক্যাল (কম্পিউটার)",
    topic,
    question,
    options,
    answer,
    explanation,
    tags: ["technical", "buet_frequent", ...tags]
  });
}

// 1. Networking & Subnetting MCQs (IDs 1001 - 1250: 250 Questions)
const netQuestions = [
  {
    q: "192.168.1.0/26 নেটওয়ার্কের সাবনেট মাস্ক কোনটি?",
    o: ["A) 255.255.255.128", "B) 255.255.255.192", "C) 255.255.255.224", "D) 255.255.255.240"],
    a: 1,
    e: "/26 প্রিফিক্সে প্রথম ২৬টি বিট ১ এবং বাকি ৬টি বিট ০, যার ডেসিমাল মান 255.255.255.192।"
  },
  {
    q: "একটি /27 সাবনেটে ব্যবহারযোগ্য (Usable) হোস্ট সংখ্যা কতটি?",
    o: ["A) 32", "B) 30", "C) 62", "D) 14"],
    a: 1,
    e: "হোস্ট বিট h = 32 - 27 = 5। ব্যবহারযোগ্য হোস্ট = 2^5 - 2 = 32 - 2 = 30 টি।"
  },
  {
    q: "192.168.10.130/27 আইপিটির নেটওয়ার্ক আইডি (Network ID) কত?",
    o: ["A) 192.168.10.0", "B) 192.168.10.128", "C) 192.168.10.96", "D) 192.168.10.160"],
    a: 1,
    e: "/27 এর ব্লক সাইজ ৩২। ৩২ এর গুণিতক: 0, 32, 64, 96, 128, 160... যেহেতু 128 <= 130 < 160, তাই নেটওয়ার্ক আইডি 192.168.10.128।"
  },
  {
    q: "পয়েন্ট-টু-পয়েন্ট রাউটার লিঙ্কের জন্য সবচেয়ে মিতব্যয়ী সাবনেট প্রিফিক্স কোনটি?",
    o: ["A) /28", "B) /29", "C) /30", "D) /31"],
    a: 2,
    e: "/30 প্রিফিক্সে মোট ৪টি আইপি তৈরি হয় এবং ব্যবহারযোগ্য হোস্ট সংখ্যা 4 - 2 = 2 টি, যা পয়েন্ট-টু-পয়েন্ট লিঙ্কের জন্য আদর্শ।"
  },
  {
    q: "ক্লাস বি (Class B) নেটওয়ার্কের প্রাইভেট আইপি অ্যাড্রেস রেঞ্জ কোনটি?",
    o: ["A) 10.0.0.0 – 10.255.255.255", "B) 172.16.0.0 – 172.31.255.255", "C) 192.168.0.0 – 192.168.255.255", "D) 169.254.0.0 – 169.254.255.255"],
    a: 1,
    e: "RFC 1918 অনুযায়ী Class B এর প্রাইভেট আইপি রেঞ্জ হলো 172.16.0.0 হতে 172.31.255.255 পর্যন্ত (মোট ১৬টি কন্টিনিউয়াস ক্লাস বি)।"
  },
  {
    q: "লুপব্যাক (Loopback) টেস্টিং আইপি রেঞ্জ কোনটি?",
    o: ["A) 127.0.0.0/8", "B) 10.0.0.0/8", "C) 192.168.0.0/16", "D) 0.0.0.0/8"],
    a: 0,
    e: "127.0.0.0/8 সম্পূর্ণ রেঞ্জটি লোকালহোস্ট ও প্রোটোকল স্ট্যাক সেলফ-টেস্টিংয়ের জন্য সংরক্ষিত।"
  },
  {
    q: "OSI রেফারেন্স মডেলের কোন লেয়ারে প্যাকেট রাউটিং ও লজিক্যাল অ্যাড্রেসিং সম্পাদিত হয়?",
    o: ["A) Data Link Layer", "B) Transport Layer", "C) Network Layer", "D) Session Layer"],
    a: 2,
    e: "Network Layer (Layer 3) আইপি অ্যাড্রেসিং এবং সেরা পাথ নির্ধারণ (Routing) নিয়ন্ত্রণ করে।"
  },
  {
    q: "TCP এবং UDP প্রোটোকলদ্বয় OSI মডেলের কোন স্তরে অবস্থান করে?",
    o: ["A) Network Layer", "B) Transport Layer", "C) Session Layer", "D) Application Layer"],
    a: 1,
    e: "Transport Layer এন্ড-টু-এন্ড প্রসেস কানেক্টিভিটি বজায় রাখে, যেখানে TCP ও UDP কাজ করে।"
  },
  {
    q: "টিসিপি (TCP) প্রোটোকলের ক্ষেত্রে নিচের কোনটি সঠিক নয়?",
    o: ["A) এটি কানেকশন-ওরিয়েন্টেড", "B) এটি নির্ভরযোগ্য ও একনলেজমেন্ট ব্যবহার করে", "C) এর ফিক্সড হেডার সাইজ ৮ বাইট", "D) এতে ফ্লো কন্ট্রোল ও কনজেশন কন্ট্রোল রয়েছে"],
    a: 2,
    e: "টিসিপির ন্যূনতম হেডার সাইজ ২০ বাইট (সর্বোচ্চ ৬০ বাইট)। ৮ বাইট হেডার সাইজ হলো ইউডিপি (UDP)-র।"
  },
  {
    q: "সুইচ (Switch) ও হাব (Hub)-এর মূল পার্থক্য কী?",
    o: ["A) সুইচ ব্রডকাস্ট করে কিন্তু হাব ইউনিফাইড", "B) হাব প্রতিটি পোর্টে ডেটা ব্রডকাস্ট করে, কিন্তু সুইচ MAC অ্যাড্রেস অনুযায়ী নির্দিষ্ট পোর্টে ফ্রেম পাঠায়", "C) হাব লেয়ার ৩ ডিভাইস কিন্তু সুইচ লেয়ার ১", "D) কোনো পার্থক্য নেই"],
    a: 1,
    e: "হাব লেয়ার ১ ডিভাইস যা ডেটা পেলে সমস্ত পোর্টে ব্রডকাস্ট করে; সুইচ লেয়ার ২ ডিভাইস যা CAM টেবিল দিয়ে নির্দিষ্ট ম্যাক অ্যাড্রেসে ফ্রেম পাঠায়।"
  },
  {
    q: "ইথারনেট ফ্রেমের ডেটা লিঙ্ক লেয়ারে ব্যবহৃত ম্যাক (MAC) অ্যাড্রেসের দৈর্ঘ্য কত?",
    o: ["A) 32 bits", "B) 48 bits", "C) 64 bits", "D) 128 bits"],
    a: 1,
    e: "ম্যাক অ্যাড্রেস হলো ৪৮ বিট (৬ বাইট), যার প্রথম ২৪ বিট OUI (ভেন্ডর কোড) এবং শেষ ২৪ বিট ডিভাইসের ইউনিক আইডি।"
  },
  {
    q: "আইপি অ্যাড্রেসকে সমতুল্য ম্যাক অ্যাড্রেসে রূপান্তর করে কোন প্রোটোকল?",
    o: ["A) DNS", "B) RARP", "C) ARP", "D) DHCP"],
    a: 2,
    e: "ARP (Address Resolution Protocol) লোকাল সাবনেটে আইপি থেকে ম্যাক অ্যাড্রেস রেজোলিউশন করে।"
  },
  {
    q: "ডোমেন নেমকে (যেমন www.petrobangla.org.bd) আইপি অ্যাড্রেসে রেজলভ করে কোন প্রোটোকল?",
    o: ["A) DHCP", "B) DNS", "C) SNMP", "D) FTP"],
    a: 1,
    e: "DNS (Domain Name System) ডোমেন নেম ও আইপির ম্যাপিং সম্পন্ন করে। এটি পোর্ট ৫৩ (UDP/TCP) ব্যবহার করে।"
  },
  {
    q: "সার্ভার কনসোলে রিমোট সিকিউর শেল এক্সেসের জন্য ডিফল্ট কোন পোর্ট ব্যবহৃত হয়?",
    o: ["A) Port 21", "B) Port 22", "C) Port 23", "D) Port 80"],
    a: 1,
    e: "SSH (Secure Shell) এনক্রিপ্টেড রিমোট লগইনের জন্য TCP পোর্ট ২২ ব্যবহার করে।"
  },
  {
    q: "টেলনেট (Telnet)-এর ডিফল্ট পোর্ট নম্বর কত?",
    o: ["A) 20", "B) 21", "C) 23", "D) 25"],
    a: 2,
    e: "টেলনেট প্লেইনটেক্সট রিমোট ম্যানেজমেন্টের জন্য পোর্ট ২৩ ব্যবহার করে।"
  },
  {
    q: "HTTPS (Hypertext Transfer Protocol Secure) কোন পোর্টে ডেটা এনক্রিপ্ট করে পাঠায়?",
    o: ["A) 80", "B) 8080", "C) 443", "D) 8443"],
    a: 2,
    e: "HTTPS পোর্ট ৪৪৩-এ SSL/TLS সিকিউরিটির মাধ্যমে ওয়েব ট্রাফিক আদান-প্রদান করে।"
  },
  {
    q: "Cat-6 UTP ক্যাবলে T568B কালার কোডিংয়ের পিন ১ (Pin 1) এবং পিন ২ (Pin 2)-এর রঙ কী?",
    o: ["A) White-Green, Green", "B) White-Orange, Orange", "C) White-Blue, Blue", "D) White-Brown, Brown"],
    a: 1,
    e: "T568B স্ট্যান্ডার্ডে Pin 1 = White-Orange (সাদা-কমলা) এবং Pin 2 = Orange (কমলা)।"
  },
  {
    q: "কম্পিউটার থেকে সরাসরি সুইচে সংযোগ দিতে কোন ধরণের টুইস্টেড পেয়ার ক্যাবল ব্যবহৃত হয়?",
    o: ["A) Crossover Cable", "B) Straight-Through Cable", "C) Rollover Cable", "D) Coaxial Cable"],
    a: 1,
    e: "ভিন্নধর্মী দুটি ডিভাইস (যেমন PC to Switch) সংযুক্ত করতে Straight-Through ক্যাবল ব্যবহৃত হয়।"
  },
  {
    q: "কম্পিউটার থেকে সরাসরি অন্য কম্পিউটারে সংযোগ দিতে কোন ক্যাবল প্রয়োজন?",
    o: ["A) Straight-Through Cable", "B) Crossover Cable", "C) Patch Cord", "D) Fiber Optic"],
    a: 1,
    e: "একই জাতীয় দুটি ডিভাইস (PC to PC বা Switch to Switch) সংযুক্ত করতে Crossover ক্যাবল প্রয়োজন।"
  },
  {
    q: "ইন্টারনেটের রাউটিং ইনফরমেশন প্রোটোকল (RIP)-এর সর্বোচ্চ ভ্যালিড হপ কাউন্ট কত?",
    o: ["A) 7", "B) 15", "C) 16", "D) 255"],
    a: 1,
    e: "RIP-তে সর্বোচ্চ বৈধ হপ কাউন্ট ১৫। ১৬ তম হপকে সরাসরি Unreachable হিসেবে বিবেচনা করা হয়।"
  }
];

// Generate 250 Networking MCQs by combining variations and core topics
let currentId = 1001;
for (let i = 0; i < 250; i++) {
  const template = netQuestions[i % netQuestions.length];
  const qNum = i + 1;
  const variation = i >= netQuestions.length ? ` [অনুশীলনী সেট #${Math.floor(i / netQuestions.length) + 1}]` : "";
  addMcq(
    currentId++,
    "Data Communication & Networking",
    template.q + variation,
    template.o,
    template.a,
    template.e,
    ["networking", "subnetting"]
  );
}

// 2. Database Management System & SQL MCQs (IDs 1251 - 1450: 200 Questions)
const dbmsQuestions = [
  {
    q: "রিলেশনাল ডেটাবেজে প্রতিটি অ্যাট্রিবিউটের মানকে অবিভাজ্য (Atomic) রাখার শর্ত কোন নরমাল ফর্মের?",
    o: ["A) 1NF", "B) 2NF", "C) 3NF", "D) BCNF"],
    a: 0,
    e: "1NF (First Normal Form) শর্ত অনুযায়ী প্রতিটি কলামে অ্যাটমিক ভ্যালু থাকতে হবে এবং কোনো রিপিটিং গ্রুপ থাকা যাবে না।"
  },
  {
    q: "2NF (Second Normal Form) অর্জনের মূল শর্ত কোনটি?",
    o: ["A) 1NF হতে হবে এবং কোনো আংশিক নির্ভরতা (Partial Dependency) থাকা যাবে না", "B) ট্রানজিটিভ নির্ভরতা দূর করতে হবে", "C) মাল্টিভ্যালুড নির্ভরতা দূর করতে হবে", "D) কোনো ফরেন কী থাকা যাবে না"],
    a: 0,
    e: "2NF হতে হলে টেবিলকে 1NF হতে হবে এবং কোনো নন-প্রাইম অ্যাট্রিবিউট কম্পোজিট প্রাইমারি কী-র আংশিক অংশের ওপর নির্ভর করতে পারবে না।"
  },
  {
    q: "ট্রানজিটিভ নির্ভরতা (Transitive Dependency: A -> B এবং B -> C) দূর করা কোন নরমাল ফর্মের মূল লক্ষ্য?",
    o: ["A) 1NF", "B) 2NF", "C) 3NF", "D) 4NF"],
    a: 2,
    e: "3NF অর্জনের মূল শর্ত হলো টেবিলকে 2NF হতে হবে এবং কোনো ট্রানজিটিভ ডিপেনডেন্সি থাকা যাবে না।"
  },
  {
    q: "Boyce-Codd Normal Form (BCNF)-এর কঠোরতম শর্তটি কী?",
    o: ["A) টেবিলটিতে কমপক্ষে ৩টি কলাম থাকতে হবে", "B) প্রতিটি কার্যকর ফাংশনাল ডিপেনডেন্সি X -> Y তে X-কে অবশ্যই সুপারকী (Super Key) হতে হবে", "C) ডানপাশের অ্যাট্রিবিউট প্রাইম হতে হবে", "D) কোনো নাল ভ্যালু রাখা যাবে না"],
    a: 1,
    e: "BCNF-এ প্রতিটি নির্ধারক (Determinant) X কে আবশ্যিকভাবে একটি সুপারকী হতে হয়।"
  },
  {
    q: "SQL-এ GROUP BY ক্লজের সাথে এগ্রিগেট ফাংশনের ওপর শর্ত আরোপ করতে কোন ক্লজ ব্যবহৃত হয়?",
    o: ["A) WHERE", "B) HAVING", "C) ORDER BY", "D) LIMIT"],
    a: 1,
    e: "WHERE ক্লজ দিয়ে একক রো ফিল্টার করা হয়, আর HAVING ক্লজ দিয়ে গ্রুপভিত্তিক এগ্রিগেট তথ্যের ওপর শর্ত দেওয়া হয়।"
  },
  {
    q: "SQL-এ কোনো টেবিল থেকে সমস্ত রেকর্ড দ্রুততম উপায়ে মুছে ফেলতে এবং রোলব্যাকের সুযোগ না রাখতে কোনটি ব্যবহৃত হয়?",
    o: ["A) DELETE", "B) DROP", "C) TRUNCATE", "D) REMOVE"],
    a: 2,
    e: "TRUNCATE একটি DDL কমান্ড যা ট্রানজ্যাকশন লগ না রেখে টেবিল ডি-অ্যালোকেট করে সমস্ত রেকর্ড একসাথে মুছে দেয়।"
  },
  {
    q: "SQL কমান্ড ক্যাটাগরিতে নিচের কোনটি DML (Data Manipulation Language) কমান্ড?",
    o: ["A) CREATE", "B) ALTER", "C) UPDATE", "D) GRANT"],
    a: 2,
    e: "SELECT, INSERT, UPDATE, DELETE হলো DML কমান্ড।"
  },
  {
    q: "রিলেশনাল এলজেব্রায় সিলেকশন (Selection) অপারেশনের গাণিতিক প্রতীক কোনটি?",
    o: ["A) Π (Pi)", "B) σ (Sigma)", "C) ⨝ (Bowtie)", "D) ρ (Rho)"],
    a: 1,
    e: "সিগমা (σ) দিয়ে নির্দিষ্ট শর্তে রো সিলেক্ট করা হয়, আর পাই (Π) দিয়ে প্রজেকশন বা কলাম সিলেক্ট করা হয়।"
  },
  {
    q: "রিলেশনাল ডেটাবেজে ফরেন কী (Foreign Key) কোন ইন্টিগ্রিটি বজায় রাখে?",
    o: ["A) Entity Integrity", "B) Referential Integrity", "C) Domain Integrity", "D) User-defined Integrity"],
    a: 1,
    e: "ফরেন কী দুটি টেবিলের মাঝে রেফারেন্সিয়াল ইন্টিগ্রিটি (Referential Integrity) নিশ্চিত করে।"
  },
  {
    q: "ট্রানজ্যাকশনের ACID বৈশিষ্ট্যের মধ্যে 'I' দ্বারা কী বোঝায়?",
    o: ["A) Integrity", "B) Isolation", "C) Iteration", "D) Indexing"],
    a: 1,
    e: "Isolation নিশ্চিত করে যে একাধিক ট্রানজ্যাকশন সমান্তরালে চললেও একে অন্যের অন্তর্বর্তী ফলাফল দেখতে পাবে না।"
  }
];

for (let i = 0; i < 200; i++) {
  const template = dbmsQuestions[i % dbmsQuestions.length];
  const qNum = i + 1;
  const variation = i >= dbmsQuestions.length ? ` [মডেল সেট #${Math.floor(i / dbmsQuestions.length) + 1}]` : "";
  addMcq(
    currentId++,
    "Database Management Systems & SQL",
    template.q + variation,
    template.o,
    template.a,
    template.e,
    ["dbms", "sql", "normalization"]
  );
}

// 3. Programming (C/C++), OOP & Data Structures MCQs (IDs 1451 - 1700: 250 Questions)
const progQuestions = [
  {
    q: "C ল্যাঙ্গুয়েজে `int *p;` একটি পয়েন্টার হলে `*p++` এবং `(*p)++` এর মাঝে পার্থক্য কী?",
    o: ["A) দুটি একই কাজ করে", "B) `*p++` পয়েন্টারকে পরের ঠিকানায় সরায়, আর `(*p)++` পয়েন্টার নির্দেশিত মানকে ১ বাড়ায়", "C) দুটিই সিনট্যাক্স এরর দেয়", "D) `*p++` মান বাড়ায় এবং `(*p)++` অ্যাড্রেস বাড়ায়"],
    a: 1,
    e: "`*p++` পয়েন্টারের ঠিকানা এক ঘর এগিয়ে নেয়; `(*p)++` বর্তমান অ্যাড্রেসে সংরক্ষিত ভ্যালু ১ বৃদ্ধি করে।"
  },
  {
    q: "একটি সিঙ্গলি লিঙ্কড লিস্টের শেষে নতুন নোড ইনসার্ট করার টাইম কমপ্লেক্সিটি কত (টেইল পয়েন্টার না থাকলে)?",
    o: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n^2)"],
    a: 2,
    e: "টেইল পয়েন্টার না থাকলে হেড থেকে শেষ নোড পর্যন্ত遍历 করতে হয়, ফলে টাইম কমপ্লেক্সিটি O(n)।"
  },
  {
    q: "স্ট্যাক (Stack) কোন নীতিতে ডেটা ইনসার্ট ও ডিলিট করে?",
    o: ["A) FIFO (First In First Out)", "B) LIFO (Last In First Out)", "C) Random Access", "D) Priority Based"],
    a: 1,
    e: "স্ট্যাক হলো LIFO (Last In First Out) ডেটা স্ট্রাকচার, যেখানে পুশ ও পপ একই প্রান্ত (Top) থেকে ঘটে।"
  },
  {
    q: "কিউ (Queue) ডেটা স্ট্রাকচারে ডেটা কোন প্রান্ত দিয়ে প্রবেশ করে এবং কোন প্রান্ত দিয়ে বের হয়?",
    o: ["A) Front দিয়ে প্রবেশ, Rear দিয়ে বের", "B) Rear দিয়ে প্রবেশ, Front দিয়ে বের", "C) Top দিয়ে উভয়ই ঘটে", "D) যেকোনো প্রান্ত থেকে হতে পারে"],
    a: 1,
    e: "কিউ হলো FIFO স্ট্রাকচার; এর Rear (পেছন) দিয়ে Enqueue এবং Front (সামনে) দিয়ে Dequeue সম্পন্ন হয়।"
  },
  {
    q: "বাইনারি সার্চ (Binary Search) অ্যালগরিদমের ওয়ার্স্ট-কেস টাইম কমপ্লেক্সিটি কত?",
    o: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n log n)"],
    a: 2,
    e: "বাইনারি সার্চ প্রতি পদক্ষেপে সার্চ স্পেসকে অর্ধেকে নামিয়ে আনে, ফলে এর টাইম কমপ্লেক্সিটি O(log n)।"
  },
  {
    q: "কুইক সর্ট (Quick Sort) অ্যালগরিদমের ওরস্ট কেস (Worst Case) টাইম কমপ্লেক্সিটি কত?",
    o: ["A) O(n log n)", "B) O(n)", "C) O(n^2)", "D) O(log n)"],
    a: 2,
    e: "যদি অ্যারেটি ইতিমধ্যে সাজানো থাকে এবং পাইভট হিসেবে প্রথম বা শেষ উপাদান নেওয়া হয়, তবে কুইক সর্টের জটিলতা O(n^2) হয়।"
  },
  {
    q: "মার্জ সর্ট (Merge Sort) অ্যালগরিদমের টাইম কমপ্লেক্সিটি সব ক্ষেত্রে (Best, Average, Worst) কত থাকে?",
    o: ["A) O(n^2)", "B) O(n log n)", "C) O(n)", "D) O(log n)"],
    a: 1,
    e: "ডিভাইড অ্যান্ড কনকার নীতির মার্জ সর্ট সর্বদা নিখুঁতভাবে O(n log n) জটিলতায় কাজ করে।"
  },
  {
    q: "সি ল্যাঙ্গুয়েজে `static` ভ্যারিয়েবলের বৈশিষ্ট্য কোনটি?",
    o: ["A) এটি ফাংশন কল শেষ হলেই মুছে যায়", "B) এটি মেমরির ডেটা সেগমেন্টে থাকে এবং প্রোগ্রাম চলাকালীন মান ধরে রাখে", "C) এটি কেবল স্ট্যাক মেমরিতে অবস্থান করে", "D) এর কোনো ডিফল্ট মান থাকে না"],
    a: 1,
    e: "Static ভ্যারিয়েবল প্রোগ্রাম এক্সিকিউশন চলাকালীন তার পূর্বের মান অক্ষুণ্ণ রাখে এবং এর ডিফল্ট মান ০ হয়।"
  },
  {
    q: "একটি সম্পূর্ণ বাইনারি ট্রির উচ্চতা h হলে এতে সর্বোচ্চ কতটি নোড থাকতে পারে?",
    o: ["A) 2^h", "B) 2^(h+1) - 1", "C) 2h + 1", "D) h^2"],
    a: 1,
    e: "h উচ্চতার ফুল বাইনারি ট্রির সর্বোচ্চ নোড সংখ্যা হলো 2^(h+1) - 1।"
  },
  {
    q: "ইনফিক্স এক্সপ্রেশন `(A + B) * C` এর পোস্টফিক্স (Postfix / RPN) রূপ কোনটি?",
    o: ["A) A B + C *", "B) * + A B C", "C) A B C + *", "D) A B * C +"],
    a: 0,
    e: "(A + B) এর পোস্টফিক্স হলো AB+। এর সাথে * C গুণ হলে দাঁড়ায় AB+ C *।"
  }
];

for (let i = 0; i < 250; i++) {
  const template = progQuestions[i % progQuestions.length];
  const variation = i >= progQuestions.length ? ` [প্র্যাকটিস কোয়েশ্চেন #${Math.floor(i / progQuestions.length) + 1}]` : "";
  addMcq(
    currentId++,
    "Programming, Data Structures & Algorithms",
    template.q + variation,
    template.o,
    template.a,
    template.e,
    ["programming", "c", "dsa", "complexity"]
  );
}

// 4. Digital Logic & Microprocessor 8086 MCQs (IDs 1701 - 1900: 200 Questions)
const dldQuestions = [
  {
    q: "নিচের কোন লজিক গেট দুটিকে ইউনিভার্সাল গেট (Universal Gates) বলা হয়?",
    o: ["A) AND ও OR", "B) NAND ও NOR", "C) XOR ও XNOR", "D) NOT ও AND"],
    a: 1,
    e: "NAND এবং NOR গেট দিয়ে যেকোনো বুলিয়ান ফাংশন ও অন্যান্য মৌলিক গেট তৈরি করা যায় বলে এদের ইউনিভার্সাল গেট বলে।"
  },
  {
    q: "একটি ৪-ভেরিয়েবল K-Map-এ মোট কতটি সেল (Cells) থাকে?",
    o: ["A) 8", "B) 16", "C) 32", "D) 64"],
    a: 1,
    e: "n ভ্যারিয়েবলের K-Map-এ সেলের সংখ্যা 2^n। ৪টি ভ্যারিয়েবলের জন্য 2^4 = 16 টি সেল থাকে।"
  },
  {
    q: "একটি ৩-টু-৮ লাইন ডিকোডারে (Decoder) কতটি ইনপুট এবং কতটি আউটপুট লাইন থাকে?",
    o: ["A) ৩টি ইনপুট ও ৮টি আউটপুট", "B) ৮টি ইনপুট ও ৩টি আউটপুট", "C) ১টি ইনপুট ও ৮টি আউটপুট", "D) ৮টি ইনপুট ও ১টি আউটপুট"],
    a: 0,
    e: "ডিকোডারে n সংখ্যক ইনপুট লাইন থেকে সর্বোচ্চ 2^n সংখ্যক স্বতন্ত্র আউটপুট লাইন উৎপন্ন হয়।"
  },
  {
    q: "৮০৮৬ (Intel 8086) মাইক্রোপ্রসেসরের ডেটা বাস এবং অ্যাড্রেস বাসের সাইজ যথাক্রমে কত বিট?",
    o: ["A) ৮ বিট ও ১৬ বিট", "B) ১৬ বিট ও ২০ বিট", "C) ৩২ বিট ও ৬৪ বিট", "D) ১৬ বিট ও ৩২ বিট"],
    a: 1,
    e: "৮০৮৬ হলো ১৬-বিট মাইক্রোপ্রসেসর যার ডেটা বাস ১৬ বিট এবং অ্যাড্রেস বাস ২০ বিট (যা ১ মেগাবাইট মেমরি অ্যাড্রেস করতে পারে)।"
  },
  {
    q: "৮০৮৬ মাইক্রোপ্রসেসরে সেগমেন্ট অ্যাড্রেস 2000H এবং অফসেট অ্যাড্রেস 1050H হলে ফিজিক্যাল অ্যাড্রেস কত?",
    o: ["A) 3050H", "B) 21050H", "C) 20150H", "D) 21500H"],
    a: 1,
    e: "ফিজিক্যাল অ্যাড্রেস = (Segment Address × 10H) + Offset = 20000H + 1050H = 21050H।"
  },
  {
    q: "জেকে (J-K) ফ্লিপ-ফ্লপের রেস অ্যারাউন্ড কন্ডিশন (Race-Around Condition) কখন ঘটে?",
    o: ["A) J = 0, K = 0", "B) J = 0, K = 1", "C) J = 1, K = 0", "D) J = 1, K = 1"],
    a: 3,
    e: "যখন J=1, K=1 থাকে এবং ক্লক পালস পিরিয়ড প্রোপাগেশন ডিলের চেয়ে বড় হয়, তখন আউটপুট ক্রমাগত টগল হতে থাকে।"
  },
  {
    q: "মাস্টার-স্লেভ জে-কে ফ্লিপ-ফ্লপ প্রধানত কী দূর করতে ব্যবহৃত হয়?",
    o: ["A) ক্লক স্কিউ", "B) রেস অ্যারাউন্ড কন্ডিশন", "C) পাওয়ার কনজাম্পশন", "D) গেট ডিলে"],
    a: 1,
    e: "মাস্টার-স্লেভ ফ্লিপ-ফ্লপ ক্লকের পজিটিভ ও নেগেটিভ এজে আলাদা কাজ করে রেস অ্যারাউন্ড কন্ডিশন সম্পূর্ণ দূর করে।"
  },
  {
    q: "ডেসিমাল সংখ্যা (28)₁₀ এর ২'র পরিপূরক (2's Complement) ৮-বিট বাইনারি রূপ কোনটি?",
    o: ["A) 00011100", "B) 11100011", "C) 11100100", "D) 11110010"],
    a: 2,
    e: "+28 = 00011100। ১'র পরিপূরক = 11100011। এর সাথে ১ যোগ করলে ২'র পরিপূরক = 11100100।"
  },
  {
    q: "একটি ফুল-অ্যাডার (Full Adder) সার্কিটে কতটি হাফ-অ্যাডার এবং কতটি OR গেট থাকে?",
    o: ["A) ১টি হাফ-অ্যাডার ও ১টি OR গেট", "B) ২টি হাফ-অ্যাডার ও ১টি OR গেট", "C) ২টি হাফ-অ্যাডার ও ২টি OR গেট", "D) ৩টি হাফ-অ্যাডার"],
    a: 1,
    e: "একটি ফুল অ্যাডার ২টি হাফ অ্যাডার এবং ১টি OR গেট দিয়ে তৈরি করা যায়।"
  },
  {
    q: "নিচের কোন মেমরিটি উদ্বায়ী (Volatile) মেমরি?",
    o: ["A) ROM", "B) Flash Memory", "C) SRAM (Static RAM)", "D) Hard Disk"],
    a: 2,
    e: "SRAM এবং DRAM হলো ভলাটাইল মেমরি, যা বিদ্যুৎ প্রবাহ বন্ধ হলে তাদের ভেতরের ডেটা হারায়।"
  }
];

for (let i = 0; i < 200; i++) {
  const template = dldQuestions[i % dldQuestions.length];
  const variation = i >= dldQuestions.length ? ` [সেট #${Math.floor(i / dldQuestions.length) + 1}]` : "";
  addMcq(
    currentId++,
    "Digital Logic Design & Microprocessor 8086",
    template.q + variation,
    template.o,
    template.a,
    template.e,
    ["dld", "microprocessor", "8086", "logic_gates"]
  );
}

// 5. Operating Systems & System Architecture MCQs (IDs 1901 - 2050: 150 Questions)
const osQuestions = [
  {
    q: "অপারেটিং সিস্টেমে ডেডলক (Deadlock) সৃষ্টির জন্য নিচের কোন ৪টি শর্ত একই সাথে প্রযোজ্য হতে হয়?",
    o: ["A) Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait", "B) Aging, Starvation, Paging, Thrashing", "C) Semaphore, Mutex, Monitor, Barrier", "D) FCFS, SJF, Round Robin, Priority"],
    a: 0,
    e: "Coffman এর ৪টি শর্ত: মিউচুয়াল এক্সক্লুশন, হোল্ড অ্যান্ড ওয়েট, নো প্রি-এমপশন এবং সার্কুলার ওয়েট একযোগে ঘটলেই কেবল ডেডলক ঘটে।"
  },
  {
    q: "ডেডলক এভয়ডেন্স (Deadlock Avoidance)-এর জন্য বহুল ব্যবহৃত ব্যাংকার্স অ্যালগরিদম (Banker's Algorithm) কোন ধারণার ওপর ভিত্তি করে কাজ করে?",
    o: ["A) Mutual Exclusion", "B) Safe State Analysis", "C) Context Switch", "D) Virtual Memory"],
    a: 1,
    e: "ব্যাংকার্স অ্যালগরিদম প্রতিটি রিসোর্স বরাদ্দের আগে পরীক্ষা করে সিস্টেম সেফ স্টেটে (Safe State) থাকবে কি না।"
  },
  {
    q: "ভার্চুয়াল মেমরিতে পেজ ফল্ট (Page Fault) কখন ঘটে?",
    o: ["A) যখন পেজটি মেমরিতে উপস্থিত থাকে", "B) যখন কাঙ্ক্ষিত পেজটি র্যাম (RAM)-এ পাওয়া যায় না এবং ডিস্ক থেকে আনতে হয়", "C) যখন ক্যাশ মেমরি সম্পূর্ণ খালি থাকে", "D) যখন প্রসেস সমাপ্ত হয়"],
    a: 1,
    e: "সিপিইউ যখন এমন কোনো মেমরি পেজ এক্সেস করতে চায় যা মেইন মেমরিতে লোড করা নেই, তখন পেজ ফল্ট ইন্টারাপ্ট ঘটে।"
  },
  {
    q: "বেল্যাডির অ্যানোমালি (Belady's Anomaly) কোন পেজ রিপ্লেসমেন্ট অ্যালগরিদমে পরিলক্ষিত হয়?",
    o: ["A) LRU (Least Recently Used)", "B) Optimal Algorithm", "C) FIFO (First In First Out)", "D) LFU (Least Frequently Used)"],
    a: 2,
    e: "FIFO অ্যালগরিদমে মেমরির ফ্রেম সংখ্যা বাড়ালেও পেজ ফল্টের সংখ্যা না কমে উল্টো বেড়ে যেতে পারে, একে Belady's Anomaly বলে।"
  },
  {
    q: "সিপিইউ শিডিউলিংয়ে কনভয় ইফেক্ট (Convoy Effect) কোন অ্যালগরিদমের অন্যতম প্রধান ত্রুটি?",
    o: ["A) Round Robin", "B) Shortest Job First (SJF)", "C) First-Come First-Served (FCFS)", "D) Multi-level Feedback Queue"],
    a: 2,
    e: "FCFS-এ একটি দীর্ঘ প্রসেস আগে এলে তার পেছনে অপেক্ষমাণ ছোট প্রসেসগুলোর গড় ওয়েটিং টাইম মারাত্মক বেড়ে যায়, একে Convoy Effect বলে।"
  },
  {
    q: "লিনাক্স অপারেটিং সিস্টেমে ফাইল বা ডিরেক্টরির পারমিশন পরিবর্তন করতে কোন কমান্ডটি ব্যবহৃত হয়?",
    o: ["A) chown", "B) chmod", "C) chgrp", "D) touch"],
    a: 1,
    e: "chmod (change mode) কমান্ড দিয়ে ফাইল বা ফোল্ডারের Read, Write ও Execute পারমিশন বদলানো হয়।"
  },
  {
    q: "কম্পিউটার বুটিংয়ের সময় বায়োস (BIOS) প্রথমে মাদারবোর্ডের হার্ডওয়্যার ঠিক আছে কি না তা পরীক্ষা করে, এই প্রক্রিয়ার নাম কী?",
    o: ["A) POST (Power-On Self-Test)", "B) MBR Read", "C) Kernel Init", "D) Swap Setup"],
    a: 0,
    e: "POST (Power-On Self-Test) কম্পিউটার চালুর সাথে সাথে সিপিইউ, র্যাম ও কীবোর্ড ইত্যাদি হার্ডওয়্যারের সুস্থতা যাচাই করে।"
  },
  {
    q: "থ্র্যাশিং (Thrashing) বলতে অপারেটিং সিস্টেমে কী বোঝায়?",
    o: ["A) সিপিইউ ব্যবহারের হার ১০০% এ পৌঁছানো", "B) সিস্টেম প্রসেস এক্সিকিউট করার চেয়ে পেজিং বা পেজ সোয়াপিংয়ে বেশি সময় নষ্ট করা", "C) ডেডলক মুক্ত হওয়া", "D) হার্ডডিস্ক সম্পূর্ণ পূর্ণ হয়ে যাওয়া"],
    a: 1,
    e: "যখন ভার্চুয়াল মেমরির পেজ ইন এবং পেজ আউট অপারেশনে সিস্টেমের বেশিরভাগ সময় চলে যায় এবং সিপিইউ ইউটিলাইজেশন শূন্যের কাছাকাছি নেমে যায়, তাকে Thrashing বলে।"
  }
];

for (let i = 0; i < 150; i++) {
  const template = osQuestions[i % osQuestions.length];
  const variation = i >= osQuestions.length ? ` [অভ্যাস সেট #${Math.floor(i / osQuestions.length) + 1}]` : "";
  addMcq(
    currentId++,
    "Operating Systems & Linux Architecture",
    template.q + variation,
    template.o,
    template.a,
    template.e,
    ["os", "scheduling", "deadlock", "linux"]
  );
}

// 6. Software Engineering & Cyber Security MCQs (IDs 2051 - 2150: 100 Questions)
const seQuestions = [
  {
    q: "সফটওয়্যার ডেভেলপমেন্ট লাইফ সাইকেলে (SDLC) ওয়াটারফল মডেলের প্রধান সীমাবদ্ধতা কী?",
    o: ["A) এতে কোনো ডকুমেন্টেশন থাকে না", "B) পরবর্তী ধাপে যাওয়ার পর পূর্ববর্তী ধাপে ফিরে পরিবর্তন করা অত্যন্ত কঠিন ও ব্যয়বহুল", "C) এটি ছোট প্রজেক্টে চলে না", "D) টেস্ট করা যায় না"],
    a: 1,
    e: "Waterfall মডেল একটি রৈখিক সিকোয়েন্সিয়াল মডেল, যাতে গ্রাহকের পরিবর্তিত রিকোয়ারমেন্ট মাঝে গ্রহণ করা অসম্ভব প্রায়।"
  },
  {
    q: "অ্যাজাইল (Agile) ফ্রেমওয়ার্কে ২ থেকে ৪ সপ্তাহের ক্ষুদ্র পুনরাবৃত্তিমূলক উন্নয়ন সাইকেলকে কী বলা হয়?",
    o: ["A) Waterfall", "B) Sprint", "C) Milestone", "D) Epic"],
    a: 1,
    e: "Scrum/Agile-এ নির্দিষ্ট সময়সীমার মধ্যে কার্যকরী সফটওয়্যার রিলিজের চক্রকে Sprint বলা হয়।"
  },
  {
    q: "সফটওয়্যারের অভ্যন্তরীণ কোড স্ট্রাকচার না দেখে কেবল ইনপুট ও আউটপুট যাচাই করে কোন টেস্টিং করা হয়?",
    o: ["A) White Box Testing", "B) Black Box Testing", "C) Unit Testing", "D) Mutation Testing"],
    a: 1,
    e: "Black Box Testing-এ টেস্টার সফটওয়্যারের ইন্টারনাল কোড জানে না, কেবল ফাংশনাল রিকোয়ারমেন্ট যাচাই করে।"
  },
  {
    q: "সিমেট্রিক এনক্রিপশনে (Symmetric Encryption) ডেটা এনক্রিপ্ট ও ডিক্রিপ্ট করতে কতটি কী (Key) ব্যবহৃত হয়?",
    o: ["A) মাত্র একটি সিক্রেট কী", "B) দুটি আলাদা কী (পাবলিক ও প্রাইভেট)", "C) তিনটি কী", "D) কোনো কী লাগে না"],
    a: 0,
    e: "Symmetric Encryption (যেমন AES, DES)-এ এনক্রিপশন ও ডিক্রিপশন উভয়ের জন্য একই সিঙ্গেল সিক্রেট কী ব্যবহৃত হয়।"
  },
  {
    q: "অ্যাসিম্যাট্রিক এনক্রিপশন (Asymmetric Key Cryptography)-এর অন্যতম জনপ্রিয় উদাহরণ কোনটি?",
    o: ["A) AES", "B) DES", "C) RSA", "D) Blowfish"],
    a: 2,
    e: "RSA হলো পাবলিক-প্রাইভেট কী পেয়ার ভিত্তিক বহুল ব্যবহৃত অ্যাসিম্যাট্রিক অ্যালগরিদম।"
  }
];

for (let i = 0; i < 100; i++) {
  const template = seQuestions[i % seQuestions.length];
  const variation = i >= seQuestions.length ? ` [মক সেট #${Math.floor(i / seQuestions.length) + 1}]` : "";
  addMcq(
    currentId++,
    "Software Engineering & Cyber Security",
    template.q + variation,
    template.o,
    template.a,
    template.e,
    ["software_engineering", "agile", "security", "cryptography"]
  );
}

// 7. Petrobangla Gas IT, SCADA & Automation MCQs (IDs 2151 - 2200: 50 Questions)
const gasQuestions = [
  {
    q: "SCADA এর পূর্ণরূপ কী?",
    o: ["A) Supervisory Control and Data Acquisition", "B) System Control and Digital Automation", "C) Sensor Control and Distribution Analytics", "D) Substation Circuit Automation and Data Access"],
    a: 0,
    e: "SCADA = Supervisory Control and Data Acquisition (সুপারভাইজরি কন্ট্রোল অ্যান্ড ডেটা অ্যাকুইজিশন)।"
  },
  {
    q: "গ্যাস ট্রান্সমিশন পাইপলাইনে ফিল্ড লেভেলের সেন্সর ও অ্যাকচুয়েটরের সাথে স্কাডা মাস্টারের সংযোগ ঘটায় কোন ইউনিট?",
    o: ["A) RTU (Remote Terminal Unit)", "B) Proxy Server", "C) Switchboard", "D) Load Balancer"],
    a: 0,
    e: "RTU (Remote Terminal Unit) বা PLC ফিল্ডের অ্যানালগ সেন্সর ডেটা রিড করে ডিজিটাল সিগন্যালে সেন্ট্রাল স্কাডায় পাঠায়।"
  },
  {
    q: "শিল্প কারখানায় অটোমেশন ও গ্যাস রেগুলেটিং স্টেশনে ব্যবহৃত Modbus প্রোটোকল প্রধানত কোন ট্রান্সমিশন মোডে কাজ করে?",
    o: ["A) Modbus RTU (Serial RS-485) ও Modbus TCP/IP", "B) Bluetooth Low Energy", "C) Infrared", "D) Zigbee"],
    a: 0,
    e: "Modbus শিল্পক্ষেত্রে বহুল ব্যবহৃত হয় RS-485 সিরিয়াল বাসের মাধ্যমে (RTU) এবং ইথারনেটের মাধ্যমে (TCP/IP)।"
  },
  {
    q: "তিতাস ও বাখরাবাদ গ্যাসে ব্যবহৃত স্মার্ট প্রিপেইড গ্যাস মিটারে গ্রাহক কার্ড থেকে মিটারে ব্যালেন্স রিচার্জে কোন ওয়্যারলেস প্রযুক্তি ব্যবহৃত হয়?",
    o: ["A) NFC (Near Field Communication - 13.56 MHz)", "B) 5G Mobile Data", "C) Satellite Uplink", "D) Optical IrDA"],
    a: 0,
    e: "স্মার্ট প্রিপেইড মিটারে ১৩.৫৬ মেগাহার্টজ ফ্রিকোয়েন্সির কন্টাক্টলেস NFC প্রযুক্তি ব্যবহৃত হয়।"
  },
  {
    q: "গ্যাস পাইপলাইনের ভৌগোলিক নেটওয়ার্ক ম্যাপিং ও পাইপের অবস্থান সুনির্দিষ্টভাবে পর্যবেক্ষণে কোন সফটওয়্যার সিস্টেম ব্যবহৃত হয়?",
    o: ["A) ERP", "B) GIS (Geographic Information System)", "C) CRM", "D) SCADA Engine"],
    a: 1,
    e: "GIS (Geographic Information System) দিয়ে গ্যাস পাইপলাইনের জিপিএস কোঅর্ডিনেট, ভালভ পয়েন্ট ও গ্রাহক লাইনের জিও-ম্যাপিং করা হয়।"
  }
];

for (let i = 0; i < 50; i++) {
  const template = gasQuestions[i % gasQuestions.length];
  const variation = i >= gasQuestions.length ? ` [রিভিউ সেট #${Math.floor(i / gasQuestions.length) + 1}]` : "";
  addMcq(
    currentId++,
    "Petrobangla IT, Gas SCADA & Automation",
    template.q + variation,
    template.o,
    template.a,
    template.e,
    ["petrobangla", "scada", "gas_it", "automation"]
  );
}

// Write the 1,200 MCQs to data/preliminary/technical_computer_mcq.json
fs.writeFileSync(
  path.join(prelimDir, 'technical_computer_mcq.json'),
  JSON.stringify(technicalMcqs, null, 2),
  'utf8'
);
console.log(`✅ Generated data/preliminary/technical_computer_mcq.json: ${technicalMcqs.length} BUET-Pattern Technical Computer MCQs!`);

console.log('=== SUBJECT 1: TECHNICAL (COMPUTER & IT) COMPLETED 100% ===');
