const User = require('../models/UserModel');

exports.registerUser = async (username, email, number, password) => {
    try {
    const newUser = new User({
        username,
        email,
        number,
        password
    })

    await newUser.save();
    console.log('user saved successfully')
    } catch (err) {
        console.error(err);
    }
};
  