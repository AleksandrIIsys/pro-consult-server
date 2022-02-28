const path = require('path')
const {PartnersElems, NewsElems, ClientsElems} = require("../models/models");
const uuid = require("uuid");
const mongoose = require("mongoose");
const fs = require("fs");
class Partners{
    getAll(req,res){
        PartnersElems.find({},function (err,docs){
            return res.send(docs)
        })
    }
    addPartners(req,res){
        const object = JSON.parse(req.body.data);
        let img = req.files.picture;
        const fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','static',fileName))
        const objID = new mongoose.Types.ObjectId()
        const partnersDB = new PartnersElems({
            _id:objID,
            date:object.date,
            image:"/img/"+fileName,
        })
        res.send(partnersDB);
        partnersDB.save(function (err){
            if(err) return console.log(err)
            console.log("Сохранение объект", partnersDB)
        })
    }
    editPartners(req,res){
        const data = JSON.parse(req.body.data)
        if(req.files !== null) {
            const {image} = req.files
            const fileName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname,'..','static',fileName))
            const path = "/img/"+fileName
            PartnersElems.findByIdAndUpdate(data._id,{
                image: path.image,
                date: data.date
            },(err,data)=>{
                if (err) throw err;
                    try {
                        fs.unlink(path.resolve(__dirname + "/../static/" + data.image.substring(5)), (err) => {
                        })
                    } catch (e) {
                        throw e
                    }
                res.send(data)

            })
        }

        return res.status(200)
    }
    deletePartners(req, res) {
        const data = JSON.parse(req.body.data);
        try {
            fs.unlink(path.resolve(__dirname+"/../static/" + data.image.substring(5)),(err)=>{})
        } catch (err) {
            throw err
            return res.status(500).json("")
        }
        try {
            PartnersElems.remove({"_id": data._id},(err)=>{
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

module.exports = new Partners();