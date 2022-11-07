import axios from 'axios'

const main = async () => {
  try {
    const { data } = await axios.get('https://data.fda.gov.tw/opendata/exportDataList.do?method=ExportData&InfoId=19&logType=5')
    for (let i = 0; i < data.length; i++) {
      const number = data[i]['許可證字號']
      const worry = data[i]['保健功效宣稱']
      if (number === '衛部健食字第A00235號') {
        console.log(worry)
      }
    }
  } catch (error) {
    console.log('未經過認證')
    console.error(error)
  }
}

main()
