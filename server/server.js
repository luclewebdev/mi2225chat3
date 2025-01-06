const http = require('http')
const socketIo = require('socket.io')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end('serveur en fonctionnement')


})

const io = socketIo(server, {
    transports : ['websocket', 'polling'],
    cors: {
        origin :"https://chat.imatrythis.com",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket)=>{
    console.log('new user connected');
    console.log('user socket-id : '+socket.id);


    socket.on('message', (message)=>{
        console.log('received message from '+ socket.id)
        console.log(message.content);


        try{
            io.emit('message', {
                author: socket.id,
                content: message.content
            });
        }catch (e) {
            console.log(e)
        }finally {
            console.log('Broadcasted message to all clients')
            console.log(io.sockets.sockets.size)
        }
    })

})

server.listen(8080, ()=>{
    console.log("server is listening on port 8080");
})