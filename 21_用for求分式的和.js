// 累加器
// 思路就是分子从1到9开始遍历，分母就是i+1
var sum=1
// 遍历1到9
for(var i=1;i<=9;i++){
    // 遍历1到9
    sum+=i/(i+1)
}
// 输出结果
console.log(sum)