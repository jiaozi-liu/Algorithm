// 按数组[12, 9, 11, 7, 28, 3, 2, 24, 8, 33, 22, 5, 44, 88,6,94, 67，73]质数排序

var arr = [12, 9, 11, 7, 28, 3, 2, 24, 8, 33, 22, 5, 44, 88, 6, 94, 67, 73]

// 准备一个空数组
var result_arr = []

// 遍历整个数组，如果遇见了一项是质数，break结束循环
for (var i = 0; i < arr.length; i++) {
    for (var j = 2; j < arr[i]; j++) {
        if (arr[i] % j == 0) {
            break;
        }
    }
    if (j == arr[i]) {
        result_arr.push(arr[i]);
    }
}
// console.log(result_arr)a
// 排序
result_arr.sort(function (a, b) {
    return a - b
})
console.log(result_arr);