const express = require('express');
const router = express.Router();
const fijiCtrl = require('../controllers/fijis');


router.get('/', fijiCtrl.index);

module.exports = router;