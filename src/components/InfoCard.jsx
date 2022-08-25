import { Stack, Image, Heading, Text, Button, Box } from "@chakra-ui/react";

const InfoCard = ({ infoIMG, infoUrl, infoTitle, infoCopy }) => {
  return (
    <Stack>
      <Image src={infoIMG} alt={infoTitle} />
      {/*<SvgIcon />*/}
      <Box>
        <Heading>{infoTitle}</Heading>
        <Text>{infoCopy}</Text>
        <Button>Quiero saber más!</Button>
      </Box>
    </Stack>
  );
};

export default InfoCard;
