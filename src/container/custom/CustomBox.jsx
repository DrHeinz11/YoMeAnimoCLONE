import "./CustomBox.css";
import { chakra, Stack } from "@chakra-ui/react";

const CustomBox = ({ background, children }) => {
  return (
    <chakra.div className="box" as={Stack} px={6} py={12} bg={background}>
      {children}
    </chakra.div>
  );
};

export default CustomBox;
