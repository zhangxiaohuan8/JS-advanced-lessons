
//值传递
var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);//a:1 x:1
    x = 2;//step 2222
    console.trace("a:",a," x:",x);//a:1 x:2
}

console.trace("a:",a);//a:1
foo(a);// step 1111
console.trace("a:",a); // a:1



//引用传递
var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);
    o.x = 3;// step 2222
    console.trace("obj.x :",obj.x," o.x :",o.x);// step 3333
}

console.trace("obj.x :",obj.x);
fee(obj);// step 1111
console.trace("obj.x :",obj.x);//step 4444  obj.x被改写为3

//打开index.html 学习chrome的Sources调试
document.onclick = function () {//测试Event Listener Breakpoints
    alert("click");
    //var body =  document.getElementsByName("body");
};




var obj = {x:1};
function fee(o){
    console.log("obj.x :",obj.x," o.x :",o.x);//obj.x : 1  o.x : 1
    o.x = 3;// step 2222
    console.log("obj.x :",obj.x," o.x :",o.x);//obj.x : 3  o.x : 3 
}

console.log("obj.x :",obj.x);//obj.x : 1
fee(obj);// step 1111
console.log("obj.x :",obj.x);//obj.x : 3

