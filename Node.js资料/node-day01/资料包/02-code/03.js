/*
    模块化开发

    传统非模块化开发有如下的缺点：
    1、团队多人命名冲突  
    2、文件导入顺序依赖

    前端标准的模块化规范：
    1、AMD - requirejs   国外的 
    2、CMD - seajs       国产的 淘宝阿里巴巴前端团队

    服务器端的模块化规范：
    1、CommonJS - Node.js

    模块化相关的规则：
    1、如何定义模块：一个js文件就是一个模块，模块内部的成员都是相互独立
    2、模块成员的导出和引入

    模块成员的导出最终以module.exports为准

    如果要导出单个的成员或者比较少的成员，一般我们使用exports导出；
    如果要导出的成员比较多，一般我们使用module.exports的方式
    这两种方式不能同时使用

    exports与module的关系：
    module.exports = exports = {};
*/

var sum = function(a,b){
    return parseInt(a) + parseInt(b);
}

// 导出模块成员
exports.sum = sum;

// 导出成员的另一种方式
module.exports = function(){
    console.log('hello');
};