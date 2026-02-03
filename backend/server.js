const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/Product");
require('dotenv').config();
const productRoutes = require('./routes/product.Routes')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const mongoURL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Final-project-class';
mongoose.connect(mongoURL)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Server is Running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});