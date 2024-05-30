const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Asgard!')
});

app.listen(port, () => {
    console.log(`Asgard app listening on port ${port}`)
});