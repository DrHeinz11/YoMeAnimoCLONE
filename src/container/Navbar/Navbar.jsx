import { Stack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = ({ data: { imgUrl, imgAlt, imgKey } }) => {
  return (
    <Stack
      direction="row"
      gap={2}
      wrap={"wrap"}
      align="center"
      justify="center"
    >
      <Link to="/">
        <Image src={imgUrl} alt={imgAlt} key={imgKey} h={9} w={28} />
      </Link>
      <Text>Esto es un titulo</Text>
    </Stack>
  );
};

export default Navbar;
