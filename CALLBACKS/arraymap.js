let arr=[1,2,3,4,5];
let x=arr.map(function process(v,i){ // .map fucntion calls a callback fucntion for each element in the array and returns an array 

    console.log(v,i);
    return v*v;
})
console.log(x);
console.log(arr);