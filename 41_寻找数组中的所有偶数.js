// 用遍历的方法
var arr = [3, 4, 34, 5, 123, 34, 45, 34]
// 遍历
for (var i = 1; i < arr.length; i++) {
    // 
    if (arr[i] % 2 == 0) {
        // 如果你遍历到的这项,除以2的余数是0,就输出
        console.log(arr[i])
    }
}