var unique = function(arr){
    var a = [],
    b = {};
    for(var i = 0, len=arr.length; i<len;i++){
        if(!b[arr[i]]) {            //for循环时，每次取出一个元素与对象进行对比，                             
            b[arr[i]] = 1;          //如果这个元素不重复，则把它存放到结果数组中,
            a.push(arr[i])          //同时把这个元素的内容作为对象的一个属性，
        }                           //并赋值为1，存入到第2步建立的对象中。
    }
    return a;
}