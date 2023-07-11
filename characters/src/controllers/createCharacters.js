const character = require("../data");

module.exports = async(req,res)=>{
    const newCharacter = await character.create();
    res.status(200).json(newCharacter)
}