const path = require('path')
const {PartnersElems} = require("../models/models");
class Partners{
    getAll(req,res){
        PartnersElems.find({},function (err,docs){
            return res.send(docs)
        })
    }
}

module.exports = new Partners();