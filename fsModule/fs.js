let fs=require("fs");
let path=require("path");

let content=fs.readFileSync("f1.txt");
console.log(content+"");

fs.writeFileSync("abc.txt","timon n pumba");

fs.appendFileSync("abc.txt","hakuna maatat");

fs.unlinkSync("abc.txt");


//directories

// to make a folder
// fs.mkdirSync("pathModule");


// to delete a folder
// fs.rmdirSync("pathModule");

// check if a file exist or not
// let doesExists=fs.existsSync("fs1.js");
// console.log("fs1.js file",doesExists);

// statusObj of a file or folder
// let statusObj=fs.lstatSync("f1.txt");
// console.log(statusObj);
// "C/Users/Program/Pepcoding/js-. to a folder
// "C/Users/Program/Pepcoding/js/array.js"->to a file


// console.log(statusObj.isFile());

// console.log(statusObj.isDirectory());


// let fileArr=fs.readdirSync("C:/complete html/PP-14 web developement/fileOrganizer/dir");
// console.log(fileArr);

let srcPath="C:/complete html/PP-14 web developement/fileOrganizer/fsModule/f1.txt";
let destPath="C:/complete html/PP-14 web developement/fileOrganizer/fsModule/f2.txt";

let toBeCopiedFileName=path.basename(srcPath);
let dest=path.join("C:/complete html/PP-14 web developement/fileOrganizer/dir",toBeCopiedFileName);
console.log(dest);
fs.copyFileSync(srcPath,dest);
fs.copyFileSync(srcPath,destPath);cd