const express = require('express');
const app = express();
const applicationRouter = require('./src/routes');

app.use('/', applicationRouter);

app.listen(3000, () => {
    console.log('Application is running on 3000');
});