function sum (a,b,displayresult ){
    let result=a+b;
    return displayresult(result);
}

function displayresult(result){
    console.log("The sum of the result is : "+result);
}

sum(1,2,displayresult);




// function sum (a,b,displayresult ){
//     let result=a+b;
//     return result;
// }

// function displayresult(result){
//     console.log("The sum of the result is : "+result);
// }

// displayresult(sum(1,2));