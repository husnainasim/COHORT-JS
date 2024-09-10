function fun(x,fn){
//x -> variable number
// fn -> callback function

//some logic 
    for (let i = 0; i < x; i++) {
       console.log(i);
        
    }

    fn(); // calling the callback fucntion passed 
    // some more logic 
}
fun(10,function log(){
    //this is the callback fucntion 
    console.log("Custom Logger");
});
// Anonymous callback fucntion 
fun(10,function (){
    //this is the callback fucntion 
    console.log("Anonymous  Logger");
});

// Also I can write a separate function lets say gun and 
// pass that into fun and that will be following the same logic
//  of call back function 

let g =function process(){
console.log("inside g ");
}
function gun(){
    console.log("inside gun");
}
fun(10,gun);
fun(10,g);

//* fun(10,gun()); -> fun(10,undefined);
// this gives an error as it will immediately call 
// the gun fucntion and will return the undefined into the fun that will be passed 
// as the second argument and the fn () will be set to udnefined which is not a fucntion
//  therefore resulting into an error
// This is demonstarted in demo2 in callback folder 


