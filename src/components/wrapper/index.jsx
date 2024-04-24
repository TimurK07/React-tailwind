import React from 'react'

export const Wrapper = ({children}) => {
  return (
    <div className='container mx-auto px-4 py-4 min-h-screen'>{children}</div>
  )
}
