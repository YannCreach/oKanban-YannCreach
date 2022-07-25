const express = require('express');
const factoController = require('./controllers/factoController');
const assocController = require('./controllers/assocController');


const router = express.Router();

router.get('/api/:entity', factoController.getAll);
// get all list from kanban id (ou all avec un where ?)
// get all cart from list id (ou all avec un where ?)
router.get('/api/:entity/:id', factoController.getOne);
router.post('/api/:entity', factoController.create);
router.patch('/api/:entity/:id', factoController.update);
router.delete('/api/:entity/:id', factoController.delete);

router.post('/:assoc/:assocId/:entity/:entityId', assocController.createAssoc);
router.delete('/:assoc/:entity/:id', assocController.deleteAssoc);


module.exports = router;
