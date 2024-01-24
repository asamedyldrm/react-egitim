import Image from "next/image";
import { montserrat } from "./ui/fonts";

// import React, { useEffect } from 'react';

// export default function Projects(props){
// const title = props.title;
// const description = props.description;

//   const {title, description} = props;
//   return <div className="flex ">
//     <div>{title}</div>
//     <div>{description}</div>
//   </div>
// }

//Daha kısa yöntem olarak şu şekilde kullanabiliriz:

export default function Projects({ image, title, description }) {
  return (
      <div className="w-96 bg-slate-100 text-slate-800 m-3 flex flex-col shadow-lg shadow-slate-400 rounded-xl hover:shadow-slate-800 cursor-pointer">
        <Image
          className="items-center max-w-full rounded-t-xl"
          src={image}
          width={1920}
          // layout="responsive"
        ></Image>
        <div className={`${montserrat.className} p-2 text-red-500 text-center font-bold`}>{title}</div>
        <div className={`${montserrat.className} pr-5 pl-5 pb-5`}>{description}</div>
      </div>
  );
}


