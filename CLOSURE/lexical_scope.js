// Here we will learn about closure property:
// As the task is in the scope of todo and in usual languages after the todo 
// fucntion is executed the task (variable ) which is in the scope of todo will be erased from the memory
// But in this case due to CLOSURE , the  fucntion fn() is able to use the 
// variable task after the todo is executed due to closure property
// which means that variable will not be erased from the memory so that it can be used by the 
// fucntion which contains that variable 
//In other words the function fn remembers the scope of todo 

function todo(task){
    console.log("Start of todo:");
    setTimeout(function fun(){
        console.log("Completed "+task);
    },2000)
    console.log("End of todo");
}


console.log("Starting");
todo("assignments");
console.log("Ending");

