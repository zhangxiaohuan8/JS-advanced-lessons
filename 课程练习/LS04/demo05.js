
function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//123


//下边的实例，若使用严格模式则报错
function  sloppyFunc() {
    //'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//123