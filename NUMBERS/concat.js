let firstarr=[1,2,3,4];
let secarr=[5,6,7,8];
const finalarr=firstarr.concat(secarr);
console.log(final);

//2nd approach 

for (let i = 0; i < secarr.length; i++) {
    firstarr.push(secarr[i]);
    
}
console.log(firstarr);

for (let i = 0; i < secarr.length; i++) {
    // firstarr.concat(secarr[i]); // this doesnot gives you the result coz concat stores the result in a new array so you have to just reassign the answer to the firstarray like this:
    firstarr=firstarr.concat(secarr[i]); 
    
}
console.log(firstarr);

