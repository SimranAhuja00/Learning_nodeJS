const fs = require('fs');

//creating a folder
fs.mkdirSync('unicorn');

//creating a new file
fs.writeFileSync('read.txt',"It is a good day today.");
fs.writeFileSync('read.txt'," Very pleasant weather."); //overwrites on existing file

//add something to existing file
fs.appendFileSync('read.txt', " Taking a walk outside should be fun.");

//to read a file
const buffer_data = fs.readFileSync('read.txt');
console.log(buffer_data);        //prints buffer data

//converting buffer data to String format

const data = buffer_data.toString();
console.log(data);

//to rename the file
fs.renameSync('read.txt','readwrite.txt');

//to delete a file
fs.unlinkSync('readwrite.txt');

