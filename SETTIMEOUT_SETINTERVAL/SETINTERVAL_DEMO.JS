let id =setInterval(function(){
console.log("WTF");
},3000)

setTimeout(function(){
    clearInterval(id);
},3000)