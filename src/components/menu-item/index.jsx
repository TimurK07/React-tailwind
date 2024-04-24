import React from 'react'

export const MenuItem = ({ text = '', icon }) => {
  return (
    <div className='flex w-full space-x-4'>
      { icon } 
      <span className='text-medium-grey cursor-pointer hover:text-almost-black'>{ text }</span>
    </div>
  )
}
