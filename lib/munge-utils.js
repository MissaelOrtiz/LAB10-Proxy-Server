function mungeLocation(arg) {
// usually, this bracket notation segment will be targetting the first city in the array of all cities that share that name, usually correct. This /arg/ is going to be an array of objects, with each object being a city.
  const locationItem = arg[0];
  return {
    formatted_query: locationItem.display_name,
    latitude: locationItem.lat,
    longitude: locationItem.lon
  };
}

function mungeWeather(arg) {
  const forecasts = arg.data;

  const mungedForcasts = forecasts.map(forecast => {
    return {
      forecast: forecast.weather.description,
      time: new Date(forecast.ts * 1000).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    };
  });
  return mungedForcasts;
}

function mungeReviews(arg) {
  const reviews = JSON.parse(arg).businesses;

  const mungedReviews = reviews.map(review => {
    return {
      name: review.name,
      image_url: review.image_url,
      price: review.price,
      rating: review.rating,
      url: review.url
    };
  });
  return mungedReviews;
}

module.exports = {
  mungeLocation,
  mungeWeather,
  mungeReviews
};