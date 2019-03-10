/**
 * Created by qile on 2017/8/14.
 */
//Number构造器属性（静态属性）
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();
// Number.prototype.toPrecision();
// Number.prototype.toString();
// Number.prototype.toExponential();

var n1 = 12345.6789;
console.log(n1.toFixed(2));//保留几位小数
console.log(n1.toPrecision(2));//指数，2表示有几位数字
console.log(n1.toString());//将数字转换为字符串
console.log(n1.toExponential(2));//方法以指数表示法返回该数值字符串表示形式。

//
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
console.log(Math.floor(3.8));//3
console.log(Math.floor(-3.8));//-4
console.log(Math.ceil(3.2));//4
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4

//其余部分参见《深入理解JS》第11章

