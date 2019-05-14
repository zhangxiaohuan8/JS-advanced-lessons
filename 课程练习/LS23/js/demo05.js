//思考：下述代码中的回调函数调用了几次，1次还是2次？思考从内到外的过程
var o6 = JSON.parse('{"p": 5}', function (k, v) {
    console.log("回调调用");
    if(k === '') return v;     // 如果到了最顶层，则直接返回属性值，
    return v * 2;              // 否则将属性值变为原来的 2 倍。
});                            // { p: 10 }
console.log(o6);

var o7 = JSON.parse('{"p": 5,"x":1}', function (k, v) {
    if(k === 'p') return 2*v;    // 
    if(k === 'x') return 3*v;
    if(k === '')  return v;      //最终到达顶层    
});                             
console.log(o7);//{p:10,x:3}

var o8 = JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}',
    function (k, v) {
        console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
        // 最后一个属性名会是个空字符串。
        return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
    });
console.log(o8);//{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}


function replacer(key, value) {
    if (typeof (value) === "string") {
        return value;
    }
    else { return undefined };
}
var foo = {
    name: "json",
    age: 13,
    a: "lkd"
}
var json5 = JSON.stringify(foo, replacer);
console.log(json5);//输出undefined
//replacer和parse迭代的顺序正好相反，是从最顶层开始，最后到最内部