function mapper(arr,fn){
    // arr-> array of elements 
    // fn -> callback fucntion  which expects two arguments value and index 

let result = [];

    for(var i=0;i<arr.length;i++){
       // i -> index of the element 
       // arr[i]-> value of thee elements of the array 

        let res=fn(arr[i],i); //using callback function
        result.push(res);

    }
    return result;

}
let arr = [1,2,3,4,5];
let x =mapper(arr,function cuber(v,i){
    console.log(v,v*v*v,i);
    return v*v*v;
   

});

console.log(x);
console.log(arr);

//! Without the callback logic code 
// function mapper(arr){
//     let result = [];
//         for(var i=0;i<arr.length;i++){
//             console.log(arr[i],i);
//             let res=arr[i]*arr[i];
//             result.push(res);
    
//         }
//         return result;
    
//     }
//     let arr = [1,2,3,4,5];
//     let x =mapper(arr);
    
//     console.log(x);
//     console.log(arr);