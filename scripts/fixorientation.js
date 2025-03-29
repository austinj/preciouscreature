import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = './src/images';

function processDirectory(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(async (entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath); // 🔁 Recurse into subdirectory
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      try {
        const image = sharp(fullPath);
        const metadata = await image.metadata();

        if (!metadata.orientation || metadata.orientation === 1) {
          console.log(`✅ Already upright: ${fullPath}`);
          return;
        }

        const rotated = await image.rotate().toBuffer();
        fs.writeFileSync(fullPath, rotated);
        console.log(`🔄 Fixed orientation: ${fullPath}`);
      } catch (err) {
        console.warn(`⚠️ Skipped or failed: ${fullPath} (${err.message})`);
      }
    }
  });
}

processDirectory(inputDir);
