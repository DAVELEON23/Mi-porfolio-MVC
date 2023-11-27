const express = require ("express");
const app = express ();

app.listen(3000,()=>{
    console.log("servidor 3000 listo")
});

const rutaHome= require("./routers/main.js")

app.get("/", rutaHome);

// app.get("/about",function(req,res){
//     res.sendFile(path.join(__dirname,"views/about.html"))
// });





