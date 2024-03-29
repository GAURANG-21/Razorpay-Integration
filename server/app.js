import express from "express";
import configServer from "./config/configServer.js";
import paymentRoutes from "../server/routes/paymentRoutes.js";
import razorpay from "razorpay";
import cors from "cors";

const app = express();
const { PORT, RAZORPAY_API_KEY, RAZORPAY_API_SECRET } = configServer;

export const instance = new razorpay({
  key_id: RAZORPAY_API_KEY,
  key_secret: RAZORPAY_API_SECRET,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
