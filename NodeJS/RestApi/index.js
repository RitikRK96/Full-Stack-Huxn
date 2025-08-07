const express = require('express');
const user = require('./Users.json');

const app = express();

app.get('/users', (req, res) => {
    return res.json(user);
});

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const users = user.find((users)=>users.id === id)
    return res.json(users)
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
