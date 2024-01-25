'use client'

import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import {useState} from "react";

function ImageItem({image}) {
    console.log(image)
  return <div className=" m-3 rounded-xl shadow-lg cursor-pointer shadow-black-100 hover:shadow-indigo-500/100">
    <img className="h-72 w-full object-cover rounded-t-xl max-sm:h-36" src={image.urls.small} alt={image.alt_description} />
    <p className="text-xs p-5 text-right italic">{image.alt_description}</p>

  </div>
}

function ImageList({ imagesPlaceHolder }) {
    return  (
    <div  className="grid grid-cols-4 max-sm:grid-cols-2">
      {imagesPlaceHolder.map((image, index) => {
        return <ImageItem key = {index} image={image} />;
      })}
    </div>
    )
  }



export default function ApiCall() {
  const [images, setImages] = useState([])
  
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result)
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder = {images}/>
    </div>
  );
}
