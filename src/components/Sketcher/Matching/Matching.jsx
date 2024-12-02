import React from 'react'
import {BsCalendar2Date} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {GiCrimeSceneTape} from 'react-icons/gi'
const Matching = ({matchingImage, matchImageText, image, matchImageDetails}) => {
  console.log(image)
  return (
    <>
    <div className='flex gap-4 flex-wrap items-center justify-center'>
      <div className='relative rounded-lg overflow-hidden'>
        <p className='absolute left-2 top-2 bg-darkGray text-white px-4 rounded-full text-sm py-1 hover:shadow-lg shadow-primary'>{matchImageText ? matchImageText : 'Sketch'}</p>
        <img src={image} alt='matching image' className='object-cover w-[20rem] h-[20rem]'/>
      </div>
      <div className='relative rounded-lg overflow-hidden'>
        <p className='absolute left-2 top-2 bg-darkGray text-white px-4 rounded-full text-sm py-1 hover:shadow-lg shadow-primary'>Match</p>
        <img src={matchingImage} alt='matching image' className='object-cover w-[20rem] h-[20rem]'/>
        <div className='absolute w-full h-full top-0 opacity-0 hover:opacity-100 justify-center px-2 transition-all flex items-center flex-col hover:bg-[#000] hover:bg-opacity-70 text-white'>
          <p className='text-center text-2xl font-bold mt-4'>{matchImageDetails.name}</p>
          <p className='text-center text-lg flex items-center'><GiCrimeSceneTape/>{matchImageDetails.crime}</p>
          <p className='text-center text-sm font-thin'>{matchImageDetails.description}</p>
          <div className='flex justify-between w-full px-4 absolute bottom-2'>
            <div className='flex items-center justify-center gap-2'>
              <GoLocation className='text-white' />
              <p className='text-center text-sm'>{matchImageDetails.country}</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <BsCalendar2Date className='text-white' />
              <p className='text-center text-sm'>{matchImageDetails.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Matching