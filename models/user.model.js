const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    city: {
        type: String
    }
});

mongoose.model('user', userSchema);