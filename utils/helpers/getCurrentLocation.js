

const getLocation = () => {
    return new Promise((resolve, reject) => {
      // Check if geolocation is supported by the browser
      if ("geolocation" in navigator) {
        // Get user's current location
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude }); // Resolve the promise with the coordinates
          },
          (error) => {
            reject(error); // Reject the promise if there's a geolocation error
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.')); // Reject the promise if geolocation is not supported
      }
    });
  };
  
  export default getLocation;
  