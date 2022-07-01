const path = require('path')
const fs = require('fs')
const uuid = require('uuid')
const {CareersElem, CoursesElem} = require("../models/models");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2
const SERVER_NAME = process.env.SERVER_NAME;

class Courses {
    getAll(req, res) {
        CoursesElem.find({}, function (err, docs) {
            return res.send(docs)
        })
    }

    async addCourses(req, res) {
        const object = JSON.parse(req.body.data);
        const files = req.files
        await Promise.all(Object.keys(files).map(async (name) => {
            let fileName = SERVER_NAME+files[name][0].path.replace('\\','/').replace('uploads','');
            // let fileName = await cloudinary.uploader.upload(files[name][0].path, {resource_type: "image"}).then((result) => {
            //     return {
            //         message: "Success",
            //         url: result.url,
            //     };
            // })
            //     .catch((error) => {
            //         return {message: "Fail"};
            //     });
            if (name.indexOf("teacher") === -1) {
                object[name] = fileName
            } else {
                object[name].image = fileName
            }
        }))
        console.log(object);
        const courseBD = new CoursesElem({
            _id:  new mongoose.Types.ObjectId(),
            title:object.title,
            text:object.text,
            place:object.place,
            dateStart:object.dateStart,
            dateEnd:object.dateEnd,
            price:object.price,
            nameMN:object.nameMN,
            document:object.document,
            managerImage:object.managerImage,
            licenseImage:object.licenseImage,
            teacherFirst:object.teacherFirst,
            teacherSecond:object.teacherSecond,
            teacherThird:object.teacherThird,
            feedback:object.feedback
        })
        res.send(courseBD);
        courseBD.save(function (err) {
            if (err) return console.log(err)
            console.log("Сохранение объект", courseBD)
        })
    }

    async editCourses(req, res) {
        const object = JSON.parse(req.body.data)
        const files = req.files
        await Promise.all(Object.keys(files).map(async (name) => {
            let fileName = SERVER_NAME+files[name][0].path.replace('\\','/').replace('uploads','');
            // let fileName = await cloudinary.uploader.upload(files[name][0].path, {resource_type: "image"}).then((result) => {
            //     let fileName = SERVER_NAME+files[name][0].path.replace('\\','/').replace('uploads','');
                // try {
                //     let url;
                    if (name.indexOf("teacher") === -1) {
                        fs.unlinkSync("upload"+object[name].replace(SERVER_NAME,''))
                        // url = object[name].split('/').at(-1).replace(".jpg", "").replace(".png", "");
                    } else {
                        fs.unlinkSync("upload"+object[name].image.replace(SERVER_NAME,''))
                        // url = object[name].image.split('/').at(-1).replace(".jpg", "").replace(".png", "");
                    }
                //     cloudinary.uploader.destroy(url, {resource_type: "image"}).then(r => {
                //         console.log("Delete");
                //     }).catch((err) => {
                //         console.error(err)
                //     })
                // } catch (err) {
                //     throw err;
                // }

            if (name.indexOf("teacher") === -1) {
                object[name] = fileName
            } else {
                object[name].image = fileName
            }
        }));
        CoursesElem.findByIdAndUpdate(object._id, {
            title:object.title,
            text:object.text,
            place:object.place,
            dateStart:object.dateStart,
            dateEnd:object.dateEnd,
            price:object.price,
            nameMN:object.nameMN,
            document:object.document,
            managerImage:object.managerImage,
            licenseImage:object.licenseImage,
            teacherFirst:object.teacherFirst,
            teacherSecond:object.teacherSecond,
            teacherThird:object.teacherThird,
            feedback:object.feedback
        }, (err, data) => {
            if (err) throw err;
            console.log("object was changed");
            res.status(200).send("succ")
        })
        console.log("new object :")
        console.log(object)
    }

    deleteCourses(req, res) {
        const data = JSON.parse(req.body.data);
        try {
            const url = data.managerImage.split('/').at(-1).replace(".jpg","").replace(".png","");
            console.log(url);
            cloudinary.uploader.destroy(url, {resource_type: "image"}).then(r => {
                console.log(r);})
        } catch (err) {
            throw err
            return res.status(500).json("")
        }
        try {
            const url = data.licenseImage.split('/').at(-1).replace(".jpg","").replace(".png","");
            console.log(url);
            cloudinary.uploader.destroy(url, {resource_type: "image"}).then(r => {
                console.log(r);})
        } catch (err) {
            throw err
            return res.status(500).json("")
        }
        try {
            const url = data.teacherFirst.image.split('/').at(-1).replace(".jpg","").replace(".png","");
            console.log(url);
            cloudinary.uploader.destroy(url, {resource_type: "image"}).then(r => {
                console.log(r);})
        } catch (err) {
            throw err
            return res.status(500).json("")
        }
        try {
            const url = data.teacherSecond.image.split('/').at(-1).replace(".jpg","").replace(".png","");
            console.log(url);
            cloudinary.uploader.destroy(url, {resource_type: "image"}).then(r => {
                console.log(r);})
        } catch (err) {
            throw err
            return res.status(500).json("")
        }
        try {
            const url = data.teacherThird.image.split('/').at(-1).replace(".jpg","").replace(".png","");
            console.log(url);
            cloudinary.uploader.destroy(url, {resource_type: "image"}).then(r => {
                console.log(r);})
        } catch (err) {
            throw err
            return res.status(500).json("")
        }
        try {
            CoursesElem.remove({"_id": data._id}, (err) => {
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

module.exports = new Courses();
