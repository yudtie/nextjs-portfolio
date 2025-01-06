import type{ NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AWE: NextPage = () => {
   
  return (
    <div className="text-lg md:text-lg xl:text-xl ">
    <Head>
    <title>AWE page</title>
    </Head>

    <Header />

    <div className="mx-auto pt-10 max-w-[1600px]">
    <h1 className="text-center">AWE Brand!</h1>
    <p className="text-center">I was excited to get the contract to design and build the AWE Brand website in wordpress.</p>
    
    <div className="flex flex-col flex-shrink-0 md:flex-row">
        <div className="w-2/3"><img src="/awebrand-hero.jpg" alt="" /></div>
        <div className="w-1/3"><img src="/awebrand-1.jpg" alt="" /><img src="/awebrand-2.jpg" alt="" /></div>
    </div>
    </div>
    
    <Footer />

    </div>
  );
};


export default AWE;