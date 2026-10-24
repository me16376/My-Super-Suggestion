const fs = require('fs');
const path = require('path');

const writtenDir = path.resolve(__dirname, '../data/written');
fs.mkdirSync(writtenDir, { recursive: true });

// 2. DBMS, Normalization & SQL (20 Questions: 3031 - 3050)
const dbmsWritten = [
  {
    id: 3031,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "একটি রিলেশন R(A, B, C, D, E) এবং Functional Dependencies (FDs):\nF = { A -> BC, CD -> E, B -> D, E -> A }\n(ক) সকল সম্ভাব্য ক্যান্ডিডেট কী (Candidate Keys) নির্ণয় করো।\n(খ) রিলেশনটি কোন নরমাল ফর্মে (1NF, 2NF, 3NF, BCNF) রয়েছে তা যুক্তি সহকারে দেখাও।",
    marks: 10,
    answer: "গাণিতিক সমাধান:\n\n(ক) অ্যাট্রিবিউট ক্লোজার (Attribute Closure) ও ক্যান্ডিডেট কী নির্ণয়:\n১. A এর ক্লোজার: A+ = {A, B, C} (যেহেতু A -> BC) => B -> D থাকায় {A, B, C, D} => CD -> E থাকায় {A, B, C, D, E} = R। অতএব, A একটি ক্যান্ডিডেট কী।\n২. E এর ক্লোজার: E+ = {E, A} (যেহেতু E -> A) => A থেকে বাকি সব পাওয়া যায় => E+ = {A, B, C, D, E} = R। অতএব, E একটি ক্যান্ডিডেট কী।\n৩. CD এর ক্লোজার: CD+ = {C, D, E} (CD -> E) => E থেকে A, এবং A থেকে B => CD+ = {A, B, C, D, E} = R। অতএব, CD একটি ক্যান্ডিডেট কী।\n৪. BC এর ক্লোজার: BC+ = {B, C, D} (B -> D) => CD -> E থাকায় {B, C, D, E} => E -> A থাকায় {A, B, C, D, E} = R। অতএব, BC একটি ক্যান্ডিডেট কী।\n\nউত্তর (ক): ক্যান্ডিডেট কীসমূহ হলো { A, E, CD, BC }।\n\n(খ) নরমাল ফর্ম পরীক্ষা:\n• প্রাইম অ্যাট্রিবিউট (যেগুলো ক্যান্ডিডেট কী-র অংশ): { A, B, C, D, E } (সবগুলোই প্রাইম অ্যাট্রিবিউট!)।\n• 2NF পরীক্ষা: যেহেতু কোনো নন-প্রাইম অ্যাট্রিবিউট নেই, তাই কোনো আংশিক নির্ভরতা (Partial Dependency) নেই। সুতরাং এটি 2NF-এ আছে।\n• 3NF পরীক্ষা: প্রতিটি FD (X -> Y) এর জন্য X সুপারকী অথবা Y প্রাইম অ্যাট্রিবিউট হতে হয়। যেহেতু ডানপাশের প্রতিটি অ্যাট্রিবিউট (B, C, E, D, A) প্রাইম অ্যাট্রিবিউট, তাই এটি নিখুঁতভাবে 3NF মেনে চলে।\n• BCNF পরীক্ষা: B -> D নির্ভরশীলতায় বামপাশের B কোনো সুপারকী নয়। অতএব, এটি BCNF-এ নেই।\n\nফলাফল: রিলেশনটি 3NF (Third Normal Form)-এ অবস্থিত।",
    points_to_remember: [
      "যদি রিলেশনের সমস্ত অ্যাট্রিবিউট প্রাইম হয়, তবে তা স্বয়ংক্রিয়ভাবে 3NF-এ উন্নীত হয়।",
      "BCNF হতে হলে প্রতিটি FD-র বামপাশকে (LHS) অবশ্যই সুপারকী হতে হবে।"
    ],
    tags: ["buet_written", "dbms", "normalization", "closure", "candidate_key"]
  },
  {
    id: 3032,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "তিতাস গ্যাসের বিলিং টেবিল: GasBilling(CustID, MeterNo, AreaCode, AreaName, UnitsConsumed, RatePerUnit, TotalBill)।\nFDs: CustID -> MeterNo, AreaCode, UnitsConsumed\nAreaCode -> AreaName, RatePerUnit\nCustID, UnitsConsumed -> TotalBill\n(ক) টেবিলটিতে কী কী অ্যানোমালি (Anomaly) বিদ্যমান?\n(খ) টেবিলটিকে 3NF-এ ডিকম্পোজ (Decompose) করো।",
    marks: 10,
    answer: "সমাধান:\n(ক) বিদ্যমান সমস্যা ও অ্যানোমালি:\n১. Insertion Anomaly: নতুন কোনো এলাকা ও গ্যাসের রেট ঠিক হলেও কোনো গ্রাহক যুক্ত না হলে Area তথ্য ইনসার্ট করা যায় না (CustID প্রাইমারি কী হওয়ায় নাল রাখা যায় না)।\n২. Update Anomaly: কোনো এলাকার প্রতি ইউনিট গ্যাসের রেট বাড়লে ওই এলাকার প্রতিটি গ্রাহকের রেকর্ডে বারবার আপডেট করতে হবে।\n৩. Deletion Anomaly: একটি নির্দিষ্ট এলাকার একমাত্র গ্রাহকের সংযোগ বাতিল হলে ওই পুরো এলাকার তথ্য ও রেট ডেটাবেজ থেকে মুছে যাবে।\n৪. Transitive Dependency: CustID -> AreaCode এবং AreaCode -> AreaName, RatePerUnit (নন-প্রাইম থেকে নন-প্রাইম নির্ভরতা)।\n\n(খ) 3NF ডিকম্পোজিশন (টেবিল বিভাজন):\n• Table 1 (Area_Rate): (AreaCode [PK], AreaName, RatePerUnit)\n• Table 2 (Customer_Master): (CustID [PK], MeterNo, AreaCode [FK])\n• Table 3 (Monthly_Consumption): (CustID [FK], BillMonth, UnitsConsumed, TotalBill)\n\nফলাফল: ট্রানজিটিভ ডিপেনডেন্সি বিলুপ্ত হওয়ায় টেবিলটি এখন সম্পূর্ণ অ্যানোমালি-মুক্ত এবং 3NF সমর্থিত।",
    points_to_remember: [
      "3NF অর্জনের প্রধান শর্ত হলো ট্রানজিটিভ ডিপেনডেন্সি (Transitive Dependency) দূর করা।"
    ],
    tags: ["buet_written", "dbms", "normalization", "anomaly", "petrobangla"]
  },
  {
    id: 3033,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "লসলেস-জয়েন (Lossless-Join) ডিকম্পোজিশন এবং ডিপেনডেন্সি প্রিজারভেশন (Dependency Preservation) বলতে কী বোঝায়? দুটি রিলেশন R1 এবং R2-এর জন্য লসলেস জয়েনের গাণিতিক শর্তটি লিখুন।",
    marks: 8,
    answer: "লসলেস-জয়েন ডিকম্পোজিশন:\nএকটি মূল রিলেশন R-কে একাধিক ক্ষুদ্র রিলেশন R1, R2-তে বিভক্ত করার পর তাদের ন্যাচারাল জয়েন (R1 ⨝ R2) করলে যদি কোনো বাড়তি ভুয়া টাপল (Spurious Tuple) তৈরি না হয়ে হুবহু মূল রিলেশন R ফিরে পাওয়া যায়, তবে তাকে লসলেস-জয়েন বলা হয়।\n\nগাণিতিক শর্ত (Mathematical Condition):\nR1 এবং R2 এর লসলেস জয়েনের শর্ত হলো তাদের কমন অ্যাট্রিবিউট (R1 ∩ R2) অবশ্যই R1 অথবা R2-এর সুপারকী (Super Key) হতে হবে:\n• (R1 ∩ R2) -> R1  অথবা  (R1 ∩ R2) -> R2\n\nডিপেনডেন্সি প্রিজারভেশন:\nবিভাজিত রিলেশনগুলোর (F1 ∪ F2)+ ক্লোজার যদি মূল রিলেশনের F+ এর সমান হয়, অর্থাৎ কোনো জয়েন অপারেশন ছাড়াই লোকাল টেবিলগুলোতে প্রতিটি FD স্বাধীনভাবে চেক করা যায়, তবে তাকে ডিপেনডেন্সি প্রিজারভেশন বলে।",
    points_to_remember: ["কমন অ্যাট্রিবিউট যেকোনো একটি টেবিলের প্রাইমারি/সুপারকী না হলে ডিকম্পোজিশন Lossy হয়ে যাবে।"],
    tags: ["buet_written", "dbms", "lossless_join", "dependency_preservation"]
  },
  {
    id: 3034,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "1NF, 2NF, 3NF এবং BCNF-এর মূল শর্তসমূহ একটি তুলনামূলক ছকের মাধ্যমে উপস্থাপন করুন। BCNF-কে কেন 3.5NF বলা হয়?",
    marks: 8,
    answer: "নরমাল ফর্মসমূহের তুলনামূলক ছক:\n\n১. 1NF (First Normal Form):\n• শর্ত: প্রতিটি কলামে অ্যাটমিক (Atomic/Single) মান থাকতে হবে। কোনো রিপিটিং গ্রুপ বা মাল্টি-ভ্যালুড অ্যাট্রিবিউট থাকা যাবে না।\n\n২. 2NF (Second Normal Form):\n• শর্ত: টেবিলটিকে অবশ্যই 1NF হতে হবে এবং কোনো আংশিক নির্ভরতা (Partial Dependency) থাকা যাবে না। অর্থাৎ কোনো নন-প্রাইম অ্যাট্রিবিউট কম্পোজিট প্রাইমারি কী-র আংশিক অংশের ওপর নির্ভর করতে পারবে না।\n\n৩. 3NF (Third Normal Form):\n• শর্ত: 2NF হতে হবে এবং কোনো ট্রানজিটিভ নির্ভরতা (Transitive Dependency) থাকা যাবে না। প্রতি FD (X -> Y)-এ X সুপারকী হতে হবে অথবা Y প্রাইম অ্যাট্রিবিউট হতে হবে।\n\n৪. BCNF (Boyce-Codd Normal Form):\n• শর্ত: 3NF হতে হবে এবং প্রতিটি FD (X -> Y)-এ X কে আবশ্যিকভাবে সুপারকী (Super Key) হতে হবে। প্রাইম অ্যাট্রিবিউটের কোনো শিথিলতা নেই।\n\nBCNF-কে 3.5NF বলার কারণ:\nএটি 3NF-এর চেয়ে কঠোর কিন্তু 4NF-এর চেয়ে সরল। 3NF-এ ডানপাশের অ্যাট্রিবিউট প্রাইম হলে বাঁশের X সুপারকী না হলেও ছাড় দেওয়া হয়, কিন্তু BCNF-এ কোনো ছাড় নেই।",
    points_to_remember: ["BCNF = 3NF + প্রতিটি নির্ধারক (Determinant) অবশ্যই একটি ক্যান্ডিডেট কী।"],
    tags: ["buet_written", "dbms", "normalization_comparison", "bcnf"]
  },
  {
    id: 3035,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "বাখরাবাদ গ্যাসের Employee ও Project টেবিল নিম্নরূপ:\nEmployee(EmpID, Name, DeptID, Salary)\nProject(ProjID, ProjName, Budget, DeptID)\nনিচের তথ্যগুলো পেতে SQL কুয়েরি লিখুন:\n(ক) যেসব কর্মচারীর বেতন তাদের নিজ নিজ ডিপার্টমেন্টের গড় বেতনের চেয়ে বেশি।\n(খ) প্রতিটি ডিপার্টমেন্টের নাম ও মোট প্রজেক্ট বাজেট প্রদর্শন করো (যাদের বাজেট ১০ লক্ষ টাকার বেশি)।",
    marks: 10,
    answer: "SQL কুয়েরি সমাধান:\n\n(ক) ডিপার্টমেন্টের গড় বেতনের চেয়ে বেশি বেতনপ্রাপ্ত কর্মী (Correlated Subquery):\n```sql\nSELECT E1.EmpID, E1.Name, E1.Salary, E1.DeptID\nFROM Employee E1\nWHERE E1.Salary > (\n    SELECT AVG(E2.Salary)\n    FROM Employee E2\n    WHERE E2.DeptID = E1.DeptID\n);\n```\n\n(খ) ডিপার্টমেন্ট ভিত্তিক মোট বাজেট > ১০ লক্ষ (GROUP BY ও HAVING):\n```sql\nSELECT DeptID, SUM(Budget) AS Total_Budget\nFROM Project\nGROUP BY DeptID\nHAVING SUM(Budget) > 1000000;\n```",
    points_to_remember: [
      "এগ্রিগেট ফাংশনের (AVG, SUM) শর্ত ফিল্টার করতে WHERE নয়, HAVING ক্লজ ব্যবহার করতে হয়।",
      "Correlated Subquery বাইরের কুয়েরির প্রতিটি সারির জন্য একবার করে এক্সিকিউট হয়।"
    ],
    tags: ["buet_written", "dbms", "sql", "correlated_subquery", "having"]
  },
  {
    id: 3036,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "পেট্রোবাংলা গ্যাস সংযোগ ডাটাবেজের জন্য SQL কুয়েরি লিখুন:\nCustomer(CustID, CustName, ZoneID, MeterStatus)\nBillPayment(BillNo, CustID, Month, Year, Amount, Status)\n(ক) যেসব গ্রাহক গত ৬ মাস ধরে কোনো বিল পরিশোধ করেননি ('UNPAID') তাদের তালিকা বের করো।\n(খ) ২য় সর্বোচ্চ বিল পরিশোধকারীর নাম ও টাকার পরিমাণ বের করো (LIMIT ছাড়া)।",
    marks: 10,
    answer: "SQL সমাধান:\n\n(ক) গত ৬ মাসে বিল বকেয়া থাকা গ্রাহকদের তালিকা:\n```sql\nSELECT DISTINCT C.CustID, C.CustName, C.ZoneID\nFROM Customer C\nJOIN BillPayment B ON C.CustID = B.CustID\nWHERE B.Status = 'UNPAID'\n  AND B.Year = 2026\n  AND B.Month IN ('January', 'February', 'March', 'April', 'May', 'June');\n```\n\n(খ) ২য় সর্বোচ্চ বিল পরিশোধকারী (LIMIT ছাড়া - স্ট্যান্ডার্ড সাবকুয়েরি):\n```sql\nSELECT C.CustName, MAX(B.Amount) AS Second_Highest_Bill\nFROM Customer C\nJOIN BillPayment B ON C.CustID = B.CustID\nWHERE B.Amount < (\n    SELECT MAX(Amount) \n    FROM BillPayment\n)\nGROUP BY C.CustName, B.Amount\nORDER BY B.Amount DESC;\n```\n(বিকল্প ANSI SQL উইন্ডো ফাংশন: `DENSE_RANK() OVER (ORDER BY Amount DESC) = 2`)",
    points_to_remember: [
      "বুয়েটে প্রায়ই LIMIT ছাড়া ২য় বা ৩য় সর্বোচ্চ মান বের করতে বলে, সেখানে সাবকুয়েরি `MAX() < (SELECT MAX())` ব্যবহার করা ক্লাসিক সমাধান।"
    ],
    tags: ["buet_written", "dbms", "sql", "subquery", "dense_rank"]
  },
  {
    id: 3037,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN এবং FULL OUTER JOIN এর মধ্যকার পার্থক্য ভেন ডায়াগ্রামের ধারণাসহ ব্যাখ্যা করুন।",
    marks: 8,
    answer: "SQL JOIN পার্থক্য:\n১. INNER JOIN: দুটি টেবিলের মধ্যে শুধুমাত্র মিলে যাওয়া (Matching) রেকর্ডগুলো রিটার্ন করে। কোনো অমিল থাকলে তা বাদ পড়ে।\n```sql\nSELECT * FROM TableA A INNER JOIN TableB B ON A.id = B.id;\n```\n২. LEFT OUTER JOIN: বামপাশের টেবিলের (TableA) সমস্ত রেকর্ড এবং ডানপাশের টেবিলের কেবল ম্যাচিং রেকর্ড রিটার্ন করে। অমিল হলে ডানপাশের কলামগুলোতে NULL বসে।\n৩. RIGHT OUTER JOIN: ডানপাশের টেবিলের সমস্ত রেকর্ড এবং বামপাশের ম্যাচিং রেকর্ড রিটার্ন করে। অমিল হলে বামপাশে NULL থাকে।\n৪. FULL OUTER JOIN: উভয় টেবিলের সমস্ত রেকর্ড রিটার্ন করে। যেকোনো পাশে মিল না থাকলে অপর পাশের কলামগুলোতে NULL বসে। (TableA ∪ TableB)।",
    points_to_remember: ["NULL ভ্যালু সহ মিসিং ডেটা ট্রেস করতে OUTER JOIN অত্যন্ত কার্যকর।"],
    tags: ["buet_written", "dbms", "sql", "joins"]
  },
  {
    id: 3038,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "DBMS-এ ট্রানজ্যাকশনের ACID প্রোপার্টিজ (Atomicity, Consistency, Isolation, Durability) বলতে কী বোঝায়? ব্যাংক ফান্ড ট্রান্সফারের উদাহরণ দিয়ে ব্যাখ্যা করুন।",
    marks: 8,
    answer: "ACID প্রোপার্টিজ ব্যাখ্যা:\n১. Atomicity (অল-অর-নাথিং): একটি ট্রানজ্যাকশনের সকল অপারেশন সফলভাবে সম্পন্ন হতে হবে, অন্যথায় কোনো একটি ফেইল করলে পুরো ট্রানজ্যাকশন রোলব্যাক হয়ে আগের অবস্থায় ফিরবে। (A অ্যাকাউন্ট থেকে ১০০০ টাকা কাটা হলে B অ্যাকাউন্টে অবশ্যই ১০০০ টাকা জমা হতে হবে, মাঝে বিদ্যুৎ চলে গেলে A-এর টাকা ফেরত আসবে)।\n২. Consistency: ট্রানজ্যাকশন শুরুর আগে এবং শেষে ডাটাবেজ অবশ্যই বৈধ স্টেটে থাকবে (A ও B এর মোট ব্যালেন্স অপরিবর্তিত থাকবে)।\n৩. Isolation: একাধিক সমান্তরাল ট্রানজ্যাকশন চললেও একটির অপারেশন শেষ না হওয়া পর্যন্ত অন্যটি তার মধ্যবর্তী ডেটা দেখতে পাবে না।\n৪. Durability: ট্রানজ্যাকশন একবার Commit হয়ে গেলে সিস্টেম ক্র্যাশ করলেও সেই ডেটা স্থায়ীভাবে সংরক্ষিত থাকবে।",
    points_to_remember: ["ACID ট্রানজ্যাকশনের অখণ্ডতা ও আর্থিক ডেটার নির্ভুলতা নিশ্চিত করে।"],
    tags: ["buet_written", "dbms", "acid_properties", "transactions"]
  },
  {
    id: 3039,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "ইনডেক্সিং (Indexing) কী? Clustered Index এবং Non-clustered Index এর মধ্যে ৩টি মূল পার্থক্য লিখুন। তিতাস গ্যাস গ্রাহক টেবিলে ইনডেক্সিং কীভাবে কুয়েরি অপ্টিমাইজ করে?",
    marks: 8,
    answer: "ইনডেক্সিং সংজ্ঞা:\nডাটাবেজ টেবিল থেকে দ্রুত ডেটা অনুসন্ধান ও পুনরুদ্ধারের জন্য ব্যবহৃত একটি বিশেষ ডেটা স্ট্রাকচার (যেমন: B-Tree)। এটি পুরো টেবিল স্ক্যান (Full Table Scan) না করে সরাসরি কাঙ্ক্ষিত রো-তে পৌঁছাতে সাহায্য করে।\n\nClustered vs Non-clustered Index পার্থক্য:\n১. ডেটা সঞ্চয়: Clustered ইনডেক্স টেবিলের ফিজিক্যাল ডেটাকে সরাসরি সাজিয়ে (Sort) ফেলে | Non-clustered ইনডেক্স আলাদা জায়গায় কী এবং পয়েন্টারের তালিকা তৈরি করে।\n২. সংখ্যা: প্রতি টেবিলে মাত্র ১টি Clustered Index হতে পারে (প্রাইমারি কী) | একটি টেবিলে একাধিক Non-clustered Index তৈরি করা যায়।\n৩. গতি: Clustered ইনডেক্সে সরাসরি ডেটা থাকে তাই দ্রুততম | Non-clustered ইনডেক্সে প্রথমে পয়েন্টার এবং পরে ডেটা পেইজে যেতে হয়।\n\nতিতাস গ্যাসে প্রভাব:\nলাখ লাখ গ্রাহকের ভেতর `CustID` বা `MeterNo` দিয়ে বিল খুঁজতে গেলে সেকেন্ডের ভগ্নাংশে রেজাল্ট পাওয়া যায়।",
    points_to_remember: ["একটি টেবিলে Clustered Index কেবল একটিই সম্ভব, কারণ মেমরিতে ডেটা একটামাত্র নিয়মে শারীরিকভাবে সাজানো যায়।"],
    tags: ["buet_written", "dbms", "indexing", "clustered_vs_nonclustered"]
  },
  {
    id: 3040,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "একটি গ্যাস ডিস্ট্রিবিউশন কোম্পানির জন্য Entity-Relationship (ER) ডায়াগ্রামের উপাদানগুলো চিহ্নিত করুন:\nEntity: Customer, Meter, Bill, MaintenanceTeam\nতাদের অ্যাট্রিবিউট, প্রাইমারি কী এবং সম্পর্কের কার্ডিনালিটি (1:1, 1:N, M:N) ব্যাখ্যা করুন।",
    marks: 10,
    answer: "ER ডায়াগ্রাম ডিজাইন:\n\n১. এনটিটি ও অ্যাট্রিবিউট:\n• Customer (CustID [PK], Name, Address, Phone)\n• Meter (MeterNo [PK], Model, InstallDate, Type, Status)\n• Bill (BillNo [PK], Month, Amount, DueDate, PaymentStatus)\n• MaintenanceTeam (TeamID [PK], LeaderName, ContactNo, AreaZone)\n\n২. সম্পর্কের কার্ডিনালিটি (Cardinality):\n• Customer to Meter (1 : 1): একজন গ্রাহকের একটি মাত্র গ্যাস মিটার থাকে (বা 1:N যদি একই গ্রাহকের একাধিক মিটার থাকে)।\n• Customer to Bill (1 : N): একজন গ্রাহকের প্রতি মাসে নতুন বিল তৈরি হয় (One-to-Many)।\n• MaintenanceTeam to Meter (M : N): একটি টিম একাধিক মিটারের সার্ভিসিং করে এবং একটি মিটার বিভিন্ন সময়ে ভিন্ন ভিন্ন টিম দ্বারা মেরামত হতে পারে। (মাঝে ServiceLog নামে ব্রিজ টেবিল তৈরি হবে)।",
    points_to_remember: ["M:N রিলেশনশিপকে রিলেশনাল ডেটাবেজে রূপান্তর করতে একটি অ্যাসোসিয়েটিভ বা ব্রিজ এন্টিটি প্রয়োজন হয়।"],
    tags: ["buet_written", "dbms", "er_diagram", "cardinality"]
  },
  // 10 more DBMS / SQL questions (3041 - 3050)
  {
    id: 3041,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "SQL DDL, DML, DCL এবং TCL কমান্ডসমূহের পূর্ণরূপ ও প্রতিটির ২টি করে উদাহরণ দিন।",
    marks: 8,
    answer: "SQL কমান্ড ক্যাটাগরি:\n১. DDL (Data Definition Language): স্কিমা ও টেবিল তৈরি/পরিবর্তন। উদাহরণ: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`।\n২. DML (Data Manipulation Language): ডেটা প্রবেশ ও রূপান্তর। উদাহরণ: `INSERT`, `UPDATE`, `DELETE`, `SELECT`।\n৩. DCL (Data Control Language): পারমিশন ও অধিকার নিয়ন্ত্রণ। উদাহরণ: `GRANT`, `REVOKE`।\n৪. TCL (Transaction Control Language): ট্রানজ্যাকশন নিয়ন্ত্রণ। উদাহরণ: `COMMIT`, `ROLLBACK`, `SAVEPOINT`।",
    points_to_remember: ["TRUNCATE হলো DDL (রোলব্যাক করা যায় না), কিন্তু DELETE হলো DML (রোলব্যাক সম্ভব)।"],
    tags: ["buet_written", "dbms", "sql_commands", "ddl_dml"]
  },
  {
    id: 3042,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "TRUNCATE, DELETE এবং DROP এর মধ্যকার ৩টি প্রধান প্রযুক্তিগত পার্থক্য লিখুন।",
    marks: 8,
    answer: "পার্থক্য ছক:\n১. অপারেশন প্রকার: DELETE হলো DML | TRUNCATE হলো DDL | DROP হলো DDL।\n২. শর্ত প্রয়োগ: DELETE-এ WHERE ক্লজ দিয়ে নির্দিষ্ট রো মোছা যায় | TRUNCATE ও DROP-এ কোনো WHERE শর্ত প্রযোজ্য নয়।\n৩. টেবিল কাঠামো: DELETE ও TRUNCATE-এ টেবিলের কাঠামো অক্ষত থাকে (শুধু ডেটা মোছে) | DROP-এ টেবিলের স্কিমা ও ডেটা সম্পূর্ণ নিশ্চিহ্ন হয়ে যায়।\n৪. গতি ও লগিং: DELETE প্রতি রো আলাদা লগ করে ফলে ধীরগতি | TRUNCATE পেইজ ডিঅ্যালোকেট করে ফলে অত্যন্ত দ্রুত।",
    points_to_remember: ["DELETE প্রতি লাইনে লগ রাখে, TRUNCATE পুরো ডেটা পেইজ একবারে ফ্রি করে।"],
    tags: ["buet_written", "dbms", "truncate_delete_drop"]
  },
  {
    id: 3043,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "ডেটাবেজ ভিউ (View) কী? ম্যাটেরিয়ালাইজড ভিউ (Materialized View) এর সাথে সাধারণ ভিউ-এর পার্থক্য কী?",
    marks: 8,
    answer: "ভিউ (View) সংজ্ঞা:\nএক বা একাধিক টেবিলের ওপর ভিত্তি করে সংরক্ষিত একটি ভার্চুয়াল টেবিল (Virtual Table)। এতে নিজস্ব কোনো ডেটা শারীরিকভাবে সংরক্ষিত থাকে না, বরং কুয়েরি চালানোর সময় মূল টেবিল থেকে ডেটা ফেচ হয়।\n\nসাধারণ ভিউ vs Materialized View:\n১. স্টোরেজ: সাধারণ ভিউ কোনো মেমরি দখল করে না | Materialized View কুয়েরির ফলাফলকে ফিজিক্যাল ডিস্কে স্থায়ীভাবে সংরক্ষণ করে রাখে।\n২. কার্যক্ষমতা: সাধারণ ভিউ প্রতিবার রান করার সময় রিক্যালকুলেট হয় | Materialized View প্রি-কম্পিউটেড থাকায় বড় বড় এগ্রিগেশন কুয়েরিতে অত্যন্ত দ্রুত কাজ করে।\n৩. রিফ্রেশ: মূল টেবিলের ডেটা বদলালে সাধারণ ভিউ তাৎক্ষণিক আপডেট হয় | Materialized View-কে সিডিউল অনুযায়ী রিফ্রেশ (Refresh) করতে হয়।",
    points_to_remember: ["Materialized View রিপোর্টিং ও ডেটা ওয়্যারহাউসে ভারী কুয়েরির পারফরম্যান্স বাড়াতে ব্যবহৃত হয়।"],
    tags: ["buet_written", "dbms", "views", "materialized_view"]
  },
  {
    id: 3044,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "ডাটাবেজে ডেডলক (Deadlock) কী? ডেডলক প্রতিরোধের জন্য ব্যবহৃত ৪টি শর্ত (Coffman Conditions) কী কী?",
    marks: 8,
    answer: "ডেডলক সংজ্ঞা:\nএমন একটি অচলাবস্থা যেখানে দুই বা ততোধিক ট্রানজ্যাকশন একে অপরের দখলকৃত রিসোর্সের (Lock) জন্য অনির্দিষ্টকালের জন্য অপেক্ষা করতে থাকে, ফলে কোনো ট্রানজ্যাকশনই সম্পন্ন হতে পারে না।\n\nকফম্যানের ৪টি শর্ত (এই ৪টি একসাথে সত্য হলেই কেবল ডেডলক ঘটে):\n১. Mutual Exclusion: রিসোর্সগুলোকে শেয়ার করা যায় না, একজনই একচেটিয়া ব্যবহার করতে পারে।\n২. Hold and Wait: একটি রিসোর্স ধরে রেখে অন্য রিসোর্সের জন্য অপেক্ষা করা।\n৩. No Preemption: জোর করে কোনো প্রসেসের হাত থেকে রিসোর্স কেড়ে নেওয়া যায় না।\n৪. Circular Wait: রিসোর্সগুলোর জন্য চক্রাকার অপেক্ষার চেইন তৈরি হওয়া (T1 -> T2 -> T3 -> T1)।",
    points_to_remember: ["এই ৪টি শর্তের যেকোনো একটি ভেঙে দিলেই ডেডলক প্রতিরোধ করা যায়।"],
    tags: ["buet_written", "dbms", "deadlock", "coffman_conditions"]
  },
  {
    id: 3045,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "একটি রিলেশন R(A, B, C, D) এর FDs: { A -> B, B -> C, C -> D, D -> A }। এর ক্যান্ডিডেট কী কয়টি এবং কী কী? রিলেশনটি কোন নরমাল ফর্মে আছে?",
    marks: 8,
    answer: "সমাধান:\n১. ক্লোজার নির্ণয়:\n• A+ = {A, B, C, D} => A একটি ক্যান্ডিডেট কী।\n• B+ = {B, C, D, A} => B একটি ক্যান্ডিডেট কী।\n• C+ = {C, D, A, B} => C একটি ক্যান্ডিডেট কী।\n• D+ = {D, A, B, C} => D একটি ক্যান্ডিডেট কী।\n\nঅতএব ক্যান্ডিডেট কী মোট ৪টি: { A }, { B }, { C }, { D }।\n\n২. নরমাল ফর্ম যাচাই:\nপ্রাইম অ্যাট্রিবিউট: {A, B, C, D} (সবগুলোই প্রাইম)।\nপ্রতিটি FD (X -> Y) এর জন্য বামপাশের নির্ধারক X (A, B, C, D) প্রত্যেকেই একেকটি সুপারকী!\nযেহেতু প্রতিটি ফাংশনাল ডিপেনডেন্সির বামপাশ সুপারকী, তাই এটি সর্বোচ্চ নরমাল ফর্ম BCNF (Boyce-Codd Normal Form)-এ অবস্থিত।",
    points_to_remember: ["যদি প্রতিটি সাইকেল একে অপরকে ড্রাইভ করে এবং বামপাশ সুপারকী হয়, তবে তা সরাসরি BCNF."],
    tags: ["buet_written", "dbms", "normalization", "bcnf"]
  },
  {
    id: 3046,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "SQL ট্রিগার (Trigger) এবং স্টোর্ড প্রসিডিউর (Stored Procedure) এর মধ্যে ৩টি পার্থক্য লিখুন। তিতাস গ্যাস গ্রাহকের বিল পেইড হলে স্বয়ংক্রিয়ভাবে মিটার স্ট্যাটাস 'ACTIVE' করার একটি ট্রিগার লিখুন।",
    marks: 10,
    answer: "Trigger vs Stored Procedure পার্থক্য:\n১. এক্সিকিউশন: Trigger কোনো টেবিল ইভেন্টে (INSERT, UPDATE, DELETE) স্বয়ংক্রিয়ভাবে ফায়ার হয় | Stored Procedure কে `EXEC` বা কল করে ম্যানুয়ালি চালাতে হয়।\n২. প্যারামিটার: Stored Procedure প্যারামিটার গ্রহণ ও মান রিটার্ন করতে পারে | Trigger কোনো প্যারামিটার গ্রহণ করে না।\n৩. নিয়ন্ত্রণ: Trigger ডাটা ইন্টিগ্রিটি ও অডিট লগের জন্য আদর্শ | Stored Procedure ব্যবসায়িক লজিক বাস্তবায়নে ব্যবহৃত হয়।\n\nট্রিগার কোড (MySQL/PostgreSQL):\n```sql\nCREATE TRIGGER trg_AfterBillPayment\nAFTER UPDATE ON BillPayment\nFOR EACH ROW\nBEGIN\n    IF NEW.Status = 'PAID' THEN\n        UPDATE Customer\n        SET MeterStatus = 'ACTIVE'\n        WHERE CustID = NEW.CustID;\n    END IF;\nEND;\n```",
    points_to_remember: ["ট্রিগার স্বয়ংক্রিয়ভাবে ইভেন্ট ড্রাইভেন হয়ে চলে, ব্যবহারকারীর অনুমতির অপেক্ষা করে না।"],
    tags: ["buet_written", "dbms", "triggers", "sql"]
  },
  {
    id: 3047,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "SQL ইনজেকশন (SQL Injection) কী? একটি দুর্বল লগইন কোডের উদাহরণ দিয়ে এটি কীভাবে প্রিভেন্ট (Prevent) করা যায় তা প্যারামিটারাইজড কুয়েরিসহ লিখুন।",
    marks: 8,
    answer: "SQL ইনজেকশন:\nএকটি ক্ষতিকর সাইবার আক্রমণ যেখানে ব্যবহারকারী ইনপুট ফিল্ডে চতুরতার সাথে ক্ষতিকর SQL কোড প্রবেশ করিয়ে ডাটাবেজের নিয়ন্ত্রণ নিয়ে নেয় অথবা অবৈধভাবে গোপন ডেটা চুরি করে।\n\nদুর্বল কোডের উদাহরণ:\n```sql\nSELECT * FROM Users WHERE username = '' OR '1'='1' AND password = '';\n```\n(যেহেতু `'1'='1'` সর্বদা সত্য, তাই পাসওয়ার্ড ছাড়াই লগইন হয়ে যায়)।\n\nপ্রতিরোধের উপায় (Prepared Statements & Parameterized Query):\n```php\n$stmt = $pdo->prepare('SELECT * FROM Users WHERE username = :user AND password = :pass');\n$stmt->execute(['user' => $userInput, 'pass' => $hashedPass]);\n```\nএখানে ইনপুটকে কোনো এক্সিকিউটেবল কোড হিসেবে নয়, বিশুদ্ধ স্ট্রিং লিটারেল হিসেবে ট্রিট করা হয়।",
    points_to_remember: ["কখনোই ইউজার ইনপুট সরাসরি SQL স্ট্রিং কনক্যাটেনেশন করা যাবে না; সর্বদা Prepared Statements ব্যবহার করতে হবে।"],
    tags: ["buet_written", "dbms", "sql_injection", "security"]
  },
  {
    id: 3048,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "NoSQL ডাটাবেজ কী? RDBMS এবং NoSQL এর মধ্যে ৪টি মূল পার্থক্য লিখুন। গ্যাস ফিল্ডের সেন্সর ডেটা সংরক্ষণের জন্য কোনটি উপযুক্ত?",
    marks: 8,
    answer: "NoSQL সংজ্ঞা:\nপ্রথাগত রিলেশনাল টেবিল কাঠামোর বাইরে নন-রিলেশনাল, স্কিমা-হীন (Schema-less) এবং অনুভূমিকভাবে স্কেলযোগ্য (Horizontally Scalable) বৃহৎ ডেটাবেজ সিস্টেম (যেমন: MongoDB, Cassandra, Redis)।\n\nRDBMS vs NoSQL পার্থক্য:\n১. ডেটা মডেল: RDBMS টেবিল ও সারিবদ্ধ রিলেশনাল মডেল | NoSQL ডকুমেন্ট (JSON), কী-ভ্যালু, কলাম-ফ্যামিলি বা গ্রাফ মডেল।\n২. স্কিমা: RDBMS ফিক্সড প্রি-ডিফাইন্ড স্কিমা | NoSQL ডায়নামিক ও নমনীয় স্কিমা।\n৩. স্কেলিং: RDBMS ভার্টিক্যাল স্কেলিং (বড় সার্ভার) | NoSQL হরিজন্টাল স্কেলিং (ক্লাস্টার ভিত্তিক)।\n৪. ট্রানজ্যাকশন: RDBMS ACID মেনে চলে | NoSQL মূলত BASE (Basically Available, Soft state, Eventual consistency) মেনে চলে।\n\nগ্যাস ফিল্ডের সেন্সর ডেটা:\nসেন্সর থেকে প্রতি সেকেন্ডে হাজার হাজার টাইম-সিরিজ ডেটা আসে যা নো-এসকিউএল (যেমন: InfluxDB বা Cassandra) এর জন্য সবচেয়ে উপযুক্ত।",
    points_to_remember: ["অসংখ্য সেন্সরের আনস্ট্রাকচার্ড ও টাইম-সিরিজ ডেটা রাইট করার জন্য NoSQL অপ্রতিদ্বন্দ্বী।"],
    tags: ["buet_written", "dbms", "nosql", "rdbms_vs_nosql"]
  },
  {
    id: 3049,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "ডাটাবেজ কনকারেন্সি কন্ট্রোলে টু-ফেজ লকিং প্রোটোকল (2PL) ব্যাখ্যা করুন। Strict 2PL এর প্রয়োজনীয়তা কী?",
    marks: 8,
    answer: "Two-Phase Locking (2PL) প্রোটোকল:\nএকটি লেনদেনের সময় ডেটার ধারাবাহিকতা নিশ্চিত করতে লকিং প্রক্রিয়াকে দুটি পর্যায়ে ভাগ করা হয়:\n১. Growing Phase: ট্রানজ্যাকশন নতুন নতুন লক নিতে পারে, কিন্তু কোনো লক রিলিজ (আনলক) করতে পারে না।\n২. Shrinking Phase: ট্রানজ্যাকশন ধীরে ধীরে লক ছেড়ে দিতে থাকে, কিন্তু নতুন কোনো লক গ্রহণ করতে পারে না।\n\nStrict 2PL এর প্রয়োজনীয়তা:\nসাধারণ 2PL-এ ক্যাস্কেডিং অ্যাবর্ট (Cascading Abort) হতে পারে। Strict 2PL-এ কোনো ট্রানজ্যাকশন Commit বা Abort না হওয়া পর্যন্ত তার সমস্ত এক্সক্লুসিভ লক (X-Lock) ধরে রাখে। ফলে কোনো নোংরা রিড (Dirty Read) হয় না এবং ক্যাস্কেড রোলব্যাকের ঝুঁকি চিরতরে দূর হয়।",
    points_to_remember: ["Strict 2PL ক্যাস্কেড-লেস শিডিউল ও সিরিয়ালাইজেবিলিটি ১০০% নিশ্চিত করে।"],
    tags: ["buet_written", "dbms", "concurrency", "2pl"]
  },
  {
    id: 3050,
    subject: "টেকনিক্যাল (ডিপার্টমেন্টাল লিখিত)",
    topic: "Database Management & Normalization",
    question: "রেফারেনশিয়াল ইন্টিগ্রিটি কনস্ট্রেইন্ট (Referential Integrity Constraint) কী? Foreign Key-তে `ON DELETE CASCADE` এবং `ON DELETE SET NULL` এর কার্যপদ্ধতি বুঝিয়ে লিখুন।",
    marks: 8,
    answer: "রেফারেনশিয়াল ইন্টিগ্রিটি:\nরিলেশনাল ডেটাবেজে দুটি টেবিলের মধ্যবর্তী সম্পর্ক বৈধ রাখার নিয়ম। এটি নিশ্চিত করে যে চাইল্ড টেবিলের ফরেন কী-র মান অবশ্যই প্যারেন্ট টেবিলের প্রাইমারি কী-তে বিদ্যমান থাকতে হবে অথবা নাল (NULL) হতে হবে। কোনো ঝুলন্ত বা এতিম রেকর্ড (Orphan Record) থাকতে পারবে না।\n\nON DELETE অপশনসমূহ:\n১. ON DELETE CASCADE: প্যারেন্ট টেবিল থেকে কোনো রেকর্ড মুছে ফেলা হলে, চাইল্ড টেবিলের ওই রেকর্ডের সাথে সম্পর্কিত সমস্ত রেকর্ডও স্বয়ংক্রিয়ভাবে মুছে যাবে। (গ্রাহক ডিলিট হলে তার বিল হিস্ট্রিও ডিলিট)।\n২. ON DELETE SET NULL: প্যারেন্ট টেবিল থেকে রেকর্ড মুছলে চাইল্ড টেবিলের ফরেন কী কলামের মানটি মুছে না গিয়ে স্বয়ংক্রিয়ভাবে 'NULL' হয়ে যাবে।",
    points_to_remember: ["ON DELETE CASCADE সতর্কতার সাথে ব্যবহার না করলে অসাবধানতাবশত চাইল্ড টেবিলের গুরুত্বপূর্ণ রেকর্ড নষ্ট হতে পারে।"],
    tags: ["buet_written", "dbms", "referential_integrity", "foreign_key"]
  }
];

fs.writeFileSync(path.join(writtenDir, 'dbms_written.json'), JSON.stringify(dbmsWritten, null, 2), 'utf8');
console.log('Written: dbms_written.json =>', dbmsWritten.length);
