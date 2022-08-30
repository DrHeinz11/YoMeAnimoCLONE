import { Box } from "@chakra-ui/react";
import {
  Header,
  CountrySection,
  ExperienceSection,
  InfoCard,
  PromotionCard,
  BlogSections,
  FormSection,
  TermUseSection,
} from "../../components";

const Home = () => {
  return (
    <Box>
      <Header />
      <CountrySection />
      <ExperienceSection />
      <InfoCard />
      <PromotionCard />
      <BlogSections />
      <PrensaSection />
      <SocialMediaSection />
      <FormSection />
      <TermUseSection />
    </Box>
  );
};

export default Home;
