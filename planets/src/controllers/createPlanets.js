const axios = require("axios");
const { response } = require("../utils"); 

module.exports=async(req,res)=>{
    const newPlanet = req.body;
    const createNewPlanet = (await axios.post("http://localhost:8004/Planet/create", newPlanet)).data;
    response(res,200,createNewPlanet);
}