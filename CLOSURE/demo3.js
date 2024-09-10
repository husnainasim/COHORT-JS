function a(name){
    return function b(){
        console.log(name);
    }
}

let x = a("Husnain");
// This for loop is placed here to understand the concept of closure:
// Here we can see that the fucntion a has been executed and name was in the scope of 
// function a() but after the loop the fucntion b() is executed that was inside the scope of 
// fucntion a() but still retained the variable name which was in teh scope of a 
//! That shows the porperty of closure 

for (let i = 0; i < 10000000000; i++) {
   
    
}

console.log(x);
x();