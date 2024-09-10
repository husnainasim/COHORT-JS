function gettime(){
    console.log(new Date().getHours()+" "+new Date().getMinutes()+" "+new Date().getSeconds());

}
setInterval(gettime,1000); // this calls the function after 1 sec (1000ms=1 sec) which measn that we can use this function to get the current time after some interval that will be asked by the user 
