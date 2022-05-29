const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users').then(()=>{
    console.log('Connected to DB')
});
require('./user.model.js');