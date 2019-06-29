var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);//原型链上有toString属性
//对象里面，某些对象和属性是没有办法遍历的
for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//不能遍历到toString
}