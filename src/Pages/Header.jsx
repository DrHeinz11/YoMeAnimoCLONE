import CustomButton from "../components/CustomButton";
import { Stack, Text, Heading } from "@chakra-ui/react";
import CustomBox from "../container/custom/CustomBox";

const Header = () => {
  const backgrounds = {
    base: "https://www.yomeanimo.com/wp-content/uploads/2022/02/header-berna-final-mobile-4.jpg",
    md: "https://www.yomeanimo.com/wp-content/uploads/2022/02/YoMeAnimo-home.jpg",
  };
  return (
    <>
      <CustomBox background={backgrounds} />
      <Stack
        textAlign="center"
        align="center"
        spacing={8}
        paddingX="1rem"
        position={{ base: "initial", lg: "absolute" }}
        mt={{ base: "2rem", md: "none" }}
        top={{ base: "none", lg: "7rem" }}
        w={{ base: "auto", lg: "50%" }}
        h={{ base: "auto", lg: "30%" }}
        left={{ base: "none", lg: "1rem" }}
        justifyContent={{ base: "none", lg: "center" }}
      >
        <Heading
          lineHeight="1.15"
          fontSize={{ base: "3xl", md: "4xl" }}
          color={"primary.darkGranate"}
        >
          Viví la experiencia de viajar y trabajar por el mundo
        </Heading>
        <Text
          fontStyle={"italic"}
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontWeight="500"
          color={"primary.darkGranate"}
        >
          Armá tu propio viaje de Working Holiday, como ya lo hicieron miles de
          Yomeanimers!
        </Text>
        <CustomButton text="Comenzá tu viaje" />
      </Stack>{" "}
    </>
  );
};

export default Header;
