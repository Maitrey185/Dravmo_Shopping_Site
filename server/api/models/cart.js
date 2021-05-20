const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    img_url: { type: String, required: true },
    name: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Cart', cartSchema);
