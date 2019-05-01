/**
 * Created by qile on 2017/8/14.
 */
//Part11111111 排序和颠倒元素顺序 破坏性
//Array.prototype.reverse()
var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1);// [3, 2, 1]

//Array.prototype.sort(compareFunction？)
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);// ["apple", "banana", "orange", "pear"]

//思考sort中的参数
var arr3 = [-1,-20,7,50];
function compare(a,b){
	 	return a-b;
}
arr3.sort(compare);
console.log(arr3);//结果是否是预计结果,如何解决
/*
	预计结果[-1, -20, 50, 7]

 */

//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序

//如果想让arr2按第二个字母排序，怎么写？
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);// ["banana", "apple", "pear", "orange"]


//Part222222 合并、切分和连接 非破坏性
//Array.prototype.concat(arr1?,arr2?,...)
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);//连接
console.log(newArray,arr4,arr5);//["banana", "apple", "pear", "orange"]   ["banana", "apple"]  ["pear","orange"]

//Array.prototype.slice(begin?,end?)注意：不要和splice弄混了
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);//不包括end
console.log(newArray,arr6);//[3,4]  [1,2,3,4,5]
var newArray2 = arr6.slice(2);//第二个元素之后的
console.log(newArray2,arr6);

//Array.prototype.join(separator?)
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");// 字符串
console.log(joinReturn,arr7);
console.log(typeof joinReturn);//String
//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));//3******5

//Part333333333 值的查找 非破坏性
//Array.prototype.indexOf(searchValue,startIndex?)
//indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//输出2
console.log(arr8.indexOf(5,3));//输出3
console.log(arr8.indexOf(5,5));//输出6

//Array.prototype.lastIndexOf(searchElement,startIndex?)
//lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
console.log(arr8.lastIndexOf(5));//输出6
console.log(arr8.lastIndexOf(5,3));//输出3
console.log(arr8.lastIndexOf(5,5));//输出3