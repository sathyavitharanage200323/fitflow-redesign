require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json({ service: 'fitflow-api', status: 'ok' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`fitflow-api listening on port ${process.env.PORT || 3000}`);
});

module.exports = app;