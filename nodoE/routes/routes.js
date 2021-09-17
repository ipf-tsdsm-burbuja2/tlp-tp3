const router = require('express').Router();

const {  rutaPost
 } = require('../controllers/mensaje');

router.post('/', rutaPost)


module.exports = router