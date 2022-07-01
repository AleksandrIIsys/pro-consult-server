const path = require('path')
const {PartnersElems, NewsElems, ClientsElems, SlideElement} = require("../models/models");
const uuid = require("uuid");
const mongoose = require("mongoose");
const fs = require("fs");
const {v2: cloudinary} = require("cloudinary");

class Slider {
    getAll(req, res) {
        SlideElement.find({}, function (err, docs) {
            if(err){
                console.log(err)
                return res.status(500).send([])
            }
            return res.status(200).send(docs)
        })
    }

    async addSlide(req, res) {
        const object = JSON.parse(req.body.data);
        let path = req.files["picture"][0].path;
        let fileName = await cloudinary.uploader.upload(path, {resource_type: "image"}).then((result) => {
            fs.unlinkSync(path);
            return {
                message: "Success",
                url: result.url,
            };
        })
            .catch((error) => {
                fs.unlinkSync(path);
                return {message: "Fail"};
            });
        if (fileName.message !== 'Fail') {

            const slideDB = new SlideElement({
                _id: new mongoose.Types.ObjectId(),
                url: object.url,
                title:object.title,
                subtitle:object.subtitle,
                image: fileName.url,
            })
            res.send(slideDB);
            slideDB.save(function (err) {
                if (err) {
                    return console.log(err)
                }
                console.log("Сохранение объект", slideDB)
            })
        }
    }

    async editSlide(req, res) {
        const data = JSON.parse(req.body.data)
        let fileName = data.image
        if (req.files["picture"][0] !== undefined) {
            const path = req.files["picture"][0].path
            fileName = await cloudinary.uploader.upload(path, {resource_type: "image"}).then((result) => {
                try {
                    const url = data.image.split('/').at(-1).replace(".jpg", "").replace(".png", "");
                    cloudinary.uploader.destroy(url, {resource_type: "image"}).then(r => {
                        console.log("Delete");
                    }).catch((err) => {
                        console.error(err)
                    })
                } catch (err) {
                    throw err;
                }
                return result.url
            })
                .catch((error) => {
                    console.error(error)
                });
            fs.unlinkSync(path);
        }
        SlideElement.findByIdAndUpdate(data._id, {
            image: fileName,
            title:data.title,
            subtitle:data.subtitle,
            url: data.url
        }, (err, data) => {
            if (err) console.log(err);
            console.log("object was changed");
            return res.status(200).send(data)

        })

    }

    deleteSlide(req, res) {
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
            PartnersElems.remove({"_id": data._id}, (err) => {
                if (err)
                    console.log(err)
                console.log("Suc");
            })
        } catch (err) {
            throw err
            return res.status(500).json("")
        }
        return res.status(200).json("Succ")

    }
}

module.exports = new Slider();
