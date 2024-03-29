import { Stack } from "@chakra-ui/react";
import Card from "./Card";

const Home = () => {
  return (
    <Stack
      direction={["column", "row"]}
      alignItems={"center"}
      justifyContent={"center"}
      h={"100vh"}
    >
      <Card
        amount={Number(8000)}
        img="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?rs=1&pid=ImgDetMain"
      />
      <Card
        amount={Number(3000)}
        img="https://usualcom.net/wp-content/uploads/2017/09/12364849-Planet-Earth-and-human-eye-Stock-Photo.jpg"
      />
    </Stack>
  );
};

export default Home;
