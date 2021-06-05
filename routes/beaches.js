const express = require('express');
const router = express.Router();
const beachesCtrl = require('../controllers/beaches');

router.get('/', beachesCtrl.index);
// router.get('/new', beachesCtrl.new);
// router.get('/fiji', beachesCtrl.fiji);
router.post('/', beachesCtrl.create);
router.put('/:id', beachesCtrl.update);
router.delete('/:id', beachesCtrl.delete);



module.exports = router;