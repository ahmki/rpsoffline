/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('ping :)');
  res.send('pong');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
