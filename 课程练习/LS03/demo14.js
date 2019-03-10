/**
 * Created by qile on 2017/8/14.
 */

//Part 000000000
//字符串比较
console.log("A" > "a");//false
console.log("B".localeCompare("A")); //考虑本地化的字符排序，返回0或非0        1
console.log("A".localeCompare("A")); //考虑本地化的字符排序，返回0或非0         0
console.log("A".localeCompare("B"));//-1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;//c为"abcdef"

//Part 111111111 字符串提取
//String.prototype.charAt(pos);返回特定索引位置的字符
//String.prototype.charCodeAt(pos);返回特定索引位置字符的unicode码
//String.prototype.slice(start,end?);slice(截取的起始位置，截取的结束位置)
//String.prototype.substr(start,length?)substr(截取的起始位置，截取的长度)
//String.prototype.substring(start,end?);substring(截取的起始位置，截取的结束位置)
//String.prototype.split(separator?,limit?);split（特定的字符）将字符串以特定的字符串分割，将字串作为数组元素生成数组

//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);//cdef
var str3 = "abcdef".slice(2,5);//cde
var str4 = "abcdef".slice(-2);//ef
var str5 = "abcdef".slice(2,-2);//cd

var arr6 = "abcdef".split("c");//返回数组["ab","def"]
var arr7 = "abcdef".split("c",1);//["ab"]
var arr8 = "abcdef".split("c",2);//["ab","def"]

var str9 = "abcdef".charAt(2);//方法从一个字符串中返回指定的字符。"c"
var str10 = "abcdef".charCodeAt(3);//100
var str11 = "abcdefabcdef".indexOf("d",1);//3
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找  9

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏abcdefghijklmn  cdef

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏abcdefghijklmn  cde



//Part 222222222 字符串变换
//String.prototype.trim( );从一个字符串的两端删除空白字符。
//String.prototype.concat(str1?,str2?);   将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回
//String.prototype.toLowerCase( );   返回已转换为小写的调用字符串值。
//String.prototype.toLocaleLowerCase( );   根据任何特定于语言环境的案例映射，返回调用字符串值转换为小
//String.prototype.toUpperCase( );   调用该方法的字符串值转换为大写形式，并返回。
//String.prototype.toLocaleUpperCase( );  使用本地化（locale-specific）的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串。
var str16 = "aaa".concat("bbb");//返回字符串
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?);  返回指定值第一次出现时调用字符串对象内的索引，从FromIndex开始搜索。如果找不到值，则返回-1。
//String.prototype.lastIndexOf(searchingString,position?);   返回调用  String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。
//String.prototype.localeCompare(other);   返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");

//Part 444444444 与正则相关的方法 详细内容参见正则表达式章节
//String.prototype.search(regexp);  执行搜索正则表达式和此字符串对象之间的匹配项。
//String.prototype.match(regexp);  检索字符串与正则表达式匹配的结果
//String.prototype.replace(regexp);  返回一个由替换值替换一些或所有匹配的模式后的新字符串

//其余部分参见《深入理解JS》第12章