const User = require('../models/UserModel');

exports.getUsername = async (userId) => {
    try {
        const user = await User.findOne({ _id: userId });
        if (!user) {
            console.log('user does not exist');
        }
        return user.username;
    } catch (err) {
        console.error(err);
    }
};