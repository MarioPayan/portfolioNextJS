/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path') 
const Jimp = require('jimp')

const publicImagesPath = 'public/images'
const publicBlurImagesPath = 'public/blurred_images'
const inputDirectory = `./${publicImagesPath}/`
const outputDirectory = `./${publicBlurImagesPath}/`
const blurFactor = 50
const qualityFactor = 25

const createMainDirectory = () => {
  if (fs.existsSync(outputDirectory)) {
    fs.rm(outputDirectory, {recursive: true}, error => {
      if (error){
        console.log('Error: ', error)
      }
    })
  } 
  fs.mkdirSync(outputDirectory, {recursive: true})
}

const createDirectories = filePath => {
  const directories = `${filePath}`.split('/').slice(0, -1)

  for (let i = 0; i < directories.length; i++) {
    let currentDirectory = `./${publicBlurImagesPath}/${directories.slice(0, i + 1).join('/')}`
    if (!fs.existsSync(currentDirectory)) {
      fs.mkdirSync(currentDirectory)
    }
  }  
}

const blurImagesInDirectory = async directory => {
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
        await blurredImage.write(`./${publicBlurImagesPath}/${subPath}`)
        process.stdout.write('.')
        console.log('DONE');
      } catch (error) {
        console.error(`Error processing ${file}: ${error}`)
      }
    }
  }
}

const main = () => {
  createMainDirectory()
  blurImagesInDirectory(inputDirectory)
}

main()
