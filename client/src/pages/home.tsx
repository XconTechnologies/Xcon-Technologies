import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Solutions from "@/components/solutions";
import Expertise from "@/components/expertise";
import WhyChoose from "@/components/why-choose";
import EngagementModels from "@/components/engagement-models";
import ValuesProjects from "@/components/values-projects";
import Brands from "@/components/brands";
import Portfolio from "@/components/portfolio";
import Statistics from "@/components/statistics";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <Expertise />
      <WhyChoose />
      <EngagementModels />
      <ValuesProjects />
      <Brands />
      <Portfolio />
      <Statistics />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
