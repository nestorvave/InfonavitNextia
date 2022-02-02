/**
 * Dependencies
 */
import React, { useContext } from "react";

/**
 * Components
 */
import { SpinnerUi } from "../../Animations/Spinner/SpinnerUi";
import { DataContext } from "../../context/DataContext";
import { useGetGifs } from "../../Helpers/useGetGifs";
import { GifOsCard } from "../GifOsCard/GifOsCard";

/**
 * Styles
 */
import "./Gifs.scss";

export const Gifs = () => {
  let [gifs] = useGetGifs();
  const { isSearching,theme } = useContext(DataContext);

  
  
  return (
    <section className={`mainContainer ${theme && "mainContainer_dark"} animate__animated animate__fadeInUp animate__delay-4s`}>
      
      {
        gifs.length > 0 ? <h3>Your results</h3> : <h3> Search your Gifs</h3>
      }
      <div className={`gifCards ${theme ? "gifCards_dark":"gifCards_ligth" } `}>

        {isSearching && <SpinnerUi /> }
        {
            gifs.length === 0 && isSearching === null ? (
              <>
              <p>No data found</p>
              <img src="/images/nodata1.svg" className="no-data" alt="no-data" />
              </>
            ):(
            gifs.map((gif) => 
                  <GifOsCard 
                    key={gif.url} 
                    src={gif.url} 
                    href={gif.item} 
                    name={gif.item}  
                  /> )
            )
        }
      </div>
    </section>
  );
};
