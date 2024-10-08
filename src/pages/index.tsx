import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Basic from "../components/Basic";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import avatar from "../images/avatar.svg";
import Projects from "../components/Projects";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="min-h-screen py-16 px-5 lg:px-16">
        <Basic />
        <div className="my-5 grid md:grid-cols-2 gap-5">
          <Skills />
          <Contact />
        </div>
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Ákos Gelencsér</title>
    <link rel="icon" href={avatar} />
  </>
);
