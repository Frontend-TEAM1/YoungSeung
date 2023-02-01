let input = [176, 156, 155, 165, 166, 169];

let inputSort = [...input].sort((a, b)=> a- b);

let arr = [];

console.log(input)
console.log(inputSort);

for(let i=0;i<input.length;i++){
    if(input[i] ==inputSort[i]){
        arr.push('o');
    }else{
        arr.push('x');
    }
}

if(arr.includes('x')){
    console.log('No');
}else{
    console.log('Yes');
}