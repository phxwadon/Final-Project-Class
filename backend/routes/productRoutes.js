const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (err) {
        res.status(500).json({ message:  err.message});
    }
})

router.post('/', upload.single('image'), async (req, res) => {

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/image/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product && product.image && product.image.data) {
            res.set('Content-type', product.image.contentType);
            return res.send(product.image.data);
        }
        res.status(404).send('Image not found!!');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;