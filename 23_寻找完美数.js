// 外层循环遍历2到10000
for (var i = 2; i <= 10000; i++) {
    // 内层循环，用来计算数字i的所有因数
    // 怎么求因数和？就要找到所有的因数
    // 就要从1开始到i-1(因为不包含它本身)依次被它除，看余数是不是0
    // 如果是0就是因数，就要放到累加器中

    // 数字i的因数和，为什么放到for里面??
    // 因为所有的数字因数和都要清零，重新算
    var sum = 0
    // 从1开始依次算i除它的余数，看看是不是0，如果是0，就是因数
    for (var j = 1; j <= i - 1; j++) {
        // 
        if (i % j == 0) {
            // 说明j就是它的因数
            // console.log(i,j)
            // 累加一下
            sum += j;
        }
    }
    if (sum == i) {
        console.log(i)
    }
}