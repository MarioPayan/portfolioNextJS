/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const directoryPath = 'public/images';
const outputJsonPath = 'src/app/_data/images_dimensions.json';


const getImageDimensions = async (filePath) => {
  const { width, height } = await sharp(filePath).metadata();
  return { width, height };
}

const processDirectory = async (dirPath, dimensionsMap) => {
  try {
    const files = await fs.readdir(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const fileStat = await fs.stat(filePath);

      if (fileStat.isDirectory()) {
        await processDirectory(filePath, dimensionsMap);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif', '.bmp'].includes(ext)) {
          const dimensions = await getImageDimensions(filePath);
          dimensionsMap[filePath.replace(/^public/, '')] = dimensions;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error);
  }
}

const processImages = async () => {
  try {
    const dimensionsMap = {};
    await processDirectory(directoryPath, dimensionsMap);
    await fs.writeFile(outputJsonPath, JSON.stringify(dimensionsMap, null, 2));
    console.log('DONE');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();