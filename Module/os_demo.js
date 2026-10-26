const os = require('os');

console.log("Operating System Information");

console.log("Architecture:", os.arch());

console.log("CPU Information:", os.cpus());

console.log("Free Memory:", os.freemem());

console.log("Home Directory:", os.homedir());

console.log("Hostname:", os.hostname());

console.log("Platform:", os.platform());

console.log("OS Release:", os.release());

console.log("Temporary Directory:", os.tmpdir());

console.log("Total Memory:", os.totalmem());

console.log("OS Type:", os.type());

console.log("System Uptime:", os.uptime());