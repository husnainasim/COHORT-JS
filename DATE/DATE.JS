
function sum(){
    let a=0;
    for (let i = 0; i < 10000000; i++) {
        
        
        a=a+i;
        
    }
    
}
let beforedate=new Date();
let beforeTimeinMs=beforedate.getTime();

sum();
let afterdate=new Date();
let afterTimeinMs=afterdate.getTime();
console.log(afterTimeinMs-beforeTimeinMs);


