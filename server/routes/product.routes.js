const path = require('path');

const express = require('express');

const productController = require('../controllers/product.controller');

const router = express.Router();

/**
 * @openapi
 * /products:
 *   get:
 *     summary: Returns all menu products
 *     tags:
 *          - products
 *     description: Returns all menu products
 *     responses:
 *       200:
 *         description: A JSON array of products
 */
router.get('/', productController.getProducts);

/**
 * @openapi
 * /products/{id}:
 *   get:
 *     summary: Return a menu product by ID
 *     tags:
 *          - products
 *     parameters:
 *          - name: id
 *            description: Product ID
 *            required: true
 *     description: Return a specific product
 *     responses:
 *       200:
 *         description: A JSON array of products
 */
router.get('/:id', productController.getProductById);

//router.post('/cart', productController.addOrder);

module.exports = router;
