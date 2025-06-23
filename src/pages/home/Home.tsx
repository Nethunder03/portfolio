// pages/Home.tsx
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import About from "../about/About";
import Header from "../header/Header";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import '../../i18next/i18n';

const Home: React.FC = () => {

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Blog/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
