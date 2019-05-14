
window.onload = function () {
    window.Foo = function () {
        var inputValue = document.getElementById("inputID").value;
        try{
            var n = parseInt(inputValue);
            var a= new Array(n);//定义一个数组 传3试试、再传-5试试
            for(var i=0;i<n;i++){a[i] = i;}
        }
        catch(e){
            alert(e.name+e.message);
            console.log("n:",n);
            a = [];
        }
        finally {
            document.getElementById("labelID").innerHTML = a+"_"+(a instanceof Array)
        }
    };
};

var a= new Array(3);//定义一个数组 传3试试、再传-5试试
for(var i=0;i<3;i++){a[i] = i;}
    console.log(a);//0、1/2

var a= new Array(-5);//定义一个数组 传3试试、再传-5试试
for(var i=0;i<5;i++){a[i] = i;}//报错
    console.log(a);//0、1/2