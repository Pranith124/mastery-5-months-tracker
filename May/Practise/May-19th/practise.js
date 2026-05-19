


// Both functions serves the same functionality.

arr=[1,2,3,4,5];

let res= arr.map((i)=>{
    return 2*i;
})

console.log(res);


arr1=[1,2,3,4,5,6,7,8,9,10]

let res1=arr1.filter((val)=>{
    return val%2==0;
})

console.log(res1);


const map = (arr,fn) =>{
    let newtranformed=[];
    for (let i=0;i<arr.length;i++){
        newtranformed.push(fn(arr[i]));
    }

    return newtranformed
}