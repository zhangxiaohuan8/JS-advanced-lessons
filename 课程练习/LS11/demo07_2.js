
//如何避免全局污染，使用IIFE函数立即执行表达式 JS文件2中的代码

//console.log(x);
	//在控制台输出20

// (function () {  // IIFE开始
//    var x = 20;
//    console.log(x);
// })();   
// console.log(x);        // IIFE结束
/*
输出20、10
 */
// function nameSpace() {
//      var x = 20;
//      console.log(x);//20
// }
// nameSpace();
// console.log(x);//10


//由于ES5没有块作用域，即使写成如下形式依然有问题
if(true){
    var x = 30;
    console.log(x);//输出30
}
console.log(x);//输出30变量污染
