/**
 * Dependencies
 */
import React, { useContext }  from 'react'

/**
 * Components
 */
import { DataContext } from '../../context/DataContext'
import { Form } from '../Form/Form'

/**
 * Styles
 */
import './Searcher.scss'

export const Searcher = () => {

   const {theme}= useContext( DataContext )
    return (
        <section className='searchContainer' >

            <h1 className={`${theme && "searchContainer_dark" } animate__animated animate__flipInX animate__delay-3s ` } >
                Get inspired and find the best <b>GIFS!</b> 
            </h1>
            <img className='animate__animated animate__flipInY animate__delay-3s' src="/images/explore.svg" alt="explore"  /> 
            <Form />
            
        </section>
    )
}
