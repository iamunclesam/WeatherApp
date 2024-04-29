
const weatherIcon = ({ weatherType }) => {
  // Define a mapping between weather conditions and icon URLs
  const weatherIcons = {
    Clear: '01d.png', // Clear sky
    Clouds: '02d.png', // Few clouds
    Rain: '09d.png', // Rain
    Drizzle: '10d.png', // Shower rain
    Thunderstorm: '11d.png', // Thunderstorm
    Snow: '13d.png', // Snow
    Mist: '50d.png', // Mist
    // Add more weather conditions and corresponding icons as needed
  };

  // Get the icon URL based on the weather type
  const iconURL = weatherIcons[weatherType];

  return (
    <img
    className='w-22 text-left'
      src={`https://openweathermap.org/img/wn/${iconURL}`}
      alt={`Weather icon for ${weatherType}`}
    />
  );
};



export default weatherIcon;
