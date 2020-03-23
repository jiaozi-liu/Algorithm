// 考试及格率
var fs = require('fs')

var content = fs.readFileSync('./考试成绩.txt').toString();

// 按换行符拆为数组
var arr = content.split('\r\n');
// 拆成了一个数组log一下
// console.log(arr);

var chinese = 0
var math = 0
var english = 0
// 遍历
for (var i = 1; i < arr.length; i++) {
    // 的到a
    var a = arr[i];
    // 用空格继续拆
    var _arr = a.split(' ')
    // console.log(_arr);
    if (Number(_arr[3]) >= 60) chinese++;
    if (Number(_arr[5]) >= 60) math++;
    if (Number(_arr[7]) >= 60) english++;
}
// 计算及格率
var _chinese = Math.round(chinese / arr.length * 1000) / 10
var _math = Math.round(math / arr.length * 1000) / 10
var _english = Math.round(english / arr.length * 1000) / 10

// 输出结果
console.log(`
语文的及格率是${_chinese}%
数学的及格率是${_math}%
英语的及格率是${_english}%
`);


