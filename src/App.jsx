import { Box } from "@chakra-ui/react";
import Navbar from "./container/Navbar/Navbar";
import Home from "./container/Home/Home";
import { BlogSection, InfoVisaSection } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const data = {
  imgUrl:
    "https://www.yomeanimo.com/wp-content/uploads/2021/03/yomeanimoyvos-brand.svg",
  imgAlt: "Yo me animo /LOGO",
  imgKey: 2,
};
function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar data={data} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/working-holiday/:id" element={<BlogSection />} />
          <Route path="/working-holiday/visa" element={<InfoVisaSection />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
