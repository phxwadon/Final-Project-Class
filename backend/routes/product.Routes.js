const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req,res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch {
        res.status(500).json({ message: err.message });
    }

    router.post('/', async (req, res) => {
        console.log(req.body);

        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.description,
            stock: req.body.stock,
            imageUrl: req.body.imageUrl,
        })

        try {
            const newPorduct = await product.save()
            res.status(201).json(newPorduct);
        } catch {
            res.status(400).json({ message: err.message });
        }
    });

    router.delete('/:id', async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.status(200);
        } catch { 
            res.status(500).json({ message: err.message });
        }
    })

});

module.exports = router;