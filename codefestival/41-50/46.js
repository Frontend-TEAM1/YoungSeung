let arr = [];
let sum = 0;

for(let i=0;i<20;i++){
    arr[i] = i+1;
}

// console.log(arr);

// arr.forEach(item=>{
//     while(item !==0){
//         sum+=(item%10);
//         console.log(sum);
//         item = Math.floor(item/10);
//         console.log(item);
//     }
// })

// console.log(sum);


arr.join('').split('').forEach(item=>sum+=Number(item));

console.log(sum);
