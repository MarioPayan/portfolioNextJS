import data, {LANGUAGES} from '@/data/data'
import fs from 'fs'

const OUTPUT_DIRECTORY = './src/app/_data/'

const dataToJson = (data: {[key in LANGUAGES]: Data}): string => JSON.stringify(data, null, 2)

const main = () => {
  console.log('------------------------ GENERATING STATIC DATA -----------------')
  const jsonData = {
    [LANGUAGES.ENGLISH]: data(LANGUAGES.ENGLISH),
    [LANGUAGES.SPANISH]: data(LANGUAGES.SPANISH),
  }
  const json = dataToJson(jsonData)
  fs.writeFileSync(`${OUTPUT_DIRECTORY}raw_data.json`, json)
  console.log('------------------------ GENERATING STATIC DATA DONE ------------')
}

main()
