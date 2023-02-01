let input = ['원범','원범','혜원','혜원','혜원','혜원', '유진', '유진'];
let result = {};
let winner = '';
let count = 0;

let set = new Set(input);
let newSet = [...set];

for(let index in input){
    let val = input[index];
    result[val] = result[val] === undefined ? 1 : result[val] + 1;
}

for(let i=0;i<newSet.length-1;i++){
    count = result[newSet[i]] < result[newSet[i+1]] ? result[newSet[i+1]] : result[newSet[i]];
}

winner = Object.keys(result).find(item=>result[item]==count);

console.log(`${winner}이 ${count}표로 반장`);