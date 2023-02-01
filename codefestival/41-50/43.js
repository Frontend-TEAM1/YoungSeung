let a = 13;
let b = [];


while(a){
    b.push(a%2);
    a = Math.floor(a / 2);
}

b.reverse();

console.log(b.join(''));