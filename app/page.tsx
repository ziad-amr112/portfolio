import HeroSection from "./component/HeroSection";
import HorizontalScroll from "./component/ScrollSnap";
import { ecommerceProjects, leadGenProjects, SERVICES,CoursesProjects,BooksProjects} from "./constants";
import OverlappingSlider from "./component/Overlapslider";
import AboutMe from "./component/AboutMe";
import InfinteTitle from "./component/InfinteTitle";
// constants are now imported directly above, so this line is not needed
/*
hero section
tech stack
email
array of projects 
slider optimization
logo
 */
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



      {/*  رقم 2 ده سكشن البداية  */}
      <img src="/service-line.png" alt="Service line" />
      <HorizontalScroll paragraph="I'm a performance-driven media buyer, focused on learning, testing, and scaling." items={SERVICES} />
      <img src="/service-line.png" alt="Service line" />
      {/*  حدد العنوان وتقدر تكنسل الانيمشن لو كتبت  cancelAnimation  */}

      {/* ده سكشن اضافه المشاريع 
      types  b
      بتاخد اوبجكيت 
      {}
      جواه حاجتين
      category  المشاريع دي 
      items المشاريع نفسها
      slidesPerView: في كم سلايد ظاهره في المره الاحده 
      height طول الصورة
      autoplay هل يشتغل بشكل تلقائي ولالا
      loop عاوزه يفضل يلوب لما يخلص ويتعاد من الاول ولالا 
      بو اه سيبه لو مشعاوز اعمل 
      loop={false} او autoplay={false}
      */}
  <OverlappingSlider
    slidesPerView={2}
    height={" h-44"}
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
        slidesPerView={2}
        height={" h-44"}
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
      {/* ده سكشن أنا مين  */}

      <AboutMe
  name="Ziad Amr"
  height="h-64 lg:h-96"
  text="I'm Ziad, a performance marketer helping brands turn ad spend into predictable profit. After mastering core strategies in advertising and funnel building, I’m now seeking ambitious brands to collaborate with and scale fast using data-backed campaigns. Let’s grow together."
/>

    </section>
  );
}
