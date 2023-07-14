const Characters = require("../data");
const {response} = require("../utils/index");
const axios = require("axios");

module.exports = async (req,res)=>{
    const characters = (await axios.get("http://localhost:8004/Character")).data;
    response(res,200,characters);
}