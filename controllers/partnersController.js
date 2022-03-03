const path = require('path')
const {PartnersElems, NewsElems, ClientsElems} = require("../models/models");
const uuid = require("uuid");
const mongoose = require("mongoose");
const fs = require("fs");
const {v2: cloudinary} = require("cloudinary");

class Partners {
    getAll(req, res) {
        PartnersElems.find({}, function (err, docs) {
            return res.send(docs)
        })
    }

    async addPartners(req, res) {
        const object = JSON.parse(req.body.data);
        let path = req.file.path;
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

            const partnersDB = new PartnersElems({
                _id: new mongoose.Types.ObjectId(),
                date: object.date,
                image: fileName,
            })
            res.send(partnersDB);
            partnersDB.save(function (err) {
                if (err) return console.log(err)
                console.log("Сохранение объект", partnersDB)
            })
        }
    }

    async editPartners(req, res) {
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
                fs.unlinkSync(path);
                return result.url
            })
                .catch((error) => {
                    fs.unlinkSync(path);
                });
        }
        PartnersElems.findByIdAndUpdate(data._id, {
            image: path.image,
            date: data.date
        }, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.send(data)

        })

        return res.status(200)
    }

    deletePartners(req, res) {
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
                    throw err
                console.log("Suc");
            })
        } catch (err) {
            throw err
            return res.status(500).json("")
        }
        return res.status(200).json("Succ")

    }
}

module.exports = new Partners();