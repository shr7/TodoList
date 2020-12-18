
try {
  const { merge } = require('mochawesome-merge')
  const options = {
    files: [
      './src/client//mochawesome-report/mochawesome.json',
      './src//mochawesome-report/mochawesome.json',
    ],
  }
  merge(options).then(report => {
    console.log(JSON.stringify(report))
  })
} catch(err) {
  console.log('Error in parsing JSON file: ', err)
}
