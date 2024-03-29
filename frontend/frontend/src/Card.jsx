import { Stack, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import PropTypes from "prop-types";

const Card = ({ amount, img }) => {
  const checkoutHandler = async (amount) => {
    try {
      amount *= 100;
      const { data: key } = await axios.get("http://localhost:4000/getapikey");
      const { data: order } = await axios.post(
        "http://localhost:4000/api/checkout",
        {
          amount,
        }
      );
      var options = {
        key: key.RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
        amount: order.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Acme Corp", //your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          name: "Gaurav Kumar", //your customer's name
          email: "gaurav.kumar@example.com",
          contact: "9000090000", //Provide the customer's phone number for better conversion rates
        },
        // notes: {
        //     "address: "Razorpay Corporate Office"
        // },
        theme: {
          color: "#3399cc",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack direction={["column"]} alignItems={"center"}>
      <Image src={img} boxSize={"64"} />
      <Text>Amount: ₹{amount}</Text>
      <Button
        colorScheme="purple"
        variant={"ghost"}
        onClick={() => checkoutHandler(amount)}
      >
        Buy Now
      </Button>
    </Stack>
  );
};

export default Card;

Card.propTypes = {
  amount: PropTypes.number,
  img: PropTypes.string,
};
