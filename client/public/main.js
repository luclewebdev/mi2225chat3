const socket = io("wss://serverchat.imatrythis.com");
const button = document.querySelector("button")

socket.on('message', (message)=>{
    console.log(message)
    const ligne = document.createElement('li')
    ligne.innerHTML = message.author+ " à écrit : "+message.content;
    document.querySelector('ul').appendChild(ligne)
})

button.addEventListener("click", (e)=>{
    const toSend = document.querySelector('input').value
    socket.emit('message', {
        content: toSend
    })
})