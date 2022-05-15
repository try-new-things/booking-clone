import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import createDB from './db/connect';
import hotels from './routes/hotels';
import auth from './routes/auth';
import users from './routes/users';
import room from './routes/rooms';

dotenv.config();

const app = express();

// midleware
app.use(cookieParser());
app.use(express.json());

// router
app.use('/api/v1/hotels', hotels);
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/room', room);

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