let name = ['Yujin', 'Hyewon'];
let score = [70, 100];

let object = {}

for(let i=0;i<name.length;i++){
    object[name[i]] = score[i];
}

console.log(object);