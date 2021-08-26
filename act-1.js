let fs=require("fs");
let path=require("path");

let inputArr=process.argv.slice(2);
let inputDir=inputArr[0];
console.log(inputArr);
let allEntities=fs.readdirSync(inputDir);
// console.log(allEntities);

content="";
for(let i=0;i<allEntities.length;i++){
    let entityName=allEntities[i];
    console.log(entityName);

let eName=path.join(inputDir,entityName);
let stats=fs.lstatSync(eName);
console.log(stats);
let isFile=stats.isFile();
if(isFile){
    let extName=path.extname(eName);
    if(extName==".txt"){
        content+=fs.readFileSync(eName);
    }
   }
}

console.log(content);
// let summaryFile=path.join(process.cwd(),"summary.txt");

let summaryFile="C://complete html//PP-14 web developement//fileOrganizer//summary.txt";
fs.writeFileSync(summaryFile,content);





