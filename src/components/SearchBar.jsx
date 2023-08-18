import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
  } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



const SearchBar = (props) => {

  return (
    <div className="search">
    <input type="text" className="formInput"  onChange={(e)=>props.setSearchString(e.target.value)}  /> <button className="buttonSearch"> <FontAwesomeIcon icon={faSearch} /> </button>
   </div>  
  )
}

export default SearchBar
