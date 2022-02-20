# 大纲-day01
## 初识Nodejs
- JavaScript是什么？ 
- JavaScript可以运行在哪里？ 

![](img/1.png)

浏览器 | 内核    
-------|---------
IE     | Trident 
FireFox| Gecko   
Chrome | WebKit  
Safari | WebKit  
Opera  | Presto  
Edge   | Chakra  

## Node.js的诞生
![image](img/2.png)

- 作者Ryan Dahl 瑞恩·达尔
    + 2004 纽约 读数学博士 
    + 2006 退学到智利 转向开发 
    + 2009.5对外宣布node项目，年底js大会发表演讲 
    + 2010 加入Joyent云计算公司 
    + 2012 退居幕后

> Node.js 是一种建立在Google Chrome’s v8 engine上的 non-blocking (非阻塞）, event-driven （基于事件的） I/O平台. 
Node.js平台使用的开发语言是JavaScript，平台提供了操作系统低层的API，方便做服务器端编程，具体包括文件操作、进程操作、通信操作等系统模块

### 事件驱动

事件驱动模型主要包含3个对象：事件源、事件和事件处理程序。

· 事件源：产生事件的地方(html元素)

· 事件：点击/鼠标操作/键盘操作等等

· 事件对象：当某个事件发生时，可能会产生一个事件对象，该时间对象会封装好该时间的信息，传递给事件处理程序

· 事件处理程序：响应用户事件的代码 
我们使用的window系统也算得上是事件驱动了。简单的事例：监听鼠标点击事件，并能够显示鼠标点击的位置x,y。

### Node.js的工作原理

nodejs是单线程，异步I/O，事件驱动

1.node.js的单线程并不是真正的单线程，只是开启了单个线程进行业务处理（cpu的运算），同时开启了其他线程专门处理I/O。当一个指令到达主线程，主线程发现有I/O之后，直接把这个事件传给I/O线程，不会等待I/O结束后，再去处理下面的业务，而是拿到一个状态后立即往下走，这就是“单线程”、“异步I/O”。  

2.Node.js的I/O 处理完之后会有一个回调事件，这个事件会放在一个事件处理队列里头，在进程启动时node会创建一个类似于While(true)的循环，它的每一次轮询都会去查看是否有事件需要处理，是否有事件关联的回调函数需要处理，如果有就处理，然后加入下一个轮询，如果没有就退出进程，这就是所谓的“事件驱动”。

3.在node.js中，事件主要来源于网络请求，文件I/O等，根据事件的不同对观察者进行了分类，有文件I/O观察者，网络I/O观察者。事件驱动是一个典型的生产者/消费者模型，请求到达观察者那里，事件循环从观察者进行消费，主线程就可以马不停蹄的只关注业务不用再去进行I/O等待。

## Node.js可以用来做什么？

- 具有复杂逻辑的动态网站 
- WebSocket服务器 
- 命令行工具 
- 带有图形界面的本地应用程序 
- ......

## 终端基本使用
### 常用命令
- md 创建目录
- rmdir(rd) 删除目录，目录内没有文档。
- echo on a.txt 创建空文件
- del 删除文件
- rm 文件名 删除文件
- cat 文件名 查看文件内容
- cat > 文件名 向文件中写上内容。

## Node.js开发环境准备

1. 普通安装方式[官方网站](https://nodejs.org/zh-cn/)

2. 安装步骤
   
    配置环境变量
    
    （1）node.js的msi包是一路next就可以了
    
    （2）安装完后，可以在命令行中输入node -v 来查看安装版本和是否安装成功，再输入npm-v查看npm模块是否正常
    
    （3）管理员身份运行配置npm的全局模块（新建文件夹node_global、node_cache）
    
      npm config set prefix "D:\nodejs\node_global"  》模块配置位置
      npm config set cache "D:\nodejs\node_cache"   》缓存文件
    
      npm config get prefix 》查看配置
    
    （4）配置环境变量
    
    进入环境变量对话框，在【系统变量】下新建【NODE_PATH】，输入D:\nodejs\node_global\node_modules
    
    将【用户变量】下的【Path】修改为 D:\nodejs\node_global
    
    (6) 配置完后，安装个module测试下，我们就安装最常用的express模块，打开cmd窗口输入命令，进行模块的全局安装
    
    npm install express -g      # -g是全局安装的意思
## Node.js之HelloWorld
- 命令行方式
- 运行文件方式
- 全局对象概览

## 服务器端模块化

- 服务器端模块化规范CommonJS与实现Node.js
- 模块导出与引入
- 模块导出机制分析
- 模块加载规则
    + 模块查找 不加扩展名的时候会按照如下后缀顺序进行查找 .js .json .node
- 模块分类
    + 自定义模块
    + 系统核心模块
        * fs 文件操作
        * http 网络操作
        * path 路径操作
        * querystring 查询参数解析
        * url url解析
        * ......

## ES6常用语法
- 变量声明let与const
- 变量的解构赋值
    + 数组解构赋值
    + 对象解构赋值
    + 字符串解构赋值
- 字符串扩展
    + includes()
    + startsWith()
    + endsWith()
    + 模板字符串
- 函数扩展
    + 参数默认值
    + 参数结构赋值
    + rest参数
    + 扩展运算符
    + 箭头函数
- 类与继承