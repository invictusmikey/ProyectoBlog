import React from 'react'
import { Section } from '../Section/Section'
import { News } from '../News/News'

export const Main = () => {
  return (
    <div className='flex'>
        <Section/>
        <News/>
    </div>
  )
}
