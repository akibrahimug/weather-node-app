
const { errorMonitor } = require('events');
const https = require('https');
const api = require('./app.json');

const printMessage = (city, temp) => {
    const message = `The Current Temperature in ${city} is ${temp}F`;
    console.log(message);
}

const get = (city) => {
    try{
        const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}`, res => {
            if(res.statusCode === 200){
                let body = '';
                res.on('data', data => {
                    body += data.toString()
                })

                try{
                    res.on('end', () => {
                        const profile = JSON.parse(body);
                        printMessage(city, profile.main.temp)
                    })
                }catch(error){
                    console.error(error);
                }
            }else{
                const err = new Error(`Sorry, something went wrong retriving the temperature for ${city} ${res.statusCode}`)
                console.error(err)
            }
        })
    }catch(error){
        console.error(error)
    }
}

module.exports.get = get;