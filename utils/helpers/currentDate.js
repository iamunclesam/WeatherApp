const CURRENT_DATE = () => {
    const currentDate = new Date();
  
    // Array of month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    // Get the month name
    const monthName = monthNames[currentDate.getMonth()];
  
    // Get the day of the month
    const day = currentDate.getDate();
    
    // Add the appropriate suffix to the day
    let dayWithSuffix;
    switch (day) {
      case 1:
      case 21:
      case 31:
        dayWithSuffix = day + 'st';
        break;
      case 2:
      case 22:
        dayWithSuffix = day + 'nd';
        break;
      case 3:
      case 23:
        dayWithSuffix = day + 'rd';
        break;
      default:
        dayWithSuffix = day + 'th';
        break;
    }
  
    // Get the year
    const year = currentDate.getFullYear();
  
    // Format the date
    const formattedDate = `${monthName} ${dayWithSuffix} ${year}`;
  
    return formattedDate;
  };
  
  export default CURRENT_DATE
  