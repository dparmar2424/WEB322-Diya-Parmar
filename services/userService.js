const fs = require('fs');

class UserService 
{
    getAllUsers(req, res) 
    {
        const users = JSON.parse(fs.readFileSync('fakeUsers.json', 'utf8'));
        res.json(users);
    }

    getUserById(req, res) 
    {
        const userId = parseInt(req.params.id);
        const users = JSON.parse(fs.readFileSync('fakeUsers.json', 'utf8'));
        const user = users.find(user => user.id === userId);

        if (user) 
            res.json(user);
        else 
            res.status(404).json({ message: 'User not found' });
    }

    deleteUser(req, res) 
    {
        const userId = parseInt(req.params.id);
        let users = JSON.parse(fs.readFileSync('fakeUsers.json', 'utf8'));
        users = users.filter(user => user.id !== userId);
        fs.writeFileSync('fakeUsers.json', JSON.stringify(users));
        res.json({ success: true, message: 'User deleted successfully' });
    }

    addUser(req, res) 
    {
        const newUser = req.body;
        newUser.id = Date.now();
        let users = JSON.parse(fs.readFileSync('fakeUsers.json', 'utf8'));
        users.push(newUser);
        fs.writeFileSync('fakeUsers.json', JSON.stringify(users));
        res.json(newUser);
    }
}

module.exports = new UserService();
