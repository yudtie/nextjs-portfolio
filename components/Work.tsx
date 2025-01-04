import React from 'react';
import CardAWE from "./CardAWE";
import CardSN from "./CardSN";
import CardZBS from "./CardZBS";
import CardEARL from "./CardEARL";
import CardGLOBALCON from "./CardGLOBALCON";

type Props = {}

export default function Work({}: Props) {
  return (
    <div className="mx-auto pt-10 max-w-[1600px]">
        
        <div className="flex flex-col flex-shrink-0 md:flex-row max-w-fit">
            <CardAWE />
            <CardSN />
            <CardZBS />
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row max-w-fit">
            <CardEARL />
            <CardGLOBALCON />
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row md:w-fit">
            <CardAWE />
            <CardAWE />
            <CardAWE />
        </div>
        
    </div>
    
  )
}