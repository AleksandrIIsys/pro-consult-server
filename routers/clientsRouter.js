const Router = require('express')
const router = new Router()
const clients = require('../controllers/clientsController')
const testimonials = require("../controllers/testimonialsController");
router.get('/',clients.getAll)
router.post('/',clients.addClients)
router.post("/delete",clients.deleteClitents)
router.post("/edit",clients.editClients)
module.exports = router;