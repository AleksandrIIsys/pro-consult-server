const path = require('path')
const fs = require('fs')
class News{
    getAll(req,res){
        fs.readFile('./news.json','utf8',(err,data)=>{
            if(err) throw err
            return res.send(data)
        })
    }
    addNews(req,res){
        fs.writeFile('./news.json',req.body.data,(err)=>{})
    }
}

module.exports = new News();