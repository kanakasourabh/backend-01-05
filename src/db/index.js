import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectionString = mongoose.connect(
      `${process.env.DB_URL}/${process.env.DB_NAME}`
    );
    console.log("database connected");
  } catch (error) {
    console.log("Something went wrong while connecting to Data base", error);
  }
};

export { connectDb };
