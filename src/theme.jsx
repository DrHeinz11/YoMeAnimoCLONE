import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    primary: {
      granate: "#6a3765",
      darkGranate: "#43173d ",
      lightAqua: "#cbfcf9",
    },
  },
});

export default theme;
