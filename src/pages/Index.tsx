import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CodingActivity from "@/components/CodingActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WithLoading from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <WithLoading>
      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <CodingActivity />
        <Contact />
        <Footer />
      </main>
    </WithLoading>
  );
};

export default Index;
