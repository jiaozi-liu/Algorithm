var arr = ['A', 'A', 'A', 'D', 'E', 'A', 'A', 'B', 'B', 'A', 'A', 'F', 'D', 'D'];

//遍历数组，看看是不是A
for (var i = 0; i < arr.length; i++) {

    // 如果这项是A，那么就删除这项
    if (arr[i] == 'A') {
        // i--
        arr.splice(i, 1)
        // 减个1，然后循环语句加个1，就抵消了，相当于停一步
        i--
    }
}
console.log(arr);
