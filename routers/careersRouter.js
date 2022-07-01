const Router = require('express')
const router = new Router()
const careers = require('../controllers/careersController')
router.get('/',careers.getAll)
router.post('/',careers.addCareers)
router.post("/delete",careers.deleteCareers)
router.post("/edit",careers.editCareers)
module.exports = router;