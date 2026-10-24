const fs = require('fs');
const path = require('path');

const writtenDir = path.resolve(__dirname, '../data/written');

// Load existing 5 files
function loadJson(filename) {
  const p = path.join(writtenDir, filename);
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : [];
}

const net = loadJson('networking_written.json');
const dbms = loadJson('dbms_written.json');
const prog = loadJson('programming_written.json');
const dld = loadJson('dld_scheduling_written.json');
const gas = loadJson('gas_it_written.json');

console.log(`Current: net=${net.length}, dbms=${dbms.length}, prog=${prog.length}, dld=${dld.length}, gas=${gas.length}`);
const currentTotal = net.length + dbms.length + prog.length + dld.length + gas.length; // 110

// 40 questions to make total exactly 150
const extra40 = [
  // 1. Networking (10 questions)
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "একটি প্রতিষ্ঠান 192.168.100.0/24 নেটওয়ার্ক ব্লক পেয়েছে। তাদের ৪টি সাবনেট দরকার যাতে যথাক্রমে ৫০, ২৮, ১২ এবং ২টি হোস্ট থাকতে পারে। VLSM ব্যবহার করে প্রতিটি সাবনেটের জন্য সাবনেট মাস্ক, নেটওয়ার্ক আইডি, ভ্যালিড হোস্ট রেঞ্জ ও ব্রডকাস্ট আইডি ছক আকারে নির্ণয় করো।",
    marks: 10,
    answer: "VLSM সমাধান পদ্ধতি (সর্ববৃহৎ হোস্ট রিকোয়ারমেন্ট থেকে ছোট ক্রমে):\n\n১. সাবনেট ১ (৫০ হোস্ট):\n• সূত্র: 2^h - 2 >= 50 => h = 6 (2^6 = 64)।\n• প্রিফিক্স: 32 - 6 = /26 (মাস্ক: 255.255.255.192)। ব্লক সাইজ = 64।\n• Net ID: 192.168.100.0 | Host Range: 192.168.100.1 - 192.168.100.62 | Broadcast: 192.168.100.63\n\n২. সাবনেট ২ (২৮ হোস্ট):\n• 2^h - 2 >= 28 => h = 5 (2^5 = 32)।\n• প্রিফিক্স: 32 - 5 = /27 (মাস্ক: 255.255.255.224)। ব্লক সাইজ = 32।\n• Net ID: 192.168.100.64 | Host Range: 192.168.100.65 - 192.168.100.94 | Broadcast: 192.168.100.95\n\n৩. সাবনেট ৩ (১২ হোস্ট):\n• 2^h - 2 >= 12 => h = 4 (2^4 = 16)।\n• প্রিফিক্স: 32 - 4 = /28 (মাস্ক: 255.255.255.240)। ব্লক সাইজ = 16।\n• Net ID: 192.168.100.96 | Host Range: 192.168.100.97 - 192.168.100.110 | Broadcast: 192.168.100.111\n\n৪. সাবনেট ৪ (পয়েন্ট-টু-পয়েন্ট লিঙ্ক, ২ হোস্ট):\n• 2^h - 2 >= 2 => h = 2 (2^2 = 4)।\n• প্রিফিক্স: 32 - 2 = /30 (মাস্ক: 255.255.255.252)। ব্লক সাইজ = 4।\n• Net ID: 192.168.100.112 | Host Range: 192.168.100.113 - 192.168.100.114 | Broadcast: 192.168.100.115",
    points_to_remember: ["VLSM ক্যালকুলেশনে সর্বদা বড় হোস্ট রিকোয়ারমেন্ট আগে বরাদ্দ করতে হয়।"],
    tags: ["buet_written", "networking", "vlsm", "math"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "সুপারনেটিং বা সিআইডিআর রুট অ্যাগ্রিগেশন (CIDR Route Aggregation) কী? নিচের ৪টি ক্লাস C নেটওয়ার্ককে একটি সিঙ্গেল সুপারনেট রুটে রূপান্তর করো:\n192.168.16.0/24, 192.168.17.0/24, 192.168.18.0/24, 192.168.19.0/24।",
    marks: 8,
    answer: "সুপারনেটিং সমাধান:\n৩য় অক্টেটের বাইনারি বিশ্লেষণ:\n• 16 = 00010000 | 17 = 00010001 | 18 = 00010010 | 19 = 00010011\nপ্রথম ৬টি বিট (000100) চারটিতেই মিলে যায়।\nনতুন প্রিফিক্স দৈর্ঘ্য = 16 + 6 = /22।\nসুপারনেট মাস্ক: 255.255.252.0।\nসামারাইজড রুট: 192.168.16.0/22।",
    points_to_remember: ["সুপারনেটিং করতে হলে ব্লক সংখ্যা অবশ্যই ২-এর পাওয়ার (2, 4, 8, 16) হতে হবে।"],
    tags: ["buet_written", "networking", "supernetting", "cidr"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "VLAN (Virtual LAN) এবং 802.1Q ট্রাঙ্কিং কী? Router-on-a-Stick পদ্ধতির মাধ্যমে ইন্টার-ভিলেন রাউটিং কীভাবে বাস্তবায়িত হয়?",
    marks: 8,
    answer: "VLAN ও ট্রাঙ্কিং সমাধান:\n১. VLAN একই সুইচকে লজিক্যালি একাধিক ব্রডকাস্ট ডোমেনে বিভক্ত করে।\n২. IEEE 802.1Q ট্রাঙ্কিং একটি ফিজিক্যাল লিঙ্কে একাধিক VLAN ট্যাগ (VLAN ID) বহন করে।\n৩. Router-on-a-Stick পদ্ধতিতে সুইচের ট্রাঙ্ক পোর্ট রাউটারের সিঙ্গেল ইন্টারফেসে যুক্ত হয়। রাউটার ইন্টারফেসকে একাধিক সাব-ইন্টারফেসে (g0/0.10, g0/0.20) ভাগ করে `encapsulation dot1Q` দিয়ে প্রতিটি VLAN-এর গেটওয়ে কনফিগার করা হয়।",
    points_to_remember: ["Router-on-a-Stick এ সাব-ইন্টারফেস ব্যবহৃত হয়।"],
    tags: ["buet_written", "networking", "vlan", "trunking"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "NAT (Network Address Translation) কী? Static NAT, Dynamic NAT এবং PAT (Port Address Translation / NAT Overload)-এর মধ্যে তুলনামূলক পার্থক্য লিখুন।",
    marks: 8,
    answer: "NAT সমাধান:\nNAT লোকাল প্রাইভেট আইপিকে ইন্টারনেটে রাউটেবল পাবলিক আইপিতে রূপান্তর করে।\n১. Static NAT: ১টি প্রাইভেট আইপির জন্য নির্দিষ্ট ১টি পাবলিক আইপি (1-to-1)।\n২. Dynamic NAT: একাধিক পাবলিক আইপির পুল থেকে ফাঁকা আইপি বরাদ্দ (Many-to-Many)।\n৩. PAT: ১টি পাবলিক আইপির বিভিন্ন পোর্ট নম্বর (1024-65535) ব্যবহার করে বহু প্রাইভেট হোস্টকে ইন্টারনেটে পাঠায় (Many-to-1)।",
    points_to_remember: ["PAT আইপি অপচয় রোধে সর্বাধিক ব্যবহৃত।"],
    tags: ["buet_written", "networking", "nat", "pat"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "স্প্যানিং ট্রি প্রোটোকল (STP - IEEE 802.1D) নেটওয়ার্কে কীভাবে ব্রডকাস্ট ঝড় ও সুইচিং লুপ প্রতিরোধ করে? STP পোর্ট স্টেটসমূহ লিখুন।",
    marks: 8,
    answer: "STP সমাধান:\n১. STP সমস্ত সুইচের মধ্যে BPDU আদান-প্রদান করে সর্বনিম্ন ব্রিজ আইডি বিশিষ্ট সুইচকে Root Bridge নির্বাচন করে এবং অতিরিক্ত রিডান্ডেন্ট লিঙ্ক লজিক্যালি ব্লক করে দেয়।\n২. STP পোর্ট স্টেটসমূহ (৫টি ধাপ): Blocking -> Listening (15s) -> Learning (15s) -> Forwarding -> Disabled।",
    points_to_remember: ["STP ফরোয়ার্ডিংয়ে পৌঁছাতে মোট ৩০ সেকেন্ড সময় নেয়।"],
    tags: ["buet_written", "networking", "stp"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "IPSec আর্কিটেকচার ব্যাখ্যা করুন। AH এবং ESP এর মধ্যে পার্থক্য কী? Transport Mode বনাম Tunnel Mode ব্যাখ্যা করুন।",
    marks: 8,
    answer: "IPSec সমাধান:\n• AH: প্যাকেট অথেনটিকেশন ও ইন্টিগ্রিটি দেয়, এনক্রিপশন দেয় না।\n• ESP: ডেটা এনক্রিপশন (কনফিডেনশিয়ালিটি), অথেনটিকেশন ও ইন্টিগ্রিটি উভয়ই দেয়।\n• Transport Mode: শুধুমাত্র পেলোড এনক্রিপ্ট হয়, মূল হেডার অপরিবর্তিত থাকে (এন্ড-টু-এন্ড)।\n• Tunnel Mode: সম্পূর্ণ আইপি প্যাকেট এনক্রিপ্ট করে নতুন আইপি হেডার যুক্ত করা হয় (সাইট-টু-সাইট VPN)।",
    points_to_remember: ["VPN-এ সুরক্ষার জন্য Tunnel Mode ব্যবহৃত হয়।"],
    tags: ["buet_written", "networking", "ipsec", "vpn"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "BGP (Border Gateway Protocol) কীভাবে পাথ-ভেক্টর নীতির মাধ্যমে অটোনোমাস সিস্টেম (AS)-এর মধ্যে রুট নির্ধারণ করে? AS-Path কীভাবে লুপ প্রতিরোধ করে?",
    marks: 8,
    answer: "BGP সমাধান:\n১. BGP হলো ইন্টারনেটের মূল EGP প্রোটোকল (TCP Port 179)।\n২. এটি প্রতিটি রুটের সাথে সম্পূর্ণ অটোনোমাস সিস্টেম নম্বরের তালিকা (AS-Path) সংরক্ষণ করে।\n৩. কোনো আপডেটের AS-Path এ রাউটারের নিজস্ব AS নম্বর থাকলে তা তাৎক্ষণিক বাতিল করে লুপ প্রতিরোধ করে।",
    points_to_remember: ["BGP হলো পাথ-ভেক্টর এক্সটেরিয়র গেটওয়ে প্রোটোকল।"],
    tags: ["buet_written", "networking", "bgp"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "ডিস্ট্যান্স ভেক্টর এবং লিঙ্ক স্টেট রাউটিংয়ের ৪টি মৌলিক পার্থক্য লিখুন। কাউন্ট-টু-ইনফিনিটি সমস্যা কীভাবে সমাধান করা যায়?",
    marks: 8,
    answer: "রাউটিং সমাধান:\n১. অ্যালগরিদম: DV-এ Bellman-Ford; LS-এ Dijkstra SPF।\n২. পরিধি: DV কেবল প্রতিবেশীকে রাউটিং টেবিল পাঠায়; LS সম্পূর্ণ টপোলজি ম্যাপ তৈরি করে।\n৩. কনভার্জেন্স: DV ধীরগতির; LS দ্রুততম।\n৪. সমাধান: Split Horizon, Route Poisoning ও Hold-down Timers দিয়ে কাউন্ট-টু-ইনফিনিটি দূর করা হয়।",
    points_to_remember: ["RIP-তে সর্বোচ্চ বৈধ হপ কাউন্ট ১৫।"],
    tags: ["buet_written", "networking", "routing"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "IPv4 এবং IPv6 এর মধ্যে তুলনামূলক পার্থক্য ছক আকারে লিখুন। IPv6-এ কেন ব্রডকাস্ট অ্যাড্রেস বাদ দেওয়া হয়েছে?",
    marks: 8,
    answer: "IPv4 বনাম IPv6:\n১. সাইজ: IPv4 ৩২-বিট; IPv6 ১২৮-বিট।\n২. হেডার: IPv4 ভ্যারিয়েবল ২০-৬০ বাইট; IPv6 ফিক্সড ৪০ বাইট।\n৩. সিকিউরিটি: IPv4-এ IPSec অপশনাল; IPv6-এ IPSec বিল্ট-ইন।\n৪. ব্রডকাস্টের বিকল্প: IPv6-এ ব্রডকাস্ট ট্রাফিকের অপচয় রোধে Multicast ও Anycast ব্যবহৃত হয়।",
    points_to_remember: ["IPv6-এ ব্রডকাস্ট নেই, মাল্টিকাস্ট ও এনিকাস্ট রয়েছে।"],
    tags: ["buet_written", "networking", "ipv6"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Computer Networking & Subnetting",
    question: "প্যাকেট ফিল্টারিং ফায়ারওয়াল (Stateless) এবং স্টেটফুল ইন্সপেকশন ফায়ারওয়াল (Stateful Inspection)-এর কার্যপ্রণালীর তুলনা করুন।",
    marks: 8,
    answer: "ফায়ারওয়াল তুলনা:\n• Stateless Packet Filter: প্রতিটি প্যাকেটকে স্বাধীনভাবে যাচাই করে (আইপি, পোর্ট, প্রোটোকল); আগের সংযোগের ইতিহাস মনে রাখে না।\n• Stateful Inspection: সংযোগের স্টেট টেবিল (State Table) রক্ষণাবেক্ষণ করে। বৈধ বহির্গামী রিকোয়েস্টের ফিরতি প্যাকেট স্বয়ংক্রিয়ভাবে ইনকামিং পার হতে দেয়। অনেক বেশি সুরক্ষিত।",
    points_to_remember: ["Stateful ফায়ারওয়াল ৩-ওয়ে হ্যান্ডশেক ট্র্যাক করে।"],
    tags: ["buet_written", "networking", "firewall"]
  },

  // 2. DBMS (8 questions)
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "একটি রিলেশন R(A, B, C, D, E, F) এবং FDs: { AB -> C, C -> D, D -> B, D -> E, E -> F }। ক্যান্ডিডেট কী নির্ণয় করো এবং এটি কোন নরমাল ফর্মে আছে দেখাও।",
    marks: 10,
    answer: "সমাধান:\n১. ক্লোজার: AB+ = {A,B,C,D,E,F}; AC+ = {A,C,D,B,E,F}; AD+ = {A,D,B,C,E,F}। ক্যান্ডিডেট কী = {AB, AC, AD}।\n২. প্রাইম অ্যাট্রিবিউট = {A, B, C, D}; নন-প্রাইম = {E, F}।\n৩. D -> E নির্ভরতায় D প্রাইম অ্যাট্রিবিউট হওয়ায় আংশিক নির্ভরতা তৈরি করে (2NF ভঙ্গ হয়)। সুতরাং রিলেশনটি 1NF-এ আছে।",
    points_to_remember: ["নন-প্রাইম অ্যাট্রিবিউট প্রাইম অ্যাট্রিবিউটের ওপর আংশিক নির্ভর করলে 2NF নষ্ট হয়।"],
    tags: ["buet_written", "dbms", "normalization", "math"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "ট্রানজ্যাকশনের ACID প্রোপার্টিজ (Atomicity, Consistency, Isolation, Durability) বাস্তব ব্যাংক/বিলিং উদাহরণের সাহায্যে ব্যাখ্যা করুন। 2PL প্রোটোকল কীভাবে কাজ করে?",
    marks: 10,
    answer: "ACID সমাধান:\n১. Atomicity: অল-অর-নাথিং নীতি (মাঝপথে ক্র্যাশ করলে সম্পূর্ণ রোলব্যাক)।\n২. Consistency: ট্রানজ্যাকশনের আগে ও পরে মোট ব্যালেন্স ও ইন্টিগ্রিটি ঠিক থাকা।\n৩. Isolation: কনকারেন্ট ট্রানজ্যাকশন একে অপর থেকে সম্পূর্ণ বিচ্ছিন্ন থাকা।\n৪. Durability: কমিট হওয়ার পর সিস্টেমে স্থায়ীভাবে ডেটা সংরক্ষিত থাকা।\n৫. 2PL (Two-Phase Locking): Growing Phase (কেবল লক গ্রহণ করা যায়) এবং Shrinking Phase (কেবল লক রিলিজ করা যায়)।",
    points_to_remember: ["2PL সিরিয়ালাইজেবিলিটি নিশ্চিত করে কিন্তু ডেডলক রোধ করতে পারে না।"],
    tags: ["buet_written", "dbms", "acid", "2pl"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "B-Tree এবং B+ Tree ইনডেক্সিংয়ের ৪টি মৌলিক পার্থক্য লিখুন। DBMS-এ কেন B+ Tree বেশি পছন্দ করা হয়?",
    marks: 8,
    answer: "B-Tree বনাম B+ Tree:\n১. ডেটা লোকেশন: B-Tree-তে সব নোডেই রেকর্ড পয়েন্টার থাকে; B+ Tree-তে সমস্ত আসল রেকর্ড ডেটা শুধুমাত্র লিফ নোডে থাকে।\n২. লিফ নোড লিঙ্ক: B+ Tree-র সমস্ত লিফ নোড ডাবলি লিঙ্কড লিস্ট দিয়ে যুক্ত, ফলে রেঞ্জ কুয়েরি অত্যন্ত দ্রুত চলে।\n৩. ফ্যান-আউট: B+ Tree-র ইন্টারনাল নোডে কেবল কী থাকায় উচ্চ ফ্যান-আউট পাওয়া যায় এবং ট্রির উচ্চতা কম হয়।",
    points_to_remember: ["B+ Tree ডিস্ক I/O ব্যাপকভাবে হ্রাস করে।"],
    tags: ["buet_written", "dbms", "b_plus_tree"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "ডেটাবেজ ট্রিগার কী? BEFORE এবং AFTER ট্রিগারের পার্থক্য লিখুন। তিতাস গ্যাসে বিল আপডেটের অডিট লগে স্বয়ংক্রিয়ভাবে ডেটা লেখার SQL ট্রিগার লিখুন।",
    marks: 10,
    answer: "ট্রিগার কোড সমাধান:\n```sql\nCREATE TRIGGER trg_GasBillAudit\nAFTER UPDATE ON CustomerBill\nFOR EACH ROW\nBEGIN\n    INSERT INTO BillAuditLog (BillID, OldAmount, NewAmount, ChangedBy, ChangeDate)\n    VALUES (OLD.BillID, OLD.TotalAmount, NEW.TotalAmount, CURRENT_USER(), NOW());\nEND;\n```",
    points_to_remember: ["ট্রিগারে OLD ও NEW কিওয়ার্ড পূর্ববর্তী ও পরিবর্তিত মান নির্দেশ করে।"],
    tags: ["buet_written", "dbms", "triggers", "sql"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "সিম্পল ভিউ এবং মেটেরিয়ালাইজড ভিউ (Materialized View)-এর মধ্যে পার্থক্য কী এবং কখন মেটেরিয়ালাইজড ভিউ ব্যবহৃত হয়?",
    marks: 8,
    answer: "ভিউ তুলনা:\n• Simple View: ভার্চুয়াল টেবিল; প্রতি কোয়েরিতে ডায়নামিকালি চলে, নিজস্ব কোনো ফিজিক্যাল স্টোরেজ নেই।\n• Materialized View: কোয়েরির ফলাফল ফিজিক্যাল ডিস্কে টেবিলের মতো সেভ রাখে। কোটি কোটি রেকর্ডের জটিল এগ্রিগেশন (SUM, AVG) রিপোর্টে কোয়েরি দ্রুত করতে ব্যবহৃত হয়।",
    points_to_remember: ["Materialized View ডেটা ওয়্যারহাউসে কোয়েরি স্পিড বাড়ায়।"],
    tags: ["buet_written", "dbms", "views"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "টাইমস্ট্যাম্প অর্ডারিং প্রোটোকল এবং থমাস রাইট রুল (Thomas Write Rule) ব্যাখ্যা করুন।",
    marks: 8,
    answer: "টাইমস্ট্যাম্প সমাধান:\n• Timestamp Ordering: প্রতিটি ট্রানজ্যাকশন শুরুর সময় TS পায়। যদি TS(Ti) < W-timestamp(Q) হয়, তবে Ti আউট-অব-অর্ডার রিড করতে চাইলে রোলব্যাক হয়।\n• Thomas Write Rule: যদি TS(Ti) < W-timestamp(Q) হয় (ইতিমধ্যে কোনো নতুন ট্রানজ্যাকশন রাইট করে ফেলেছে), তবে Ti-এর রাইট অপারেশনকে রোলব্যাক না করে স্রেফ অবহেলা (Ignore) করা হয়।",
    points_to_remember: ["Thomas Write Rule অপ্রয়োজনীয় রোলব্যাক কমায়।"],
    tags: ["buet_written", "dbms", "concurrency"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "ER মডেল থেকে রিলেশনাল টেবিলে রূপান্তরের নিয়ম: (ক) 1:N সম্পর্ক (খ) M:N সম্পর্ক।",
    marks: 8,
    answer: "ম্যাপিং সমাধান:\n১. 1:N সম্পর্ক: '1' পাশের প্রাইমারি কী 'N' পাশের টেবিলে ফরেন কী হিসেবে যুক্ত হয়।\n২. M:N সম্পর্ক: একটি নতুন জংশন টেবিল (Junction Table) তৈরি হয় যেখানে উভয় টেবিলের প্রাইমারি কী মিলে কম্পোজিট প্রাইমারি কী গঠিত হয়।",
    points_to_remember: ["M:N সম্পর্কের জন্য সর্বদা ৩টি টেবিল লাগে।"],
    tags: ["buet_written", "dbms", "er_mapping"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "রিলেশনাল অ্যালজেব্রায় ন্যাচারাল জয়েন ও ডিভিশন (Division) অপারেশন ব্যাখ্যা করুন। 'সকল গ্যাস ফিল্ড পরিদর্শনকারী পরিদর্শক' বের করার এক্সপ্রেশন লিখুন।",
    marks: 8,
    answer: "রিলেশনাল অ্যালজেব্রা সমাধান:\nResult = Π_InspectorName (Inspection) - Π_InspectorName ( (Π_InspectorName(Inspection) × GasFields) - Inspection )\nসংক্ষেপে: Result = Π_{InspectorName, FieldName}(Inspection) ÷ Π_{FieldName}(GasFields)।",
    points_to_remember: ["Division অপারেশন 'FOR ALL' কোয়েরির সমতুল্য।"],
    tags: ["buet_written", "dbms", "relational_algebra"]
  },

  // 3. Programming & DSA (8 questions)
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "C Programming & Output Tracing",
    question: "সিঙ্গলি লিঙ্কড লিস্ট ইটারেটিভ পদ্ধতিতে রিভার্স করার পূর্ণাঙ্গ C ফাংশন লিখুন এবং টাইম ও স্পেস কমপ্লেক্সিটি কত?",
    marks: 10,
    answer: "C কোড সমাধান:\n```c\nstruct Node* reverseList(struct Node* head) {\n    struct Node *prev = NULL, *current = head, *next = NULL;\n    while (current != NULL) {\n        next = current->next;\n        current->next = prev;\n        prev = current;\n        current = next;\n    }\n    return prev;\n}\n```\nTime Complexity: O(n), Space Complexity: O(1)।",
    points_to_remember: ["৩টি পয়েন্টার দিয়ে ইন-প্লেস রিভার্স সম্পন্ন হয়।"],
    tags: ["buet_written", "dsa", "linked_list", "c_code"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "C Programming & Output Tracing",
    question: "নিচের C কোডের আউটপুট কী হবে:\n```c\n#include <stdio.h>\nstruct A { char c; int x; char d; };\n#pragma pack(1)\nstruct B { char c; int x; char d; };\nint main() {\n    printf(\"%zu, %zu\\n\", sizeof(struct A), sizeof(struct B));\n    return 0;\n}\n```",
    marks: 8,
    answer: "আউটপুট: `12, 6`\nব্যাখ্যা: `struct A`-তে মেমরি প্যাডিংয়ের কারণে 1 + 3(প্যাড) + 4 + 1 + 3(প্যাড) = 12 বাইট হয়। `#pragma pack(1)` থাকায় `struct B`-তে কোনো প্যাডিং ছাড়া 1 + 4 + 1 = 6 বাইট হয়।",
    points_to_remember: ["`#pragma pack(1)` স্ট্রাকচার প্যাডিং বন্ধ করে দেয়।"],
    tags: ["buet_written", "programming", "c_output_trace"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "C Programming & Output Tracing",
    question: "BST (Binary Search Tree)-তে নতুন নোড ইনসার্ট করার রিকার্সিভ C ফাংশন লিখুন এবং টাইম কমপ্লেক্সিটি উল্লেখ করুন।",
    marks: 10,
    answer: "BST কোড:\n```c\nstruct Node* insert(struct Node* node, int key) {\n    if (node == NULL) return createNode(key);\n    if (key < node->key) node->left = insert(node->left, key);\n    else if (key > node->key) node->right = insert(node->right, key);\n    return node;\n}\n```\nTime Complexity: গড় O(log n), ওরস্ট கேস O(n)।",
    points_to_remember: ["ইন-অর্ডার ট্রাভার্সাল BST উপাদানগুলোকে সর্টেড অর্ডারে দেয়।"],
    tags: ["buet_written", "dsa", "bst", "c_code"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "C Programming & Output Tracing",
    question: "গ্রাফ ট্রাভার্সালে BFS এবং DFS এর মধ্যে ৪টি পার্থক্য এবং টাইম ও স্পেস কমপ্লেক্সিটি লিখুন।",
    marks: 8,
    answer: "BFS বনাম DFS:\n১. ডেটা স্ট্রাকচার: BFS কিউ (Queue); DFS স্ট্যাক (Stack / Recursion)।\n২. শর্টেস্ট পাথ: আনওয়েটেড গ্রাফে BFS শর্টেস্ট পাথ নিশ্চিত করে; DFS করে না।\n৩. কমপ্লেক্সিটি: Time Complexity উভয়ের O(V + E); Space Complexity O(V)।",
    points_to_remember: ["BFS লেভেল অনুযায়ী আগায়, DFS গভীরে প্রবেশ করে।"],
    tags: ["buet_written", "dsa", "graph", "bfs_dfs"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "C Programming & Output Tracing",
    question: "0/1 Knapsack সমস্যার ডায়নামিক প্রোগ্রামিং রিকারেন্স সমীকরণ ও টাইম কমপ্লেক্সিটি ব্যাখ্যা করুন।",
    marks: 10,
    answer: "DP সমাধান:\n$$DP[i][w] = \\max(DP[i-1][w], v_i + DP[i-1][w - w_i]) \\quad (\\text{if } w_i \\le w)$$\nTime Complexity: O(n × W)। Space Complexity: O(n × W) যা অপটিমাইজ করে O(W) করা যায়।",
    points_to_remember: ["0/1 Knapsack গ্রিডি দিয়ে সমাধান করা যায় না।"],
    tags: ["buet_written", "dsa", "dynamic_programming"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "C Programming & Output Tracing",
    question: "KMP স্ট্রিং ম্যাচিং অ্যালগরিদমের কার্যপদ্ধতি ও LPS অ্যারের ভূমিকা ব্যাখ্যা করুন।",
    marks: 8,
    answer: "KMP সমাধান:\n১. KMP টেক্সটের পয়েন্টার পেছনে ব্যাকট্র্যাক করে না।\n২. প্রি-প্রসেসিংয়ের মাধ্যমে LPS (Longest Proper Prefix which is also Suffix) অ্যারে তৈরি করে।\n৩. মিসম্যাচ হলে LPS মান দেখে সরাসরি পরবর্তী সম্ভাব্য পজিশনে স্কিপ করে। Time Complexity: O(N + M)।",
    points_to_remember: ["KMP ব্রুট-ফোর্সের চেয়ে অনেক দ্রুত O(N+M)।"],
    tags: ["buet_written", "dsa", "kmp"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "C Programming & Output Tracing",
    question: "সি ল্যাঙ্গুয়েজে ফাংশন পয়েন্টার (Function Pointer) কী? উদাহরণ সহ কলব্যাক মেকানিজম ব্যাখ্যা করুন।",
    marks: 8,
    answer: "ফাংশন পয়েন্টার কোড:\n```c\nint add(int a, int b) { return a + b; }\nvoid compute(int x, int y, int (*op)(int, int)) {\n    printf(\"Result: %d\\n\", op(x, y));\n}\nint main() {\n    int (*fptr)(int, int) = add;\n    compute(5, 4, fptr); // আউটপুট: 9\n    return 0;\n}\n```",
    points_to_remember: ["ফাংশন পয়েন্টার দিয়ে ইভেন্ট হ্যান্ডলার ও প্লাগইন তৈরি হয়।"],
    tags: ["buet_written", "programming", "function_pointers"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "C Programming & Output Tracing",
    question: "মেমরি লিক কী? malloc, calloc, realloc, free এবং মেমরি লিক প্রতিরোধের উপায় লিখুন।",
    marks: 8,
    answer: "মেমরি লিক সমাধান:\n১. হিপ মেমরি বরাদ্দ নেওয়ার পর `free()` না করে পয়েন্টার হারিয়ে ফেললে মেমরি লিক হয়।\n২. `malloc()` গারবেজ রাখে, `calloc()` ০ দিয়ে ইনিশিয়ালাইজ করে, `realloc()` সাইজ বাড়ায়/কমায়, `free()` রিলিজ করে।\n৩. প্রতিরোধের উপায়: প্রতি `malloc` এর পর `free` করা এবং `ptr = NULL` সেট করা; Valgrind দিয়ে চেক করা।",
    points_to_remember: ["মেমরি ফ্রি করার পর পয়েন্টারকে NULL না করলে Dangling Pointer হয়।"],
    tags: ["buet_written", "programming", "memory_leak"]
  },

  // 4. DLD & Microprocessor (7 questions)
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Digital Logic & Computer Organization",
    question: "K-Map ব্যবহার করে ফাংশনটি মিনিমাইজ করো (SOP): F(A, B, C, D) = Σm(0, 2, 5, 7, 8, 10, 13, 15)। লজিক গেট আঁকো।",
    marks: 10,
    answer: "K-Map সমাধান:\n১. চার কোণা সেল (0, 2, 8, 10) থেকে পাওয়া যায়: B'D' ।\n২. মাঝখানের কলাম সেল (5, 7, 13, 15) থেকে পাওয়া যায়: BD ।\nফলাফল: F = B'D' + BD = (B ⊙ D)  [XNOR গেট]।",
    points_to_remember: ["চার কোণার সেলগুলো মিলে ৪-সেলের কোয়াড তৈরি করে।"],
    tags: ["buet_written", "dld", "k_map"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Operating Systems & System Architecture",
    question: "প্রসেস P1(BT=5), P2(BT=3), P3(BT=1), P4(BT=2) এর জন্য Round Robin (TQ=2) শিডিউলিংয়ের Gantt Chart ও গড় অপেক্ষার সময় নির্ণয় করো।",
    marks: 10,
    answer: "Gantt Chart: | P1 (0-2) | P2 (2-4) | P3 (4-5) | P1 (5-7) | P4 (7-9) | P2 (9-10) | P1 (10-11) |\nWaiting Time: P1 = 6, P2 = 6, P3 = 2, P4 = 4 ms।\nগড় অপেক্ষার সময় = (6 + 6 + 2 + 4) / 4 = 4.5 ms।",
    points_to_remember: ["Round Robin এ টাইম কোয়ান্টাম শেষ হলে প্রসেস রেডি কিউয়ের পেছনে যায়।"],
    tags: ["buet_written", "os", "scheduling", "round_robin"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Digital Logic & Computer Organization",
    question: "Intel 8086 এর IVT আর্কিটেকচার ব্যাখ্যা করুন। NMI এবং INTR এর পার্থক্য কী?",
    marks: 8,
    answer: "৮০৮৬ IVT:\n১. মেমরির প্রথম ১ কিবি (00000H - 003FFH) ২৫৬টি ইন্টারাপ্ট ভেক্টরের জন্য সংরক্ষিত (প্রতিটি ৪ বাইট)।\n২. NMI (পিন ১৭) সফটওয়্যার দিয়ে মাস্ক করা যায় না (জরুরি পাওয়ার ফেইলিউর/প্যারিটি এরর)।\n৩. INTR (পিন ১৮) IF ফ্ল্যাগ দিয়ে মাস্ক করা যায় (সাধারণ আই/ও ডিভাইস)।",
    points_to_remember: ["IVT-র মোট সাইজ ১ কিলোবাইট।"],
    tags: ["buet_written", "microprocessor", "8086", "ivt"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Digital Logic & Computer Organization",
    question: "৮০৮৬ এর ৪টি অ্যাড্রেসিং মোড (Immediate, Direct, Register Indirect, Based-Indexed) উদাহরণ সহ লিখুন।",
    marks: 8,
    answer: "অ্যাড্রেসিং মোড:\n১. Immediate: `MOV AX, 1050H` (সরাসরি ডেটা)।\n২. Direct: `MOV AX, [5000H]` (মেমরির অফসেট)।\n৩. Register Indirect: `MOV AX, [BX]` (রেজিস্টারে সংরক্ষিত অফসেট)।\n৪. Based-Indexed: `MOV AX, [BX + SI + 10H]` (ম্যাট্রিক্স/অ্যারে এক্সেস)।",
    points_to_remember: ["Based-Indexed মোড স্ট্রাকচার ও দ্বিমাত্রিক অ্যারেতে ব্যবহৃত হয়।"],
    tags: ["buet_written", "microprocessor", "8086"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Digital Logic & Computer Organization",
    question: "৪-ইনপুট প্রায়োরিটি এনকোডারের ট্রুথ টেবিল ও লজিক সমীকরণ তৈরি করুন।",
    marks: 8,
    answer: "সমীকরণ: Y1 = D3 + D2; Y0 = D3 + D2' D1; Valid Bit V = D3 + D2 + D1 + D0।\nএকাধিক ইনপুট ১ থাকলে সর্বোচ্চ প্রায়োরিটির কোড আউটপুটে আসে।",
    points_to_remember: ["ইন্টারাপ্ট প্রায়োরিটি নির্ধারণে প্রায়োরিটি এনকোডার লাগে।"],
    tags: ["buet_written", "dld", "priority_encoder"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Digital Logic & Computer Organization",
    question: "৪-বিট জনসন কাউন্টার ও রিং কাউন্টারের পার্থক্য লিখুন। ৪টি ফ্লিপ-ফ্লপ দিয়ে জনসন কাউন্টারে কতটি স্টেট পাওয়া যায়?",
    marks: 8,
    answer: "জনসন বনাম রিং কাউন্টার:\n• রিং কাউন্টারে n বিটে n স্টেট (৪ বিটে ৪টি স্টেট: 1000 -> 0100 -> 0010 -> 0001)।\n• জনসন কাউন্টারে n বিটে 2n স্টেট পাওয়া যায়। ৪টি ফ্লিপ-ফ্লপ দিয়ে মোট **৮টি স্টেট** উৎপন্ন হয়!",
    points_to_remember: ["জনসন কাউন্টারে কম ফ্লিপ-ফ্লপে দ্বিগুণ স্টেট পাওয়া যায়।"],
    tags: ["buet_written", "dld", "johnson_counter"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Operating Systems & System Architecture",
    question: "অপারেটিং সিস্টেমে ব্যাংকার্স অ্যালগরিদম কীভাবে কাজ করে? সেফ স্টেট (Safe State) বলতে কী বোঝায়?",
    marks: 8,
    answer: "ব্যাংকার্স অ্যালগরিদম সমাধান:\n১. এটি ডেডলক এভয়ডেন্স অ্যালগরিদম।\n২. প্রসেসের রিসোর্স রিকোয়েস্ট পেলে সিস্টেম ভার্চুয়ালি রিসোর্স বরাদ্দ দিয়ে সেফ স্টেট অ্যালগরিদম চালায়।\n৩. যদি অন্তত একটি সেফ সিকোয়েন্স <P1, P2, ... Pn> পাওয়া যায় যেখানে সমস্ত প্রসেস নিরাপদে শেষ হতে পারে, তবে সিস্টেমকে Safe State বলা হয় এবং রিসোর্স বরাদ্দ দেওয়া হয়; অন্যথায় রিকোয়েস্ট স্থগিত রাখা হয়।",
    points_to_remember: ["সেফ স্টেট কখনোই ডেডলক সৃষ্টি করে না।"],
    tags: ["buet_written", "os", "bankers_algorithm"]
  },

  // 5. Gas IT & SCADA (7 questions)
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Petrobangla IT & SCADA Systems",
    question: "তিতাস গ্যাসের পাইপলাইনে গ্যাস লিকেজ শনাক্তকরণে RTTM এবং অপটিক্যাল ফাইবার DAS প্রযুক্তির কার্যপদ্ধতি ব্যাখ্যা করুন।",
    marks: 10,
    answer: "লিকেজ শনাক্তকরণ সমাধান:\n১. RTTM: ভর, শক্তি ও মোমেন্টামের সমীকরণ দিয়ে রিয়েল-টাইম গ্যাস ফ্লো হিসাব করে। প্রত্যাশিত ও বাস্তব প্রবাহের বিচ্যুতি হলে তাৎক্ষণিক লিকেজের অবস্থান চিহ্নিত করে।\n২. DAS: পাইপলাইনের ফাইবার অপটিক ক্যাবলকে লেজার ব্যাকস্ক্যাটারিং দিয়ে অ্যাকোস্টিক সেন্সর হিসেবে ব্যবহার করে ৫-১০ মিটারের মধ্যে লিকেজের কম্পন শনাক্ত করে।",
    points_to_remember: ["RTTM সফটওয়্যার মডেল এবং DAS ফিজিক্যাল সেন্সিং।"],
    tags: ["buet_written", "gas_it", "scada", "leak_detection"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Petrobangla IT & SCADA Systems",
    question: "প্রিপেইড গ্যাস মিটার সিস্টেমে NFC, POS ভেন্ডিং স্টেশন এবং সেন্ট্রাল সার্ভারের আর্কিটেকচার ডায়াগ্রাম সহ ব্যাখ্যা করুন। ম্যাগনেটিক টেম্পারিং কীভাবে রোধ হয়?",
    marks: 10,
    answer: "প্রিপেইড মিটার সমাধান:\n১. সার্ভার HSM এনক্রিপশন দিয়ে টোকেন জেনারেট করে কার্ডে লোড করে।\n২. মিটারে ১৩.৫৬ মেগাহার্টজ NFC দিয়ে ব্যালেন্স রিচার্জ হয়।\n৩. বাইরে শক্তিশালী চুম্বক ধরলে হল-ইফেক্ট সেন্সর ট্রিগার হয়ে স্বয়ংক্রিয় সলেনয়েড ভালভ বন্ধ (Shut-off) করে দেয়।",
    points_to_remember: ["প্রিপেইড মিটারে অ্যান্টি-ম্যাগনেটিক প্রটেকশন থাকে।"],
    tags: ["buet_written", "gas_it", "prepaid_metering"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Petrobangla IT & SCADA Systems",
    question: "গ্যাস পাইপলাইন টেলিমিতিতে স্যাটেলাইট VSAT এবং সেলুলার 4G/LTE ব্যাকআপ নেটওয়ার্ক আর্কিটেকচার বর্ণনা করুন।",
    marks: 8,
    answer: "টেলিমিতি সমাধান:\n১. অফশোর বা দুর্গম গ্যাস ফিল্ডের RTU ডেটা Ku/C ব্যান্ডের VSAT ডিশ দিয়ে স্যাটেলাইটে পাঠায়।\n২. বৃষ্টিতে রেইন-ফেড হলে ডুয়াল সিম ৪জি গেটওয়ে স্বয়ংক্রিয়ভাবে ফেইল-ওভার ব্যাকআপ দেয়।\n৩. হেড অফিসে সিকিউর IPSec VPN টানেল দিয়ে সেন্ট্রাল SCADA HMI-তে রিয়েল-টাইম গ্রাফ প্রদর্শন করে।",
    points_to_remember: ["অটো ফেইল-ওভার ৯৯.৯৯৯% আপটাইম নিশ্চিত করে।"],
    tags: ["buet_written", "gas_it", "telemetry"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Petrobangla IT & SCADA Systems",
    question: "Modbus RTU (Serial RS-485) এবং Modbus TCP (Ethernet)-এর ফ্রেম স্ট্রাকচারের পার্থক্য কী? Holding Register এর কাজ কী?",
    marks: 8,
    answer: "Modbus সমাধান:\n• Modbus RTU: RS-485 বাসে চলে। ফ্রেমে স্লেভ আইডি, ফাংশন কোড, ডেটা ও CRC-16 এরর চেক থাকে।\n• Modbus TCP: পোর্ট ৫০২ তে চলে। এতে MBAP হেডার থাকে কিন্তু স্লেভ বা CRC লাগে না।\n• Holding Registers (40001-49999): ১৬-বিট রিড/রাইট রেজিস্টার যা কন্ট্রোলারের প্যারামিটার সেট বা ভালভ কমান্ড পাঠাতে ব্যবহৃত হয়।",
    points_to_remember: ["Modbus TCP ডিফল্ট পোর্ট ৫০২ ব্যবহার করে।"],
    tags: ["buet_written", "gas_it", "modbus"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Petrobangla IT & SCADA Systems",
    question: "গ্যাস রেগুলেটিং স্টেশনে অতিরিক্ত চাপ উঠলে জরুরি গ্যাস সরবরাহ বন্ধ করার জন্য একটি PLC ল্যাডার লজিকের কার্যপ্রণালী লিখুন।",
    marks: 8,
    answer: "ল্যাডার লজিক সমাধান:\n১. Pressure Switch High (Normally Closed - NC) চাপ সীমার ওপরে উঠলে ওপেন হয়ে যায়।\n২. অভ্যন্তরীণ ল্যাচ রিলে B3:0/0 বন্ধ হয়ে যায় এবং সলেনয়েড ভালভ O:0/0 ডি-এনার্জাইজড হয়ে মুহূর্তের মধ্যে গ্যাস প্রবাহ বিচ্ছিন্ন করে।",
    points_to_remember: ["গ্যাস লাইনে ফেইল-সেফ ভালভ বিদ্যুৎ গেলে স্বয়ংক্রিয় বন্ধ হয়।"],
    tags: ["buet_written", "gas_it", "plc"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Petrobangla IT & SCADA Systems",
    question: "অনলাইন গ্যাস ক্রোমাটোগ্রাফ (GC) কী? এটি কীভাবে গ্যাসের উপাদান বিশ্লেষণ করে SCADA-তে ক্যালোরিফিক ভ্যালু (BTU) পাঠায়?",
    marks: 8,
    answer: "GC সমাধান:\n১. পাইপলাইন থেকে নমুনা নিয়ে ক্যাপিলারি কলামে হিলিয়াম গ্যাসের সাথে চালনা করা হয়।\n২. রিটেনশন টাইমের ভিত্তিতে মিথেন, ইথেন, নাইট্রোজেন পৃথক হয়ে ডিটেক্টরে তাদের ঘনত্ব পরিমাপ করে।\n৩. ISO 6976 অনুযায়ী Gross Calorific Value (BTU) হিসাব করে Modbus দিয়ে SCADA ও বিলিং সিস্টেমে পাঠায়।",
    points_to_remember: ["বাংলাদেশে প্রাকৃতিক গ্যাসে মিথেন ৯৫-৯৯% থাকে।"],
    tags: ["buet_written", "gas_it", "chromatograph"]
  },
  {
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Petrobangla IT & SCADA Systems",
    question: "গ্যাস পাইপলাইনের জিওগ্রাফিক ইনফরমেশন সিস্টেম (GIS) এবং SCADA ইন্টিগ্রেশনের সুবিধাগুলো কী কী?",
    marks: 8,
    answer: "GIS-SCADA ইন্টিগ্রেশন সুবিধা:\n১. পাইপলাইনের সঠিক ভূ-তাত্ত্বিক মানচিত্রের ওপর লাইভ গ্যাস প্রেসার ও ফ্লো ডেটা সুপারইম্পোজ করে দেখা যায়।\n২. কোনো পয়েন্টে লিকেজ অ্যালার্ম বাজলে নিকটস্থ ভালভগুলোর জিপিএস লোকেশন ও অ্যাক্সেস রোড ফিল্ড টিমকে স্বয়ংক্রিয়ভাবে প্রদান করে।\n৩. অবৈধ গ্যাস সংযোগের হটস্পট চিহ্নিতকরণ এবং নতুন পাইপলাইন নেটওয়ার্ক ডিজাইন সহজতর হয়।",
    points_to_remember: ["GIS-SCADA ইন্টিগ্রেশন দ্রুত ইমার্জেন্সি রেসপন্স নিশ্চিত করে।"],
    tags: ["buet_written", "gas_it", "gis_scada"]
  }
];

console.log('extra40 count =', extra40.length);

const allWritten = [
  ...net,
  ...dbms,
  ...prog,
  ...dld,
  ...gas,
  ...extra40
];

const finalWritten = allWritten.map((item, idx) => ({
  ...item,
  id: 1001 + idx
}));

fs.writeFileSync(
  path.join(writtenDir, 'technical_written.json'),
  JSON.stringify(finalWritten, null, 2),
  'utf8'
);

console.log(`✅ SUCCESS: Written questions count = ${finalWritten.length} (IDs 1001 to ${1001 + finalWritten.length - 1})`);
