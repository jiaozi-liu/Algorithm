// 数组[1, 3, 4, 5, 3, 5, 4, 3, 1]是不是对称的？

var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1]

// 打一个旗帜先认为是对称的
var flag = true

// 遍历数组
for (var i = 0; i < arr.length / 2; i++) {
    // 
    if (arr[i] != arr[arr.length - i - 1]) {
        flag = false
    }
}
if (flag) {
    console.log('对称');
} else {
    console.log('不对称');

}