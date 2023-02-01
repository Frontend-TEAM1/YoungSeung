let input = 18324;
let split = String(input).split('');
let total = 0;

for(let i=0;i<split.length;i++){
    total += Number(split[i]);
}

console.log(total);