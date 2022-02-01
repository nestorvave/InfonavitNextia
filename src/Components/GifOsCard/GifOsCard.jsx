/**
 * Dependencies
 */
import React from 'react';

/**
 * Styles
 */
import './GifOsCard.scss'

export const GifOsCard = ({
    src="",
    href="",
    name=""
}) => {
  return ( 

  <a href={href.url} target="_blank" rel="noreferrer" >

     <img 
      src={src} 
      className='card animate__animated animate__fadeIn animate__delay-1s' 
      alt={name.title} 
     />

  </a>
  )
}
