const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');
const validarProduto = require('../middlewares/validation');

// Rotas de produtos
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.post('/', validarProduto, controller.criar);
router.put('/:id', validarProduto, controller.editar);
router.delete('/:id', controller.remover);

module.exports = router;