const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        type: String, 
        required: [true, 'Please provide company name'],
        maxlength: 50,
    },
    position: {
        type: String, 
        required: [true, 'Please provide position'],
        maxlength: 100,
    },
    status: {
        type: String, 
        enum: ['joined','interview', 'declined', 'pending'],
        default: 'pending',
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: ['true', "please provide User"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Job', JobSchema)