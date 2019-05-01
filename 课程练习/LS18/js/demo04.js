/**
 * Created by qile on 2017/8/14.
 */
// 多维数组 实例一 矩形数组和交错数组
var table = new Array(5);
for(var i=0;i<table.length;i++){
    //table[i] = new Array(5);//若是table[i] = new Array(i);
    table[i] = new Array(i);//二维数组里面的一维数组长度不一样
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);
/*
	二维数组，有五个一维数组，每个数组里的元素为row*col
 */
 



// 合并一起的写法
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}
var product = table[2][4];
console.log(table);