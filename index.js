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
app.use(cors())
cloudinary.config({
    cloud_name: 'dfco7yi3a',
    api_key: '237137654573476',
    api_secret: 'IsXbfJq5mN9TNdlSaGhHl-O4Ciw',
    secure: true})
// MULTER
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
app.use(multer({ storage }).single('picture'))
app.use(express.json())
app.use('/img',express.static(path.resolve(__dirname, 'static')))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
app.get('/',(req,res)=>{
    res.send("WORKED")
})
async function start(){
    await mongoose.connect(DB_CONN)
    app.listen(PORT,()=>console.log("hihih"))
}
start()
