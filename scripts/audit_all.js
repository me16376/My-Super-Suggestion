const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const JOB_FOLDERS = [
  'Sub-Assistant Maintenance Engineer Super Suggestion',
  'Junior Instructor Tech Computer Super Suggestion',
  'Petrobangla Sub-Assistant Engineer Computer IT',
  'DSS Karigori Proshikhok Computer Super Suggestion',
  'DSS Data Entry Operator Super Suggestion'
];

let totalFilesChecked = 0;
let totalErrors = 0;

console.log('=== AUDITING ALL JSON FILES ACROSS PLATFORM ===\n');

for (const folder of JOB_FOLDERS) {
  const folderPath = path.join(ROOT_DIR, folder);
  if (!fs.existsSync(folderPath)) {
    console.error(`Folder missing: ${folder}`);
    totalErrors++;
    continue;
  }

  function walk(d) {
    const list = fs.readdirSync(d);
    for (const item of list) {
      const full = path.join(d, item);
      if (fs.statSync(full).isDirectory()) {
        walk(full);
      } else if (item.endsWith('.json')) {
        totalFilesChecked++;
        try {
          const raw = fs.readFileSync(full, 'utf8');
          const data = JSON.parse(raw);
          if (!Array.isArray(data)) {
            console.warn(`[WARN] Not an array in ${path.relative(ROOT_DIR, full)}`);
          }
        } catch (e) {
          console.error(`[ERROR] Corrupted JSON in ${path.relative(ROOT_DIR, full)}:`, e.message);
          totalErrors++;
        }
      }
    }
  }

  walk(folderPath);
}

console.log(`\nAudit complete: ${totalFilesChecked} JSON files scanned.`);
if (totalErrors === 0) {
  console.log('🎉 100% OF JSON FILES ARE VALID AND ERROR-FREE!');
} else {
  console.log(`⚠️ Found ${totalErrors} errors during audit.`);
}
