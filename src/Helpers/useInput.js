/**
 * Dependencies
 */
import { useState } from "react"

/**
 * @description Hook to handle a data of an input
 * @returns {string,function,setInput} – input,handleInput,setInput
 */

export const useInput = (initialState="") => {

    const [input, setInput] = useState(initialState)

    const handleInput= ({target})=>{
        setInput(target.value)
    }
    
    return [input,handleInput,setInput]

}
