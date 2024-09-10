//* cretaed an object 
let obj={
    key1:"value1",
    key2:"value2",
    key3:"value3",
}

let newobj=Object.assign({}, obj, {newProperty:"newValue"}); //.assign({},object,{key:value})  is the syntax for adding some property into the obj 

console.log(newobj); //
console.log(obj); //


function objectamethods(obj){
    
    // getting  the keys 
    let keys = Object.keys(obj);
    console.log("Keys:",keys);
    //printing the values
    let bullshit=Object.values(obj);
    console.log("Values:",bullshit);

    //Entries --> keys + values both 

    let entries=Object.entries(obj);
    console.log("Entries:",entries);

    //Detecting a property of an object --> gives false if the object doesnot have the attribute that is being pushed into the hasOwnProperty()

    let hasprop=obj.hasOwnProperty("property");
    console.log("Property:",hasprop);

}

objectamethods(obj);