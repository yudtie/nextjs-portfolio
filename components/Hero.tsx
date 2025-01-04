import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {}

export default function Hero({}: Props) {
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
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7x1 px-10 justify-evenly mx-auto items-center">
      <h1>
        <span>{text}</span>
      </h1>
    </div>
  )
}

