const Router = require('express')
const router = new Router()
const testimonials = require('../controllers/testimonialsController')
const news = require("../controllers/newsController");
router.get('/',testimonials.getAll)
router.post('/',testimonials.addTestimonials)
router.post("/delete",testimonials.deleteTestimonials)
router.post("/edit",testimonials.editTestimonials)
module.exports = router;