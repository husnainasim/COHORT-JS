function fun(task1,task2) {
    task1="paras";
    setTimeout(function gun(){
        console.log("completed "+task1);
    
    },2000 )
    task1=task2; // the jaavascript will remeber the value of task2 that was 34 therefore it will printed after 2 sec 
    task2="assign";
}

fun("12","34");