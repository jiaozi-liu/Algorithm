// 遍历从1到100
for (var i = 2; i <= 100; i++) {
    // 从2开始到i-1除它,如果余数是0,就break退出循环
    // 比如问你15是不是质数,那么比较2,比较3,发现3能被整除,就退出循环
    // 所有count要定义在for循环里面

    // 退出循环就不再除4,5,6了,效率高
    for (var j = 2; j <= i-1; j++) {
        if (i % j == 0) {
            // break会退出内层for
            break;

        }
    }
    // 质数是不会break退出循环的,所以循环变量结束的时候,j的指等于i,都是老死的
    // 如果你是正常循环,没有遇见break语句,那么j的值就是i
    if (i == j) {
        // 说明是正常退出循环,此时就是质数
        console.log(i)
    }
}