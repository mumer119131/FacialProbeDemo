import React from 'react'

const Loading = ({loadingText}) => {
  return (
    <div className='flex flex-col items-center'>
      <div class="shapes"></div>
      <h2 className='mt-10'>{loadingText}</h2>
    </div>
  )
}

export default Loading