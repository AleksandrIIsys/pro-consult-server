const path = require('path')
const {TestimonialsElems, NewsElems} = require("../models/models");
const mongoose = require("mongoose");
const uuid = require("uuid");
const fs = require("fs");
const {v2: cloudinary} = require("cloudinary");
class Testimonials{
    getAll(req,res){
        TestimonialsElems.find({},function (err,docs){
            return res.send(docs)
        })
    }
    async addTestimonials(req, res) {
        const object = JSON.parse(req.body.data);
        const path = req.file.path;
        let fileName = await cloudinary.uploader.upload(path,{resource_type: "image"}).then((result) => {
            return {
                message: "Success",
                url: result.url,
            };
        })
            .catch((error) => {
                return { message: "Fail" };
            });
        if(fileName.message !== 'Fail'){
        const testimonialsDB = new TestimonialsElems({
            _id: new mongoose.Types.ObjectId(),
            date: object.date,
            image: fileName.url,
            text: object.text,
            name: object.name,
            position: object.position
        })
        testimonialsDB.save(function (err) {
            if (err) return console.log(err)
            console.log("Сохранение объект", testimonialsDB)
            res.status(200).send("succ")
        })
        }
        console.log("end")
    }
    async editTestimonials(req, res) {
        const data = JSON.parse(req.body.data)
        let fileName = data.image
        if (req.file !== undefined) {
            const path = req.file.path
            fileName = await cloudinary.uploader.upload(path, {resource_type: "image"}).then((result) => {
                try {
                    const url = data.image.split('/').at(-1).replace(".jpg", "").replace(".png", "");
                    console.log(url);
                    cloudinary.uploader.destroy(url, {resource_type: "image"}).then(r => {
                        console.log("Delete");
                    }).catch((err) => {
                        console.error(err)
                    })
                } catch (err) {
                    throw err;
                }
                return result.url
            }).catch((error) => {
                console.error(error)
                });
            fs.unlinkSync(path);
        }
        TestimonialsElems.findByIdAndUpdate(data._id, {
            date: data.date,
            image: fileName,
            text: data.text,
            name: data.name,
            position: data.position
        }, (err, data) => {
            if (err) throw err;
            console.log(data);
            console.log("update")
            return res.status(200).send("succ")
        })

    }
    deleteTestimonials(req, res) {
        const data = JSON.parse(req.body.data);
        try {
            const url = data.image.split('/').at(-1).replace(".jpg","").replace(".png","");
            console.log(url);
            cloudinary.uploader.destroy(url, {resource_type: "image"}).then(r => {
                console.log(r);})
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