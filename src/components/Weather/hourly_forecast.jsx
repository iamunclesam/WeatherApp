
import { useEffect, useState } from "react";
import fetchHourlyForecast from '../../../utils/helpers/fetchHourlyForecast';


// eslint-disable-next-line react/prop-types
const HourlyForecast = ( ) => {
    const [ weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      fetchHourlyForecast()
          .then((data) => {
            console.log('====================================');
            console.log(data.list);
            console.log('====================================');
            setWeatherData(data.list);
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
          });
      }, []);

    return (
      <div className="hourly-forecast">
       <div className="flex items-center justify-between md:px-4">
       <h2 className="text-lg font-semibold mb-4">Hourly Forecast</h2>
        <p className="text-sm">see more</p>
       </div>
        <div className="grid grid-cols-3 md:grid-cols-4 md:gap-4 gap-4">
          { weatherData &&  weatherData.slice(0,4).map((hourlyData, index) => (
            <div key={index} className="flex flex-col md:items-center md:justify-center py-4 rounded">
              <div className="text-lg font-semibold">{new Date(hourlyData.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</div>
              <img src={`https://openweathermap.org/img/wn/${hourlyData.weather[0].icon}.png`} alt={hourlyData.weather[0].description} className="w-12 h-12" />
              <div className='truncate'>{hourlyData.weather[0].description}</div>
              <div>{hourlyData.main.temp}°C</div>
            </div>
          ))}

          
       
        </div>
      </div>
    );
  };

  // HourlyForecast.propTypes = {
  //   weathertData: PropTypes.array.isRequired,
  // };
  
  export default HourlyForecast;
  