
阻止冒泡
function stop(e){
    e = e || window.event;
    if(e.stopPropagation){
        e.stopPropagation();        //W3C阻止冒泡
    }else{
        e.cancelBubble = true       //IE阻止冒泡
    }
}

阻止事件默认样式

function stops(e){
    e = e || window.event;
    if (e.preventDefault){
        e.preventDefault();             //W3C阻止冒泡
    }else{
        e.returnValue = false          //IE阻止冒泡
    }
}