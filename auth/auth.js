const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const router = express.Router()
router.get('/user', (req, res) => {
    res.send('user auth')
})
router.post("/user/generateToken", (req, res) => {

    
});
router.get("/user/validateToken", (req, res) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
 
    const token = req.header(tokenHeaderKey);
    try {
 
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return res.send("Successfully Verified");
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});

module.exports = router