const Router = require('express')
const router = new Router()
const testimonials = require('../controllers/testimonialsController')
router.get('/',testimonials.getAll)
module.exports = router;