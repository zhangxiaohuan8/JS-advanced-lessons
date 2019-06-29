var person = {name:"Jack"};
Object.defineProperty(person,"name",{
	//name是不可修改的
    writable:true, 
    //是否可配置，定义的属性能否删除
    configurable:true, 
    //是否可枚举，定义属性能否被定义到
    enumerable:true,
    //定义属性值
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
// delete person.name;
console.log(person.name);//Mike
for(var i in person){
	console.log(person[i]);
}

