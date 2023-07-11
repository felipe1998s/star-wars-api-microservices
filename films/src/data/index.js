const Films = require("./films.json");

module.exports = {
    list:async()=>{
        return Films;
    },
    create:async()=>{
        throw Error ("Hay un error al momento de crear un personaje");
    }
}