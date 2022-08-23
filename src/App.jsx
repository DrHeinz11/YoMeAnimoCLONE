import { Heading } from "@chakra-ui/react";
import CustomBox from "./container/custom/CustomBox";
import Navbar from "./components/Navbar";
const data = [
  {
    imgUrl:
      "https://www.yomeanimo.com/wp-content/uploads/2021/03/yomeanimoyvos-brand.svg",
    imgAlt: "Yo me animo /LOGO",
    imgKey: 2,
  },
  {
    imgUrl:
      "https://www.yomeanimo.com/wp-content/uploads/2022/07/Trabajo-asegurado-AUS.jpg",
    imgAlt: "Sydney thumbnail",
    imgKey: 3,
  },
];
function App() {
  return (
    <div className="App">
      <Navbar data={data} />
      <CustomBox background={"primary.lightAqua"}>
        <Heading
          fontWeight={"900"}
          color="primary.darkGranate"
          textTransform="capitalize"
          fontSize={"xl"}
          textAlign="center"
        >
          {" "}
          resultados para:
          <br /> Australia
        </Heading>
      </CustomBox>
    </div>
  );
}

export default App;
