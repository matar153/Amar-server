const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/jwt');


router.get('/',verifyToken, (req, res) => {
    res.send('ok');



    

});

module.exports = router;