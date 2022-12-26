
const path = require('path')

console.log('node path dirname ', path.dirname(__filename))
console.log('node path basename ', path.basename(__filename))
console.log('node path extname ', path.extname(__filename))
console.log('node path extname+slice ', path.extname(__filename).slice(1))
console.log('node path parse ', path.parse(__filename))
console.log('node path resolve ', path.resolve(__dirname,'..','./modules', './app.js'))
console.log('node path join ', path.join(__dirname,'..','./modules', './app.js'))