var arr = [1, 5, 6, 3];    //数字数组
arr.sort(function(a, b) {
    return a - b;   //从小到大排
    return b - a;   //从大到小排
    return Math.random() - 0.5;   //数组洗牌
});