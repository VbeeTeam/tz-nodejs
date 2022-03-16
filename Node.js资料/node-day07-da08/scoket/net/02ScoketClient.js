const net = require("net")

//创建连接scoket对象
//const client = net.createConnection({port: 9527}, () => {
//    client.write("World!")
//})
//client.on("data", (data) => {
//    console.log(data.toString())
//    client.end()
//})
//client.on("end", () => {
//   console.log("data from server over...")
//})

const redline = require("readline")

const scoket = new net.Socket()
scoket.setEncoding = "UTF-8"

scoket.connect(9527, () => {
    scoket.write("hello")
})
scoket.on("data", (msg) => {
    console.log(msg.toString())
    say()
})
scoket.on("error", (err) => {
    console.log(err)
})
scoket.on("close", () => {
    console.log("connect bye...")
})

const rL = redline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function say(){
    //inputMsg 输入的内容
    rL.question("请输入：\n",(inputMsg) => {
        if(inputMsg){
            scoket.write(inputMsg + "\n")
        }else{
            scoket.destroy()
            rL.close()
        }
    })
}

