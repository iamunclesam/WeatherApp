import API_ROUTES from "../ApiRoutes";

const sevenDaysWeatherForecast = async () => {
  try {
    const response = await fetch(
      API_ROUTES.current_weather_data.byCityName("San Francisco")
    );
    if (!response.ok) {
      throw new Error("Failed to fetch forecast data");
    }
    const data = await response.json();
    return data.list; // Assuming data.list contains the forecast array
  } catch (error) {
    console.error("Error fetching five days weather forecast:", error);
  }
};

export default sevenDaysWeatherForecast;
