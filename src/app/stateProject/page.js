'use client'

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

    return <div>
        <button onClick={handleClick}>Proje Ekle</button>
        <div className="flex flex-wrap ">{projectlist}</div>
        
    </div>
    
}