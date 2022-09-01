import { Container, Stack } from "@chakra-ui/react";
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
} from "../../Pages";
import dataCard from "../../constant/dataCard";
const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="7xl" centerContent gap={8} marginTop={8}>
        <CountrySection />
        <ExperienceSection />
        <InfoCard data={dataCard} />
        {/*    <PromotionCard />
      <BlogSection />
      <PrensaSection />
      <SocialMediaSection />
      <FormSection />
      <TermUseSection />*/}
      </Container>{" "}
    </>
  );
};

export default Home;
