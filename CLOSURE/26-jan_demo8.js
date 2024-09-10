const add=(function exec(){
    let counter =0;
    return function process(){
        counter += 1;
        return counter;

}
})(); // An iife function : read about it 

console.log(add());
// here on the first log, the value of counter comes ouut to be 1 due to counter+=1
console.log(add());
// here after the first log the value of counter comes ouut to be 2 as javascript rememebers the value of counter(variable) that was in the scope of exec.It remebers the variable not its value therefore when again called counter was set to 0 but js closure property saves the  counter instead of the variable value 
console.log(add());