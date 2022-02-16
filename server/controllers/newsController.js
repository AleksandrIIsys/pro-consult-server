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
        console.log(img);
        const fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','static',fileName))
        const newsDB = new NewsElems({
            date:object.date,
            id: object.id,
            image: fileName,
            text: object.text,
            title: object.title
        })
        res.send(newsDB);
        newsDB.save(function (err){
            if(err) return console.log(err)
            console.log("Сохранение объект", newsDB)
        })
    }
}

module.exports = new News();