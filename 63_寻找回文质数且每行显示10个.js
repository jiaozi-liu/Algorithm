// 判断这个数字是不是质数，返回布尔值
function checkZhiS(a) {
    // 从2开始去除这个数字
    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            // 函数一旦return，就立即终止函数的执行
            // 就是只要从2开始到小于它1的那个数字，但凡有一个能整取它
            // 就return flase了，不再验证其他数字了
            return false;
        }
    }
    return true;
}
// console.log(checkZhiS(3));
// console.log(checkZhiS(12));
// console.log(checkZhiS(17));

// 判断一个数字是不是回文数
function checkHuiW(a) {
    // 数字可以变为字符串，表示变为字符串
    var arr = a.toString()
    // 字符串也可以像数组一样进行[]枚举下标。比如'573'，它[0]就是5，[1]就是7。
    // 字符串也有length属性，比如'573'的length就是3。
    for (var i = 0; i < arr.length; i++) {
        // 判断对称
        if (arr[i] != arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
// console.log(checkHuiW(131));
// console.log(checkHuiW(202));
// console.log(checkHuiW(23));

// 计数
var count = 0;
// 从2开始找
var a = 2;
// 拼凑字符串
var str = ''；

//循环多少次不知道，因为你不知道到多少就能知道100个回文数
// 当寻找到的个数小于100的时候 
while (count < 100) {
    // 如果这个a又满足质数，又满足回文数，就输出它，并且计数器加1
    if (checkZhiS(a) && checkHuiW(a)) {
        // 字符串累加
        str += a + '\t'
        // console.log(a);
        // 找到一个就加1
        count++

        // 看是不是10个，如果是10个就输出这行
        if (count % 10 == 0) {
            console.log(str);
            // 清空字符串，方便下行累加
            str = ''
        }
    }
    a++;
}