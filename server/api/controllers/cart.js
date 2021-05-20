const mongoose = require('mongoose');
const Cart = require('../models/cart');

exports.getCartItem = (req, res, next) => {
    Cart
        .find()
        .select('_id img_url price quantity name description company')
        .exec()
        .then(orders => {
            res.status(200).json({
                count: orders.length,
                cart: orders
            });
        })
        .catch(error => {
            next(error);
        })
};

exports.addToCart = (req, res, next) => {
    return new Cart({
        _id: mongoose.Types.ObjectId(),
        img_url: req.body.img_url,
        price: req.body.price,
        company: req.body.company,
        quantity: req.body.quantity,
        description: req.body.description,
        name: req.body.name
    })
    .save()
    .then(result => {
        res.status(200).json({
            cart: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

exports.deleteCartItem = (req, res, next) => {
    const cartItemId = req.params.cartItemId;
    Cart
        .remove({ _id: cartItemId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Cart Item Deleted Successfully!'
            });
        })
        .catch(error => {
            error.message = 'Could Not Delete Cart Item!';
            next(error);
        });
};

exports.emptyCart = (req, res, next) => {
    Cart
        .deleteMany(function(err){
          if(!err){
            res.end("Successfully deleted all cart items!");
          }
          else{
            res.send(err);
          }
        })
};
