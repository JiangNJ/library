function lazy(){
    $('img').each(function(){
        if(checkShow($(this) && !isLoaded($(this)) ){
            loadImg($(this))
        }
    })
}

function checkShow(){
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var offsetTop = $img.offset().top;
    if((offsetTop<scrollTop+windowHeight) && offsetTop>scrollTop ){
        return true
    }else{
        return false
    }
}

function isLoaded($img){
    return $img.attr('src') === $img.attr('data-src')
}

function loadImg($img){
    $img.attr('src',img.attr('data-src'))
}