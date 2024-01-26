// 'use client'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// const icon = '<i className="fa-solid fa-magnifying-glass flex flex-column"></i>'

// export default function SearchHeader({ search }) {
//   const handleFormSubmit = (event) => {
//     // event.preventDefault();
//     // search("samet");
//     alert("bi şeyler");
//   };



  export default function SearchHeader() {
    const handleFormSubmit = () => {
        console.log("samet")
    }
    return <>
    <div className="SearchDiv flex flex-row p-5">
        <form className="w-screen" onSubmit={handleFormSubmit()}>
            <label className="flex flex-row items-center gap-x-2 p-1">
                <input placeholder="Ara..." className="w-full box-border p-3 pl-12 border-2 border-sky-500 focus-within:border-red-800" />
            </label>
        </form>
    </div>
    </>
  }
