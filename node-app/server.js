const express = require('express');
const app = express();

const { loggerMethod } = require('./logger');

app.get('/', (req, res) => {
    res.send('Hello by Node Appliccation!')
})

app.get('/info-log', (req, res) => {
    loggerMethod();
    res.send('Info Log Added to Logstash');
})

app.get('/error-log', (req, res) => {
    res.send('Error Log Added to Logstash')
})

app.get('/warning-log', (req, res) => {
    res.send('Warning Log Added to Logstash')
})

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})