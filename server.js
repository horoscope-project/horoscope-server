'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const CLIENT_URL = process.env.CLIENT_URL;
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());


app.get('/api/v1/horoscope/:sign', (req, res) => {
  const url = `http://sandipbgt.com/theastrologer/api/horoscope/${req.params.sign}/today/`
  console.log(url);
  superagent.get(url)
    .then(
      dailyHoroscope => res.send(dailyHoroscope.text),
      err => res.send(err)
    )
});

app.get('*', (req, res) => res.redirect(CLIENT_URL));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
