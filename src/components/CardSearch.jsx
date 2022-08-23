import { Stack, Image, Heading, Badge, Divider, Link } from "@chakra-ui/react";
import TagFlag from "./TagFlag";

const CardSearch = ({ dataTag }) => {
  return (
    <Stack
      as={Link}
      borderRadius={"md"}
      w={"350px"}
      h={"350px"}
      bg={"#fbf4f4"}
      p={2}
      margin="0 auto"
      boxShadow="xl"
    >
      {dataTag.map((e) => (
        <Image src={e.imgUrl} key={e.imgKey} alt={e.imgAlt} boxSize={"350px"} />
      ))}
      <Badge variant="subtle" width="fit-content" p={1}>
        Articulo
      </Badge>
      <Heading size={"md"} textTransform="capitalize">
        ¿ como funciona las agencias de trabajos en australia?
      </Heading>
      <Divider />
      <TagFlag />
    </Stack>
  );
};

export default CardSearch;
