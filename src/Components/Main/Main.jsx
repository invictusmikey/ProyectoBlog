import React from 'react'
import { Section } from '../Section/Section'
import { News } from '../News/News'

export const Main = ({children}) => {
  return (
    <cards className='flex h-4/5'>
      
        <Section>
        <h1/>
        <img src={children} alt="" />
        <title/>
        <p/>
        </Section>

        <News/>
    </cards>
  )
}
