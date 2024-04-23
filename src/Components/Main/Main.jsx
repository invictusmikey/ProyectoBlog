import React from 'react'
import { Section } from '../Section/Section'
import {images, news} from '../../js/noticias'
import { Items } from '../Items/Items'
import { News } from '../News/News'


export const Main = ({children}) => {
  return (
    <div className='flex h-full '>
      
        <Section>
          <div className='w-4/5 h-5/6 bg-slate-300 flex flex-col justify-evenly items-center border-solid border border-black'>
        <h1 className='w-4/3 text-red-600 text-xl mb-6 ml-9'>Alex Pereira acabó a Jamahal Hill y sigue siendo campeón</h1>
        <img src={images.img1} alt="imagen principal" className='w-3/4' />
        <p className='flex justify-center items-center h-36 w-11/12 mt-6'>Alex Pereira solo necesitó poco más de 3 minutos para defender exitosamente por primera vez su cinturón luego de conectar a Jamahal Hill en el rostro con un potente gancho de izquierda para enviarlo a la lona.</p>
        </div>
        </Section>
        <News>
          <div className='p-12 w-11/12 h-5/6 bg-slate-300 flex flex-col justify-center items-center justify-evenly  border-solid border border-black p-6'>
           {
           news.map(news => <Items 
                key ={news.id} 
                title = {news.title} 
                image = {news.image}
                description = {news.description}/>)
                
        }
        </div>
        </News>
        
    </div>
  )
}
