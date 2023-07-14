const server = require("./src/server");
const {Character, Planet} = require("./src/database");

// Character.list().then((res)=>console.log(res));

//Planet.insert({_id:100,name:"namekusein"}).then((res)=>console.log(res));

server.listen(8004,()=>{
    console.log("Database service listening on port 8004");
})