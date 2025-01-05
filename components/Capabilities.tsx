import React from 'react'

type Props = {}

export default function Capabilities({}: Props) {
  return (
    <div className="flex flex-col relative px-10 py-10 md:flex-row max-w-7xl mx-auto"> 
        <div className="text-left md:pr-20 md:pl-0 md:w-80 xl:w-96">
            <p>Capabilities</p>
        </div>

        <div className="text-left md:w-2/3 ">
            <p>I'm a multidisciplinary designer that had the privilege of working on some top brands and giving start ups the help they need to create a professional identity.<br /><br />
            I've designed easy-to-use websites and user interfaces using the latest technologies and techniques, while carefully and strategically including important details and interactions.</p>
            <div className="text-left flex flex-col md:flex-row pt-10">
                <div className="md:w-1/2 py-3">
                    <h2 className="text-xl font-medium">Skills</h2>
                    <ul className="list-disc list-inside text-base">
                        <li>HTML5 / JavaScript / jQuery</li>
                        <li>CSS / Bootstrap / Sass</li>
                        <li>Server Setup / FTP</li>
                        <li>Responsive Design</li>
                        <li>Landing Pages</li>
                        <li>Cross Browser Compatibility</li>
                        <li>ADA Accessibility</li>
                        <li>Video Compositing</li>
                        <li>Media Compression</li>
                    </ul>
                </div>
                <div className="md:w-1/2 py-3">
                    <h2 className="text-xl font-medium">Tools</h2>
                    <ul className="list-disc list-inside ">
                        <li>Windows/iOS</li>
                        <li>Adobe CC</li>
                        <li>WordPress / ACF / WooCommerce</li>
                        <li>Silverpop / Fishbowl</li>
                        <li>Sublime Text / VS Code</li>
                        <li>Microsoft Office</li>
                        <li>Scrum / Jira / Slack</li>
                        <li>Pencil & Paper</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>

  )
}