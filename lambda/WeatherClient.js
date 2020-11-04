class WeatherClient {
    constructor() {
        this.WEATHER_DATA = require('./weather.json');
    }

    /*
    * Update this method with an actual Weather API call
    */
    getWeather(cityName) {
        console.log(`cityName is ${cityName}`);
        if (cityName === null) {
            return {};
        }

        // For now let's assume, we are only returning today's temperature
        let date = 'today';

        return this.WEATHER_DATA[date][cityName] || this.WEATHER_DATA[date]['seattle'];
    }
}

module.exports = new WeatherClient();