const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (userData) => {
    console.log(userData);
    const user = await User.create(userData);

    const result = getAuthResult(user);
    return result;
};


 exports.login = async (email, password) => {
    try {
 
        const user = await User.findOne({ email: email });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Invalid email or password');
        }
        return getAuthResult(user);
    } catch (error) {
        throw error;  // Throw the error so it can be caught and handled elsewhere
    }
}



function getAuthResult(user) {
    const payload = {
        _id: user._id,
        email: user.email
    }

    const token = jwt.sign(payload, "SECRETSECRET", {expiresIn: '2d'});

    const result = {
        username: user.username,
        _id: user._id,
        email: user.email,
        accessToken: token,
    };

    console.log(result);
    return result;
}