let fs=require("fs");
let path=require("path");

let inputArr=process.argv.slice(2);
let mainDir=inputArr[0];//webD
let subDirectories=inputArr.slice(1); //javascript react mongoDB

console.log(mainDir);
console.log(subDirectories);

let mainDirPath=path.join(process.cwd(),mainDir);
if(!fs.existsSync(mainDirPath)){
    fs.mkdirSync(mainDirPath);
}


for(let i=0;i<subDirectories.length;i++){
    console.log(subDirectories);

    let folder=path.join(mainDirPath,subDirectories[i]);
    console.log("folder path",folder);

    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }


    for(let j=1;j<=3;j++){
        let module=path.join(folder,`Module${j}`);
        console.log("module names",module);
        fs.mkdirSync(module);
        let fileName=path.join(module,"conent.md");
        fs.writeFileSync(fileName,"#Hello EveryOne")
    }
}
