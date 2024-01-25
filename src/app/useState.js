import { useState } from "react"

//UseState Hook'unda consy keyworduyla tanımlaması yapıyoruz. İlk değer güncellenecek değer. 
//useState(0) dediğimizde value'nun başlangıç değeri 0'dır.
//setValue fonksiyon, value'yu set etme fonksiyonu. 

export default function UseState(){
    const [value, setValue] = useState(0);
    // const handleClick = () => {
    //     setValue(value+1);
    // }
    
    return <div>
        <button onClick={()=>{setValue(value+1)}}>Proje Ekle</button>
        <div>Proje Sayısı: {value}</div>
    </div>
}