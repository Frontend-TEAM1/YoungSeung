let input = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
let count = 0;
let arr = [];
input.sort((a,b)=>a-b);

console.log(input);

while(arr.length<3){
    let n = input.pop();
    if(!arr.includes(n)){
        arr.push(n);
    }
    count++;
}

console.log(count);