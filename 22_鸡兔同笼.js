// 假设鸡是ji只，从0开始试验
// 一层for循环，从0只鸡，那么就有35个兔子开始测试。
for (var ji = 1; ji <= 35; ji++) {
    // 有ji只鸡就有35-ji只兔子
    var tu = 35 - ji;

    // 判断脚的总数
    if (tu * 4 + ji * 2 == 94) {
        console.log('共有' + ji + '.共有' + tu)
    }
}
