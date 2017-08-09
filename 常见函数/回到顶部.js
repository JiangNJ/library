var $ = require('../lib/jquery-3.2.0.min.js')

$(window).scroll(function(){
    var a = $(window).scrollTop();
    if (a>100){
        $('.go-top').fadeIn();
    }else{
        $('.go-top').fadeOut();
    }
});

$(".go-top").click(function(){
    $("html,body").animate({scrollTop: "0px"},'600');
});