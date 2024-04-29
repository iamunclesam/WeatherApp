import { useEffect, useState } from "react";
import API_ROUTES from "../../../utils/ApiRoutes";
import formatDate from "../../../utils/helpers/dateFormatter";
import WeatherIcon from "./weather_type";


const CurrentWeatherForecast = () => {
  const [morningForecast, setMorningForecast] = useState([]);
  const [afternoonForecast, setAfternoonForecast] = useState([]);
  const [eveningForecast, setEveningForecast] = useState([]);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      try {
        const response = await fetch(
          API_ROUTES.current_weather_data.byCityName("San Francisco")
        );
        if (!response.ok) {
          throw new Error("Failed to fetch forecast data");
        }
        const data = await response.json();

        // Filter forecast entries for specific times of the day
        const morningEntries = data.list.filter((entry) => {
          const hour = new Date(entry.dt_txt).getUTCHours();
          return hour >= 6 && hour < 12; // Filter entries for morning (6:00 - 11:59)
        });
        const afternoonEntries = data.list.filter((entry) => {
          const hour = new Date(entry.dt_txt).getUTCHours();
          return hour >= 12 && hour < 18; // Filter entries for afternoon (12:00 - 17:59)
        });
        const eveningEntries = data.list.filter((entry) => {
          const hour = new Date(entry.dt_txt).getUTCHours();
          return hour >= 18 || hour < 6; // Filter entries for evening (18:00 - 5:59)
        });

        setMorningForecast(morningEntries);
        setAfternoonForecast(afternoonEntries);
        setEveningForecast(eveningEntries);
      } catch (error) {
        console.error("Error fetching weather forecast:", error);
      }
    };

    fetchWeatherForecast();
  }, []);

  return (
    <>
      <h2 className="mt-4">Weather Forecast</h2>
      <div className="">
        <div className="Morning-Forecast my-8 border border-gray-800 p-5 rounded-lg">
          <h3>Morning Forecast</h3>
          <ul className="">
            {morningForecast.map((forecast, index) => (
              <li key={index} className="flex justify-between items-center">
                {/* Display morning forecast details */}
                <span>{formatDate(forecast.dt_txt)}</span>

                <span>
                 <WeatherIcon weatherType={forecast.weather[0].main}/>
                </span>

                <span>{forecast.weather[0].description}</span>
              </li>
            ))}
          </ul>
        </div>
        <h3>Afternoon Forecast</h3>
        <ul>
          {afternoonForecast.map((forecast, index) => (
            <li key={index}>
              {/* Display afternoon forecast details */}
              Date: {forecast.dt_txt}, Temperature: {forecast.main.temp}°C,
              Description: {forecast.weather[0].description}
            </li>
          ))}
        </ul>
        <h3>Evening Forecast</h3>
        <ul>
          {eveningForecast.map((forecast, index) => (
            <li key={index}>
              {/* Display evening forecast details */}
              Date: {forecast.dt_txt}, Temperature: {forecast.main.temp}°C,
              Description: {forecast.weather[0].description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CurrentWeatherForecast;
