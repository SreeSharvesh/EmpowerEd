const PostUpload = require('../models/UploadPostModel');
const { S3 } = require('../config/aws');
exports.getAllPosts = async (userId) => {
    try {
        const userPosts = await PostUpload.find({ userId });
        return userPosts;
    } catch (err) {
        console.error(err);
    }
};

exports.generatePreSignedUrls = async (posts) => {
    const preSignedUrls = [];
  
    for (const post of posts) {
      const params = {
        Bucket: 'media-files-inclusi-learn', // Replace with your S3 bucket name
        Key: post.objectKey,
        Expires: 3600 // 1 hour expiration, adjust as needed
      };
  
      try {
        const preSignedUrl = await S3.getSignedUrlPromise('getObject', params);
        preSignedUrls.push({ preSignedUrl });
      } catch (error) {
        console.error(`Error generating pre-signed URL for ${post.objectKey}:`, error);
      }
    }
  
    return preSignedUrls;
  }