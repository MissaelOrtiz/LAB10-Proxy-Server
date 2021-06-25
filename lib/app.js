const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const { mungeLocation, mungeWeather, mungeReviews } = require('./munge-utils');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

app.get('/location', async(req, res) => {
  try {
    const { search } = req.query;

    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${search}&format=json`);

    const mungedInfo = mungeLocation(data.body);
    res.json(mungedInfo);
  } catch(e) {
    res.status(500).json({ message: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try {
    // 
    const { latitude, longitude } = req.query;

    const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${process.env.WEATHER_KEY}`);

    const mungedInfo = mungeWeather(data.body);
    res.json(mungedInfo);
  } catch(e) {
    res.status(500).json({ message: e.message });
  }
});

app.get('/reviews', async(req, res) => {
  try {
    // 
    const { latitude, longitude } = req.query;

    const data = await request.get(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`).set('Authorization', `Bearer ${process.env.REVIEW_KEY}`);
    
    const mungedInfo = mungeReviews(data.body);
    res.json(mungedInfo);
  } catch(e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = app;
