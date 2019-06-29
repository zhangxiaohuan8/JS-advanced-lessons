
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
    //x 1
    //y 2
    //z 3
}//可以枚举
obj.x=4;
console.log(obj.x);//4

delete obj.x;
console.log(obj.x);
//undefined 可以删除
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}//遍历不到w

//console.log(obj.w);//有w，但上边for...in遍历不到


//通过属性特性描述符来查看某一对象属性的特性