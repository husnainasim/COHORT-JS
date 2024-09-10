function todo(task){
    console.log("Start of todo:");
    setTimeout(function fun(){
        console.log("Completed "+task);
    },2000);
    task ="Quizes"; //! No the value of the variable will be changed to quizes 
    // from assignemnets and JS willl allocate the special
    //  memory to the varaibel task 

    console.log("End of todo");
}


console.log("Starting");
todo("assignments");
console.log("Ending");

