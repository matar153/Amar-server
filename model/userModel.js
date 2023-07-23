const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    

    phone: {
        type : String,
        required: true
    },

    id:{
        type: [],
        required: true
    },

    adress :{
        type: String,
        required: true
    },

    
    
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    admin:{
        type: Boolean,
        required: true
    }
});


module.exports = mongoose.model('user', userSchema);