/**
 * Dependencies
 */
import { useContext, useEffect } from "react";

/**
 * Components
 */
import { DataContext } from "../context/DataContext";

/**
 * @description fetched API about autocomplete selected by text on Input
 * @returns {Array} – autocomplete
 */

export const useGetAutocomplete = (search="") => {
    
    
    const {autocomplete,setAutocomplete}=useContext( DataContext )

      useEffect(() => {
            fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=EvHHkLAGyF1Xh0lfX1hVDW5xwSkQhLJN&q=${search}&limit=10&offset=0&rating=g&lang=en`)
              .then((response) => response.json())
              .then((resp) => {
                const {data} = resp
                const getAutocomplete = data.map(item=>{
                    const {name}= item
                    return name
                 })
                 setAutocomplete(getAutocomplete)
              });

      }, [search,setAutocomplete]);
      
    return autocomplete
};
