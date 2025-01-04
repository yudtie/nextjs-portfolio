import React from 'react';
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";



type Props = {}

export default function About({}: Props) {
const [text, count] = useTypewriter ({
    words: [
      'Multimedia Designer', 
      'Front-end Developer', 
      'Wordpress Developer',
    ],
    loop: true,
    delaySpeed: 1000,
});

  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">        
        <motion.img 
            initial={{
                x: -100,
                opacity: 0,
            }}
            whileInView={{
                x:0,
                opacity: 1,
            }}
            
            transition={{
                duration:1.2,
            }}
        
            src="/myudt-profile-pic.jpg"
            className="w-56 h-56 md:w-80 md:h-80 xl:w-96 xl:h-96" 
        />
        
        <div className="px-10 text-left md:w-2/3">
            <p>Hello! I'm Mark a multimedia, UI designer & front end web developer based in Orlando, FL. I like to build things on the web with WordPress and I developed a passion for clean responsive design.<br /><br /> I got my start a long time ago designing and animating everything I could with Flash! Since then I have been fortunate to work for companies such as Hard Rock Int'l, Earl Enterprises, SharkNinja and Fujifilm. I have also had the opportunity to freelance with a wide range of companies designing and developing web sites, landing pages, intranets, email campaigns, email banners, logos, brochures and printed materials.<br /><br /> Below are some samples of my work. Thank you for your time!</p>
        </div>
        
        

        
    </div>
  
  );
}