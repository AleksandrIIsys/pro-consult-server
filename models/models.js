const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const NewsElems = mongoose.model("News", new Scheme({
    _id: mongoose.Types.ObjectId,
    date: String,
    image: String,
    text: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    title: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    }
}))
const ClientsElems = mongoose.model("Clients", new Scheme(({
    _id: mongoose.Schema.Types.ObjectId,
    image: String,
    name: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    country: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    description: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    date: String

})))
const PartnersElems = mongoose.model("Partners", new Scheme(({
    _id: mongoose.Schema.Types.ObjectId,
    image: String,
    name: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    country: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    description: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    date: String
})))
const TestimonialsElems = mongoose.model("Testimonials", new Scheme(({
    _id: mongoose.Schema.Types.ObjectId,
    image: String,
    text: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    name: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    position: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    date: String
})))
const CareersElem = mongoose.model("Careers",new Scheme(({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    description: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    workSchedule: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    date: Date,
    salary: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
})))
const CoursesElem = mongoose.model("Courses",new Scheme(({
    _id: mongoose.Schema.Types.ObjectId,
    title:{
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    text:{
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    place:{
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    dateStart:Date,
    dateEnd:Date,
    price:String,
    nameMN:{
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    document:{
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    managerImage:String,
    licenseImage:String,
    teacherFirst:{
        image:String,
        name:{
            "ru-RU": String,
            "en-US": String,
            "uz-UZ": String,
        },
        description:{
            "ru-RU": String,
            "en-US": String,
            "uz-UZ": String,
        },
    },
    teacherSecond:{
        image:String,
        name:{
            "ru-RU": String,
            "en-US": String,
            "uz-UZ": String,
        },
        description:{
            "ru-RU": String,
            "en-US": String,
            "uz-UZ": String,
        },
    },
    teacherThird:{ image:String,
        name:{
            "ru-RU": String,
            "en-US": String,
            "uz-UZ": String,
        },
        description:{
            "ru-RU": String,
            "en-US": String,
            "uz-UZ": String,
        }
    },
    feedback:[
        {
            name: {
                "ru-RU": String,
                "en-US": String,
                "uz-UZ": String,
            },
            text: {
                "ru-RU": String,
                "en-US": String,
                "uz-UZ": String,
            },
            position: {
                "ru-RU": String,
                "en-US": String,
                "uz-UZ": String,
            },
            date: String},
    ]
})))
const ProjectElem = mongoose.model("Project", new Scheme({
    _id: mongoose.Types.ObjectId,
    date: String,
    image: String,
    text: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    title: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    }
}))
const SlideElement = mongoose.model("Slider", new Scheme(({
    _id: mongoose.Schema.Types.ObjectId,
    image: String,
    title: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    subtitle: {
        "ru-RU": String,
        "en-US": String,
        "uz-UZ": String,
    },
    url: String

})))
module.exports = {NewsElems, ClientsElems, PartnersElems, TestimonialsElems,CareersElem,CoursesElem,ProjectElem,SlideElement};