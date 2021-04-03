const express = require('express');
const path = require('path');
const app = express();
app.use('/questions', express.static('questions'))
app.use('/js', express.static('js'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})
const port = 8081;
app.listen(port, () => {
    console.log(`App running on ${port}`);
})