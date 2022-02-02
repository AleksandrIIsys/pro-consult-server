const Router = require('express')
const router = new Router()
const newsRouter = require("./newsRouter");
const clientsRouter = require("./clientsRouter");
const partnerRouter = require("./partnersRouter");
const testimonialsRouter = require("./testimonialsRouter");
const adminRouter = require("./adminRouter");
router.use("/news",newsRouter);
router.use("/partners",partnerRouter);
router.use("/clients",clientsRouter);
router.use("/testimonials",testimonialsRouter);
router.use("/admin",adminRouter);

module.exports = router;