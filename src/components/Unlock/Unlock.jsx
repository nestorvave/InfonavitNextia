import React from 'react'

const Unlock = ({description,name,url}) => {
  return (
    <article className='unlockedCard' >
        <figure className='unlockedCard__images'>
            <img src={url} alt={name}  />
        </figure>
        <p className='unlockedCard__name'>{name}</p>
        <p className='unlockedCard__description' > {description}</p>
    </article>
  )
}

export default Unlock