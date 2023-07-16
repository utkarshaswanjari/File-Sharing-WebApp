import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;

  const MONGO_URI =`mongodb://seju:seju@ac-vyjwz8x-shard-00-00.lgn6fvi.mongodb.net:27017,ac-vyjwz8x-shard-00-01.lgn6fvi.mongodb.net:27017,ac-vyjwz8x-shard-00-02.lgn6fvi.mongodb.net:27017/?ssl=true&replicaSet=atlas-coy1pt-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true ,useUnifiedTopology: true});
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
