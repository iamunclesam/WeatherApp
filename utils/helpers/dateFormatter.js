const formatDate = (dateString) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  export default formatDate