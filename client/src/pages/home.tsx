import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Expertise from "@/components/expertise";
import WhyChoose from "@/components/why-choose";
import EngagementModels from "@/components/engagement-models";
import TechnologyTabs from "@/components/technology-tabs";
import ValuesProjects from "@/components/values-projects";
import Statistics from "@/components/statistics";
import FAQs from "@/components/faqs";
import ConsultationContact from "@/components/consultation-contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Expertise />
      <WhyChoose />
      <EngagementModels />
      <TechnologyTabs />
      <ValuesProjects />
      <Statistics />
      <FAQs />
      <ConsultationContact />
      <Footer />
    </div>
  );
}
