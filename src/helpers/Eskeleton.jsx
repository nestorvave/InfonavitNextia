import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Eskeleton = () => {
  const arr=[1,2,3,5,6,7,8,9,10]
  return (
    <>
    {
      arr.map(item=>{
        return(
          <main className=" container flex-center">
          <article className="eske">
            <figure className="eske__images">
            <Skeleton height={100} />
            </figure>
            <div className='eske__text' >
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
            <button className="eske__button"><Skeleton height={20} /></button>
          </article>
          
          </main>
        )
      })
    }
    </>
   
  )
}

export default Eskeleton