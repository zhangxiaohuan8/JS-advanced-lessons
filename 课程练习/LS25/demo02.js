//
window.onload = function (e) {
    console.log("window onload");
    console.log("e:", e);//e:Event
    console.log(e.target);//document
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // 测试0
        console.log(e.type);//click
        console.log(e.target);//target和this此时一样
        console.log(this);
        //所有情况都一样么?有没有某种情况不一样呢？后边讲事件流时再告诉你

        // 测试1
        console.log(e.clientX,e.clientY);
        console.log(this, "-----", e.target.id);//e.target.id为点哪个哪个的id

        // 测试2
        console.log(e);//MouseEvent
        console.log(e.__proto__);
        console.log(e.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__.__proto__);

        // 测试3
        for(var k in e){
            console.log(k,e[k]);
        }
        for(var k in e.__proto__){
            console.log(k);
        }
        for(var k in e.__proto__.__proto__){
            console.log(k);
        }
        for(var k in e.__proto__.__proto__.__proto__){
            console.log(k);
        }
    }
    div1.onclick = eventHandler;
    div2.onclick = eventHandler;

    //自定义事件监听、事件分发
    document.addEventListener("xx",function(){console.log("11")});//11
    document.dispatchEvent(new Event("xx"));
}

