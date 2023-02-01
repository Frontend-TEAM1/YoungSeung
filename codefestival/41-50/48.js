let a = 'AAABBBcccddd';
let b = [];
let s = '';

for (let i=0; i<a.length; i++){
  if(a[i] === a[i].toLowerCase()){ 
    b.push(a[i].toUpperCase());
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j=0; j<b.length; j++){
  s += b[j];
}

console.log(s);