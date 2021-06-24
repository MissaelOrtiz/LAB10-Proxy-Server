const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

app.get('/location', async(req, res) => {
  try {
    const place = req.query.search;
    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${city}&format=json`)
  } catch(e) {
    res.status(500).json({ message: e})
  }
});

app.get('/animals', async(req, res) => {
  try {
    const data = await client.query('SELECT * from animals');
    
    res.json(data.rows);
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

module.exports = app;
