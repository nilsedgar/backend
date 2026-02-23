const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/hello', productController.getAll);
router.get('/:id', productController.getById);
router.post('/admin/create-product', productController.create);

module.exports = router;