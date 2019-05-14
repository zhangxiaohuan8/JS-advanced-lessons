
//Math 对象属性
console.log(Math.PI);//表示一个圆的周长与直径的比例，约为 3.14159
console.log(Math.E);//表示自然对数的底数（或称为基数），e，约等于 2.718。
console.log(Math.LN2);//表示 2 的自然对数，约为 0.693
console.log(Math.LN10);//属性表示 10 的自然对数，约为 2.302
console.log(Math.LOG2E);//表示以 2 为底数，e 的对数，约为 1.442
console.log(Math.LOG10E);//表示以 10 为底数，e 的对数，约为 0.434：
console.log("------------------");

//Math 对象数值方法
console.log(Math.random());//函数返回一个浮点,  伪随机数在范围[0，1)
console.log(Math.abs(-123.456));//函数返回指定数字 “x“ 的绝对值
console.log(Math.pow(2,3),Math.pow(4,0.5));//函数返回基数（base）的指数（exponent）次幂
console.log(Math.sqrt(256));//函数返回一个数的平方根
console.log("------------------");

console.log(Math.round(0.60),Math.ceil(0.60),Math.floor(0.60));//Math.ceil函数返回大于或等于一个给定数字的最小整数
console.log(Math.round(0.50),Math.ceil(0.50),Math.floor(0.50));//Math.floor返回小于或等于一个给定数字的最大整数。
console.log(Math.round(0.40),Math.ceil(0.40),Math.floor(0.40));//Math.round() 函数返回一个数字四舍五入后最接近的整数。
console.log(Math.round(0.49),Math.ceil(0.49),Math.floor(0.49));//是否考虑进位？
console.log(Math.round(-4.40),Math.ceil(-4.40),Math.floor(-4.40));
console.log(Math.round(-4.60),Math.ceil(-4.60),Math.floor(-4.60));

console.log(Math.max(5,7),Math.max(5,7));
console.log(Math.max(-3,5),Math.max(-3,5));
console.log(Math.max(-3,-5),Math.max(-3,-5));
console.log(Math.max(7.25,7.30),Math.max(7.25,7.30));
console.log("------------------");
//Math.max() 函数返回一组数中的最大值。
//Math 三角方法
//角度转弧度方法
function toRadians(degrees) {
    return degrees/180 *Math.PI;
}
console.log(toRadians(180));//PI

//弧度转角度方法
function toDegrees(radians) {
    return radians/Math.PI*180;
}
console.log(toDegrees(Math.PI/4));//45
console.log("------------------");

console.log(Math.sin(toRadians(90))); //参数一个以弧度表示的角。将角度乘以 （2PI/360）即可转换为弧度
//Math.sin()函数返回一个数值的正弦值
console.log(Math.cos(toRadians(180)));
//Math.sin()函数返回一个数值的余弦值
console.log("------------------");





