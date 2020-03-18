// 从100开始到999试验，试试这个数字是不是水仙花数
for (var i = 100; i <= 999; i++) {
    // 试验这个数字是不是水仙花数
    // 把i这个数字进行拆分
    // 个位
    var g = i % 10;
    // 十位
    var s = Math.floor(i / 10) % 10;
    // 百位
    var b = Math.floor(i / 100);
    // 用if进行判断
    if ((Math.pow(g, 3)) + (Math.pow(s, 3)) + (Math.pow(b, 3)) == i) {
        console.log(i)
    }

}
