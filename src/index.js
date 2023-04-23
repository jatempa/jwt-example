const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
// CONSTANTS
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
// enable modules
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', router);

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
