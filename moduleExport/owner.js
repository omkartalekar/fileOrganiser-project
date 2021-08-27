let str="hakunama tata";
let a=10;
function foo(msg){
    return "hi i was made in owner.js "+msg
};

console.log("hello I was made in owner.js");

module.exports={
    var:a,
    string:str,
    fooFnc:foo
}


// console.log(module);
// module.exports=str;
