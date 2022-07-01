const Router = require('express')
const router = new Router()
const slider = require('../controllers/sliderController')
router.get('/',slider.getAll)
router.post('/',slider.addSlide)
router.post("/delete",slider.deleteSlide)
router.post("/edit",slider.editSlide)
module.exports = router;