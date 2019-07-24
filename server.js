const express = require('express');
const app = express();
const Router = require('./routes');

const PORT = 5000;

app.use('/', Router);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
