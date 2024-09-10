let firstName="Husnain"
let age=19
let isMarried=false;


console.log("the firstName of the person is " + firstName+" and the age is : "+age);

console.log("is the person married ? " );

//if else 

if (isMarried==false){
    console.log("the person is not married");
}
else{
    console.log("the person is married");
}

console.log("--------------------------------");

//loops

let temp=0;
for (let i=0; i<=100 ; i++) {
    temp +=i;
}
console.log("the answer of temp is : "+temp);


//Arrays

//printing the names in an array 

let constArray=["husnain","Aima","Isna"];

for (let index = 0; index < constArray.length; index++) {
    console.log(constArray[index]);
    
}

//calculating the even  numbers in an array 

let ages=[23,21,24,26];
let count =0;
for (let i = 0; i < ages.length; i++) {
    if(ages[i]%2==0){

        console.log(ages[i]);
        count++;

    }
    
}
console.log("the number of even numbers in the array are : "+count);


//print the biggest number in an array 

let bigarray=[23,43,55,22,11,2,100];

let max=0;

for (let i = 0; i < bigarray.length; i++) {
    if(bigarray[i]>max){
        max=bigarray[i];

    }
    
}

console.log("The biggest element in the array is : "+max);