import {promises as fs} from 'fs'
import path from 'path'
import sharp from 'sharp'

const INPUT_DIR = 'public/images'
const OUTPUT_JSON_DIR = 'src/app/_data/images_dimensions.json'

type Dimensions = {
  width?: number
  height?: number
}

type DimensionsMap = {[key: string]: Dimensions}

const getImageDimensions = async (filePath: string): Promise<Dimensions> => {
  const {width, height} = await sharp(filePath).metadata()
  return {width, height}
}

const processDirectory = async (dirPath: string, dimensionsMap: DimensionsMap) => {
  try {
    const files = await fs.readdir(dirPath)

    for (const file of files) {
      const filePath = path.join(dirPath, file)
      const fileStat = await fs.stat(filePath)

      if (fileStat.isDirectory()) {
        await processDirectory(filePath, dimensionsMap)
      } else {
        const ext = path.extname(file).toLowerCase()
        if (['.jpg', '.jpeg', '.png', '.gif', '.bmp'].includes(ext)) {
          const dimensions = await getImageDimensions(filePath)
          dimensionsMap[filePath.replace(/^public/, '')] = dimensions
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error)
  }
}

const main = async () => {
  console.log('------------------------ GENERATE IMAGES DIMENSIONS -------------')
  try {
    const dimensionsMap = {}
    await processDirectory(INPUT_DIR, dimensionsMap)
    await fs.writeFile(OUTPUT_JSON_DIR, JSON.stringify(dimensionsMap, null, 2))
  } catch (error) {
    console.error('Error processing images:', error)
  }
  console.log('------------------------ GENERATE IMAGES DIMENSIONS DONE --------')
}

main()
