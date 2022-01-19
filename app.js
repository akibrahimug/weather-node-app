
const weather = require('./weather');

const city = process.argv.slice(2);
weather.get(city)