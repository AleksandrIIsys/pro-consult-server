const path = require('path')
const fs = require('fs')
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
        console.log(object.id);
        const News = new NewsElems({
            _id: new mongoose.Schema.Types.ObjectId(),
            date:"",
            id: object.id,
            image: object.image,
            text: object.text,
            title: object.title
        })
        console.log(News);
        // News.save(function (err){
        //     if(err) throw err
        //     console.log('Author successfully saved.');
        // })
        fs.writeFile('./news.json',req.body.data,(err)=>{})
    }
}

module.exports = new News();