const { response } = require("../utils/index");
const axios = require("axios");

module.exports = async (req,res)=>{
    const { id } = req.params;
    const planet = (await axios.get(`http://localhost:8004/Planet/${id}`)).data;
    response(res,200,planet);
}