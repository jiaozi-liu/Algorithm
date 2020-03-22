// 为了读取文件，需要使用fs模块
var fs =require('fs')

// 读取文件，为带有换行符的字符串
var str =fs.readFileSync('./捐款总数.txt').toString();

// 按换行符拆
var arr = str.split('\r\n')
// console.log(arr);

// 累加器
var sum =0

// 遍历数组
for(var i=0;i<arr.length;i++){
    //这项，是包括名，然后空格，然后数额
    var item =arr[i]
    // 继续拆，用空格拆
    var _arr =item.split(' ')
    // console.log(_arr); 
    
    // 拆之后，_arr[0]这项，就是名字。_arr[1]这项，就是数额
    sum+=Number(_arr[1]) 
}
console.log(`总数是${sum}`);

