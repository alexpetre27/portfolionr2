import React from "react";
import { FaLinkedinIn, FaTwitter,FaFacebookF, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
export default function Main(){
    return(
        <div id='main'>
            <img className="w-full h-screen object-cover object-bottom" src="public\wallpaper.jpg" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/45">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
                    <h1 className=" sm:text-5xl text-4xl font-bold text-gray-800">
                        I'm Alex Petre
                    </h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        I'm a 
                        <TypeAnimation
                        sequence={
                            [
                                'Developer', 
                                2000,
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000
                            ]
                        }
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{fontSize: '1em', paddingLeft:'5px'}}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full ">
                        <FaTwitter className='cursor-pointer' size={30} />
                        <FaFacebookF className='cursor-pointer' size={30}/>
                        <FaInstagram className='cursor-pointer' size={30}/>
                        <FaLinkedinIn className='cursor-pointer' size={30}/>
                    </div>
                </div>

            </div>
        </div>
    );
}