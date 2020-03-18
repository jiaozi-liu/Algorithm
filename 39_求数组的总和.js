// 
var arr = [1, 2, 2, 2, 3, 2, 1]
// 累加器
var sum = 0

// 遍历
// 循环变量的开始值是0，结束值是arr1.length - 1,<= arr1.length - 1 等价于  < arr1.length 
for (var i = 0; i < arr.length; i++) {
    // 累加
    sum += arr[i];
}
console.log(sum)