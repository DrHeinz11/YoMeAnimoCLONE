import { Box } from "@chakra-ui/react";
import {
  Header,
  CountrySection,
  ExperienceSection,
  InfoCard,
  PromotionCard,
  BlogSection,
  FormSection,
  TermUseSection,
  PrensaSection,
  SocialMediaSection,
} from "../../components/Sections";
import dataCard from "../../constant/dataCard";
const Home = () => {
  return (
    <Box>
      <Header />
      <CountrySection />
      <ExperienceSection />
      <InfoCard data={dataCard} />
      {/*    <PromotionCard />
      <BlogSection />
      <PrensaSection />
      <SocialMediaSection />
      <FormSection />
      <TermUseSection />*/}
    </Box>
  );
};

export default Home;
