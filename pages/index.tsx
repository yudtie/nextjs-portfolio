import type{ NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Capabilities from "../components/Capabilities";

const Home: NextPage = () => {
  return (
    <div className="text-lg md:text-lg xl:text-xl">
      <Head>
        <title>Yudtie's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      {/* <section id = "hero">
        <Hero />
      </section> */}

      <section id = "about">
        <About />
      </section>

      <section id = "work">
        <Work />
      </section>

      <section id = "capabilities">
        <Capabilities />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}

    </div>
  );
};

export default Home;
