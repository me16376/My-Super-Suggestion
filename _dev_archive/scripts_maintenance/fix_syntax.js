const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const target = "delimiters: [{left: '', right: '', display: true}, {left: '";
const replacement = "delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}], throwOnError: false";

console.log('Occurrences of broken delimiter target:', html.split(target).length - 1);

html = html.split(target).join(replacement);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Fixed KaTeX delimiters successfully!');

if (fs.existsSync(path.join(__dirname, '../temp_check.js'))) {
  fs.unlinkSync(path.join(__dirname, '../temp_check.js'));
}
