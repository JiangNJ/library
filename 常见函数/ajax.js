
var $ = require('../lib/jquery-3.2.0.min.js')

//封装一个Ajax
var Ajax = function(url,type,success,error){
    $.ajax({
        url: url,
        type: type,
        dataType: 'json',
        timeout: 10000,
        success: function(d){
            var data = d.data;
            success && success(data);
        },
        error: function(e){
            erros && error(e)
        }
    })
}


//使用方法： 
Ajax('/data.json','get',function(data){
    console.log(data)
})


//后台新建一个Ajax
var xhr = new XMLHttpRequest();
xhr.open('get/post',url,true)
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        alert()
    }
}
xhr.send()