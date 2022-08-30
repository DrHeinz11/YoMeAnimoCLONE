import { Heading, Stack, Box } from "@chakra-ui/react";
import CustomBox from "./container/custom/CustomBox";
import InfoCard from "./components/InfoCard";
import dataCard from "./constant/dataCard";
import CountryContainer from "./components/Country Destino/CountryContainer";
const data = [
  /*{
    imgUrl:
      "https://www.yomeanimo.com/wp-content/uploads/2021/03/yomeanimoyvos-brand.svg",
    imgAlt: "Yo me animo /LOGO",
    imgKey: 2,
  },*/
  {
    imgUrl:
      "https://www.yomeanimo.com/wp-content/uploads/2022/07/Trabajo-asegurado-AUS.jpg",
    imgAlt: "Sydney thumbnail",
    imgKey: 3,
  },
];
function App() {
  return (
    <Stack gap={4} className="App" maxWidth="1200px" margin="0 auto">
      {/* <Navbar data={data} />*/}
      <CustomBox background={"primary.lightAqua"}>
        <Heading
          fontWeight={"900"}
          letterSpacing={2}
          color="primary.darkGranate"
          textTransform="capitalize"
          fontSize={"2xl"}
          textAlign="center"
        >
          {" "}
          resultados para:
          <br /> Australia
        </Heading>
      </CustomBox>
      <Box bg="primary.lightAqua">
        {dataCard.map((data) => (
          <InfoCard data={data} key={data.infoKey} />
        ))}
      </Box>
      <CountryContainer data={data} />
      {/*     <CardSearch dataTag={data} />*/}
    </Stack>
  );
}

export default App;
