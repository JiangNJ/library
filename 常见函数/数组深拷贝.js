//1.用slice：
//参数：
//  array 必选项。一个 Array 对象。
//  start 必选项。arrayObj 中所指定的部分的开始元素是从零开始计算的下标。
//  end可选项。arrayObj 中所指定的部分的结束元素是从零开始计算的下标。

//  说明：
//  slice 方法返回一个 Array 对象，其中包含了 arrayObj 的指定部分。
//  slice 方法一直复制到 end 所指定的元素，但是不包括该元素。
//  如果 start 为负，将它作为 length + start处理，此处 length 为数组的长度。
//  如果 end 为负，就将它作为 length + end 处理，此处 length 为数组的长度。
//  如果省略 end ，那么 slice 方法将一直复制到 arrayObj 的结尾。
//  如果 end 出现在 start 之前，不复制任何元素到新数组中。
var arr = array.slice(start,[end])
//2.使用concat，创建一个副本，产生新的数组，不会对根目录产生影响
var arr1 = [1,2,3];
var arr2 = arr1.concat();




//2. 封装一个函数
function deepCopy(oldObj) {
    var newObj = [];
    for(var key in oldObj){
        if (typeof oldObj[key] === 'object'){
            newObj[key] = deepCopy(oldObj[key])
        }else{
            newObj[key] = oldObj[key]
        }
    }
    return newObj  
}