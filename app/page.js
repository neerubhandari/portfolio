"use client";
import React from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Resume from "./Components/resume/Resume";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Header from "./Components/Header";
// import PortfolioModal from "./Components/modal/PortfolioModal";

const Page = () => {
  return (
    <>
      {/* <PortfolioModal /> */}
      <Header />

      <main
        className="
          main scroll-smooth
          px-4 sm:px-6 lg:px-0
          lg:ml-[var(--sidebar-width,5.5rem)]
        "
      >
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default Page;
