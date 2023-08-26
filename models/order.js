const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    clientId: String,
    productId: String
});

module.exports = mongoose.model("Orders", orderSchema);