var isRepeat = function(arr){
    var hash = {};
    for(var key in arr){
        if(hash[arr[key]]) return true;
        hash[arr[key]] = true;
    }
    return false
}