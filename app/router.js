const express = require('express');
const listController = require('./controllers/listController');
const kanbanController = require('./controllers/kanbanController');
const utilisateurController = require('./controllers/utilisateurController');
const roleController = require('./controllers/roleController');
const cartController = require('./controllers/cartController');
const tagController = require('./controllers/tagController');
const colorController = require('./controllers/colorController');
const statusController = require('./controllers/statusController');
const cartTagController = require('./controllers/cartTagController');

const router = express.Router();

router.get('/lists', listController.getAll);
router.post('/lists', listController.create);
router.patch('/lists/:id', listController.update);
router.delete('/lists/:id', listController.delete);

router.get('/kanbans', kanbanController.getAll);
router.post('/kanbans', kanbanController.create);
router.patch('/kanbans/:id', kanbanController.update);
router.delete('/kanbans/:id', kanbanController.delete);

router.get('/users', utilisateurController.getAll);
router.post('/users', utilisateurController.create);
router.patch('/users/:id', utilisateurController.update);
router.delete('/users/:id', utilisateurController.delete);

router.get('/roles', roleController.getAll);
router.post('/roles', roleController.create);
router.patch('/roles/:id', roleController.update);
router.delete('/roles/:id', roleController.delete);

router.get('/carts', cartController.getAll);
router.post('/carts', cartController.create);
router.patch('/carts/:id', cartController.update);
router.delete('/carts/:id', cartController.delete);

router.get('/tags', tagController.getAll);
router.post('/tags', tagController.create);
router.patch('/tags/:id', tagController.update);
router.delete('/tags/:id', tagController.delete);

router.get('/colors', colorController.getAll);
router.post('/colors', colorController.create);
router.patch('/colors/:id', colorController.update);
router.delete('/colors/:id', colorController.delete);

router.get('/status', statusController.getAll);
router.post('/status', statusController.create);
router.patch('/status/:id', statusController.update);
router.delete('/status/:id', statusController.delete);

router.get('/cartTags', cartTagController.getAll);
router.post('/cartTags', cartTagController.create);
router.patch('/cartTags/:id', cartTagController.update);
router.delete('/cartTags/:id', cartTagController.delete);

module.exports = router;
