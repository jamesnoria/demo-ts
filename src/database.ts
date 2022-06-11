import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/ts-crud");
    console.log("Database connected");
  } catch (error) {
    console.log("Error");
  }
};

export default connect;
