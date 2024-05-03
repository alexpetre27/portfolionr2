import React from "react";

export default function ProjectItem({img,title,details}){
    return(
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400
                        rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <img src={img} alt={title} className="rounded-xl group-hover:opacity-10" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl font-bold text-white tracking-wider text-center">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center ">{details}</p>
                <a href="https://pamgir-events.ro/">
                    <p className="text-center p-3 rounded-lg bg-white text-customColor font-bold cursor-pointer">More info</p>
                </a>
            </div>
        </div>
    );
}