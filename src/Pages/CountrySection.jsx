import CustomButton from "../components/CustomButton";
import arrObj from "../constant/dataCardCountry";
import { Link } from "react-router-dom";
import { Stack, Box, Heading } from "@chakra-ui/react";
import CountryCard from "../components/CountryDestino/CountryCard";

const CountryContainer = () => {
  console.log(arrObj);
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
        {arrObj.map((element) => (
          <Link to={`/country/${element.title}`} key={element.id}>
            <CountryCard
              title={element.title}
              url={element.url}
              id={element.id}
              flagUrl={element.flagUrl}
            />
          </Link>
        ))}
      </Box>
      <Link to="/working-holiday/visa">
        <CustomButton text="hola esto es una prueba" />
      </Link>
    </Stack>
  );
};

export default CountryContainer;
