import React from 'react'
import AGENT from '../../../assets/agent.png'
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton'
import {SiSketchup} from 'react-icons/si'
import {motion} from 'framer-motion'

const Welcome = (props) => {
    const { screens, selectedScreen, setSelectedScreen } = props
    const handleNext = () => {
        const currentIndex = screens.indexOf(selectedScreen)
        const nextScreen = screens[currentIndex + 1]
        setSelectedScreen(nextScreen)
    }
    return (
        <div className='flex items-center flex-col'>
            <h2 className='text-center text-[3rem] font-bold select-none'><span className=''>Generate</span><span className=''> Sketches</span></h2>
            <p className='text-sm font-light text-center select-none'>Enter the required fields to generate the sketch</p>
            {/* <img src={AGENT} alt='agent' className='drop-shadow-lg' /> */}
            <PrimaryButton className='flex items-center gap-2 mt-4 relative overflow-hidden' onClick={handleNext}>
                <motion.i
                    initial={{ right: 100 }}
                    animate={{ right: 0 }}
                    transition={{ duration: 0.5 }}
                    className='relative'
                >
                    <SiSketchup/>
                
                </motion.i>
                 LET'S START</PrimaryButton>
        </div>
    )
}

export default Welcome