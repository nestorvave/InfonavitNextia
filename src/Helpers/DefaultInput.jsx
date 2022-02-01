/**
 * Dependencies
 */
import React from 'react'


export const DefaultInput = ({
    placeholder="",
    onChange="",
    value="",
    type="text",
    className=""
}) => {


    return (
        <input 
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}
            className={className}
        />
    )
}
