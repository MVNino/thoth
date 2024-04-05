import mongoose from "mongoose";

export const connectToMongoDb = async () => {
  const mongoUri = process.env.MONGO_DB_URI;

  try {
    const connection = mongoose.connect(mongoUri);

    console.log('CONNECTED TO MONGODB')

    return connection;
  } catch (error) {
    console.error(error);
  }
};
