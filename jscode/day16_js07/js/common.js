//兼容注册事件函数 可以兼容IE低版本6、7、8，IE9以后以及谷歌
function addEvent(element, eventName, fun){
    //如果浏览器可以识别addEventListener()方法就使用addEventListener()
    if(element.addEventListener){
        element.addEventListener(eventName, fun);
    //如果浏览器可以识别attachEvent()方法就使用attachEvent()
    }else if(element.attachEvent){
        element.attachEvent("on" + eventName, fun);
    }else{
    //如果浏览器不能识别以上两种方法，那么就使用传统的注册方式
        element["on" + eventName] = fun;
    }
}
//兼容移除事件方法
function removeEvent(element, eventName, fun){
    // 如果浏览器识别removeEventListener()那就用这个方法移除
    if(element.removeEventListener){
        element.removeEventListener(eventName, fun);
    // 如果浏览器识别detachEvent()那就用这个方法移除
    }else if(element.detachEvent){
        element.detachEvent("on" + eventName, fun);
    }else{
    //如果不识别以上两种事件注册方法，就用传统移除
        element["on" + eventName] = null;
    }
}