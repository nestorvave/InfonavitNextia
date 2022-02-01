/**
 * Dependencies
 */
import { useEffect, useState } from "react";

/**
 * @description crea un event listener al resize
 * @returns {Number} – window.innerWidth
 */

export const useGetTrends = () => {

    const [data,setData]=useState(null)

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=EvHHkLAGyF1Xh0lfX1hVDW5xwSkQhLJN&limit=15&rating=g`)
      .then((response) => response.json())
      .then((resp) => {
        const {data} = resp
        const getTrend = data.map(item=>{
           const {images}= item
           const {url}=images.downsized_medium
           return url
        })

        setData(getTrend)

        
      });

  }, []);

  
  

  return data;

};
