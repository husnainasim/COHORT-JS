// WE use Functions so that we donot repeat ourselves that is following fundamental coding principle that is DRY(DONT REPEAT YOURSELF)


function findsum(n){
    let ans=0;
    for (let i = 0; i < n; i++) {
    ans+=i;    
    }
    return ans;
}

console.log(findsum(100));