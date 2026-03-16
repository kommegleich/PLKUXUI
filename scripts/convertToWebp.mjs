import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('src/images');

async function convertToWebp() {
    const files = fs.readdirSync(imagesDir);
    let convertedCount = 0;

    for (const file of files) {
        if (file.match(/\.(png|jpe?g)$/i)) {
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);
            const inputPath = path.join(imagesDir, file);
            const outputPath = path.join(imagesDir, `${baseName}.webp`);

            try {
                // High quality WebP conversion (near lossless)
                await sharp(inputPath)
                    .webp({ quality: 90, nearLossless: true })
                    .toFile(outputPath);
                
                console.log(`Converted: ${file} -> ${baseName}.webp`);
                fs.unlinkSync(inputPath); // Remove original image
                convertedCount++;
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
    
    console.log(`Successfully converted ${convertedCount} images to WebP.`);
}

convertToWebp();
