const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const browserPath = fs.existsSync(chromePath) ? chromePath : edgePath;

const baseDir = path.resolve(__dirname, '../../');
const htmlPath = path.join(baseDir, 'dss_data_entry_operator_exam_guide.html');
const pdfFolder = path.join(baseDir, 'DSS Data Entry Operator Super Suggestion');
const pdfPath = path.join(pdfFolder, 'DSS_Data_Entry_Operator_Exam_Guide.pdf');

console.log('Using browser:', browserPath);
console.log('Input HTML:', htmlPath);
console.log('Output PDF:', pdfPath);

const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
const cmd = `"${browserPath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  if (fs.existsSync(pdfPath)) {
    const size = fs.statSync(pdfPath).size;
    console.log(`✅ Success! Generated PDF: ${pdfPath} (${size} bytes)`);
  } else {
    console.error('❌ PDF file was not created.');
  }
} catch (err) {
  console.error('Error generating PDF:', err.message);
}
