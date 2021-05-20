const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const CartController = require('../controllers/cart');

router.post('/', CartController.addToCart);

router.get('/', CartController.getCartItem);

router.delete('/:cartItemId', CartController.deleteCartItem);

router.delete('/', CartController.emptyCart);

module.exports = router;
