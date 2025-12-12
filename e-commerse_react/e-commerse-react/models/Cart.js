const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    }
}, {
    timestamps: true
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
