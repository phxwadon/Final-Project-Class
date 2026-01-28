const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, default: 0 },
    imageUrl: String,
    createdAt: { type: Date, default: Date.now }
});

MediaSourceHandle.exports = mongoose.model('Product', ProductSchema)