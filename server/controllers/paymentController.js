import { instance } from "../app.js";

export const checkout = async (req, res) => {
  const order = await instance.orders.create({
    amount: req.body.amount,
    currency: "INR",
    receipt: "receipt#1",
    partial_payment: false,
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });
  res.status(200).json({
    success: "true",
    order: order,
  });
};

export const paymentVerification = (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    success: true,
  });
};
