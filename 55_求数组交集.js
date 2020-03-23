// 求数组[1, 3, 8, 10, 12]和数组[4, 2, 10, 1, 3, 9, 17]的交集。
//思路：遍历A数组，找到也在B数组中的项。需要用到includes

var arr1 = [1, 3, 8, 10, 12, 9]
var arr2 = [4, 2, 10, 1, 3, 9, 17]

// 结果数组
var result_arr = []

// 遍历数组1
for (var i = 0; i < arr1.length; i++) {

    // 找到也在arr2中的项，推入到结果数组中
    if (arr2.includes(arr1[i])) {
        
        // 结果推入结果数组
        result_arr.push(arr1[i])
    }
}
console.log(result_arr)