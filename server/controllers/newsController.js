const path = require('path')
const fs = require('fs')
const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const NewsScheme = new Scheme({
    _id:mongoose.Schema.Types.ObjectId,
    date:String,
    id:String,
    image:String,
    text:String,
    title:String
})
const NewsElems = mongoose.model("News",NewsScheme)
class News{
    getAll(req,res){
        NewsElems.find({},function (err,docs){
            return res.send(docs)
        })
        // fs.readFile('./news.json','utf8',(err,data)=>{
        //     if(err) throw err
        //     return res.send(data)
        // })
    }
    addNews(req,res){
        fs.writeFile('./news.json',req.body.data,(err)=>{})
    }
}

module.exports = new News();