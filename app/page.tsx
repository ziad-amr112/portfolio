import HeroSection from "./component/HeroSection";
import HorizontalScroll from "./component/ScrollSnap";
import { ecommerceProjects, leadGenProjects, SERVICES,CoursesProjects,BooksProjects} from "./constants";
import OverlappingSlider from "./component/Overlapslider";
import AboutMe from "./component/AboutMe";

export default function Home() {
  return (
    <section>
      <HeroSection
  title={
    <>
      I Turn Ad Spend Into <span className="animate-flashRed font-bold">Profit</span>
    </>
  }
  subtitle="Helping startups & brands scale revenue through data-driven funnels, full-funnel strategy, and ROI-focused execution"
  buttonText="Let’s Work Together"
/>
      <img src="/service-line.png" alt="Service line" />
      <HorizontalScroll paragraph="I'm a performance-driven media buyer, focused on learning, testing, and scaling." items={SERVICES} />
      <img src="/service-line.png" alt="Service line" />
   
  <OverlappingSlider
    types={[
      {
        category: "E-commerce Campaigns",
        items: ecommerceProjects ,
      },
      {
        category: "Lead Generation Ads",
        items: leadGenProjects,
      }
    ]}
    title={
      <>
        Case Studies<span className="animate-flashRed font-bold text-xl">(mock campaigns)</span>
      </>
    }
  />
  <img src="/service-line.png" alt="Service line" />
      <OverlappingSlider
        types={[
          {
            category: "Courses",
            items: CoursesProjects,
          },
          {
            category: "Books",
            items: BooksProjects,
          },
    
        ]}
        title="My Education"   />

      <AboutMe
  name="Ziad Amr"
  height="h-60 lg:h-60"
  text="I'm Ziad, a performance marketer helping brands turn ad spend into predictable profit. After mastering core strategies in advertising and funnel building, I’m now seeking ambitious brands to collaborate with and scale fast using data-backed campaigns. Let’s grow together."
/>
    </section>
  );
}
