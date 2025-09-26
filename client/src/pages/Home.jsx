// src/pages/Home.jsx
import HeroBanner from "../components/HeroBanner";
import ExclusiveProjects from "../components/ExclusiveProjects";
import FeaturedProjects from "../components/FeaturedProjects";
import Testimonial from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";
export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ExclusiveProjects />
      <FeaturedProjects />
    <WhyChooseUs/>
      <Testimonial/>
    </div>
  );
}
