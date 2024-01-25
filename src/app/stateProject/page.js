'use client'

import { montserrat } from "../ui/fonts";
// import CardProjects from "../cardsProject"
import ProjectsTwo from "./ProjectsTwo"
import { useState } from "react";


function getRandomProjects() {
    const projectArray = ["GermanWords", "QrMenu", "ToDoApp", "WeatherApp"]
    return projectArray[Math.floor(Math.random()*projectArray.length)]
}

export default function stateProject() {
    const [projects, setProjects] = useState([]);

    const handleClick = () => {
        setProjects([...projects, getRandomProjects()])
    };

    const projectlist = projects.map((project,index)=>{
        return <ProjectsTwo key={index} projectName= {project}/>
    });

    return <div className="w-full flex flex-col items-center">
        <button className= {`${montserrat.className} bg-sky-700 p-2 m-2 rounded-md w-1/4 font-bold text-gray-50 hover:bg-sky-500e`} onClick={handleClick}>Proje Ekle</button>

        <div className="flex flex-wrap justify-center">{projectlist}</div>
        
    </div>
    
}