const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime() / 60 / 60, 'ч'); //https://nodejs.org/api/os.html#osuptime
console.log(os.homedir());
