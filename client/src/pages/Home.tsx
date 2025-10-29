import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import CompanyOverview from "@/components/CompanyOverview";
import FocusAreas from "@/components/FocusAreas";
import ValuePropositions from "@/components/ValuePropositions";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <VideoHero title="Free Hill Capital Story" />
        <CompanyOverview />
        <FocusAreas />
        <ValuePropositions />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
