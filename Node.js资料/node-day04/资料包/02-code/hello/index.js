/*
    包的入口文件
*/
var template = require('art-template');
var html = template(__dirname + '/tpl-user.art', {
    user: {
        name: '张三'
    }
});
console.log(html);