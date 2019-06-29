
//属性特性的继承特点
var o1 = {};
Object.defineProperty(o1,"x",{
    value:12,
    //writable:true
});//configurable和writable是 false
o1.x = 34;
console.log(o1.x);//12


var o2 = Object.create(o1);
o2.x = 56;//是在o2上添加了新属性x，还是修改了o1的x属性，还是前两者都不是？
delete o2.x;
console.log(o2.x);//输出12若o1的x的writable特性为true又会如何？输出56
o2.__proto__.x=3;
//o2.__proto__与o1是完全相同的对象的引用
console.log(o2.x);//12
console.log(o1.x);//12
//访问器属性特性的继承特点
var o3 = {_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x = 34;
console.log(o3.x);//输出21

var o4 = Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function (val) {
        this._x = val;
    },
    get:function () {
        return ++this._x;
    }
});
o4.x = 56;
console.log(o4.x);//输出57


//全局变量的属性特性是如何的呢？
//{value: 23, writable: true, enumerable: true, configurable: false}
var a = 23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
delete a;//等效delete window.a;

