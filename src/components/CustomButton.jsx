import { Button } from "@chakra-ui/react";
import useTransform from "../helper/useTransform";
const CustomButton = ({ text }) => {
  const texto = useTransform(text);
  return (
    <Button
      colorScheme={"red"}
      size="lg"
      borderRadius="xl"
      w="fit-content"
      textTransform="initial"
    >
      {texto}
    </Button>
  );
};

export default CustomButton;
