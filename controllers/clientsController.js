const path = require('path')
const mongoose = require('mongoose')
const {ClientsElems, NewsElems} = require("../models/models");
const uuid = require("uuid");
const fs = require("fs");
const {v2: cloudinary} = require("cloudinary");
class Clients{
    getAll(req,res){
        ClientsElems.find({},function (err,docs){
            return res.send(docs)
        })
    }
    async addClients(req, res) {
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
        if(fileName.message !== 'Fail') {
            const clientsDB = new ClientsElems({
                _id: new mongoose.Types.ObjectId(),
                date: object.date,
                image: fileName.url,
            })
            res.send(clientsDB);
            clientsDB.save(function (err) {
                if (err) return console.log(err)
                console.log("Сохранение объект", clientsDB)
            })
        }else {
            req.status(500).send("fail");
        }
    }
    async editClients(req, res) {
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
        NewsElems.findByIdAndUpdate(data._id, {
            image: fileName,
            date: data.date
        }, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.send(data)

        })
        return res.status(200)
    }
    deleteClitents(req, res) {
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
            ClientsElems.remove({"_id": data._id},(err)=>{
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

module.exports = new Clients();