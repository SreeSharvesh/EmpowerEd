const User = require('../models/UserModel');

exports.loginUser = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user || user.password != password) {
            console.log('invalid creds');
        }
        return user._id;
    } catch (err) {
        console.error(err);
    }
};