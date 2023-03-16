const express = require('express');
const router = express.Router();
const gpt3Controller = require('../controllers/gpt3Controller');

// Define a route that responds to GET requests to /myroute
router.get('/gpt3test', gpt3Controller.gpt3test);

// Define a route that responds to POST requests to /anotherroute
//router.post('/anotherroute', anotherController.postAnotherRoute);

module.exports = router;
