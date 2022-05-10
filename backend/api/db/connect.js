import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    userUnifiedTopology: true,
  })
};

export default connectDB;