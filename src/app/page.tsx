import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import GoogleWorkspace from "@/components/GoogleWorkspace";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <GoogleWorkspace />
        <Works />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}