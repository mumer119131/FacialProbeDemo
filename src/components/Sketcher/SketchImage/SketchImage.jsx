import React from 'react'
import detective from '../../../assets/detective.png'
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../Common/SecondaryButton/SecondaryButton'
import axios from 'axios'

const SketchImage = ({image, handleMatchClick}) => {

  
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={image} className='w-[20rem] object-cover'/>
      <div className='flex gap-2 mt-6'>
        <SecondaryButton title='Start again'>Reset</SecondaryButton>
        <PrimaryButton onClick={handleMatchClick} title='Match the image from the previous criminals database images'>Match</PrimaryButton>
      </div>
    </div>
  )
}

export default SketchImage