const Router = require('express')
const router = new Router()
const partners = require('../controllers/partnersController')
router.get('/',partners.getAll)
module.exports = router;