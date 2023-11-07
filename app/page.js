import React from "react";
import Header from "./components/Navbar/Header";
import MobileNav from "./components/Navbar/MobileNav";
import Hero from "./components/BodySection/Hero";
import Footer from "./footer";


export default function Home() {
  return (
    <main>
      {/* --Defining Navbars-- */}
      <div className="mb-52 md:mb-60">
        {/* --Navbar of Desktop */}
        <div className="hidden md:block">
          <Header />
        </div>
        {/* --Navbar of Mobile-Versions */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
      {/* --Defining the BodySection-- */}
      <div className="mt-10">
        <Hero />
      </div>
      {/* --Defining the Footer-- */}
      <Footer />
    </main>
  )
}
