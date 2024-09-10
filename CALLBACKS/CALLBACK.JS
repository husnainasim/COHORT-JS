// CALLBACK: Passing a function inside another function as an argument which basically adheres to the concept of DRY
function square(n){
return n*n
}
function cube(n){
return n*n*n
}

function sumofSmth(a,b,fn){
    console.log(a);
    console.log(fn);

    let val1=fn(a);
    let val2=fn(b);

    return val1+val2;

}

console.log(sumofSmth(2,2,square));

//! Rather using the sum of square and cubes functions separately we used callbacks where we pass the function inside the argument of another function

// function square(n){
//     return n*n
//     }
//     function cube(n){
//     return n*n*n
//     }
    
//     function sumofsquare(a,b){
        
    
//         let val1=square(a);
//         let val2=square(b);
    
//         return val1+val2;
    
//     }
    
//     function sumofcube(a,b){
        
    
//         let val1=cube(a);
//         let val2=cube(b);
    
//         return val1+val2;
    
//     }
    
//     console.log(sumofcube(2,2));