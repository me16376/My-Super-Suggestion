# 🇧🇩 পেট্রোবাংলা উপ-সহকারী প্রকৌশলী (কম্পিউটার/আইটি) লিখিত প্রস্তুতি
## ধাপ ৪: জটিল SQL Queries, জয়েন (Joins) ও ER ডায়াগ্রাম গাইড

> **বুয়েট (BUET) ফোকাস বিশ্লেষণ:** বুয়েট কর্তৃক পরিচালিত লিখিত পরীক্ষায় এসকিউএল (SQL) থেকে প্রতিবারই ২ থেকে ৩টি বাস্তবসম্মত কুয়েরি লিখতে দেয়। বিশেষ করে `LIMIT` ছাড়া ২য় বা ৩য় সর্বোচ্চ বেতন/বিল বের করা, Correlated Subquery, `GROUP BY` এর সাথে `HAVING` ক্লজের ব্যবহার, এবং বিভিন্ন ধরণের `JOIN` এর সিনট্যাক্স বুয়েটের অত্যন্ত প্রিয়।

---

## 📌 ১. LIMIT ছাড়া N-তম সর্বোচ্চ মান বের করার ক্লাসিক বুয়েট টেকনিক

বুয়েটের পরীক্ষায় প্রায়ই বলা থাকে: *"Write an SQL query to find the second highest salary without using LIMIT or TOP."*

### টেবিল: `Employee(EmpID, Name, DeptID, Salary)`

#### ২য় সর্বোচ্চ বেতন নির্ণয় (স্ট্যান্ডার্ড সাবকুয়েরি):
```sql
SELECT MAX(Salary) AS Second_Highest_Salary
FROM Employee
WHERE Salary < (
    SELECT MAX(Salary) 
    FROM Employee
);
```
* **লজিক:** ভেতরের সাবকুয়েরি সর্বোচ্চ বেতন বের করে। বাইরের কুয়েরি সেই সর্বোচ্চ বেতনের চেয়ে কম বেতনের মধ্যে থাকা সর্বোচ্চটি (অর্থাৎ ২য় সর্বোচ্চ) বের করে আনে।

#### ৩য় সর্বোচ্চ বেতন নির্ণয়:
```sql
SELECT MAX(Salary) AS Third_Highest_Salary
FROM Employee
WHERE Salary < (
    SELECT MAX(Salary) 
    FROM Employee
    WHERE Salary < (SELECT MAX(Salary) FROM Employee)
);
```

#### আধুনিক ANSI SQL উইন্ডো ফাংশন (`DENSE_RANK`):
```sql
SELECT Name, Salary
FROM (
    SELECT Name, Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) as rnk
    FROM Employee
) temp
WHERE rnk = 2;
```
*(নোট: `DENSE_RANK()` টাই (Tie) হওয়া মানগুলোতে কোনো র‍্যাংক মিস করে না)।*

---

## 📌 ২. ডিপার্টমেন্ট অনুযায়ী গড় বেতনের চেয়ে বেশি বেতনপ্রাপ্ত কর্মী (Correlated Subquery)

```sql
SELECT E1.EmpID, E1.Name, E1.Salary, E1.DeptID
FROM Employee E1
WHERE E1.Salary > (
    SELECT AVG(E2.Salary)
    FROM Employee E2
    WHERE E2.DeptID = E1.DeptID
);
```
* **লজিক:** এটি একটি কোরিলেটেড সাবকুয়েরি। বাইরের কুয়েরির প্রতিটি রো-এর জন্য সাবকুয়েরিটি চলে এবং ওই কর্মীর নিজস্ব ডিপার্টমেন্টের গড় বেতনের সাথে তার বেতনের তুলনা করে।

---

## 📌 ৩. GROUP BY বনাম HAVING ক্লজের গোল্ডেন রুলস

```sql
-- তিতাস গ্যাসের যেসব জোনে মোট বকেয়া বিল ৫ লক্ষ টাকার বেশি:
SELECT ZoneID, SUM(DueAmount) AS Total_Due
FROM CustomerBill
WHERE BillYear = 2026
GROUP BY ZoneID
HAVING SUM(DueAmount) > 500000;
```

> [!IMPORTANT]
> **পার্থক্য:** 
> * `WHERE` ক্লজ গ্রুপ তৈরির **আগে** রো ফিল্টার করে। `WHERE`-এ কোনো এগ্রিগেট ফাংশন (`SUM`, `AVG`, `COUNT`) ব্যবহার করা যায় না।
> * `HAVING` ক্লজ গ্রুপ তৈরির **পরে** এগ্রিগেট ফলাফলের ওপর শর্ত আরোপ করতে ব্যবহৃত হয়।

---

## 📌 ৪. SQL JOIN-এর তুলনামূলক রূপরেখা

```sql
-- টেবিল A: Customer(CustID, Name) | টেবিল B: Bill(BillNo, CustID, Amount)
```

1. **INNER JOIN:** শুধুমাত্র যেসকল গ্রাহকের অন্তত একটি বিল রয়েছে তাদের ম্যাচিং রেকর্ড আনবে।
   ```sql
   SELECT C.Name, B.Amount FROM Customer C INNER JOIN Bill B ON C.CustID = B.CustID;
   ```
2. **LEFT OUTER JOIN:** সমস্ত গ্রাহককে দেখাবে, এমনকি যাদের কোনো বিল এখনো হয়নি (তাদের বিল কলামে NULL বসবে)।
   ```sql
   SELECT C.Name, B.Amount FROM Customer C LEFT JOIN Bill B ON C.CustID = B.CustID;
   ```
3. **SELF JOIN:** একই টেবিল নিজের সাথে নিজে জয়েন করে (যেমন: কর্মচারীর সাথে তার ম্যানেজারের তথ্য বের করা)।
   ```sql
   SELECT E.Name AS Employee, M.Name AS Manager 
   FROM Employee E LEFT JOIN Employee M ON E.ManagerID = M.EmpID;
   ```

---

## 📌 ৫. গ্যাস ডিস্ট্রিবিউশন ER ডায়াগ্রাম কার্ডিনালিটি

* **Customer ── (1 : 1) ── Meter:** প্রতিটি সক্রিয় সংযোগে একটি অনুমোদিত মিটার বরাদ্দ থাকে।
* **Customer ── (1 : N) ── MonthlyBill:** একজন গ্রাহকের বহু মাসের বিল হিস্ট্রি থাকে।
* **Meter ── (M : N) ── MaintenanceTeam:** একটি টিম একাধিক মিটার সার্ভিসিং করে এবং একটি মিটার বিভিন্ন সময়ে ভিন্ন ভিন্ন টিম দ্বারা মেরামত হতে পারে। (মাঝে `ServiceOrderLog` নামে অ্যাসোসিয়েটিভ টেবিল তৈরি হয়)।
