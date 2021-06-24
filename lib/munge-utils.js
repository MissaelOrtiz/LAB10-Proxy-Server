function mungeLocation(arg) {
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