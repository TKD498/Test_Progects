const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    fname : {
        type : String,
        require : true
    },
    lname : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    pwd : {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('Users', signupSchema, 'newUsers');