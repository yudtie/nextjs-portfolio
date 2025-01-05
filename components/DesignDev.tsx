import React from 'react';
import CardAOR from "./CardAOR";
import CardROXSTAR from "./CardROXSTAR";
import CardIMAGINE from "./CardIMAGINE";
import CardPINCRAFT from "./CardPINCRAFT";
import CardZACHS from "./CardZACHS";
import CardHTN from "./CardHTN";


type Props = {}

export default function DesignDev({}: Props) {
  return (
    <div className="mx-auto pt-10 max-w-[1600px]">
            <div className="text-left px-10 pb-10 max-w-7xl mx-auto">
                <p>Design & Development</p>
            </div>
            <div className="flex flex-col flex-shrink-0 md:flex-row max-w-fit">
                <CardAOR />
                <CardROXSTAR />
                <CardIMAGINE />
            </div>
            <div className="flex flex-col flex-shrink-0 md:flex-row md:w-fit">
                <CardPINCRAFT />
                <CardZACHS />
                <CardHTN />
            </div>
            
        </div>
  )
}