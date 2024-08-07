const express = require('express');
const app = express();

const { loggerMethod } = require('./logger');

app.get('/', (req, res) => {
    res.send('Hello by Node Appliccation!')
})

app.get('/info-log', (req, res) => {
    loggerMethod('info', 'Any number of formats may be combined into a single format using format.combine.', 'NODE-APP-1');
    res.send('Info Log Added to Logstash');
})

app.get('/error-log', (req, res) => {
    loggerMethod('error', 'Error number of formats may be combined into a single format using format.combine.', 'NODE-APP-1');
    res.send('Error Log Added to Logstash')
})

app.get('/warning-log', (req, res) => {
    loggerMethod('warn', 'Warn of formats may be combined into a single format using format.combine.', 'NODE-APP-2');
    res.send('Warning Log Added to Logstash')
})

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})