const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

// Enable CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type,Tele2-User-Agent'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', async function (req, res) {
  const url = 'https://kladr-api.ru/api' + req.url.slice(1);
  console.log(url);
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

const port = 7002;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
