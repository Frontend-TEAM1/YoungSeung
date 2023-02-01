let a = 5;
let b = 25;

function solution(a,b){
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    const x = new Date('2020-'+a+'-'+b);

    return day[x.getDay()];
}
console.log(solution(a, b));