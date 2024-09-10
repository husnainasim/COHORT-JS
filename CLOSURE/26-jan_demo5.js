function test(){
    for (var i = 0; i < 3; i++) { // for var type variable the log will remeber the value of i that is in the scope of fucntion test()
    setTimeout(function exec(){
        console.log(`i: ${i}`);
    },i*1000);
        
    }
}

test();