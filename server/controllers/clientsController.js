const path = require('path')
const mongoose = require('mongoose')
const {ClientsElems} = require("../models/models");
class Clients{
    getAll(req,res){
        ClientsElems.find({},function (err,docs){
            return res.send(docs)
        })
    }


}

module.exports = new Clients();