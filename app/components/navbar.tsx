"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsArrowLeftShort } from "react-icons/bs"
import { AiFillEnvironment } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const[open , setOpen] = useState(true);
  const links = [
    {
      id: 1,
      link: "event",
    },
    {
      id: 2,
      link: "guest",
    },
    {
      id: 3,
      link: "contact",
    }
  ];

  return (
    <div className="flex">
      <div className={`bg-violet-900 h-screen p-5 pt-8 ${open? "w-72":"w-20"} duration-300 relative`}>
          <BsArrowLeftShort className={`bg-white text-violet-900 text-3xl rounded-full absolute -right-3 top-9 border border-violet-900 cursor-pointer ${!open && "rotate-180"}`} onClick={()=> setOpen(!open)} />
        <div className="inline-flex">
        <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${!open && "rotate-[360deg]"}`}/>
        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Plan It</h1>
        </div>
        <ul className="pt-2">
          {links.map((id,link) =>(<>
          <li key={link} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md mt-2"></li>
          <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{link}</span>
          </> ))}
        </ul>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
};

export default Navbar;