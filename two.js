let arr = [1,2,3,4,5];

// largest number in array ?

function checkSort(){
    for(let i =1; i<arr.length; i++){
        if(arr[i]>=arr[i-1]){
    
        }else{
            return false;
        }
    }

    return true;
}


console.log(checkSort());

