/**
 * Dependencies
 */
import React, { useContext } from "react";

/**
 * Components
 */
import { CarouselUi } from "../../Animations/Carousel/CarouselUi";
import { DataContext } from '../../context/DataContext'

/**
 * Styles
 */
import "./TrendingContainer.scss";


export const TrendingContainer = () => {

  const { theme } = useContext( DataContext );

  return (
    <section className={`trending_Container ${theme && "trending_Container_dark" } animate__animated animate__fadeInRight animate__delay-5s ` }>
      <h3 className={`trending_Container_title ${theme && "trending_Container_title_dark" }` }>Trending Gifs</h3>
      <div className="carousel" >
        <CarouselUi />
      </div>
    </section>
    
  );
};
