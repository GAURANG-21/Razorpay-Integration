import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT,
  RAZORPAY_API_KEY: process.env.RAZORPAY_API_KEY,
  RAZORPAY_API_SECRET: process.env.RAZORPAY_API_SECRET,
};
