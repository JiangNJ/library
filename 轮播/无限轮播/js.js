var $imgCt = $('.img-ct')
var $img = $('.ct .img-ct>li')
var $preBtn = $('.ct .pre')
var $nextBtn = $('.ct .next')
var $bullets = $('.ct .bullet li')

var pageIndex = 0
var clock = false

var imglength = $img.length
var imgWidth = $img.width()
$imgCt.append($img.first().clone())
$imgCt.prepend($img.last().clone())
$imgCt.width((imglength+2) * imgWidth)      //原先缓存的时imglength需再加2个复制的元素
$imgCt.css({left: -imgWidth})


$preBtn.click(function(){
	  playPre(1)
})
$nextBtn.click(function(){
  	playNext(1)
})
$bullets.click(function(){
  var index = $(this).index()
  if(index>pageIndex){
    playNext(index-pageIndex)
  }else if(index<pageIndex){
    playPre(pageIndex-index)
  }
})


function playNext(len){
  if(clock) return;
  clock = true;
  $imgCt.animate({
    left: '-='+len*imgWidth
  },function(){
    pageIndex += len
    console.log(pageIndex)
    setBullets()

    if(pageIndex === imglength){
      pageIndex = 0
      $imgCt.css({left: -imgWidth})
    }
    clock = false
  })
}
function playPre(len){
  if(clock) return;
  clock = true;
  $imgCt.animate({ 
    left: '+='+len*imgWidth
  },function(){
    pageIndex-=len
    console.log(pageIndex)
    setBullets()
    if(pageIndex < 0 ){
      pageIndex = imglength -1
      $imgCt.css({left : -imglength*imgWidth})
    }
    clock = false
  })
}


function setBullets(){
  $bullets.removeClass('active')
          .eq(pageIndex)
          .addClass('active')
}

  setInterval(function(){playNext(1)},2000)