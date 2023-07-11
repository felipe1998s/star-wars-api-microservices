const planet = require("../data");
const { response } = require("../utils"); 

module.exports=async(req,res)=>{
    const newPlanet = await planet.create();
    response(res,200,newPlanet);
}