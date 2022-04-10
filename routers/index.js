const Router = require('express')
const router = new Router()
const newsRouter = require("./newsRouter");
const clientsRouter = require("./clientsRouter");
const partnerRouter = require("./partnersRouter");
const testimonialsRouter = require("./testimonialsRouter");
const adminRouter = require("./adminRouter");
const authRouter = require("./authRouter");
router.use("/news",newsRouter);
router.use("/partners",partnerRouter);
router.use("/clients",clientsRouter);
router.use("/testimonials",testimonialsRouter);
router.use("/admin",adminRouter);
router.use("/auth",authRouter);

module.exports = router;