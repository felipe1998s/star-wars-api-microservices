const { Router } = require("express");
const controllers = require("../controllers/index");
const middlewares = require("../middlewares");

const router = Router();

router.get("/",controllers.getPlanets);

router.post("/create",middlewares.planetValidation,controllers.createPlanets);

module.exports=router;