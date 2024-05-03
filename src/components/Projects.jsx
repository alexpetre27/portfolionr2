import React from "react";
import ProjectItem from "./ProjectItem";
import pamgirImg from "../assets/pamgir.jpg"
import todolistappImg from "../assets/ToDoListApp.jpg"
import colorpickerImg from "../assets/ColorPickerApp.jpg"
export default function Projects(){
    return(
        <div id="projects " className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque quaerat,
                nulla porro quos rem labore laudantium quas qui. Repellendus fugit hic veritatis assumenda,
                dolores eligendi numquam est officiis deserunt?
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={pamgirImg} title='Pamgir Events' details='HHTML CSS JAVASCRIPT PHP'/>
                <ProjectItem img={todolistappImg} title='To Do List App' details='REACT CSS JAVASCRIPT'/>
                <ProjectItem img={colorpickerImg} title='Color Picker App' details='REACT CSS JAVASCRIPT'/>
            </div>
        </div>
    );
}