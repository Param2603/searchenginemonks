const fs = require('fs');

const svgContent = fs.readFileSync('public/logo.svg', 'utf8');

// Find all fill attributes
const fillRegex = /fill="([^"]+)"/g;
let match;
const colors = new Set();
while ((match = fillRegex.exec(svgContent)) !== null) {
  colors.add(match[1]);
}

console.log('Colors found in SVG:');
console.log(Array.from(colors).join(', '));
