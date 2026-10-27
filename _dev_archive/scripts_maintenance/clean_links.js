const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../../');

// 1. UPDATE index.html
function cleanIndex() {
  const file = path.join(root, 'index.html');
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const out = [];
  let skipping = false;
  let skipEnd = 0;

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('_exam_guide.html')) {
      // Find the closing </a> for this tag
      while (i < lines.length && !lines[i].includes('</a>')) {
        i++;
      }
      continue;
    }
    // Remove style="grid-column: span 2;" from syllabus PDF links so it stays clean 1 col
    let modified = l.replace(' style="grid-column: span 2;"', '');
    out.push(modified);
  }

  fs.writeFileSync(file, out.join('\n'), 'utf8');
  console.log('Cleaned index.html');
}

// 2. UPDATE Sub-Assistant Maintenance Engineer
function cleanSubAssistant() {
  const file = path.join(root, 'sub_assistant_maintenance_engineer_super_suggestion.html');
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const out = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('sub_assistant_maintenance_engineer_exam_guide.html')) {
      while (i < lines.length && !lines[i].includes('</a>')) i++;
      continue;
    }
    out.push(lines[i]);
  }
  fs.writeFileSync(file, out.join('\n'), 'utf8');
  console.log('Cleaned sub_assistant_maintenance_engineer_super_suggestion.html');
}

// 3. UPDATE Junior Instructor
function cleanJuniorInstructor() {
  const file = path.join(root, 'junior_instructor_computer_super_suggestion.html');
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const out = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('junior_instructor_computer_exam_guide.html')) {
      while (i < lines.length && !lines[i].includes('</a>')) i++;
      continue;
    }
    out.push(lines[i]);
  }
  fs.writeFileSync(file, out.join('\n'), 'utf8');
  console.log('Cleaned junior_instructor_computer_super_suggestion.html');
}

// 4. UPDATE Petrobangla
function cleanPetrobangla() {
  const file = path.join(root, 'petrobangla_sub_assistant_engineer_super_suggestion.html');
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const out = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('petrobangla_sub_assistant_engineer_exam_guide.html')) {
      while (i < lines.length && !lines[i].includes('</a>')) i++;
      continue;
    }
    out.push(lines[i]);
  }
  fs.writeFileSync(file, out.join('\n'), 'utf8');
  console.log('Cleaned petrobangla_sub_assistant_engineer_super_suggestion.html');
}

// 5. UPDATE DSS Karigori Proshikhok
function cleanDssKarigori() {
  const file = path.join(root, 'dss_karigori_proshikhok_computer_super_suggestion.html');
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const out = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('dss_karigori_proshikhok_computer_exam_guide.html')) {
      while (i < lines.length && !lines[i].includes('</a>')) i++;
      continue;
    }
    out.push(lines[i]);
  }
  fs.writeFileSync(file, out.join('\n'), 'utf8');
  console.log('Cleaned dss_karigori_proshikhok_computer_super_suggestion.html');
}

cleanIndex();
cleanSubAssistant();
cleanJuniorInstructor();
cleanPetrobangla();
cleanDssKarigori();
