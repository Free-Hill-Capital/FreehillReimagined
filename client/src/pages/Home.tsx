import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroWithVideo from "@/components/HeroWithVideo";
import CompanyOverview from "@/components/CompanyOverview";
import FocusAreas from "@/components/FocusAreas";
import ValuePropositions from "@/components/ValuePropositions";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <SEO 
        title="Trusted Conglomerate Company in USA | Free Hill Capital"
        description="Free Hill Capital is a leading conglomerate company building lasting enterprises across industries. We drive growth through operational excellence consulting."
      />
      <Header />
      <main className="relative pt-0 md:pt-[65px]">
        <HeroWithVideo 
          slogan="Building Lasting Enterprises"
          description="Free Hill Capital is a leading conglomerate company building lasting enterprises across industries. We drive growth through operational excellence consulting."
        />
        <CompanyOverview />
        <FocusAreas />
        <ValuePropositions />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
