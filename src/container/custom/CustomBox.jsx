import "./CustomBox.css";
import { chakra, Stack } from "@chakra-ui/react";

const CustomBox = ({ background }) => {
  return (
    <chakra.div
      className="box"
      width="100%"
      height={{ base: "55vh", lg: "100vh" }}
      px={6}
      py={12}
      backgroundImage={{
        base: `url(${background.base})`,
        sm: `url(${background.md})`,
      }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    ></chakra.div>
  );
};

export default CustomBox;
