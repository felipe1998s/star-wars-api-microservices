const {response} = require("../utils");
const film = require("../data");

module.exports = async (req,res)=>{
    const newFilm = await film.create();
    response(res,200,newFilm);
}