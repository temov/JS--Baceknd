const fs = require('fs');
const path = require('path');

//write file

fs.writeFileSync('homework.txt', 'Homework 02 in Basic Node')

//append file
fs.appendFileSync('homework.txt','\nFINISHED')

console.log(__dirname);

console.log('fileName:',__filename);

let filePath = path.join(__dirname,'homework.txt');

console.log(filePath)

//read file

let fileRead = fs.readFileSync(filePath, {encoding:'utf-8'})
console.log(fileRead)

