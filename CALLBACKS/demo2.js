/*
 This code down shows the implemenetation of fun(10,gun());
 which specifically explains the difference between gun fucntion being passed 
 as gun() and gun 
 */

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
function gun(){
    console.log("inside gun");
    return function(){
        console.log("returned function");
    }
}
    fun(10,gun());