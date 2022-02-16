const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const NewsElems = mongoose.model("News",new Scheme({
    date:String,
    id:String,
    image:String,
    text:String,
    title:String
}))
const ClientsElems = mongoose.model("Clients", new Scheme(({
    _id:mongoose.Schema.Types.ObjectId,
    id:String,
    image:String,
    date:String

})))
const PartnersElems = mongoose.model("Partners", new Scheme(({
    _id:mongoose.Schema.Types.ObjectId,
    id:String,
    image:String,
    date:String
})))
const TestimonialsElems = mongoose.model("Testimonials", new Scheme(({
    _id:mongoose.Schema.Types.ObjectId,
    id:String,
    image:String,
    text:String,
    name:String,
    position:String,
    date:String
})))
module.exports = {NewsElems,ClientsElems,PartnersElems,TestimonialsElems};