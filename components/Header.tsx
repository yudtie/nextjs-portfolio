import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-white sticky top-0 p-5 flex items-start justify-between max-w-[1600px] mx-auto z-20 xl:items-center">
      <motion.div
      initial={{
        y:-200,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        y:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1,
      }}
      >
        menu left
      </motion.div>

      <motion.div
      initial={{
        y:-200,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        y:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1,
      }}
      >
        menu right
      </motion.div>
    </header>
  )
}