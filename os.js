const os = require('os');

// information about current user of os
var userOsDetail = os.userInfo();
console.log(userOsDetail); 

//get os or system uptime in seconds 
var uptime = os.uptime();
console.log(uptime);