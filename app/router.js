const express = require('express');
const factoController = require('./controllers/factoController');

const router = express.Router();

router.get('/api/:entity', factoController.getAll);
router.get('/api/:entity/:id', factoController.getOne);
router.post('/api/:entity', factoController.create);
router.patch('/api/:entity/:id', factoController.update);
router.delete('/api/:entity/:id', factoController.delete);

module.exports = router;
