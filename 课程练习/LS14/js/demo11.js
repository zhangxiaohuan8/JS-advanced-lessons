
var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,//若为true，prson.name会删除
    enumerable:true,
    set:function(val){this._name = val},//set(){}
    get:function(){return this._name}//get(){}
});
console.log(person.name);//Jack
person.name = "Lucy";
console.log(person.name);//Lucy
delete person.name; 
console.log(person.name);//Lucy 没删除