const mongoose = require('mongoose');

const PortfoilSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please enter Your title"]
    },
    category: {
        type: String,
        require: [true, "please select your category."],
    },
    SocialMedia: {
         socialLink: {
             type: String,
             required: true
         },
         socialIcon: {
             type: String,
             required: true
         }
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
        default: Date.now()
    }
    
})

module.exports = mongoose.model('portfoil', PortfoilSchema)