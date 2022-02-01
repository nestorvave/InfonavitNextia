/**
 * Dependencies
 */
import { useContext, useEffect,useState} from 'react'


/**
 * Components
 */
import { DataContext } from '../context/DataContext'

/**
 * @description fetched API about each Gif selected by category
 * @returns {Array} – data of Gifs 
 */


export const useGetGifs = () => {

   const [data,setData]=useState([])
   const {isSearching,setIsSearching,gifSelected,flag,setFlag} =useContext( DataContext )



   useEffect(() => {

      if (isSearching || flag){
        
         fetch(`https://api.giphy.com/v1/gifs/search?api_key=EEJ5t0UHu4zBsZ3edAhRt44UidUNzWy4&q=${gifSelected}&limit=15&offset=0&rating=g&lang=en`)
         .then((response) => response.json())  
           .then((resp) => {
                  const {data} = resp
                  const getGifs = data.map(item=>{
                     const {images}= item
                     const {url}=images.downsized_medium
                     return ({ url, item})
                  })

                  setData(getGifs)
                  setIsSearching(null)
                  setFlag(false)
                 

           });
      }
   }, [isSearching,setIsSearching,gifSelected,setFlag,flag])

  


   return [data]

}

