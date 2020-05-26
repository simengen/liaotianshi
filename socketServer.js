const ws = require('ws')
const host = '10.31.160.33'
const port = 9000
const server = new ws.Server({
    host,
    port
})


server.on('listening', () => {
    console.log(`The server is running at:ws://${host}:${port}`)
})

let count = 10000
const clients = []
server.on('connection', client => {
    client.name = ++count
    clients[client.name] = client


    //获取数据
    client.on('message', msg => {
        msg.name = client.name
        console.log(msg.toString())
        boradcast(client, msg)
    })
    //错误处理
})

function boradcast(client, msg) {

    for(let key in clients){
        clients[key].send(msg.toString())
    }
    
}
server.on('listening', () => {
    console.log(`The server is running at:ws://${host}:${port}`)
})