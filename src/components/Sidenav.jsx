import React,{useState} from "react";
import { AiOutlineMenu,
         AiOutlineHome,
         AiOutlineProject,
         AiOutlineMail} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

export default function Sidenav(){
    
    const [nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
        console.log("state");
    };

    return(
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute
                                                          top-4 right-4
                                                          z-[99]
                                                          md:hidden "/>
            {
                nav ? (
                    <div className="fixed w-full h-screen bg-white/90
                                     flex flex-col justify-center items-center z-20">
                        <a onClick={handleNav} href="#main" 
                        className=" w-[75%] flex justify-center items-center
                                   rounded-full bg-slate-800 text-white shadow-gray-400 m-2 p-4
                                   cursor-pointer  ease-in duration-200 ">
                            <AiOutlineHome size={20}/>
                            <span className="pl-4">Home</span>
                        </a>
                        <a onClick={handleNav} href="#work" 
                        className=" w-[75%] flex justify-center items-center
                                   rounded-full bg-slate-800 text-white shadow-gray-400 m-2 p-4
                                   cursor-pointer  ease-in duration-200 ">
                            <GrProjects size={20}/>
                            <span className="pl-4">Work</span>
                        </a>
                        <a onClick={handleNav} href="#projects" 
                        className=" w-[75%] flex justify-center items-center
                                   rounded-full bg-slate-800 text-white shadow-gray-400 m-2 p-4
                                   cursor-pointer  ease-in duration-200 ">
                            <AiOutlineProject size={20}/>
                            <span className="pl-4">Projects</span>
                        </a>
                        <a onClick={handleNav} href="#main" 
                        className=" w-[75%] flex justify-center items-center
                                   rounded-full bg-slate-800 text-white shadow-gray-400 m-2 p-4
                                   cursor-pointer  ease-in duration-200 ">
                            <BsPerson size={20}/>
                            <span className="pl-4">Resume</span>
                        </a>
                        <a onClick={handleNav} href="#contact" 
                        className=" w-[75%] flex justify-center items-center
                                   rounded-full bg-slate-800 text-white shadow-gray-400 m-2 p-4
                                   cursor-pointer ease-in duration-200 ">
                            <AiOutlineMail size={20}/>
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
                )
                : (
                  ''
                )
            }
            <div className="md:block hidden fixed top-[25%] z-10 ">
                <div className=" flex flex-col">
                <a href="#main" className="rounded-full border-2 bg-slate-800 shadow-gray-400 mx-2 m-1 p-4 cursor-pointer
                                          hover:border-customColor ease-in duration-100 hover:bg-white">
                    <AiOutlineHome className="text-white hover:text-customColor" size={20}/>
                </a>

                <a href="#work" className="rounded-full border-2 bg-slate-800 shadow-gray-400 mx-2 m-1 p-4 cursor-pointer 
                                         hover:border-customColor ease-in duration-100 hover:bg-white">
                    <GrProjects className="text-white hover:text-customColor" size={20}/>
                </a>

                <a href="#projects" className="rounded-full border-2 bg-slate-800 shadow-gray-400 mx-2 m-1 p-4 cursor-pointer 
                                             hover:border-customColor ease-in duration-100 hover:bg-white">
                    <AiOutlineProject className="text-white hover:text-customColor" size={20}/>
                </a>

                <a href="#main" className="rounded-full border-2 bg-slate-800 shadow-gray-400 mx-2 m-1 p-4 cursor-pointer 
                                         hover:border-customColor ease-in duration-100 hover:bg-white">
                    <BsPerson className="text-white hover:text-customColor" size={20}/>
                </a>

                <a href="#contact" className="rounded-full border-2 bg-slate-800 shadow-gray-400 mx-2 m-1 p-4 cursor-pointer 
                                             hover:border-customColor ease-in duration-100 hover:bg-white">
                    <AiOutlineMail className="text-white hover:text-customColor" size={20}/>
                </a>

                </div>
            </div>

        </div>
    );
}   