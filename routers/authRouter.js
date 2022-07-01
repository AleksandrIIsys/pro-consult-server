const Router = require("express");
const router = new Router()
const LOGIN_ADMIN_PANEL = process.env.LOGIN_ADMIN_PANEL
const PASSWORD_ADMIN_PANEL = process.env.PASSWORD_ADMIN_PANEL
const crypto = require('crypto')
const shasum = crypto.createHash('sha1')
shasum.update(LOGIN_ADMIN_PANEL + PASSWORD_ADMIN_PANEL)
const key = shasum.digest("hex");
router.post('/', (req, res) => {
        const {username, password} = req.body
        if (username === LOGIN_ADMIN_PANEL && PASSWORD_ADMIN_PANEL === password) {
            res.send({result:true,key: key})
        } else {
            res.send({result:false,key: ""})
        }
    }
)
router.post('/key', (req, res) => {
        const {checkedkey} = req.body
    console.log(key);
        console.log(checkedkey);
        res.send({result: String(checkedkey) === String(key)});
    }
)
module.exports = router;