const express = require('express');
const router = require('./router');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`server running in door ${PORT}`));

module.exports = app;