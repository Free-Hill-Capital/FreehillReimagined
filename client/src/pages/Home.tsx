import Header from "@/components/Header";
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
        <CompanyOverview />
        <FocusAreas />
        <ValuePropositions />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
