const os = require('os')
//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
const pc =os.uptime();
console.log(pc)
console.log(`the system uptime is ${os.uptime()} seconds`)

const details = {
  name:  os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),

}
console.log(details)