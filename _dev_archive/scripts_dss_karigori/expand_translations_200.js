const fs = require('fs');
const path = require('path');

const writtenQuestionsPath = path.join(__dirname, '..', 'data', 'written', 'written_questions.json');
let writtenQuestions = JSON.parse(fs.readFileSync(writtenQuestionsPath, 'utf8'));

const translationSets = [
  {
    id: 9205,
    subject: "ইংরেজি লিখিত",
    topic: "বাংলা থেকে ইংরেজি অনুবাদ মেগা ব্যাংক (পর্ব ৩: ১০১ থেকে ১৫০টি)",
    question: `বিগত বিভিন্ন সরকারি লিখিত পরীক্ষায় বারবার আসা নিচের ৫০টি বাক্যের বাংলা থেকে ইংরেজি অনুবাদ লিখুন (১০১ থেকে ১৫০):
(১০১) ট্রেনটি সময়মতো ছাড়ল।
(১০২) ট্রেন ছাড়ার পূর্বে আমরা স্টেশনে পৌঁছেছিলাম।
(১০৩) সূর্য ওঠার পর কুয়াশা কেটে গেল।
(১০৪) সে এত দুর্বল যে হাঁটতে পারে না।
(১০৫) ছেলেটি যেমন চালাক তেমনি চতুর।
(১০৬) যত পড়বে তত শিখবে।
(১০৭) যত তাড়াতাড়ি হয় তত ভালো।
(১০৮) আমার এক বন্ধু ডাক্তার।
(১০৯) তিনি আমাকে অন্ধের মতো বিশ্বাস করেন।
(১১০) পরিশ্রম সৌভাগ্যের প্রসূতি।
(১১১) সময়ের সঠিক ব্যবহার করা উচিত।
(১১২) সে আমার চেয়ে দুই বছরের বড়।
(১১৩) সে আমার চেয়ে তিন বছরের ছোট।
(১১৪) রহিম গতকাল এখানে এসেছিল।
(১১৫) আমি আগামীকাল ঢাকা যাব।
(১১৬) সে কি এখনো পৌঁছায়নি?
(১১৭) মেয়েটি গান গাইতে গাইতে ঘরে ঢুকল।
(১১৮) লোকটি কাঁপতে কাঁপতে কথা বলল।
(১১৯) সে হাসতে হাসতে চলে গেল।
(১২০) আমি তাকে কাঁদতে দেখলাম।
(১২১) অপচয় করো না, অভাব হবে না।
(১২২) টাকায় টাকা আনে।
(১২৩) চাচা আপন প্রাণ বাঁচা।
(১২৪) গাছে কাঁঠাল গোঁফে তেল।
(১২৫) ধর্মের কল বাতাসে নড়ে।
(১২৬) বিনা মেঘে বজ্রপাত।
(১২৭) কয়লা ধুইলে ময়লা যায় না।
(১২৮) চোরে চোরে মাসতুতো ভাই।
(১২৯) চোরের মার বড় গলা।
(১৩০) যেমন কুকুর তেমনি মুগুর।
(১৩১) অতি লোভে তাঁতি নষ্ট।
(১৩২) বিপদ কখনো একা আসে না।
(১৩৩) দুধের স্বাদ ঘোলে মেটে না।
(১৩৪) ভাগের মা গঙ্গা পায় না।
(১৩৫) নাচতে না জানলে উঠান বাঁকা।
(১৩৬) যার জ্বালা সেই জানে।
(১৩৭) শেষ ভালো যার সব ভালো তার।
(১৩৮) রাখে আল্লাহ মারে কে।
(১৩৯) দশের লাঠি একের বোঝা।
(১৪০) ভিক্ষার চাল কাঁড়া আর আকাঁড়া।
(১৪১) সমাজসেবা অধিদপ্তর অসহায় ও অনগ্রসর মানুষের কল্যাণে কাজ করে।
(১৪২) প্রতিবন্ধীদের প্রতি আমাদের সহানুভূতিশীল হওয়া উচিত।
(১৪৩) বয়স্ক ভাতা বয়োবৃদ্ধদের সামাজিক নিরাপত্তা দেয়।
(১৪৪) তিনি একজন সৎ ও দক্ষ কারিগরি প্রশিক্ষক।
(১৪৫) কম্পিউটার শিক্ষা আজকের যুগে অপরিহার্য।
(১৪৬) কম্পিউটার প্রোগ্রামিং একটি চাহিদাসম্পন্ন দক্ষতা।
(১৪৭) ইন্টারনেট সারা বিশ্বকে একটি বিশ্বগ্রামে পরিণত করেছে।
(১৪৮) তথ্যপ্রযুক্তির সঠিক ব্যবহার দেশকে এগিয়ে নিয়ে যাবে।
(১৪৯) যুবসমাজকে কারিগরি শিক্ষায় প্রশিক্ষিত করা জরুরি।
(১৫০) সমাজকল্যাণ মন্ত্রণালয় সুবিধাবঞ্চিতদের উন্নয়ন নিশ্চিত করে।`,
    answer: `101. The train left on time.
102. We had reached the station before the train left.
103. The fog disappeared after the sun had risen.
104. He is too weak to walk. (বা He is so weak that he cannot walk.)
105. The boy is as clever as wise.
106. The more you read, the more you learn.
107. The sooner, the better.
108. A friend of mine is a doctor.
109. He believes me blindly.
110. Industry is the mother of good luck.
111. One should make proper use of time.
112. He is senior to me by two years.
113. He is junior to me by three years.
114. Rahim came here yesterday.
115. I shall go to Dhaka tomorrow.
116. Hasn't he arrived yet?
117. The girl entered the room singing.
118. The man spoke trembling.
119. He went away laughing.
120. I saw him crying.
121. Waste not, want not.
122. Money begets money.
123. Every man for himself.
124. To count one's chickens before they are hatched.
125. Truth will come out. (বা Virtue proclaims itself.)
126. A bolt from the blue.
127. Black will take no other hue.
128. Birds of a feather flock together.
129. The rogue cries loudest.
130. As the dog, so the stick. (বা Tit for tat.)
131. Grasp all, lose all.
132. Misfortunes never come single.
133. What cannot be cured must be endured.
134. What is everybody's business is nobody's business.
135. A bad workman quarrels with his tools.
136. The wearer best knows where the shoe pinches.
137. All's well that ends well.
138. What God wills, no man can prevent.
139. Many a little makes a mickle.
140. Beggars cannot be choosers.
141. The Department of Social Services works for the welfare of the helpless and underprivileged people.
142. We should be sympathetic to the disabled.
143. Old age allowance provides social security to the elderly.
144. He is an honest and skilled technical instructor.
145. Computer education is indispensable in today's era.
146. Computer programming is a demanding skill.
147. The internet has turned the whole world into a global village.
148. Proper use of information technology will advance the country.
149. It is urgent to train the youth in technical education.
150. The Ministry of Social Welfare ensures the development of the underprivileged.`,
    tips: "প্রবাদ-প্রবচনে শাব্দিক অনুবাদের পরিবর্তে ভাবানুবাদ লিখতে হয়। আর অতীত কালের দুটি ঘটনার ক্ষেত্রে 'before' এর পূর্বে এবং 'after' এর পরে Past Perfect tense ব্যবহৃত হয়।"
  },
  {
    id: 9206,
    subject: "ইংরেজি লিখিত",
    topic: "বাংলা থেকে ইংরেজি অনুবাদ মেগা ব্যাংক (পর্ব ৪: ১৫১ থেকে ২০০টি — মোট ২০০টি সম্পন্ন)",
    question: `বিগত বিসিএস ও মন্ত্রণালয়ের পরীক্ষায় বারবার আসা নিচের ৫০টি বাক্যের বাংলা থেকে ইংরেজি অনুবাদ খাতায় লিখুন (১৫১ থেকে ২০০):
(১৫১) তুমি কি কখনো সুন্দরবন গিয়েছ?
(১৫২) আমি কখনো সুন্দরবন যাইনি।
(১৫৩) আমি এইমাত্র ভাত খেয়েছি।
(১৫৪) আমরা গত সপ্তাহে একটি কম্পিউটার কিনেছি।
(১৫৫) তুমি কখন বাড়ি ফিরবে?
(১৫৬) সে আমাকে সাহায্য করতে অস্বীকার করল।
(১৫৭) আমি তাকে দিয়ে চিঠিটি লিখিয়ে নিলাম।
(১৫৮) শিক্ষক ছাত্রদের দিয়ে অংকটি করালেন।
(১৫৯) সে আমাকে সেখানে যেতে বাধ্য করল।
(১৬০) বইটি টেবিলের উপর রাখা আছে।
(১৬১) এই নদীর পানি খুব স্বচ্ছ।
(১৬২) ঢাকা বুড়িগঙ্গা নদীর তীরে অবস্থিত।
(১৬৩) বাংলাদেশ একটি নদীমাতৃক দেশ।
(১৬৪) অধিকাংশ মানুষ গ্রামে বাস করে।
(১৬৫) কৃষিকাজ আমাদের অর্থনীতির মেরুদণ্ড।
(১৬৬) নিয়মিত পড়াশোনা করলে পরীক্ষায় ভালো ফল করা যায়।
(১৬৭) যদি তুমি পরিশ্রম করো, তবে তুমি সফল হবে।
(১৬৮) যদি সে আসত, তবে আমি যেতাম।
(১৬৯) যদি তুমি আমাকে ডাকতে, তবে আমি আসতাম।
(১৭০) যদি আমি ধনী হতাম, তবে গরিবদের সাহায্য করতাম।
(১৭১) আমার যদি পাখির মতো ডানা থাকত!
(১৭২) হায়! আমি যদি আবার শিশু হতে পারতাম!
(১৭৩) ডাক্তার আসার পরে রোগীটি মারা গেল।
(১৭৪) আমরা স্টেশনে পৌঁছানোর পূর্বে ট্রেনটি ছেড়ে দিয়েছিল।
(১৭৫) আমরা পৌঁছাতে না পৌঁছাতেই বৃষ্টি শুরু হলো।
(১৭৬) শিক্ষক ক্লাসে ঢুকতে না ঢুকতেই ছাত্ররা দাঁড়িয়ে গেল।
(১৭৭) ঘণ্টা পড়তে না পড়তেই পরীক্ষা শুরু হলো।
(১৭৮) সে এত দ্রুত দৌড়াতে পারে না।
(১৭৯) তুমি কি জানো সে কোথায় থাকে?
(১৮০) আমি জানি না সে কেন কাঁদছে।
(১৮১) আমাকে সত্য কথাটি বলো।
(১৮২) কখনো মিথ্যা বলো না।
(১৮৩) সদা সত্য কথা বলবে।
(১৮৪) বড়দের সম্মান করা উচিত।
(১৮৫) পিতা-মাতাকে মান্য করো।
(১৮৬) ধূমপান স্বাস্থ্যের জন্য ক্ষতিকর।
(১৮৭) সকালের হাওয়া স্বাস্থ্যের জন্য ভালো।
(১৮৮) স্বাস্থ্যই সকল সুখের মূল।
(১৮৯) সময় ও স্রোত কারো জন্য অপেক্ষা করে না।
(১৯০) এক হাতে তালি বাজে না।
(১৯১) যেমন বাপ তেমন বেটা।
(১৯২) কাটা ঘায়ে নুনের ছিটা।
(১৯৩) ঘরপোড়া গরু সিঁদুরে মেঘ দেখলে ডরায়।
(১৯৪) নিজের চরকায় তেল দাও।
(১৯৫) সাবধানের মার নেই।
(১৯৬) কারিগরি প্রশিক্ষণ আত্মকর্মসংস্থান সৃষ্টি করে।
(১৯৭) সমাজসেবা অধিদপ্তর সুবিধাবঞ্চিত শিশুদের পুনর্বাসন করে।
(১৯৮) নারীর ক্ষমতায়ন দেশের সামগ্রিক উন্নয়নের চাবিকাঠি।
(১৯৯) নিরক্ষরতা দূরীকরণে সরকারের পদক্ষেপ প্রশংসনীয়।
(২০০) ডিজিটাল বাংলাদেশ এখন স্মার্ট বাংলাদেশে রূপান্তরিত হচ্ছে।`,
    answer: `151. Have you ever been to the Sundarbans?
152. I have never been to the Sundarbans.
153. I have just had my meal. (বা I have just eaten rice.)
154. We bought a computer last week.
155. When will you return home?
156. He refused to help me.
157. I had the letter written by him. (বা I made him write the letter.)
158. The teacher made the students solve the math.
159. He compelled me to go there.
160. The book is kept on the table.
161. The water of this river is very transparent (clear).
162. Dhaka stands on the bank of the Buriganga.
163. Bangladesh is a riverine country.
164. Most people live in villages.
165. Agriculture is the backbone of our economy.
166. One can do well in the exam by studying regularly.
167. If you work hard, you will succeed.
168. If he came, I would go.
169. If you had called me, I would have come.
170. If I were rich, I would help the poor.
171. Had I the wings of a bird! (বা I wish I had the wings of a bird!)
172. Would that I were a child again!
173. The patient died after the doctor had come.
174. The train had left before we reached the station.
175. No sooner had we reached than it started raining.
176. Scarcely had the teacher entered the classroom when the students stood up.
177. Hardly had the bell rung when the examination started.
178. He cannot run so fast.
179. Do you know where he lives?
180. I do not know why he is crying.
181. Tell me the truth.
182. Never tell a lie.
183. Always speak the truth.
184. One should respect one's elders.
185. Obey your parents.
186. Smoking is injurious to health.
187. Morning air is good for health.
188. Health is the root of all happiness.
189. Time and tide wait for none.
190. It takes two to make a quarrel.
191. Like father, like son.
192. To add insult to injury.
193. A burnt child dreads the fire.
194. Oil your own machine. (বা Mind your own business.)
195. Safe bind, safe find. (বা Prevention is better than cure.)
196. Technical training creates self-employment.
197. The Department of Social Services rehabilitates underprivileged children.
198. Women's empowerment is the key to overall national development.
199. The government's steps in eradicating illiteracy are commendable.
200. Digital Bangladesh is now transforming into Smart Bangladesh.`,
    tips: "No sooner had...than, Scarcely had...when, এবং ৩টি Conditionals (First, Second, Third conditional) এর গঠন লিখিত পরীক্ষার অনুবাদে ১০০% কমন থাকে।"
  }
];

// Append or update translation sets
translationSets.forEach(set => {
  const existingIndex = writtenQuestions.findIndex(q => q.id === set.id);
  if (existingIndex >= 0) {
    writtenQuestions[existingIndex] = set;
  } else {
    writtenQuestions.push(set);
  }
});

fs.writeFileSync(writtenQuestionsPath, JSON.stringify(writtenQuestions, null, 2), 'utf8');
console.log(`🎉 SUCCESS! Translations expanded to 200 items! Total sets in database: ${writtenQuestions.length}`);
