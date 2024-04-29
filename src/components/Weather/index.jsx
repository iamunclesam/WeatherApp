import { useEffect, useState } from "react";
import fetchWeatherByLocation from "../../../utils/helpers/fetchWeather";
import WeatherIcon from "./weather_type";
import CURRENT_DATE from "../../../utils/helpers/currentDate";
import WeatherForecast from "./weather_forecast";
// import CurrentWeatherForecast from "./current_day_forecast";
import Compass from "./wind_compass";
import HourlyForecast from "./hourly_forecast";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const currentDate = CURRENT_DATE();

  useEffect(() => {
    fetchWeatherByLocation()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <>
      {weatherData && (
        <div className="">
          <div className="-mt-5 md:grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="col-span-2">
              <div className="md:flex items-center shadow-lg p-3 md:p-6 md:px-8 pt-4 bg-blue-900 border border-gray-800 rounded-lg gap-2 justify-between">
                <div className="weather_name">
                  <h2 className="text-6xl font-bold">{weatherData.name}</h2>
                  <p className="text-sm-text-gray-400 py-4 font-light">
                    {" "}
                    {currentDate}{" "}
                  </p>

                  <div className="weather_icon">
                    <WeatherIcon weatherType={weatherData.weather[0].main} />
                    <p className="text-3xl font-light -mt-2">
                      {weatherData.weather[0].main}
                    </p>

                    <div className="flex justify-between items-center gap-6 text-sm">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="3em"
                          height="3em"
                          viewBox="0 0 512 512"
                        >
                          <defs>
                            <linearGradient
                              id="meteoconsSunriseFill0"
                              x1="150"
                              x2="234"
                              y1="119.2"
                              y2="264.8"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#fbbf24" />
                              <stop offset=".5" stop-color="#fbbf24" />
                              <stop offset="1" stop-color="#f59e0b" />
                            </linearGradient>
                            <clipPath id="meteoconsSunriseFill1">
                              <path
                                fill="none"
                                d="M512 306H304l-35.9-31.4a18.4 18.4 0 0 0-24.2 0L208 306H0V0h512Z"
                              />
                            </clipPath>
                            <symbol
                              id="meteoconsSunriseFill2"
                              viewBox="0 0 384 384"
                            >
                              <circle
                                cx="192"
                                cy="192"
                                r="84"
                                fill="url(#meteoconsSunriseFill0)"
                                stroke="#f8af18"
                                stroke-miterlimit="10"
                                stroke-width="6"
                              />
                              <path
                                fill="none"
                                stroke="#fbbf24"
                                stroke-linecap="round"
                                stroke-miterlimit="10"
                                stroke-width="24"
                                d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"
                              >
                                <animateTransform
                                  additive="sum"
                                  attributeName="transform"
                                  dur="6s"
                                  repeatCount="indefinite"
                                  type="rotate"
                                  values="0 192 192; 45 192 192"
                                />
                              </path>
                            </symbol>
                          </defs>
                          <g clip-path="url(#meteoconsSunriseFill1)">
                            <use
                              width="384"
                              height="384"
                              href="#meteoconsSunriseFill2"
                              transform="translate(64 100)"
                            />
                          </g>
                          <path
                            fill="none"
                            stroke="#374151"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="18"
                            d="M128 332h88l40-36l40 36h88"
                          />
                        </svg>
                        {new Date(
                          weatherData.sys.sunrise * 1000
                        ).toLocaleTimeString()}
                      </p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="3em"
                          height="3em"
                          viewBox="0 0 512 512"
                        >
                          <defs>
                            <clipPath id="meteoconsSunset0">
                              <path
                                fill="none"
                                d="M512 306H296a21.5 21.5 0 0 0-14 5.3L256 334l-26-22.7a21.5 21.5 0 0 0-14-5.3H0V0h512Z"
                              />
                            </clipPath>
                            <symbol id="meteoconsSunset1" viewBox="0 0 375 375">
                              <circle
                                cx="187.5"
                                cy="187.5"
                                r="84"
                                fill="none"
                                stroke="#fbbf24"
                                stroke-miterlimit="10"
                                stroke-width="15"
                              />
                              <path
                                fill="none"
                                stroke="#fbbf24"
                                stroke-linecap="round"
                                stroke-miterlimit="10"
                                stroke-width="15"
                                d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"
                              >
                                <animateTransform
                                  additive="sum"
                                  attributeName="transform"
                                  dur="6s"
                                  repeatCount="indefinite"
                                  type="rotate"
                                  values="0 187.5 187.5; 45 187.5 187.5"
                                />
                              </path>
                            </symbol>
                          </defs>
                          <g clip-path="url(#meteoconsSunset0)">
                            <use
                              width="375"
                              height="375"
                              href="#meteoconsSunset1"
                              transform="translate(68.5 104.5)"
                            />
                          </g>
                          <path
                            fill="none"
                            stroke="#374151"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="18"
                            d="M128 332h88l40 36l40-36h88"
                          />
                        </svg>
                        {new Date(
                          weatherData.sys.sunset * 1000
                        ).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="degree">
                  <p className="text-8xl font-light">
                    {Math.round(weatherData.main.temp - 273.15)}
                    <sup>°C</sup>
                  </p>
                </div>
              </div>

              <div className="">
                <div className="bg-blue-900 rounded-lg my-6 py-6">
                  <div className="grid ">
                    {/* <div className="col-span-3">
                  <Compass
                    windSpeed={weatherData.wind.speed}
                    windDirection={weatherData.wind.deg}
                  />
                  </div> */}
                    <div className="col-span-9 p-4">
                      <HourlyForecast />
                    </div>
                  </div>
                </div>
              </div>

              {/* <CurrentWeatherForecast /> */}
            </div>

            <div className="md:col">
             
              <div className=" flex justify-center">
                <Compass
                  windSpeed={weatherData.wind.speed}
                  windDirection={weatherData.wind.deg}
                />
              </div>
              <WeatherForecast />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherComponent;
