"use client";

import Projects from "./projects";
import germanwords from "/images/germanwords.jpeg";
import qrmenu from "/images/qr-menu.png";
import todoapp from "/images/to-do-app.png";
import weatherapp from "/images/weatherapp.png";
import { montserrat, montserratLatin } from '@/app/ui/fonts';

export default function Home() {
  return (
    <>
  <div className={` ${montserrat.className} font-bold bg-[#485fc8] text-4xl text-white h-24 p-10 flex items-center`}>
    Projects
  </div>
    <div className="flex justify-center"> 
   <div className="flex flex-wrap p-7">
      <Projects
        image={germanwords}
        title="WortKarte"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        '
      />
      <Projects
        image={qrmenu}
        title="Weather App"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        '
      />
      <Projects
        image={todoapp}
        title="QR Menü"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        '
      />
      <Projects
        image={weatherapp}
        title="To-do List"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        '
      />
    </div>
    </div>
    </>
  );
}
