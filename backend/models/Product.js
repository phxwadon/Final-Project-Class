const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'กรุณาระบุชื่อสินค้า'] 
    },
    price: { 
        type: Number, 
        required: [true, 'กรุณาระบุราคา'],
        min: [0, 'ราคาต้องไม่ติดลบ']
    },
    description: String,
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Product', productSchema);