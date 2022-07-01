const Router = require('express')
const router = new Router()
const newsRouter = require("./newsRouter");
const clientsRouter = require("./clientsRouter");
const partnerRouter = require("./partnersRouter");
const testimonialsRouter = require("./testimonialsRouter");
const adminRouter = require("./adminRouter");
const authRouter = require("./authRouter");
const careersRouter = require("./careersRouter");
const coursesRouter = require("./coursesRouter");
const projectRouter = require("./projectRouter");
const sliderRouter = require("./sliderRouter")
router.use("/news",newsRouter);
router.use("/partners",partnerRouter);
router.use("/clients",clientsRouter);
router.use("/testimonials",testimonialsRouter);
router.use("/admin",adminRouter);
router.use("/auth",authRouter);
router.use("/careers",careersRouter);
router.use("/courses",coursesRouter);
router.use("/project",projectRouter);
router.use("/slider",sliderRouter)
module.exports = router;