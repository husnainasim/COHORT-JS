
function custom(url,fn) {

    console.log("Download Starting...");
    setTimeout(function process() {
        console.log("Download completed successfully");
        let response ="Dummy Data";
        fn(response);
        console.log("1111111");
   
       
        
    },3000)
    
}
function writefile(data,fn){
    console.log("Started writing data ",data);
    setTimeout(function process() {
        console.log("writing completed");
        let filename="output.txt";
        fn(filename);
    },4000);

}
function uploadfile(filename,newurl,fn){
    console.log("Started uploading  ");
    setTimeout(function process() {
        console.log("File " + filename + " uploaded successfully on "+newurl);
        let uploadResponse="SUCCESS";
        fn(uploadResponse);
    },2000);

}

custom("www.google.com",function callback(response) {
    console.log("Download content is " + response);
writefile(response,function writecallback(filename){
    console.log("new file written",filename);
    uploadfile(filename,"www.drive.com",function uploadcallback(uploadResponse){
        console.log("successfully uploaded",uploadResponse);
    })
})
});

