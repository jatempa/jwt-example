import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/router';
import cors from 'cors';
import { protect } from './modules/auth';
import createNewUser from './handlers/user';
// CONSTANTS
const PORT = process.env.PORT || 8080;
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
app.post('/user', createNewUser);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
