const Router = require('express')
const router = new Router()
// const clients = require('../controllers/clientsController')
// router.get('/',clients.getAll)
// router.post('/',(req,res)=>{
//     let file = req.files.picture;
//     console.log(file.name);
//     file.mv('./static/' + file.name)
//
// })
// router.post('/picture_for', (req,res)=>{
//     let file = req.files.picture;
//     console.log(file.name);
//     file.mv('./static/' + file.name)
//     res.json({url:file.name});
// })
module.exports = router;