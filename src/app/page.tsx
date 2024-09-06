import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import SmNavbar from "./_components/SmNavbar";
// import ThreeScene from "./_components/ThreeScene";
import BuyMeACoffee from "./_components/BuyMeACoffee";

export default function Home() {
  return (
    <main className="w-full relative min-h-screen flex flex-col dark:bg-dark bg-light transition-all duration-300 z-10">
      <Navbar />
      {/* <div className="absolute top-0 left-0 w-full h-full -z-10">
        <ThreeScene height={"500px"} width={"100%"} />
      </div> */}
      <HeroSection />
      <BuyMeACoffee />
      <div className="w-full lg:hidden">
        <SmNavbar />
      </div>
    </main>
  );
}
