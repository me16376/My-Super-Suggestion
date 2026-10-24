const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const content = fs.readFileSync(indexPath, 'utf8');

const pStart = content.indexOf('let PRELIM_QUESTIONS =');
const appStart = content.indexOf('// Current State');

if (pStart === -1 || appStart === -1) {
  console.error('Could not find markers in index.html');
  process.exit(1);
}

let headPart = content.slice(0, pStart);
let tailPart = content.slice(appStart);

// 1. Add KaTeX to head if not present
if (!headPart.includes('katex.min.css')) {
  const katexTags = `  <!-- KaTeX for Math & Technical Equations -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
</head>`;
  headPart = headPart.replace('</head>', katexTags);
}

// 2. Add KaTeX auto-render in tailPart
if (!tailPart.includes('renderMathInElement')) {
  const mathCall = `renderWrittenCards(filtered, container);
      }

      // Auto-render LaTeX & Math Formulas
      if (window.renderMathInElement) {
        try {
          renderMathInElement(container, {
            delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false}
            ],
            throwOnError: false
          });
        } catch(e) {}
      }`;
  tailPart = tailPart.replace('renderWrittenCards(filtered, container);\n      }', mathCall);
}

// 3. Assemble clean index.html with modular external script links
const middlePart = `  <!-- Modular Question Datasets (100% offline & zero-CORS file:// protocol compatible) -->
  <script src="data/prelim_data.js"></script>
  <script src="data/written_data.js"></script>
  <script>
    let PRELIM_QUESTIONS = window.PRELIM_QUESTIONS || [];
    let WRITTEN_QUESTIONS = window.WRITTEN_QUESTIONS || [];

    `;

const finalHtml = headPart + middlePart + tailPart;
fs.writeFileSync(indexPath, finalHtml, 'utf8');

console.log('Restructured index.html successfully!');
console.log('New file size:', fs.statSync(indexPath).size, 'bytes');
