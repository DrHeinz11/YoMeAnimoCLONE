import { Stack, Image, Box, Heading, Text } from "@chakra-ui/react";

const CountryCard = () => {
  return (
    <Stack
      bg="#fff"
      borderRadius={"3xl"}
      boxShadow="md"
      width="175px"
      _hover={{ boxShadow: "dark-lg" }}
    >
      <Image
        borderTopRadius={"2xl"}
        maxWidth="none"
        src="https://www.yomeanimo.com/wp-content/uploads/2022/07/Trabajo-asegurado-AUS.jpg"
        height="150px"
      />
      <Stack direction="row" p={4} spacing={2} align="center" justify="center">
        <Image
          src={
            "https://www.yomeanimo.com/wp-content/uploads/2021/04/flag-andorra.svg"
          }
        />
        <Text
          fontWeight="semibold"
          textTransform="capitalize"
          color="primary.granate"
        >
          {"Australia"}
        </Text>
      </Stack>
    </Stack>
  );
};

export default CountryCard;
