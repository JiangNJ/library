var $imgCt = $('.img-ct');
var $img = $('.ct .img-ct>li');
var $preBtn = $('.ct .pre');
var $nextBtn = $('.ct .next');
var $bullets = $('.ct .bullet li');

var pageIndex = 0;
var lock = false;

var imgLength = $img.length;
var imgWidth = $img.width();

$imgCt.append($img.first().clone());
$imgCt.perpend($img.last().clone());
$imgCt.width((imgLength+2)*imgWidth);
$imgCt.css({left: -imgLength});

$preBtn.click(function(){
	  playPre(1);
});
$nextBtn.click(function(){
  	playNext(1);
});

$bullets.on('click',function(){
  var index = $(this).index();
  if(index>pageIndex){
    playPre(index - pageIndex);
  }else if(index<pageIndex){
    playNext(pageIndex - index);
  }
});

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
  $byllets.removeClass('active')
          .eq(pageIndex)
          .addClass('active');
}

  setInterval(function(){playNext(1);},2000);