/**
 * Dependencies
 */
import React, { useContext } from 'react'

/**
 * Components
 */
import { DataContext } from "../../context/DataContext";

/**
 * Styles
 */
import './Header.scss'

export const Header = () => {

    const {theme, setTheme}=useContext( DataContext )


    return (
        <header className="header" >
          <h2 className='animate__animated animate__fadeInLeft animate__delay-1s' >Gifos</h2>

          <div 
            className='appearanceButton animate__animated animate__fadeInRight animate__delay-1s' 
            onClick={()=>setTheme(!theme)} 
            >

              <img src={`/images/${ theme ? "moon" :"sun" }.svg`} alt="button"  />
              <p className={`${theme && "header_dark"}`} >{theme ? "Dark" :"Ligth" } mode</p>

          </div>

        </header>
    )
}
