// 复利本息和=P*(1+i)^n，其中P=本金，i=利率，n=期限，符号“^”表示次方，比如“2^3”=2*2*2=8，数字2重复相乘3次。

let total = 0;
// let P = 6000
let P = 300;
let n = 30;
let i = 0.04;
for (let j = n; j > 0; j--) {
  total += P * (1 + i) ** j;
}
console.log(total);
