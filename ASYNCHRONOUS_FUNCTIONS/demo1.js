function fun(){
    console.log("Start");
    setTimeout (function first(){

        console.log("Inside the 5s timer ");
    },5000);
    setTimeout (function second(){
        console.log("Inside the 3s timer ");
    },3000);
    
}
fun();
for (let i = 0; i < 10000000000; i++) {
    
    //some task 
}
// Althouh this timer had less time to execute than other set timeout fucntion but due to the for loop which takes some more seconds
//  that is why 3 seconds timeout adn 5 seconds timeout fucntion were completed before and were sent to the event queue firstly than 0 seconds timeout  fucntion
setTimeout (function last(){
    console.log("Inside the 0s timer ");
},0);
