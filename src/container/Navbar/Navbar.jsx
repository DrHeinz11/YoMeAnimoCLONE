import { Stack, Image } from "@chakra-ui/react";
const Navbar = ({ data }) => {
  return (
    <Stack direction="row" spacing={2} wrap={"wrap"}>
      {data.map(({ imgUrl, imgAlt, imgKey }) => (
        <Image src={imgUrl} alt={imgAlt} key={imgKey} h={24} w={40} />
      ))}
    </Stack>
  );
};

export default Navbar;
