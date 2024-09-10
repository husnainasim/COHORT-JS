// setTimeout function returns an id that can be stored into a variable that 
// can be used to delete that timout if we decide later that we dont need that fucntion 
let id1=setTimeout(function() {
    console.log("Task completed 1");
},10000);
let id2=setTimeout(function() {

    console.log("Task completed 2");
    clearTimeout(id1);
},5000);