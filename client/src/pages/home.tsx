import Header from "@/components/header";
import ClientLogos from "@/components/client-logos";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ClientLogos />
      </div>
      <Footer />
    </div>
  );
}
