import { instance } from "../app.js";
import crypto from "crypto";

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
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpFay_signature;
  if (isAuthentic) {
    //Save the credentials in database
    res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}}`)
  } else {
    return res.status(200).json({
      success: true,
    });
  }
};
