export const checkout = (req, res) => {
  console.log("Successful request made");
  res.status(200).json({
    success: "true",
  });
};
