let n=24145;
let str=String(n);
let num='';
while(n>0){
    num=num+n%10;
    n=Math.floor(n/10);
}
let reversed=parseInt(num);
console.log(reversed);