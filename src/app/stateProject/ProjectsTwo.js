'use client'

import GermanWordsPhoto from "/images/germanwords.jpeg";
import QrMenuPhoto from "/images/qr-menu.png";
import ToDoAppPhoto from "/images/to-do-app.png";
import WeatherAppPhoto from "/images/weatherapp.png";
import Image from "next/image";

const ProjectPhotoMap = {
    GermanWords: GermanWordsPhoto,
    QrMenu: QrMenuPhoto,
    ToDoApp: ToDoAppPhoto,
    WeatherApp: WeatherAppPhoto
}

const ProjectDescriptionMap = {
    GermanWords: "GermanWordsPhoto ile alakalı proje detayları...",
    QrMenu: "QrMenuPhoto ile alakalı proje detayları...",
    ToDoApp: "ToDoAppPhoto ile alakalı proje detayları...",
    WeatherApp: "WeatherAppPhoto ile alakalı proje detayları..."
}

export default function ProjectsTwo({projectName, }) {

    return <div className="ProjectsTwo grid">
        <div className="bg-emerald-300 w-max m-2 rounded-md text-slate-700">
        <h1 className="p-2">{projectName}</h1>
        <Image className="" src={ProjectPhotoMap[projectName]} height="500" width={500} ></Image>
        <div className="p-2">{ProjectDescriptionMap[projectName]}</div>
    </div>
    </div>
}