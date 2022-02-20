const path = require('path')
const fs = require('fs')
const uuid = require('uuid')
const {NewsElems} = require("../models/models");
const mongoose = require("mongoose");

class News{
    getAll(req,res){
        NewsElems.find({},function (err,docs){
            return res.send(docs)
        })
    }
    addNews(req,res){
        const object = JSON.parse(req.body.data);
        let img = req.files.picture;
        const fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','static',fileName))
        const objID = new mongoose.Types.ObjectId()
        const newsDB = new NewsElems({
            _id:objID,
            openID:objID.toString(),
            date:object.date,
            image:"/img/"+fileName,
            text: object.text,
            title: object.title
        })
        res.send(newsDB);
        newsDB.save(function (err){
            if(err) return console.log(err)
            console.log("Сохранение объект", newsDB)
        })
    }
    editNews(req,res){
        const data = JSON.parse(req.body.data)
        console.log(req.files);
        let isPhotoChange = false
        if(req.files !== null) {
            const {image} = req.files
            const fileName = uuid.v4() + ".jpg"
            isPhotoChange = true
            image.mv(path.resolve(__dirname,'..','static',fileName))
            data.image = "/img/"+fileName
        }
        console.log(data.image)
        NewsElems.findByIdAndUpdate(data._id,{
            date: data.date,
            image: data.image,
            text: data.text,
            title: data.title
        },(err,data)=>{
            if (err) throw err;
            if(isPhotoChange) {
                try {
                    fs.unlink(path.resolve(__dirname + "/../static/" + data.image.substring(5)), (err) => {
                    })
                } catch (e) {
                    throw e
                }
            }
        })

        res.send(data)
        return res.status(200)
    }
    deleteNews(req, res) {
        const data = JSON.parse(req.body.data);
        try {
            fs.unlink(path.resolve(__dirname+"/../static/" + data.image.substring(5)),(err)=>{})
        } catch (err) {
            throw err
            return res.status(500).json("")
        }
        try {
            NewsElems.remove({"_id": data._id},(err)=>{
                if(err)
                    throw err
                console.log("Suc");
            })
        }catch (err){
            throw err
            return res.status(500).json("")
        }
        return res.status(200).json("Succ")

    }
}

module.exports = new News();