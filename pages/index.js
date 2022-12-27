import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeff | Full-Stack Dev</title>
        <meta name="description" content="Jeff Derbes | Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo-white.png" />
      </Head>
      <main>
        <section>
          <Main />
        </section>
        <section>
          <About />
        </section>
        <section id="projects" className="pt-[50px]">
          <Projects />
        </section>
        <section id="contact" className="pt-[150px]">
          <Contact />
        </section>
      </main>
    </>
  );
}
