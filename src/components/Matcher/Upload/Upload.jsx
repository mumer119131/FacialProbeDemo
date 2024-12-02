import React from 'react'
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton'
import {BsCardImage} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Upload = ({handleImageChange, error}) => {
    const inputRef = React.useRef(null)
    const handleClick = () => {
        inputRef.current.click()
    }
    
  return (
    <div className='flex flex-col items-center gap-4'>
        <div>
            <h2 className='text-center text-[3rem] font-bold select-none'><span className=''>Match</span><span className=''> Faces</span></h2>
            <p className='text-sm font-light text-center select-none'>Upload image of criminal to find in the database</p>
        </div>
        {
            error && <p className='text-red text-sm'>{error}</p>
        }
        <PrimaryButton onClick={handleClick} className='flex items-center justify-center gap-2 overflow-hidden'>
        <motion.i
                    initial={{ right: 100 }}
                    animate={{ right: 0 }}
                    transition={{ duration: 0.5 }}
                    className='relative'
                >
                    <BsCardImage />
                
                </motion.i> Select A Image</PrimaryButton>
        <input ref={inputRef} onChange={handleImageChange} className='hidden' type="file" name="" id="" placeholder='Select A Image' accept="image/*" />
    </div>
  )
}

export default Upload