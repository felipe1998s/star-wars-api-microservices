const { Router } = require("express");
const store = require("../database");
const {validateModel}=require("../middlewares");

const router = Router();
 
router.get("/:model",validateModel,async(req,res)=>{
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
});

router.get("/:model/:id",validateModel, async(req,res)=>{
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
});

router.post("/:model/create", validateModel, async(req,res)=>{
    const { model } = req.params;
    const  newRegister  = req.body
    const response = await store[model].insert(newRegister);
    res.status(200).json(response);
})

module.exports = router;