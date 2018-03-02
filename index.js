const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var users = [
    { id: 1, userName: 'navidmostafiz', firstName: 'Navid', lastname: 'Mostafiz' },
    { id: 2, userName: 'mohaiminul', firstName: 'Mohaiminul', lastname: 'Islam' }
];

//json persing middleware
app.use(bodyParser.json());

app.get('/', (request, response, next) => {
    response.status(200).json({ message: 'RESTful web api' })
})

app.post('/adduser', function (request, response) {
    var newUser = request.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    response.status(200).json({ message: 'new user created' })
});

app.get('/getuser', function (request, response) {
    response.status(200).json(users);
});

app.get('/getuser/:id', function (request, response) {
    var userId = request.params.id;
    users.forEach(function (user) {
        if (user.id == userId) {
            response.status(200).json(user);
        };
    });
});

module.exports = app;