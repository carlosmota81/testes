let express = require("express");
let app = express();

app.get("/", (req,res)=>{
    res.json({success: true})
})

module.exports = app;