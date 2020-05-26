const container = document.querySelector('.container')
const btn = document.querySelector('button')
const stin = document.querySelector('input')
const ul = document.querySelector('ul')
const h = document.documentElement.clientHeight
container.style.height = h - 100 + 'px'




//链接服务器
const port = 9000
const host = '10.31.160.33'
const serverURL = `ws://${host}:${port}`
const client = new WebSocket(serverURL)





//第一次连接 的发送

client.onopen = function () {
    client.send('你好')
}


//获取服务端的信息 然后展示到界面上
    client.onmessage=function(msg){
        console.log(msg)
    const li=document.createElement('LI')
    li.innerHTML=msg.data
    ul.appendChild(li)
    }

//d点击发送内容
btn.onclick = sendSMS;




//回车发送内容
document.onkeydown = function (e) {
    if (e.keyCode == 13) {
        sendSMS()
    }
}


function sendSMS() {
    const val =stin.value
    client.send(val)

    stin.value=''
}



