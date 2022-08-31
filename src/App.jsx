import { Box } from "@chakra-ui/react";
import Navbar from "./container/Navbar/Navbar";
import Home from "./container/Home/Home";
import { BlogSection, InfoVisaSection } from "./components/Sections";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
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
