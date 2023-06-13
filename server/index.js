const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("am from express js")
})
app.listen(3032,()=>{
    console.log(3032)
})