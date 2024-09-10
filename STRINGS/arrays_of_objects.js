const allusers=[{
    firstName: "Husnain",
    gender: "Male",
},{
    firstName:"Areesha",
    gender: "Female",

},
{
    firstName:"Hamza",
    gender: "Male",
}
]

for(let i =0;i<allusers.length;i++){
    if(allusers[i].gender=="Male"){

        console.log(allusers[i].firstName);
    }
}
