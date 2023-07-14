const { response } = require("../utils");
const axios = require("axios");

module.exports = async(req,res)=>{
    const { id } = req.params;
    const films = (await axios.get(`http://localhost:8004/Film/${id}`)).data;
    response(res,200,films);
}