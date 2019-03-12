//Part1111111111 不同类型的表达式
23;//其中的23为原始表达式
obj = {x:2};// ={x:2}为对象初始化表达式
arr = [1,2];// =[1,2]为数组初始化表达式
var foo = function(){ // = function(){}为函数定义表达式
    console.log("foo");//[1,2]
};
obj.x;//obj.x为属性访问表达式
foo();//foo()为函数调用表达式
2+3;//2+3为算数运算表达式
2>3;//2>3为关系运算表达式
1&&2;//1&&2为逻辑运算表达式


//Part222222222 关于语句
2>3;//表达式语句
//条件语句
var a=2,b=3;
if(a>b){
    console.log("a > b");
}else{
    console.log("a < b");
}//a<b

//扩展知识在chrome中测试下述代码： var a,b;  与 var a=b;   谁是局部变量，谁是全局变量？
function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);//不报错  输出3  
console.log("a:",a);//不报错


//循环语句
for(var i = 0;i<5;i++){
    console.log("in for ",i);//in for 0 in for 1   in for 2  in for 3  in for 4 
}
console.log("out for ",i);//out for 5
