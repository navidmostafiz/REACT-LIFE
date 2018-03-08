//code format: ES5
//central place to merge all routes from different modules
const express = require('express');
let userRoutes = require('./server/user/routes');
let router = express.Router();
console.log('react + express api root route added to server');
/* RESTful user API */

//default api route
//localhost:3000/api/
router.get('/', (request, response, next) => {
  response.status(200).json({ message: 'RESTful web api' })
})

//localhost:3000/api/users/
router.use('/users', userRoutes);

module.exports = router