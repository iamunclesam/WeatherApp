const API_KEY = '47e765aad96bb47eff2916d49924e2e1';

const API_ROUTES = {
    current_weather_data : {
        // Define the route for fetching current weather data by city name
        byCityName: (lat, lon) => `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
        hourlyForecast: (lat, lon) => `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,

        // Define the route for fetching current weather data by geographic coordinates
        byCoords: (lat, lon) => `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        
        // Define the route for fetching current weather data by city ID
        byCityId: (cityId) => `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`,
    }
};

export default API_ROUTES;
