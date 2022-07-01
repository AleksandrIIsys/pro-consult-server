const path = require('path')
const fs = require('fs')
const uuid = require('uuid')
const {CareersElem} = require("../models/models");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2

class Careers {
    getAll(req, res) {
        CareersElem.find({}, function (err, docs) {
            return res.send(docs)
        })
    }

    async addCareers(req, res) {
        const object = JSON.parse(req.body.data);
        console.log(object);
        const careersDB = new CareersElem({
                _id:  new mongoose.Types.ObjectId(),
                title: object.title,
                description: object.description,
                workSchedule: object.workSchedule,
                date: object.date,
                salary: object.salary,
            })
            res.send(careersDB);
            careersDB.save(function (err) {
                if (err) return console.log(err)
                console.log("Сохранение объект", careersDB)
            })

    }

    async editCareers(req, res) {
        const object = JSON.parse(req.body.data)
        CareersElem.findByIdAndUpdate(object._id, {
            title: object.title,
            description: object.description,
            workSchedule: object.workSchedule,
            date: object.date,
            salary: object.salary,
        }, (err, data) => {
            if (err) throw err;
            console.log("object was changed");
            res.status(200).send("succ")
        })
        console.log("new object :")
        console.log(object)
    }

    deleteCareers(req, res) {
        const data = JSON.parse(req.body.data);
        try {
            CareersElem.remove({"_id": data._id}, (err) => {
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

module.exports = new Careers();