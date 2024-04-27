const express = require('express');
const jwtAuthMiddleware = require('../auth/JWT');

const router = express.Router();

router.use(jwtAuthMiddleware);

router.get('/protected-route', (req, res) => {
  // Protected route implementation
});

module.exports = router;
