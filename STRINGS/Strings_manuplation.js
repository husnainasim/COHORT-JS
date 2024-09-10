//Length of the string 

function findLength(str) {
    console.log("Original String: " + str);
    console.log("Length: " + str.length);
    

}
var str="Husnain Asim";
findLength(str);

//Index of strings 
function findIndex(str,target){
    console.log("Original String: " , str);
    console.log("Target String: " , target);
    console.log("Index of the target is : " , str.indexOf(target));
    // What if the word is in last position of the original string 
    console.log("Index of the target is : " , str.lastIndexOf(target));


}
var ran="Hello World World World ";

findIndex(ran,"World");

//! What if the word is not in the strings that you have written , then what happens is that you get -1 returned :


findIndex(ran,"fuckyou");


//* Splicing the string  (starting index ,ending index (ending index word isnot included in the answer string ))


function getslice(mani,start,end){

 let pot=   mani.slice(start,end);
console.log(pot);
}

let mani="Mahnoorischawal";
getslice(mani,0,7);

//! substr vs slice 

const value="Husnain Asim";
let ans=value.substr(2,5); //(start index,Length of characters included in the string)

let ans2=value.slice(2,5); // (start index , end index (end index isnot included ))

console.log(ans);
console.log(ans2);


// Logic of slice (written in plane code ) --> Backend Knowledge 


function getslicebackendfunction(str,startindex,endindex){
    let newstring="";
    for (let i = 0; i < str.length; i++) {
       if (i>=startindex && i<endindex) {
        newstring=newstring+str[i];

       }
        
    }
    return newstring;

}

let amaz="Husnain Asim";
let rev=amaz.slice(0,5);
console.log(rev);

console.log(getslicebackendfunction(rev,0,5));

//replace string 

let goaway="Hello world";

console.log(goaway.replace("world","javascript")); // .replace(target_string,string_needed_to_be_changed)

// split fucntion in string

let value1="hi my name is husnain asim ";
let words =value1.split(" "); // split uses the delimiter(which is in this case is space and that can be comma,anyword etc) to separate the words of the parent string into an array having components of the parent string divided into many strings 
console.log(words); 

// trim function in strings manuplation 

let ola="      Harkirat Singh        ";

console.log(ola.trim()); // this fucntion helos us to trim the spaces at the end and start of the sentences 
//* The practical use case of this can be the email
//* entering process that can trims the spaces at the start
//* and the end of the sentences if the user has mistakenly
//* entered spaces at the start and end of the sentence

// Upper nad Lower cases keywords 

let keyword ="husnain asim ";
let keyword1 ="HUSNAIN ASIM ";

console.log(keyword.toUpperCase());
console.log(keyword.toLowerCase());