const path = require('path')
const fs = require('fs')
const uuid = require('uuid')
const {ProjectElem} = require("../models/models");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2
const SERVER_NAME = process.env.SERVER_NAME;
class Project {
    getAll(req, res) {
        ProjectElem.find({}, function (err, docs) {
            return res.send(docs)
        })
    }

    async addProject(req, res) {
        const object = JSON.parse(req.body.data);
        const path = SERVER_NAME+req.files["picture"][0].path.replace('\\','/').replace('uploads','');
        console.log(path);
            const projectDB = new ProjectElem({
                _id: new mongoose.Types.ObjectId(),
                date: object.date,
                image: path,
                text: object.text,
                title: object.title
            })
            res.send(projectDB);
            projectDB.save(function (err) {
                if (err) return console.log(err)
                console.log("Сохранение объект", projectDB)
            })

    }

    async editProject(req, res) {
        const data = JSON.parse(req.body.data)
        let fileName = data.image
        if (req.files["picture"][0] !== undefined) {
            const path = process.env.SERVER_NAME+req.files["picture"][0].path.replace('\\','/').replace('uploads','');
            fs.unlink("upload/"+fileName.replace(SERVER_NAME,''));
        }
        ProjectElem.findByIdAndUpdate(data._id, {
            date: data.date,
            image: path,
            text: data.text,
            title: data.title
        }, (err, data) => {
            if (err) throw err;
            console.log("object was changed");
            res.status(200).send("succ")
        })
        console.log("new object :")
        console.log(data)
    }

    deleteProject(req, res) {
        const data = JSON.parse(req.body.data);
        fs.unlinkSync("uploads"+data.image.replace(SERVER_NAME,''))
        try {
            ProjectElem.remove({"_id": data._id}, (err) => {
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

module.exports = new Project();
