// 统计数字中0的个数并按数组[1030, 56000, 20300040, 20,6010，103，5604，8933, 8056900，28001020]中0的个数并按0的个数排序
function calcZero(n) {
    //转换成数组
    var str = n.toString();

    //累加器 
    var count = 0;

    // 遍历找0，字符串和数组一样，可以被遍历
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 0) {
            // 找到0累加器加1
            count++
        }
    }
    return count
}
// console.log(calcZero(1030));
// console.log(calcZero(20));
// console.log(calcZero(3));arr

var arr = [1030, 56000, 20300040, 20, 6010, 103, 5604, 8933, 8056900, 28001020]

arr.sort(function(a,b){
    // 调用上面封装的函数calcZero
    return calcZero(a)-calcZero(b)
})
console.log(arr);
