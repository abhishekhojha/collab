const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT
const auth = require('./auth/auth.js')
const CodeSnippet = require('./routes/codesnippet.js')
require("./DB/DB.js")
app.use("/api/auth",auth)
app.use("/api/code-snippets",CodeSnippet)
app.listen(PORT,()=>{
    console.log("started server")
})