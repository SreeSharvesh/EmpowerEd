const mongoose = require("mongoose");

let uploadPostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    challenge: {
        type: String,
        required:true
    },
    solution: {
        type: String,
        required: true
    },
    objectKey: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('NewPostUpload', uploadPostSchema);