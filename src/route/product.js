const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('You have req a products');
})

module.exports = router; 