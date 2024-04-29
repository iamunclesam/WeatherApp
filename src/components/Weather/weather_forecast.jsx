import { useEffect, useState } from 'react';
import formatDate from "../../../utils/helpers/dateFormatter";
import WeatherIcon from './weather_type';
import sevenDaysWeatherForecast from '../../../utils/helpers/fetchWeatherForecast';


const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      try {
        const data = await sevenDaysWeatherForecast();
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching weather forecast:', error);
      }
    };

    fetchWeatherForecast();
  }, []);

  const uniqueDates = Array.from(new Set(forecastData.map(forecast => formatDate(forecast.dt_txt))));


  return (
    <div className='mt-6'>
      <h2 className='font-bold'>5-Day Weather Forecast</h2>
      <div className="grid bg-blue-900 border border-gray-800 mt-4 p-3 px-5 rounded-lg gap-4">
        {uniqueDates.slice(0, 5).map((date, index) => (
          <div key={index} className="flex items-center justify-between rounded text-sm">
            <div className="mr-4">{date}</div>
           <div className="">
           <WeatherIcon weatherType={forecastData.find(forecast => formatDate(forecast.dt_txt) === date)?.weather[0].main} />
            <div className="mr-4">{forecastData.find(forecast => formatDate(forecast.dt_txt) === date)?.weather.description}</div>
           </div>
            <div>{forecastData.find(forecast => formatDate(forecast.dt_txt) === date)?.main.temp}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
