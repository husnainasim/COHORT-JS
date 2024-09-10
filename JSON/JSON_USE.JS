// we can use strings to send the data to other users by using strings in shape of objects 
const users ='{"name":"Husnain Asim","age":"24","gender":"male"}';

console.log(users.name); // now we cannot do this as this is no longer an object it is now a string 
// Question is why did we needed this object to be turned into a string ?
// The asnwer is that if we have to send them into diff processes than we cant send them the objects coz they will belike what the fuck is this ?
// Therfore we send them the obects in shape of strings so that they know the template of the data that needs to be understood

//So we have to shift from objects to strings and vice versa therfore we use parse

//* JSON.parse() converts strings --> objects

const user =JSON.parse(users);
console.log(user.name);


// JSON.stringify() converts objects --> strings

const users2={
    name1: "Isna Nadeem",
    age: "20",
}

const User=JSON.stringify(users2);
console.log(User);
