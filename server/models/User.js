const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type:String,
        required:true
    },
    mobile_no: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
});

module.exports = User = mongoose.model('user', UserSchema);