/**
 * Dependencies
 */
import React, { useContext }  from "react";

/**
 * Components
 */
import { DataContext } from "../../context/DataContext";

/**
 * Styles
 */
import './Autocomplete.scss'

export const Autcomplete = ({data=null,setInput}) => {
  const {setAutocomplete,setGifSelected,setFlag,setIsSearching,theme} =useContext( DataContext )
  
  function handleClick(item) {
    setAutocomplete([])
    setGifSelected(item)
    setFlag(true)
    setInput("")
    setIsSearching(true)

  }
 
  return (
    <ul className="list" >
        {
          data.map(item=>(
                <li 
                  onClick={()=> handleClick(item)} 
                  key={item} 
                  className={` ${theme && "li-dark"} `} 
                >
                  <img src="/images/search.svg"  alt="search"  /> 
                  {item}
                </li>
          ))
        } 
    </ul>
  )
};
