const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usersFile = path.join(__dirname, '../data/users.json');

function loadUsers() {
    if (!fs.existsSync(usersFile)) return [];
    const data = fs.readFileSync(usersFile, 'utf-8');
    return JSON.parse(data);
}

function saveUsers(users) {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

exports.register = async (req, res) => {
    const { name, email, password, passwordconfirm } = req.body;
    const users = loadUsers();

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.render('register', { message: "Email already exists" });
    }

    if (password !== passwordconfirm) {
        return res.render('register', { message: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    users.push({ name, email, password: hashedPassword });
    saveUsers(users);

    return res.render('index', { message: "User registered successfully" });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const users = loadUsers();

    const user = users.find(user => user.email === email);
    if (!user) {
        return res.render('login', { message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.render('login', { message: "Invalid email or password" });
    }

    return res.render('index', { message: `Welcome, ${user.name}` });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Load existing users from JSON file
    const usersPath = path.join(__dirname, '../data/users.json');
    let users = [];

    if (fs.existsSync(usersPath)) {
        const data = fs.readFileSync(usersPath);
        users = JSON.parse(data);
    }

    const user = users.find(u => u.email === email);

    if (!user) {
        return res.render('login', {
            message: 'User does not exist'
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.render('login', {
            message: 'Incorrect password'
        });
    }

    return res.render('index', {
        message: `Welcome, ${user.name}!`
    });
};
