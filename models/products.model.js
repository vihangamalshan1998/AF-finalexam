const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Categories'
    }]

});

const product = mongoose.model("Products", productSchema);

module.exports = product;