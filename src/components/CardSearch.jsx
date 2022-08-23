import { Stack, Image, Heading, Text, Divider } from "@chakra-ui/react";
import TagFlag from "./TagFlag";

const CardSearch = ({ dataTag }) => {
  return (
    <Stack>
      <TagFlag dataTag={dataTag} />
    </Stack>
  );
};

export default CardSearch;
