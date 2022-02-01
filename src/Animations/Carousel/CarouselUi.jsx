
/**
 * Dependencies
 */
import React from "react";

/**
 * Components
 */
import { useGetTrends } from "../../Helpers/useGetTrends";

/**
 * Styles
 */
import './Carousel.scss'

/**
 * Others
 */
import Carousel from "react-bootstrap/Carousel";

export const CarouselUi = () => {
  const trends = useGetTrends();

  return (
    <Carousel className="container"  >
      { trends!=null &&  trends.map((item, index) => {

        return (
          <Carousel.Item interval={1000}    key={item}>
            <img
              key={item}
              className=""
              src={item}
              alt={` ${index +1} slide `}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
