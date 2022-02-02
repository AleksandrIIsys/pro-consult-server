const Router = require('express')
const router = new Router()
const clients = require('../controllers/clientsController')
router.get('/',clients.getAll)
module.exports = router;