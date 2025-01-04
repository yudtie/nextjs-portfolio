import React from 'react'

type Props = {}

export default function Capabilities({}: Props) {
  return (
    <div className="flex flex-col relative px-10 py-10 md:flex-row max-w-7xl mx-auto"> 
        <div className="text-left md:pr-20 md:pl-0 md:w-80 xl:w-96">
            <p>Capabilities</p>
        </div>

        <div className="text-left md:w-2/3">
            <p>I'm a multidisciplinary designer that had the privilege of working on some top brands and giving start ups the help they need to create a professional identity.<br /><br />
            I've designed easy-to-use websites and user interfaces using the latest technologies and techniques, while carefully and strategically including important details and interactions.</p>
        </div>
    </div>

  )
}