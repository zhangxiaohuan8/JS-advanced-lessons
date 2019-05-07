/**
 * Created by qile on 2017/8/14.
 */
// Date 方法参考链接
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log((new Date()).getTime());//getTime 方法的返回值一个数值，表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。

console.log(Date.parse("1970-01-01"));//dateTimeString字符串转换成毫秒  解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。
console.log(Date.parse("1970-01-02"));

console.log(Date.UTC(2017,9,1));//将给定的日期转换成毫秒,解释为UTC 协调世界时间
//接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。
//Date原型方法 getter和setter相关
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//getFullYear()根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）
//getMonth()根据本地时间返回指定日期对象的月份（0-11）。
//getDay()根据本地时间返回指定日期对象的星期中的第几天（0-6）
//getDate()根据本地时间返回指定日期对象的月份中的第几天（1-31）。
console.log(d.getTimezoneOffset());
//getTimezoneOffset()返回当前时区的时区偏移。
d.setDate(11);
//根据本地时间为指定的日期对象设置月份中的第几天。第11天
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//d.setFullYear(1999,5,3);
d.setFullYear(1999);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());

//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
//toTimeString()以人类易读格式返回日期对象时间部分的字符串。
//leTimeString()返回一个表示该日期对象时间部分的字符串，该字符串格式与系统设置的地区关联
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date

