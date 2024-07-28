import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import SmNavbar from "./_components/SmNavbar";

export default function Home() {
  return (
    <main className="w-full z-10 relative min-h-screen flex flex-col dark:bg-dark bg-light transition-all duration-300">
      <Navbar />
      <HeroSection />
      <div className="w-full lg:hidden">
        <SmNavbar />
      </div>
    </main>
  );
}
