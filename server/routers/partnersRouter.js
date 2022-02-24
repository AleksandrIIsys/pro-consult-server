const Router = require('express')
const router = new Router()
const partners = require('../controllers/partnersController')
const testimonials = require("../controllers/testimonialsController");
router.get('/',partners.getAll)
router.post('/',partners.addPartners)
router.post("/delete",partners.deletePartners)
router.post("/edit",partners.editPartners)
module.exports = router;