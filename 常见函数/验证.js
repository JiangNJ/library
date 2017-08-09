手机验证
var validate = function(num){
    var exp = /^1[3|4|5|7|8]\d{9}$/;
    return exp.test(num)
}


身份证验证
var validate = function(num){
    var exp = /^320925\d{12} | [1-9]{1}[0-9]{16}([0-9]|[xX])$/;
    return exp.test(num)
}


ip验证
var validate = function(num){
    var exp = /^((0|1[0-9]{0,2}|2[0-9]{0,1}|2[0-4][0-9]|25[0-5]|[3-9][0-9]{0,1})\.){3}(0|1[0-9]{0,2}|2[0-9]{0,1}|2[0-4][0-9]|25[0-5]|[3-9][0-9]{0,1})(?(\/)\/([0-9]|[1-2][0-9]|3[0-2])|)$/;
    return exp.test(num)
}

