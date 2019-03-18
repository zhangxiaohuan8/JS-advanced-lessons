
//普通函数直接调用
function test1() {
    console.log("this is",this);
}
test1();//window
//this is window .this指示window
//思考嵌套的情况下
function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window

//this is window .this指示window
//和上一个函数一样

//对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);//23   {name: "obj", x: 23, test: ƒ}this指向obj对象 
    }
};
obj.test();//调用对象的方法23

var x = 45;
var test = function(){
	console.log("输出：",this.x);
}
var obj = {
    x:23
};
obj.test = test;
obj.test();//输出：23
test();//输出：45

var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo();
    }
};
obj.test();//45

//给obj动态添加方法
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//添加给对象添加方法
obj.sayHi();//Hi，i'm undefined
//思考：若直接调用sayHi();
var name = "张晓焕";
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
sayHi();
//Hi，i'm 张晓焕


//思考如下代码 详情参见高阶函数章节
var fun1 = function () {
    return function fun2() {
        return this.x; 
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());
/*输出 ƒ fun2() {
        return this.x;
    }*/
console.log(obj.fun3()());//输出45
console.log(obj.fun4());//输出23
//若改为 return this;
var fun1 = function () {
    return function fun2() {
        return this; 
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());
/*输出 ƒ fun2() {
        return this;
    }*/
console.log(obj.fun3()());//输出window
console.log(obj.fun4());
//输出{x: 23, test: ƒ, sayHi: ƒ, fun3: ƒ, fun4: ƒ}



//间接调用 实例一 间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//输出AA
objA.foo.call(objB);//输出BB

//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
//i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);
//i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);
//i'm:ABC i can fly ___ 7 8
swim.call(null,1,2);
//错误，不出结果

//很多方法都可以通过间接调用的方式来调用，比如很多原型的方法
function test() {
    console.log(Array.prototype.slice.call(arguments));
    //[1, 2, 3, "4", 5]
}
test(1,2,3,"4",5);


//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack