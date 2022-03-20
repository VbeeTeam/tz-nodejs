/**
 * 什么是scoket
 * 网络上的两个程序通过一个双向通信连接实现的数据交换，
 * 这个连接的一端称为一个Scoket
 * 
 * net模块
 * 模块提供了异步的网络 API，用于创建基于流的 TCP 或 IPC 服务器 (net.createServer()) 
 * 和客户端 (net.createConnection())。
 */
const net = require("net")

//createServer 创建一个net服务
//scoket 响应给客户端的参数
//const server = net.createServer((scoket) => {
//    scoket.write("hello")
//    scoket.on("data", (chunk) => {
//        console.log(chunk.toString())
//    })
//    scoket.on("end", () => {
//        console.log("data over...")
//    })
//    scoket.end()
//})
//server.on("error", (err) => {
//    console.log(err)
//})
//server.listen("9527", () => {
//    console.log("server open success...")
//})

//提供了用于从可读流（例如 process.stdin）每次一行地读取数据的接口
const server = new net.createServer();

let clients = {} //客户端对象
let clientName = 0 //客户端名字

server.on("connection", (client) => {
    client.name = ++clientName
    clients[client.name] = client
    //client.write("connection success!")
    client.on("data", (msg) => {
        //console.log(msg.toString())
        toClient(client, msg.toString())
    })
    client.on("error", (err) => {
        console.log(err)
    })
    client.on("close", () => {
        //下线删除该用户
        delete clients[client.name]
        console.log(client.name + "下线了")
    })
})
server.listen(9527, ()=>{
    console.log("server open success...")
})
function toClient(client, msg){
    for(let key in clients){
        clients[key].write(client.name + "说：" + msg)
    }
}