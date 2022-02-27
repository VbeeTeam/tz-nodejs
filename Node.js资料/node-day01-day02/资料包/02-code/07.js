/*
    模块成员导出：global

    已经加载的模块会缓存，提高性能
*/

console.log('hello');

var flag = 123;

global.flag = flag;