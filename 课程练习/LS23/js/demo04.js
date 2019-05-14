var o2 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
};
//replacer 节点转换函数，在值被转为字符串之前转换树节点的值
var jsonStr2 = JSON.stringify(o2,function (key,value) {
    if(value === true){
        value = false;
    }
    if((value instanceof Array)&&value.length == 4){
        value[0] = "Hi";
    }
    if(key === "a"){
        console.log("find key a");
        value = 12345;
    }
    if(key === "z"){
        console.log("find key z");
        value = "zzz";
    }
    return value;
});
console.log(jsonStr2);//{"a":12345,"b":false,"c":["Hi",4,"x",{"y":34,"z":"zzz"}]}
//find key a
//find key z
console.log(o2);

function replacer(key, value) {
    if (typeof value === "string") {
        return undefined;//如果是null会怎样？
    }
    return value;//若没有这一句会怎样？
}
var foo = { foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 };
var jsonString1 = JSON.stringify(foo, replacer);
console.log(jsonString1);//'{"week":45,"month":7}'

//如果replacer是一个数组，数组的值代表将被序列化成JSON字符串的属性名。
var jsonString2 = JSON.stringify(foo, ['model', 'transport']);  
console.log(jsonString2);//'{"model":"box","transport":"car"}'


