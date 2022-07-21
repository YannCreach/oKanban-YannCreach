const express = require('express');
const factoController = require('./controllers/factoController');
const tagAssocController = require('./controllers/tagAssocController');


const router = express.Router();

router.get('/api/:entity', factoController.getAll);
router.get('/api/:entity/:id', factoController.getOne);
router.post('/api/:entity', factoController.create);
router.patch('/api/:entity/:id', factoController.update);
router.delete('/api/:entity/:id', factoController.delete);

router.post('/cart/:id/:tag', tagAssocController.createCartAssoc);
router.delete('/cart/:id', tagAssocController.deleteCartAssoc);
router.post('/list/:id/:tag', tagAssocController.createListAssoc);
router.delete('/list/:id', tagAssocController.deleteListAssoc);

module.exports = router;
