import Header from "@/components/header";
import Hero from "@/components/hero";
import Solutions from "@/components/solutions";
import Expertise from "@/components/expertise";
import WhyChoose from "@/components/why-choose";
import EngagementModels from "@/components/engagement-models";
import ValuesProjects from "@/components/values-projects";
import Brands from "@/components/brands";
import Statistics from "@/components/statistics";
import ClientLogos from "@/components/client-logos";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <Expertise />
      <WhyChoose />
      <EngagementModels />
      <ValuesProjects />
      <Brands />
      <Statistics />
      <ClientLogos />
      <Footer />
    </div>
  );
}
