// סכמות למסד נתונים
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    CategoryId: Number,
    description: String,
    stock: Number
});

module.exports = mongoose.model("products", productSchema);