var $ = require('jquery')

function water($note){
    this.$note = $note
    this.init()
}

water.prototype.init = function(){
    var $item = this.$node.childen(),
    count = parseInt($(window).width()/this.$node.children().ourthwidth(true)),
    heightArr = [],
    that = this

    for(var i = 0; i<count;i++){
        heightArr[i]=0
    }
    $item.each(function(){
        var minHeight = Math.min.apple(null,heightArr)
        var index = heightArr.indexOf(minHeight)
        $(this).css({
            top: heightArr[index],
            left:$(this).outerWidth(true)*index
        })
        heightArr[index]+=$(this).outerWidth(true)
        that.$node.height(heightArr[index])
    })
}


module.exports.water = water