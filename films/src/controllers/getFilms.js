const Films = require("../data/index");
const { response } = require("../utils");

module.exports = async(req,res)=>{
    const films = await Films.list();
    response(res,200,films);
}