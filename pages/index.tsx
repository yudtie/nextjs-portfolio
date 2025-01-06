import type{ NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import About from "@/components/About";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import DesignDev from "@/components/DesignDev";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
   
  return (
    <div className="text-lg md:text-lg xl:text-xl">
      <Head>
        <title>Yudtie's Portfolio</title>
      </Head>

      <Header />

      <section id = "about">
        <About />
      </section>

      <section id = "work">
        <Work />
      </section>

      <section id = "capabilities">
        <Capabilities />
      </section>

      <section id = "designdev">
        <DesignDev />
      </section>

      <section id = "contact">
        <Contact />
      </section>

      <Footer />

    </div>
  );
};

export default Home;
