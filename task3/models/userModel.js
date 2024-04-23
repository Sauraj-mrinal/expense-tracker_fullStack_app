// models/userModel.js
// This is a simplified version for demonstration purposes
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

class User {
    static async findByCredentials(username, password) {
        return users.find(user => user.username === username && user.password === password);
    }
}

module.exports = User;
