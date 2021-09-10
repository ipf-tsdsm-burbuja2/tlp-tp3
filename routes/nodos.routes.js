const router = require('express').Router();
const {routeGo} = require('../controllers/nodos.controllers');

router.post('/', routeGo);

module.exports = router;

