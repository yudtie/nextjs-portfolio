import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function CardIMAGINE({}: Props) {
  return (
    <article >
            <motion.div
                initial={{
                    y:200,
                    opacity:0,
                }}
                animate={{
                    y:0,
                    opacity:1,
                }}
                transition={{
                    duration:1,
                    delay:.2,
                }}
                whileInView={{
                    y:0,
                    opacity: 1,
                }}>
                    <div className="workitem"> <a href="#"><img src="/imagine.jpg" alt="Imagine" /><span>View Project</span></a></div>
    
    
            </motion.div>
        </article>
  )
}