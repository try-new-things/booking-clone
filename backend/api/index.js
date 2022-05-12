import express from 'express';
import dotenv from 'dotenv';

import createDB from './db/connect';
import hotels from './routes/hotels';
import auth from './routes/auth';

dotenv.config();

const app = express();

app.use(express.json());

// router
app.use('/api/v1/hotels', hotels);
app.use('/api/v1/auth', auth);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await createDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start();