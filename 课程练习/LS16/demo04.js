/**
 * Created by qile on 2017/8/14.
 */
function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);//Point的x变味了2,y变为了3

//思考：直接调用Point方法会是什么样的情况
Point(5,6);// 直接调用x和y也会改变
console.log(window.x,window.y);//输出5 6