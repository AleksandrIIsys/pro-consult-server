const path = require('path')
class Partners{
    getAll(req,res){
        return res.json([
            {image:"../image/clients/clients-1.jpg"},
            {image:"../image/clients/clients-3.jpg"},
            {image:"../image/clients/clients-4.jpg"},
            {image:"../image/clients/clients-5.jpg"},
            {image:"../image/clients/clients-6.jpg"},
            {image:"../image/clients/clients-2.jpg"},
            {image:"../image/clients/clients-1.jpg"},])
    }
}

module.exports = new Partners();