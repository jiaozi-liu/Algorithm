// 数组[6, 10, 12, 14, 88, 81, 100, 56]中是否每项都是偶数？
//思路：就是要理解好“均为”这两个字。也就是说，每项都必须是偶数。言外之意：如果遇见一项是奇数，就有结果了，数组不是均为偶数。就不用继续遍历剩余项了。

var arr = [6, 10, 12, 14, 88, 81, 100, 56]

// 打一个标记，这个标记称为flag
// 布尔值的变量命名，很多公司要求都要以is开头
// 先认为数组中都是偶数
var isAllEver = true;

// 遍历整个数组，如果遇见了一项是奇数，那么就让flag为false，同时结束遍历
for (var i = 1; i < arr.length; i++) { 
    if (arr[i] % 2 != 0) {
        isAllEver = false;
        break;
    }
}
// 判断flag，布尔值的判断不需要写isAllEven == true
if (isAllEver) {
    console.log('数组均为偶数');
} else {
    console.log('数组有奇数');

}