const os = require('os');

//get info abour your operating system's architechture
console.log(`bit-architechture of this OS is ${os.arch()}`);

//get info about free memory available
const freeMemory = os.freemem();
console.log(`Free memory in bytes is ${freeMemory}`);// shows memory available in bytes
console.log(`Free memory in bytes is ${freeMemory /1024/1024/1024}`);// to show memory in GB

//total memory
const totalMemory = os.totalmem();
console.log(`Total memory in bytes is ${totalMemory}`);// shows total memory available in bytes
console.log(`Total memory in bytes is ${totalMemory /1024/1024/1024}`);// shows total memory available in bytes

//to know the hostname
console.log(`The hostname is ${os.hostname()}`);

//to know the platform you are working on
console.log(`Platform you are working on ${os.platform()}`);

//To know the type of the Operating System
console.log(`OS type is ${os.type()}`);




