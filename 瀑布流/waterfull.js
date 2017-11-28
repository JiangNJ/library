var $ = require('jquery')

function water($note){
    this.$note = $note
    this.init()
}

water.prototype.init = function(){
    var $item = this.$node.children(),
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
        heightArr[index]+=$(this).outerHeight(true)
        that.$node.height(Math.max.apply(null,heightArr))
    })
}

water.prototype.init = function(){
    var $item = this.$node.children(),
    count = parseInt($(window).width()/$item.outerWidth(true)),
    heightArr = [],
    that = this

    for(i=0;i<count;i++){
        heightArr[i] = 0
    }
    $item.each(function(){
        var minHeight = Math.min.apply(null,heightArr)
        var index = heightArr.indexOf(minHeight)
        $(this).css({
            left: $(this).outerWidth(true)*index
            top: heightArr[index]
        })
        heightArr[index] += $(this).outerHeight(true)
        that.$node.height(Math.max.apply(null,heightArr))
    })
}






module.exports.water = water
