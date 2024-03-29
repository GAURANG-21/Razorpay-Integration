import { instance } from "../app.js";

export const checkout = async (req, res) => {
  const order = await instance.orders.create({
    amount: 50000,
    currency: "INR",
    receipt: "receipt#1",
    partial_payment: false,
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });
  console.log(order)
  res.status(200).json({
    success: "true",
  });
};
