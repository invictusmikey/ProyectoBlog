import React from 'react'
import { news } from '../../js/noticias'
import { News } from '../News/News'

export const Items = ({title,image,description}) => {
  return (
    <card className='flex  justify-center border-solid border border-black w-35 p-3'> 
       <img src={image} alt=""  className='w-20 h-28'/>
       <div className='flex flex-col justify-center items-center p-1'>
       <h3 className='text-red-700'>{title}</h3>
       <hr className='h-1 w-44 bg-black' /> 
       <p className='text-xs'>{description}</p>
       </div>
    </card>
  )
}



