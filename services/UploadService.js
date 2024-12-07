const UploadPost = require('../models/UploadPostModel');

exports.uploadPost = async (userId, title, challenge, solution, objectKey) => {
    try {
        const newPost = new UploadPost({
            userId,
            title,
            challenge,
            solution,
            objectKey,
        })
    
        await newPost.save();
        console.log('post added successfully')
        } catch (err) {
            console.error(err);
        }
};