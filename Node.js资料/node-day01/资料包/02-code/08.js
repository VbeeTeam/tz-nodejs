/*
    模块文件的后缀3种情况：.js .json .txt
    上述三种模块的加载优先级(不加文件后缀时的优先级)：.js -> .json -> .txt
*/

// 已经加载的模块会缓存，提高性能
// require('./07');
// require('./07');
// require('./07');
// console.log(global.flag);

var m = require('./data1.js');
console.log(m);

// var m = require('./data1.json');
// console.log(m.username);

// var m = require('./data1.txt');
// console.log(m);

// var m = require('./data1');
// console.log(m);