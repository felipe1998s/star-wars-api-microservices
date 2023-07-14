const { response } = require("../utils");
const axios = require("axios");

module.exports = async(req,res)=>{
    const newFilm = req.body;
    const createNewFilm = (await axios.post("http://localhost:8004/Film/create",newFilm)).data;
    response(res,200,createNewFilm);
}