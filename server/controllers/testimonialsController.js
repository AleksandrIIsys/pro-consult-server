const path = require('path')
const {TestimonialsElems, NewsElems} = require("../models/models");
const mongoose = require("mongoose");
const uuid = require("uuid");
const fs = require("fs");
class Testimonials{
    getAll(req,res){
        TestimonialsElems.find({},function (err,docs){
            return res.send(docs)
        })
    }
    addTestimonials(req,res){
        const object = JSON.parse(req.body.data);
        let img = req.files.picture;
        const fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','static',fileName))
        const objID = new mongoose.Types.ObjectId()
        const testimonialsDB = new TestimonialsElems({
            _id:objID,
            date:object.date,
            image:"/img/"+fileName,
            text: object.text,
            name: object.name,
            position: object.position
        })
        res.send(testimonialsDB);
        testimonialsDB.save(function (err){
            if(err) return console.log(err)
            console.log("Сохранение объект", testimonialsDB)
        })
    }
    editTestimonials(req,res){
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
        TestimonialsElems.findByIdAndUpdate(data._id,{
            date: data.date,
            image: data.image,
            text: data.text,
            name: data.name,
            position: data.position
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
    deleteTestimonials(req, res) {
        const data = JSON.parse(req.body.data);
        try {
            fs.unlink(path.resolve(__dirname+"/../static/" + data.image.substring(5)),(err)=>{})
        } catch (err) {
            throw err
            return res.status(500).json("")
        }
        try {
            TestimonialsElems.remove({"_id": data._id},(err)=>{
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

module.exports = new Testimonials();