// 请将数组[6, 1, 1, 1, 3, 3, 3, 2, 2, 2, 6, 2, 3]去掉重复项。
var arr = [6, 1, 1, 1, 3, 3, 3, 2, 2, 2, 6, 2, 3]

//先准备一个空白数组，结果数组
var result_arr = []

// 历原数组中的每一项，每遍历一项就要问问，它是否存在于结果数组中
// 如果不在结果数组中，就推入
for (var i = 0; i < arr.length; i++) {
    // 如果结果数组中不存在这项,!置反
    if (!result_arr.includes(arr[i])) {
        // 推入结果数组
        result_arr.push(arr[i]);
    }

}
console.log(result_arr);
