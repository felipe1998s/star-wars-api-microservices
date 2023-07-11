const { Router } = require("express");
const  controllers = require("../controllers/index");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getFilms)
router.post("/create",middlewares.filmsValidation,controllers.createFilms)

module.exports = router;