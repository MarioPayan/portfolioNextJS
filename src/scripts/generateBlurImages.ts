import fs from 'fs'
import {promises as fsp} from 'fs'

import path from 'path'
import Jimp from 'jimp'

const INPUT_DIR = './public/images/'
const OUTPUT_DIR = './public/blurred_images/'
const blurFactor = 50
const qualityFactor = 25

const createMainDirectory = async () => {
  try {
    if (
      await fsp
        .access(OUTPUT_DIR)
        .then(() => true)
        .catch(() => false)
    ) {
      await fsp.rm(OUTPUT_DIR, {recursive: true})
    }
    await fsp.mkdir(OUTPUT_DIR, {recursive: true})
  } catch (error) {
    console.error('Error: ', error)
  }
}

const createDirectories = (filePath: string) => {
  const directories = `${filePath}`.split('/').slice(0, -1)

  for (let i = 0; i < directories.length; i++) {
    const currentDirectory = `${OUTPUT_DIR}${directories.slice(0, i + 1).join('/')}`
    if (!fs.existsSync(currentDirectory)) {
      fs.mkdirSync(currentDirectory)
    }
  }
}

const blurImagesInDirectory = async (directory: string) => {
  const files = fs.readdirSync(directory)
  for (const file of files) {
    const filePath = path.join(directory, file)
    if (fs.lstatSync(filePath).isDirectory()) {
      await blurImagesInDirectory(filePath)
    } else if (file.match(/\.(jpg|JPG|webp|jpeg|png)$/)) {
      try {
        const image = await Jimp.read(filePath)
        let resizedImage = undefined
        const {height, width} = image.bitmap
        if (height > width) {
          resizedImage = image.resize(Jimp.AUTO, 250)
        } else {
          resizedImage = image.resize(Jimp.AUTO, 250)
        }
        const lowQualityImage = resizedImage.quality(qualityFactor)
        const blurredImage = lowQualityImage.blur(blurFactor)
        const subPath = filePath.split('/').slice(2).join('/')
        createDirectories(subPath)
        await blurredImage.write(`${OUTPUT_DIR}${subPath}`)
        process.stdout.write('.')
      } catch (error) {
        console.error(`Error processing ${file}: ${error}`)
      }
    }
  }
}

const main = async () => {
  console.log('------------------------ BLURRING IMAGES ------------------------')
  await createMainDirectory()
  await blurImagesInDirectory(INPUT_DIR)
  console.log('------------------------ BLURRED IMAGES DONE --------------------')
}

main()
