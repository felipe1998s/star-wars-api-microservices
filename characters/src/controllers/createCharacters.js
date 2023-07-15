const { response } = require("../utils");
const axios = require("axios");

module.exports = async(req,res)=>{
    const newCharacter  = req.body;
    const createNewCharacter = (await axios.post("http://database:8004/Character/create", newCharacter)).data; 
    response(res,200,createNewCharacter);
}