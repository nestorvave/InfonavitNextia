/**
 * Dependencies
 */
import React, {useContext} from 'react'

/**
 * Components
 */
import { DefaultInput } from '../../Helpers/DefaultInput'
import { useInput } from '../../Helpers/useInput'
import { DataContext } from '../../context/DataContext'
import { useGetAutocomplete } from '../../Helpers/useGetAutocomplete'
import { Autcomplete } from '../Autocomplete/Autcomplete'

/**
 * Styles
 */
import './Form.scss'





export const Form = () => {
    
    const [gifValue,handleInput,setInput]=useInput()
    const {setIsSearching,setGifSelected,theme}= useContext( DataContext )
    
    
    const handleChange=(e)=>{
        setGifSelected(e.target.value)
        handleInput(e)
    }

    const handleSubmit=(e)=>{
        e.preventDefault() 
        setIsSearching(true)
        setInput("")

    }
    const clearInput = ()=>{
        setInput("")
    }

    const dataAutocomplete =useGetAutocomplete(gifValue)

    return (
        <>
        <form className='form animate__animated animate__fadeIn animate__delay-3s' >
            {
                gifValue.length>0 && 
                    <img 
                        onClick={clearInput}  
                        className='delete' 
                        src="/images/delete.svg" 
                        alt="search"  
                    />
            } 
             <DefaultInput 
                placeholder='Search Gif'
                value={gifValue}
                onChange={handleChange}
                className={ `${theme && "form_dark" }` }
            />
            
            <button onClick={handleSubmit} >
               <img src="/images/search.svg" alt="search"  />
            </button>
           
        </form>
        
        {
            dataAutocomplete.length>0 &&   
                <Autcomplete data={dataAutocomplete} setInput={setInput} />
        }   
         
        </>
    )
}
