const path = require('path')
const mongoose = require('mongoose')
const {ClientsElems, NewsElems} = require("../models/models");
const uuid = require("uuid");
const fs = require("fs");
class Clients{
    getAll(req,res){
        ClientsElems.find({},function (err,docs){
            return res.send(docs)
        })
    }
    addClients(req,res){
        const object = JSON.parse(req.body.data);
        let img = req.files.picture;
        const fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','static',fileName))
        const objID = new mongoose.Types.ObjectId()
        const clientsDB = new ClientsElems({
            _id:objID,
            date:object.date,
            image:"/img/"+fileName,
        })
        res.send(clientsDB);
        clientsDB.save(function (err){
            if(err) return console.log(err)
            console.log("Сохранение объект", clientsDB)
        })
    }
    editClients(req,res){
        const data = JSON.parse(req.body.data)
        if(req.files !== null) {
            const {image} = req.files
            const fileName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname,'..','static',fileName))
            const path = "/img/"+fileName
            NewsElems.findByIdAndUpdate(data._id,{
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
    deleteClitents(req, res) {
        const data = JSON.parse(req.body.data);
        try {
            fs.unlink(path.resolve(__dirname+"/../static/" + data.image.substring(5)),(err)=>{})
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