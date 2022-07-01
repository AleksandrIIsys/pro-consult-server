const Router = require('express')
const router = new Router()
const project = require('../controllers/projectController')
router.get('/',project.getAll)
router.post('/',project.addProject)
router.post("/delete",project.deleteProject)
router.post("/edit",project.editProject)
module.exports = router;