const express = require('express');
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'client', 'index.html'))
});

const PORT = 8081

app.listen(PORT, ()=>{
    console.log("server running at localhost : 8081")
})


