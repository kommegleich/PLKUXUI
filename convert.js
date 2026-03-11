import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './src/images';

async function convert() {
    const files = fs.readdirSync(dir).filter(f => f.startsWith('project1-pages') && f.endsWith('.png'));

    for (const file of files) {
        const inputPath = path.join(dir, file);
        const fileName = file.replace('.png', '.webp');
        const outputPath = path.join(dir, fileName);

        await sharp(inputPath)
            .webp({ quality: 85 })
            .toFile(outputPath);

        console.log(`Converted ${file} to ${fileName}`);
        fs.unlinkSync(inputPath); // remove old png
    }
}

convert().catch(console.error);
