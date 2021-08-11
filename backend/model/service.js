const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please enter Your title"]
    },
    Description: {
        type: String,
        require: [true, "please select your category."],
    },
    Image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('service', ServiceSchema)