var a = 34;
if(a = 45){
    console.log("是否会输出？");//输出
}
//==有一个隐式类型转换
var b = 34;
if(45 == b){//为什么要这样写，有什么好处  把判等写成一个等号的时候会报错
    console.log("是否会输出？");
}
//===先判断类型，再判断值。