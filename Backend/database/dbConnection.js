import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();  // <-- this line is critical

// console.log("MONGO_URI is", process.env.MONGO_URI);  // debug

export const dbConnection = mongoose.connect(
    process.env.MONGO_URI,
    { dbName: "MERN_STACK_EVENT_MANAGE" }
  )
  .then(() => {
    console.log("DataBase Connected Successfully");
  })
  .catch((err) => {
    console.log("Something is happening while connecting the data base", err);
  });
