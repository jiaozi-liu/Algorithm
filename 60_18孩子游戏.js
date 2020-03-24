// 18个小孩子依次从1开始报数，喊道3的倍数的出局。所以，第一次报数出局的有3号、6号、9号、12号、15号和18号孩子。剩下了12个孩子，这12个孩子继续从最开始的孩子继续从19喊数，同样的，还是喊到3的倍数的孩子出局。依次往下进行。请问，最后剩下的1个孩子，它是最早的几号？
// 每遍历一个数字，要看它当前喊的数字是不是能够被3整除，如果能，就从数组中删除它，并且i要--，这个是splice()删除数组项的一个必须的套路。

// 准备一个1~18的数组
var arr = []

// 遍历循环语句把1到18推入数组
for (var i = 1; i <= 18; i++) {
    arr.push(i)
}
// console.log(arr);

// 开始喊数
var a = 1;

// 在不确定范围的情况下, 用while好判断
// 数组>1一直喊
while (arr.length > 1) {
    // 遍历arr数组
    for (var i = 0; i < arr.length; i++) {
        if (a % 3 == 0) {
            arr.splice(i, 1);
            // i--删除一项,i后退一格
            i--
        }
        a++
    }
}
console.log(arr);

