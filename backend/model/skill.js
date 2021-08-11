const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({
    SkillTitle: {
        type: String,
        required: true
    },
    SkillProgress: {
        type: Number,
        required: true
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

module.exports = mongoose.model('Skill', SkillSchema)