require('dotenv').config()
const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const cloudinary = require("cloudinary")
const router = require('./routers/index')
const path = require("path");
const app = express()
const PORT = process.env.PORT
const DB_CONN = process.env.DB_CONN
cloudinary.config({
    cloud_name: 'dfco7yi3a',
    api_key: '237137654573476',
    api_secret: 'IsXbfJq5mN9TNdlSaGhHl-O4Ciw',
    secure: true})
app.use(cors())
app.use(express.json())
app.use('/img',express.static(path.resolve(__dirname, 'static'), {
    setHeaders: function(res, path) {
        res.set("Access-Control-Allow-Origin", "*");
        res.set("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
        res.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.set("X-Powered-By",' 3.2.1')
        res.type("application/json");
        res.type("jpg");
    }
}))
app.use(express.static(path.resolve(__dirname, 'static'),{
    setHeaders: function(res, path) {
        res.set("Access-Control-Allow-Origin", "*");
        res.set("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
        res.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.set("X-Powered-By",' 3.2.1')
        res.type("application/json");
        res.type("jpg");
    }
}))
app.use(fileUpload({}))
app.use('/api', router)
app.get('/',(req,res)=>{
    res.send("WORKED")
})
async function start(){
    await mongoose.connect(DB_CONN)
    app.listen(PORT,()=>console.log("hihih"))
}
start()
