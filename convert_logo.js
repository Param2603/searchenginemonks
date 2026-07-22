const fs = require('fs');
const sharp = require('sharp');

async function convertLogo() {
  let svgContent = fs.readFileSync('public/logo.svg', 'utf8');

  // The dark text is #646464. We replace it with white.
  svgContent = svgContent.replace(/#646464/g, '#ffffff');

  // Convert to PNG with sharp
  await sharp(Buffer.from(svgContent))
    .png()
    .toFile('public/logo-white-text.png');

  console.log('Successfully created public/logo-white-text.png');
}

convertLogo().catch(console.error);
