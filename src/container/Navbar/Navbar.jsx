import { Stack, Image, Text, Box } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
const Navbar = ({ data: { imgUrl, imgAlt, imgKey } }) => {
  return (
    <Stack
      direction="row"
      flexWrap={"nowrap"}
      gap={2}
      px={6}
      py={2}
      wrap={"wrap"}
      align="center"
      justify="center"
      justifyContent="space-between"
      position="sticky"
      top={"0"}
      zIndex={99}
      background="#fff"
      display={{ base: "none", md: "flex" }}
    >
      <Link to="/">
        <Image src={imgUrl} alt={imgAlt} key={imgKey} h={9} w={28} />
      </Link>
      <Box
        width="-webkit-fill-available"
        display="flex"
        justifyContent="space-around"
      >
        <NavLink to="/working-holiday/">Comienza aquí</NavLink>
        <NavLink to="/working-holiday/">Working Day!</NavLink>
        <NavLink to="/working-holiday/">Destinos</NavLink>
        <NavLink to="/working-holiday/">Servicios</NavLink>
        <NavLink to="/working-holiday/">Articulos</NavLink>
      </Box>
    </Stack>
  );
};

export default Navbar;
