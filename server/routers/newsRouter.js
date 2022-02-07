const Router = require('express')
const router = new Router()
const news = require('../controllers/newsController')
router.get('/',news.getAll)
router.post('/',news.addNews)
module.exports = router;