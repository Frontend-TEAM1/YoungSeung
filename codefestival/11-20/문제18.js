let input = [20, 30, 40];

let total = 0;
let avg = 0;

for(let i=0;i<input.length;i++){
    total += input[i];
    avg = Math.floor(total / input.length)
}

console.log(avg);