import Navbar from "./_components/Navbar";
import SmNavbar from "./_components/SmNavbar";

export default function Home() {
  return (
    <main className="w-full max-h-screen flex dark:bg-dark bg-[#fffdd0]  flex-col items-center justify-between">
      <Navbar />
      <div className="w-full flex justify-around my-4 dark:text-[#fffdd0] md:hidden">
        <SmNavbar />
      </div>
    </main>
  );
}
