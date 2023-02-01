let weight = 50;
let input = [20, 20, 20, 20, 20];
let total = 0;
count = 0;

for(let i=0;i<input.length;i++){
    if(total<weight){
        total += input[i];
        count = i;
    }
}

console.log(count);