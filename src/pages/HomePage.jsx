import SectionComments from "../components/home/SectionComments";
import SectionHero from "../components/home/SectionHero";
import SectionServices from "../components/home/SectionServices";
import SectionWhy from "../components/home/SectionWhy";

function HomePage() {
  return (
    <main>
      <SectionHero />
      <SectionServices />
      <SectionWhy />
      <SectionComments />
    </main>
  );
}

export default HomePage;