function mungeLocation(arg) {
// usually, this brtacket notation segment will be targetting the first city in the array of all cities that share that name, usually correct. This /arg/ is going to be an array of objects, with each object being a city.
  const locationItem = arg[0];
  return {
    formatted_query: locationItem.display_name,
    latitude: locationItem.lat,
    longitude: locationItem.lon
  };
}

module.exports = {
  mungeLocation
};