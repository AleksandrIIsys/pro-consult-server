const Router = require('express')
const router = new Router()
const courses = require('../controllers/coursesController')
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
router.get('/',courses.getAll)
router.post('/',courses.addCourses)
router.post("/delete",courses.deleteCourses)
router.post("/edit",courses.editCourses)
module.exports = router;