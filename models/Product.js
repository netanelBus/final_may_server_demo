const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    categoryId: mongoose.SchemaType.ObjectId,
    description: String,
    stock: Number
});

module.exports = mongoose.model("Products", productSchema);