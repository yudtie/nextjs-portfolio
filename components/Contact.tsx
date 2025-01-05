import React from 'react'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className="flex flex-col relative px-10 py-10 md:flex-row max-w-7xl mx-auto"> 
        <div className="text-left md:pr-20 md:pl-0 md:w-80 xl:w-96">
            <p>Contact Me</p>
        </div>

        <div className="text-left md:w-2/3 ">
            <p>I work from my well-equipped home office in Orlando, FL. I can also operate at a client's premises as and when required.<br /><br />
            Kindly contact me to check availability.</p>
            
        </div>
        
    </div>

  )
}