var replaceAll = function(bigStr,str1,str2){   //将bigstr中的str1全部替换成str2
    var reg = new RegExp(str1, 'gm');
    return bigStr.replace(reg,str2);
}