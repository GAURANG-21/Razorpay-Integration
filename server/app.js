import express from "express";
import configServer from "./config/configServer.js";
import paymentRoutes from "../server/routes/paymentRoutes.js";

const app = express();
const { PORT } = configServer;

app.use("/api", paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
