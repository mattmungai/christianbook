// api/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/:sku', productController.getProductData);

module.exports = router;
