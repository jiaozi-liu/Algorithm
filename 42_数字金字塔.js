// 遍历
for (var i = 1; i <= 5; i++) {

    //定义每行字符串
    var str = ''

    // 计算/追加空格
    str += ' '.repeat(12 - i * 2)
    
    // 输出一下
    // str += '牛'
    // console.log(str);

    // 计算/追加左边部分
    for (var j = i; j >= 1; j--) {
        // 空字符串要空格
        str += j + ' '
    }
    // console.log(str);

    // 计算/追加右边部分
    for (var j = 2; j <= i; j++)
        // 空字符串要空格
        str += j + ' '

    console.log(str);


}