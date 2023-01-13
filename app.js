const express = require("express")
const app = express();
const path = require("path");
const port = 3000;

app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'views','home.html')))
app.get('/register',(req,res)=>res.sendFile(path.resolve(__dirname,'views','register.html')))
app.get('/login',(req,res)=>res.sendFile(path.resolve(__dirname,'views','login.html')))
app.use(express.static('public'))
app.listen(port,()=> console.log(`servidor levantado en el puerto https//localhost:${ port } `))