var express = require('express');
var app = express();
var test = require('./tests.js');
app.use('/tests',test);
app.listen(3000);

// const express = require('express')
// const app = express()
// const port = 3000
// https://runkit.com/
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })