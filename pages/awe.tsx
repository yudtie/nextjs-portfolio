import type{ NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AWE: NextPage = () => {
   
  return (
    <div className="text-lg md:text-lg xl:text-xl">
      <Head>
        <title>AWE page</title>
      </Head>

      <Header />

      <section id = "about">
        <About />
      </section>


      <Footer />

    </div>
  );
};

export default AWE;
