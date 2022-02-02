const path = require('path')
class News{
    getAll(req,res){
        return res.json([
            {image:"../image/news/news-1.jpg",title:"News-1",text:"this news is a test to see all the news you need to follow the link below'"},
            {image:"../image/news/news-1.jpg",title:"News-1",text:"this news is a test to see all the news you need to follow the link below'"},
            {image:"../image/news/news-1.jpg",title:"News-1",text:"this news is a test to see all the news you need to follow the link below'"},
            {image:"../image/news/news-1.jpg",title:"News-1",text:"this news is a test to see all the news you need to follow the link below'"},
            {image:"../image/news/news-1.jpg",title:"News-1",text:"this news is a test to see all the news you need to follow the link below'"}
        ])
    }
}

module.exports = new News();