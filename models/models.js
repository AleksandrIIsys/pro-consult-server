const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const NewsElems = mongoose.model("News",new Scheme({
    _id: mongoose.Types.ObjectId,
    date:String,
    image:String,
    text:{
        "ru-RU":String,
        "en-US":String,
        "uz-UZ":String,
    },
    title:{
        "ru-RU":String,
        "en-US":String,
        "uz-UZ":String,
    }
}))
const ClientsElems = mongoose.model("Clients", new Scheme(({
    _id:mongoose.Schema.Types.ObjectId,
    image:String,
    date:String

})))
const PartnersElems = mongoose.model("Partners", new Scheme(({
    _id:mongoose.Schema.Types.ObjectId,
    image:String,
    date:String
})))
const TestimonialsElems = mongoose.model("Testimonials", new Scheme(({
    _id:mongoose.Schema.Types.ObjectId,
    image:String,
    text:{
        "ru-RU":String,
        "en-US":String,
        "uz-UZ":String,
    },
    name:{
        "ru-RU":String,
        "en-US":String,
        "uz-UZ":String,
    },
    position:{
        "ru-RU":String,
        "en-US":String,
        "uz-UZ":String,
    },
    date:String
})))
module.exports = {NewsElems,ClientsElems,PartnersElems,TestimonialsElems};