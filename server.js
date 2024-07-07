const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

app.use(express.static(path.join(__dirname, 'public')));

const users = [
    { username: 'mardi', password: 'mardi123', phone: '1234567890' }
];

const teams = [];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.user = user;
        res.redirect('/register.html');
    } else {
        res.send('Invalid username or password');
    }
});

app.post('/register', (req, res) => {
    if (!req.session.user) return res.redirect('/index.html');
    
    const { teamName, captainName, captainPhone, memberName, memberPhone, gender } = req.body;
    if (teams.find(t => t.teamName === teamName)) {
        return res.send('Team Name already exists');
    }
    
    const team = { teamName, captainName, captainPhone, memberName, memberPhone, gender };
    teams.push(team);
    res.redirect('/finish.html');
});

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/index.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
