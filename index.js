const express = require("express")
const app = express()
const PORT = 1000
const auth = require('./auth/auth.js')
require("./DB/DB.js")
app.use("/api",auth)
app.listen(PORT,()=>{
    console.log("started server")
})