// 用遍历的方法
var arr = [3, 4, 34, 5, 123, 34, 45, 34]

//假设数组中最大的数字是数组的第0项
var max = arr[0]
//遍历
for (var i = 1; i < arr.length; i++) {
    // 从第1项开始遍历到最后，看看有没有项比这项大.
    // 如果大了，它就成为max
    if (max < arr[i]) {
        max = arr[i]
    }
}
console.log(max)
