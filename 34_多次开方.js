//  多次开方（5次2开方）
 
 var now = 2
 
 for (var i = 1; i <= 5; i++) {
    // 开根除2
     now = Math.sqrt(now)/2;
 }
//  输出结果
 console.log(now*2)

