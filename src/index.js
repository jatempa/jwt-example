require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const { protect } = require('./modules/auth');
const { createUser } = require('./handlers/user');
// CONSTANTS
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
// enable modules
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World !');
});

app.use('/api', protect, router);
// Create user
app.post('/user/create', createUser);

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
