 

//立即执行表达式 常见形式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));
//3
(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);
//the min is 2

//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function() {
    console.log("111");
})();
//111
(function () {
    console.log("222");
})()
//222


// 其他形式的IIFE 与运算符结合的写法
var i = function(){
    return 10;
}(); //i为10


true && function(a,b){
    return a>b?a:b;
}(5,9);
//9

!function(x,y){
    return x==y?true:false; 
}("5",5);
//false

!function(x,y){
    return x===y?true:false; 
}("5",5);
//true
!function(){
	return 2; 
}( ); 
//false
!function(){
	return 0; 
}();
//true