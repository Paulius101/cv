const fs = require('fs');
const path = require('path');

const inputPath = path.resolve(__dirname, '..', 'Paulius Dambrauskas  CV 1.pdf');
const outDir = path.resolve(__dirname, '..', 'src', 'assets');
const outPath = path.join(outDir, 'cv.json');

fs.mkdirSync(outDir, { recursive: true });

const dataBuffer = fs.readFileSync(inputPath);

(async () => {
  try {
    const pdfModule = await import('pdf-parse');
    console.log('pdfModule type:', typeof pdfModule, 'keys:', Object.keys(pdfModule));
    const parse = pdfModule.default || pdfModule.parse || pdfModule;
    console.log('parse type:', typeof parse);
    const data = await parse(dataBuffer);
    const text = data.text || '';
    const json = { text };
    fs.writeFileSync(outPath, JSON.stringify(json, null, 2), 'utf8');
    console.log('Extracted text written to', outPath);
  } catch (err) {
    console.error('Failed to extract PDF text', err);
    process.exit(1);
  }
})();
