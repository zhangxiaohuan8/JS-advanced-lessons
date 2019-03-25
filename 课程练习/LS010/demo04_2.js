

// 调用栈 Call Stack
console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");//foo
    var y = 2;
    function bar(){
        console.log("bar上下文-start");//bar
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end");//bar
    }
    bar();
    console.log("foo上下文-end");//foo
}
foo();//设置断点
console.log("全局上下文-end");//全局
