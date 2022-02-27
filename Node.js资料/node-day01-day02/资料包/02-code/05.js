/*
    四则运算-成员导出方式分析
*/
var sum = function(a,b){
    return parseInt(a) + parseInt(b);
}
var subtract = function(a,b){
    return parseInt(a) - parseInt(b);
}
var multiply = function(a,b){
    return parseInt(a) * parseInt(b);
}
var divide = function(a,b){
    return parseInt(a) / parseInt(b);
}

// 导出成员
// exports.sum = sum;
// exports.subtract = subtract;

// module.exports = {
//     sum : sum,
//     subtract : subtract,
//     multiply : multiply,
//     divide : divide
// }

// module.exports = [1,2,3];