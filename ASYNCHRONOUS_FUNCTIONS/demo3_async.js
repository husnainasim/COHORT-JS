function process(){
    console.log("start");
    for(var i=0; i<3;i++){
        setTimeout(function(){
            console.log("execute after some time ");
        },3000)
        console.log("inside the loop ");
    }

    for(var j=0; j<100000; j++){

    }
    console.log("end");
}
process();
console.log("Takka");