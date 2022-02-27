/*
    初识Node.js
*/
console.log('hello tom and jerry');
//计算100以内的数值和
function sum(n){
    var result = 0;
    for (var i = 0; i <= n; i++) {
        result += i;
    }
    return result;
}

var ret = sum(100);
console.log(ret);