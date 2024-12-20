import Image from "next/image";
import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";


import { Oswald } from 'next/font/google'

const oswald = Oswald({
  subsets: ['vietnamese'],
  display: 'swap',
})
type SidebarProps = {
  children: React.ReactNode;
}


export default function Sidebar({ children }: SidebarProps) {
  const menu = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Services",
      link: "/services"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ]
  return (
    <div className="w-full bg-white h-screen overflow-y-auto">

      <div className={`flex h-screen`}>
        <div className="bg-black flex flex-col justify-between w-3/12">
          <div>
            <Image src="/perfil.jpg" style={{ objectFit: 'contain' }} alt="Home" className="h-auto max-h-300 w-200 object-contain" width={500} height={400} />
            <div className="flex justify-between  px-4 mt-4 w-full items-center text-center">
              {
                menu.map((item, index) => {
                  return (
                    <Button key={index} className="p-4 bg-white text-black uppercase shadow-lg font-bold hover:bg-slate-100 rounded-3xl">{item.name}</Button>
                  )
                }
                )}
            </div>

          </div>

          <h1 className={`text-5xl ${oswald.className} text-white font-bold text-center`}>Matheus Developer</h1>
          <p className="text-center text-xl m-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ut, quidem doloremque cum voluptates laudantium eligendi id molestiae, minus omnis eos! Porro aliquid, vero amet illo modi debitis cumque. Aut.</p>
          <div className="flex justify-between gap-8 mx-11">

            <FaInstagram size={40} color="#fff" />
            <FaLinkedin size={40} color="#fff" />
            <FaGithub size={40} color="#fff" />
            <FaEnvelope size={40} color="#fff" />
          </div>
        </div>
        <div className="w-9/12 h-full max-h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )

}