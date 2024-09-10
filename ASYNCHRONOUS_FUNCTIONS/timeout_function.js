function findsum(n){
    let ans =0 ;
    for (let i = 0; i < n; i++) {
       ans +=i;
        
    }
    return ans;
}

/* Remember it doesnot matter which async function is written first
 as in the case below findsumTill200 was written before findsumTill100
 But still findsumTill100 runs first as its take less time to be on hold that 
 is one sec that is less than 2 sec therefore its output is written first then the 
 output of findsumTill200*/
 
function findsumTill100(){
    console.log(findsum(100));
}
function findsumTill200(){
    console.log(findsum(200));
}
//This is an asynchronous function that will run after 1 sec therefore
//  the hi there statemnet will run first 


setTimeout(findsumTill200,2000);
setTimeout(findsumTill100,1000);

console.log("hi there");
