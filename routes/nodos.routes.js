const router = require('express').Router();
const {routePOST} = require('../controllers/nodos.controllers');

router.post('/', routePOST);

module.exports = router;

