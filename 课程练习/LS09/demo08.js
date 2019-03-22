 
// Part 111111111111111111
console.log(a);//undefined
var a = 1;
console.log(a);//1

//上边代码等价如下 解析器眼中的代码
var a;
console.log(a);//undefined
a = 1;
console.log(a);//1

//思考如下代码输出什么 值类型
console.log(a,b);//输出undefined undefined
var b = 23;
console.log(a,b);//输出undefined 23
var a = b;
console.log(a,b);//输出23 23

//思考如下代码输出什么 引用类型
console.log(obj1,obj2);//输出undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//输出{x:23}  undefined
var obj2 = obj1;
console.log(obj1,obj2);//输出{x:23}  {x:23}
obj2.x =25;
console.log(obj1,obj2);//输出{x:25}  {x:25}


// Part 22222222222222222
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
//输出f_2
//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//输出f_2


// Part 33333333333333333 见下一页PPT 同时有var和function的情况一
foo();
var foo = function(){
    console.log("foo");
};
//报错
//思考以下代码是否会报错，写出这段代码的等价形式
console.log(foo);//输出undefined
var foo = function(){
    console.log("foo");//foo
};
foo();//不会报错
//添加的等价形式
/*
var foo;
foo = function(){
    console.log("foo");//foo
};
foo();

 */


// Part 444444444444444444

AA();//AA_1
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();//AA_2
//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;

AA();//AA_1
AA = function AA(){
    console.log("AA_2");
};
AA();//AA_2