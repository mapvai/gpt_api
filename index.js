// Entry point for the application
require('dotenv').config();

const express = require('express');

const app = express();

const routes = require('./src/api/routes/data');

app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});