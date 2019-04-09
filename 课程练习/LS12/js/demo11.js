
//闭包引入案例(思考下述两个案例的区别,那个x始终未被释放)
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
//观察f1中的x变量
console.log(f3);//输出1
console.log(f3);//输出1

//通过返回函数(fn1)内部调用的函数(fn2)来访问fn1内部的局部变量(x)
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
//观察f1中的x变量
console.log(f3());//输出1
console.log(f3());//输出2




// 例一
// 闭包：函数内部定义的函数（return匿名函数）与其相关作用域中的变量（start）形成的实体，stat会
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出6
console.log(inc(2));//输出8
inc = createInc(5);
console.log(inc(1));//输出6


// 例二
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出6
console.log(inc(2));//输出8
var inc2 = createInc(5);
console.log(inc(1));//输出9
console.log(inc2(1));//输出6

/*
闭包带来的影响
1、闭包让我们可以访问导函数内部定义的变量
2、闭包让关联作用域中的特定变量保持在内存中，不释放
 */
// 例三
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();//1
foo();//1


// 例四
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1
a();//3每执行一次会形成一次闭包

 