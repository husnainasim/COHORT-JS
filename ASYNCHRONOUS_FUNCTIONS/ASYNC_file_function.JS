const fs = require("fs");

//filesystem module 
//This is  an asynchronous function and it is pushed from stack to
//  web api from where it will complete the time if there is an assigned 
//one and then pushed to call back queue from where it will be called
//  after all the lines have been read by the stack and then kamlaa didi
//  will be attended 

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
}
)
//This will be executed first 

console.log("hi there");

//then this will be executed and then the last console log statement 
// will be printed and then the callback function will be called
let a =0;

for(let i = 0; i <100000000;i++){
    a++;
}

console.log("hi there 2");