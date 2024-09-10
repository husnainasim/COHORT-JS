function test(){
    for (let i = 0; i < 3; i++) { // for let  type variable that is a block scope variable  the log will remeber the value of i that is with respect to that log for example in first block the value of i is 0 so it will remeber the value for that block altough the value of i for the scope of test would be 3 but in case of let i value will be executed in terms of block 
    setTimeout(function exec(){
        console.log(`i: ${i}`);
    },i*1000);
        
    }
}

test();
//output:
// i: 0
// i: 1
// i: 2