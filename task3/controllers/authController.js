// controllers/authController.js
const User = require('../models/userModel');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findByCredentials(username, password);
        if (!user) {
            return res.status(401).send({ error: 'Invalid username or password' });
        }
        // For simplicity, you can use sessions or JWT for authentication and authorization
        res.status(200).send({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
};
