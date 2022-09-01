import { Stack, Image, Box, Heading, Text } from "@chakra-ui/react";

const CountryCard = ({ url, flagUrl, title, id }) => {
  return (
    <Stack
      bg="#fff"
      borderRadius={"3xl"}
      boxShadow="md"
      width="175px"
      _hover={{ boxShadow: "dark-lg" }}
    >
      <Image borderTopRadius={"2xl"} maxWidth="none" src={url} height="150px" />
      <Stack direction="row" p={4} spacing={2} align="center" justify="center">
        <Image src={flagUrl} width="20px" height="17px" />
        <Text
          fontWeight="semibold"
          textTransform="capitalize"
          color="primary.granate"
        >
          {title}
        </Text>
      </Stack>
    </Stack>
  );
};

export default CountryCard;
