let arr=[1,4,3,5,7];

//  Sort num in array ?

let max = arr[0];

for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}

console.log(max);