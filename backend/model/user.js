const mongoose = require('mongoose');
const validator = require('validator')


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: validator.isEmail
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', UserSchema);