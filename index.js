require('dotenv').config()
const uuid = require("uuid")
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
    secure: true
})
// MULTER
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const path = uuid.v4() + "." + file.originalname.split('.')[file.originalname.split('.').length-1];
        cb(null, path)
    }
})
app.use(multer({storage}).fields(
    [
        {name: "picture", maxCount: 1},
        {name: "managerImage", maxCount: 1},
        {name: "licenseImage", maxCount: 1},
        {name: "teacherFirst", maxCount: 1},
        {name: "teacherSecond", maxCount: 1},
        {name: "teacherThird", maxCount: 1}
    ]
))
app.use(express.json())
app.use('/img', express.static(path.resolve(__dirname, 'static')))
app.use(express.static(path.resolve(__dirname, 'uploads')))
app.use('/api', router)
app.get('/', (req, res) => {
    res.send("WORKED")
})

async function start() {
    setTimeout(async function mongoDB() {
        try {
            await mongoose.connect(DB_CONN)
            console.log("DB connected")
        } catch (e) {
            setTimeout(mongoDB, 5000)
            console.error(e)
        }
    }, 500)
    console.log(4);
    app.listen(PORT, () => console.log("server started"))
}

start()
