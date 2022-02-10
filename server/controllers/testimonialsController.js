const path = require('path')
const {TestimonialsElems} = require("../models/models");
const mongoose = require("mongoose");
class Testimonials{
    getAll(req,res){
        TestimonialsElems.find({},function (err,docs){
            return res.send(docs)
        })
    }
}

module.exports = new Testimonials();