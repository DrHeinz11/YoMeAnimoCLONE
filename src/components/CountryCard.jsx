import { Stack, Image, Box, Heading } from "@chakra-ui/react";

const CountryCard = ({
  data: { CountryName, CountryFlag, CountryThumbnail },
}) => {
  return (
    <Stack bg="#fff" borderRadius={"2xl"} boxShadow="md">
      <Image borderRadius={"2xl"} src={CountryThumbnail} />
      <Stack direction="row" p={4} spacing={2} align="center" justify="center">
        <Image src={CountryFlag} />
        <Heading textTransform="capitalize" color="primary.darkGranate">
          {CountryName}
        </Heading>
      </Stack>
    </Stack>
  );
};

export default CountryCard;
