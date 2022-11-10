import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/croket", {
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useUnifiedTopology: true,
    });

    console.log("Mongoose Connected ...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
