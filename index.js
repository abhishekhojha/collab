const express = require("express")
const app = express()
const dotenv = require("dotenv")
const Cors = require("cors")

dotenv.config()
const PORT = process.env.PORT
const auth = require('./auth/auth.js')
const CodeSnippet = require('./routes/codesnippet.js')
const Review = require('./routes/review.js')
const Feedback = require('./routes/feedback.js')
app.use(Cors())
require("./DB/DB.js")
app.use("/api/auth",auth)
app.use("/api/code-snippets",CodeSnippet)
app.use("/api/reviews",Review)
app.use("/api/feedback",Feedback)
app.listen(PORT,()=>{
    console.log("started server")
})