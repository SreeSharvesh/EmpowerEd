const MyPostService = require('../services/MyPostService');
exports.getmyPosts = async (req, res) => {
  const userPosts = await MyPostService.getAllPosts(req.session.userId);
  const preSignedUrls = await MyPostService.generatePreSignedUrls(userPosts);
  res.render('mypost', { userName: 'john doe', userPosts, preSignedUrls });
};
