import { Stack, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import PropTypes from "prop-types";

const Card = ({ amount, img }) => {
  const checkoutHandler = async (amount) => {
    const { data } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });
    console.log(data);
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
