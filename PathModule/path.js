const path = require('path');
//path module in NodeJS
//it provides utilities for working with file and directory paths

//to get the directory name we are working in
const dir_name = path.dirname('C:/Users/Simran/node-learn/path-module/path.js');
console.log(`The directory name is ${dir_name}`);

//to get extension name
const ext_name = path.extname('C:/Users/Simran/node-learn/path-module/path.js');
console.log(`The extension name is ${ext_name}`);

//to get the name of the file
const file_name = path.basename('C:/Users/Simran/node-learn/path-module/path.js');
console.log(`The file name is ${file_name}`);

//to get the info of root, directory, base, extension, and name all at once
const file_info = path.parse('C:/Users/Simran/node-learn/path-module/path.js');
console.log(`Entire file info is :-`);
console.log(file_info);
