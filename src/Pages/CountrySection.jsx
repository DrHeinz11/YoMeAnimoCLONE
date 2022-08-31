import CustomButton from "../components/CustomButton";
import { Stack, Box, Heading } from "@chakra-ui/react";
import CountryCard from "../components/CountryDestino/CountryCard";

const CountryContainer = () => {
  return (
    <Stack
      direction="column"
      spacing={4}
      paddingX={1}
      align="center"
      maxWidth={"100%"}
    >
      <Heading>Title</Heading>
      <Box
        p={4}
        gap={4}
        width="100%"
        overflowX={"scroll"}
        bg={"gray.200"}
        display="flex"
      >
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </Box>

      <CustomButton text="hola esto es una prueba" />
    </Stack>
  );
};

export default CountryContainer;
