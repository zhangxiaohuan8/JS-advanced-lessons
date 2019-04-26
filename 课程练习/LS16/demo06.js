/**
 * Created by qile on 2017/8/14.
 */
// Part1 方法中函数嵌套 this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this指向window对象
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this指向window对象
        }
        moveToX();//moveToX.call(this);通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//x为0，y为0
console.log(window.x,window.y);//2 2


// Part2 方法中函数嵌套 this缺陷 解决办法
// 解决方案一：软绑定
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this指向point
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);// 2  2
console.log(window.x,window.y);// 2 2

//解决方案二：通过call和apply来解决
/*
    方法A.call(对象)；
    切换方法A的调用主体，this指向函数的调用主体
    方法.call（要切换的调用对象，arg1,arg2,arg3）;
    方法B.apply（要切换的调用对象，[arg1,arg2,arg3]）;
     */
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到window
        }
        function moveToY() {
            this.y = y;//this绑定到window
        }
        moveToX.call(this);//->this.moveToX()->point.MoveToX()
        moveToY();
    }
};
point.moveTo(2,2);console.log(point);//2,0

//解决方案三：通过bind来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了window
        }
        function moveToY() {
            this.y = y;//this绑定到了window
        }
        moveToX.bind(point)();
        /*
            函数.bind（对象）切换函数的的调用主体生成了一个新的函数，并且不会立即执行的，如果想要立即执行，加小括号
             */
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);// 2 2
console.log(window.x,window.y);// 2 2
