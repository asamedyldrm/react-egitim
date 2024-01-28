export default function ImageItem({image}) {
    console.log(image)
    
  return <div className=" m-3 rounded-xl shadow-lg cursor-pointer shadow-black-100 hover:shadow-indigo-500/100">
    {/* <p className="text-xs p-2 text-right italic">{image.user.name} - {image.user.location}</p> */}
    <img className="h-72 w-full object-cover rounded-t-xl max-sm:h-36" src={image.urls.small} alt={image.alt_description} />
    <p className="text-xs p-5 text-right italic ">{image.alt_description}</p>
    

  </div>
}
