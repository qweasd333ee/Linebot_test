import fs from 'fs'

export default (json, filename) => {
  if (!process.env.WRITEJSON !== 'ture') return

  const exists = fs.existsSync('./dump')
  if (!exists) {
    fs.mkdirSync('./dump')
  }
  fs.writeFileSync(`./dump/${filename}.json`, JSON.stringify(json, null, 2))
}
