const path = require('path')
const mongoose = require('mongoose')
const {ClientsElems} = require("../models/models");
const uuid = require("uuid");
class Clients{
    getAll(req,res){
        ClientsElems.find({},function (err,docs){
            return res.send(docs)
        })
    }
    addClient(req,res){
        const object = JSON.parse(req.body.data);
        let img = req.files.picture;
        const fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','static',fileName))
        const clientDB = new ClientsElems({
            date:object.date,
            id: object.id,
            image: fileName,
        })
        res.send(clientDB);
        clientDB.save(function (err){
            if(err) return console.log(err)
            console.log("Сохранение объект", clientDB)
        })
    }


}

module.exports = new Clients();