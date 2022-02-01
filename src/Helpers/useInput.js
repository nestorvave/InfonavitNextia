/**
 * Dependencies
 */
import { useState } from "react"

/**
 * @description crea un event listener al resize
 * @returns {Number} – window.innerWidth
 */

export const useInput = (initialState="") => {

    const [input, setInput] = useState(initialState)

    const handleInput= ({target})=>{
        setInput(target.value)
    }
    
    return [input,handleInput,setInput]

}
