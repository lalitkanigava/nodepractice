// const detail = require("obj.js");
// console.log("changes");
// console.log(detail.name);

// console.log("hello");
const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, 'file-system');
console.log(dirPath);
fs.readdir(dirPath, function(err, files){
if(err){
    console.log(err);
}

files.forEach(function(file){
console.log(file);
// fs.readFileSync(dirPath, 'utf8');
})
})