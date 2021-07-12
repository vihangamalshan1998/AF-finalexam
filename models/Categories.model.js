const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Products'
    }]

});

const categories = mongoose.model("Categories", categoriesSchema);

module.exports = categories;