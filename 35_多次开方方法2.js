// 多次开方（5次2开方）
// 
// var now = 2
// 
// for (var i = 1; i <= 5; i++) {
// now = Math.sqrt(now)/2;
// }
// console.log(now*2)

//n先开根2 
var n = Math.sqrt(2)
for (var i = 1; i <= 5; i++) {
    // 开根n/2,循环上面
    n = Math.sqrt(n / 2)
}
// 输出结果
console.log(n)