const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({

    

    rent: {
        type: Number,
        required: true
    },

    funding: {
        type: Number,
        required: true
    },

    adress: {
        type: String,
        required: true
    },

    size: {
        type: Number,
        required: true
    },

    furniture: {
        type: [],
        required: true
    },

    expenses: {
        type: [],
        required: true
    },

   

    contractImage: {
        type: [],
        required: false
    },

    image:{
        type: [],
        required: false
    },

    rentF: {
        type: String,
        required: false
    },
    expenses2: {
        type: [],
        required: false
    }



});

module.exports = mongoose.model('asset', assetSchema);