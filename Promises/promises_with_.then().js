function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("Started downloading form " + url);
        setTimeout(function processDownloading(){
            let data="Dummy data";
            console.log("Download completed");
            resolve(data);
            console.log("hello");

        }
        ,7000)

    })
}

function writefile(data){
    return new Promise(function(resolve,reject){
console.log("Starting writing ", data, "in a file");
setTimeout(function processWriting(){
    let filename="result.exe";
    console.log("File written successfully");
    resolve(filename)
    },3000)
})
}

function uploadData(file,url){
    return new Promise(function(resolve,reject){
        console.log("Upload Started on url ", url,"filename is ",file);
        setTimeout(function processUpload(){
            let result="SUCCESS";
            console.log("Uploading done");
            resolve(result);
        },5000)
    })
}
// let data =fetchdata("www.datadrive.com");
// let filename=writefile(data);
// let response = uploadData(filename,"www.drivegoogle.com");
// this above code willnot work in real fasion 


// let downloadPromise=fetchdata("www.datadrive.com");
// downloadPromise
// .then(function processDownload(value){
//     console.log("Download promise fulfilled");
//     let writePromise = writefile(value);
//     writePromise.then(function processWriting(value){
//         console.log("writing done");
//         console.log("filename is ",value);

//     })
    
// })
// This above code solves the inversion of control as there is no call for call back fucntion istead there is a resolve that can exist only once as it works like return and there needs to be only one return statement inside a function 
//but it still gets us into promise hell

let downloadPromise=fetchdata("www.datadrive.com");
downloadPromise//as .then() returns a new promise object 
.then(function processDownload(value){
    console.log("Downloading is done with the following value",value);
  return value;
    })
.then(function processWrite(value){
   return writefile(value);
})
.then(function processUpload(value){
    return uploadData(value,"www.drive.google.com");
})