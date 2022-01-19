
const https = require('https');
const api = require('./app.json');

const printMessage = (city, temp) => {
    const message = `The Current Temperature in ${city} is ${temp}F`;
    console.log(message);
}

