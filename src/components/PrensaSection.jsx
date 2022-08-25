import { Stack, Box, Image, Heading, Text } from "@chakra-ui/react";

const PrensaSection = () => {
  return (
    <Stack
      direction="column"
      spacing={6}
      justify="center"
      px={8}
      py={4}
      bg="#ededed"
    >
      <Heading fontWeight="bold" textAlign="center" fontSize="2xl">
        {prensaTitle}
      </Heading>
      <Text textAlign="center" fontSize={"lg"}>
        {prensacopy}
      </Text>
      <Box className="prensaCarrousel" as={Stack} spacing={4} align="center">
        {prensaImg.map((e) => (
          <Image
            src={e.prensaUrl}
            alt={e.prensaBrand}
            width="md"
            h="sm"
            objectFit="contain"
          />
        ))}
      </Box>
    </Stack>
  );
};

export default PrensaSection;
