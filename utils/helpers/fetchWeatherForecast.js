import getLocation from "../helpers/getCurrentLocation";
import API_ROUTES from "../ApiRoutes";

const fiveDaysWeatherForecast = () => {
  const apiKey = import.meta.env.API_KEY;
  return new Promise((resolve, reject) => {
    // Get user's current location
    getLocation()
      .then(({ latitude, longitude }) => {
        // Use latitude and longitude to fetch weather data
        const weatherByLocationURL =
          API_ROUTES.current_weather_data.byCityName(latitude, longitude) +
          `&appid=${apiKey}`;

        fetch(weatherByLocationURL)
          .then((response) => response.json())
          .then((data) => {
            resolve(data.list);
          })
          .catch((error) => {
            reject(error);
          });
      })
      
      .catch((error) => {
        reject(error);
      });
  });
};

export default fiveDaysWeatherForecast;
