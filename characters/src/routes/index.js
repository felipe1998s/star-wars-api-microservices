const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters)
router.post("/create",middlewares.characterValidation,controllers.createCharacters)

module.exports=router; 