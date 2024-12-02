import React, { useEffect } from 'react'
import PrimaryButton from '../Common/PrimaryButton/PrimaryButton'
import SecondaryButton from '../Common/SecondaryButton/SecondaryButton'
import { animate } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
// import SHAPE from '../../assets/shape.svg'
import LOGO from '../../assets/fb_logo.png'
import { motion } from 'framer-motion'
const Home = () => {
    const textItems = [{name : 'sketch', color_one : '#4ba39f', color_two : '#01d17b'},
                        {name : 'justice', color_one : '#da6206', color_two : '#d1cb01'},
                        {name : 'with', color_one : '#1488CC', color_two : '#2B32B2'},
                        {name : 'AI', color_one : '#cc2b5e', color_two : '#753a88'}
                ]
    const navigate = useNavigate()
    const [activeText, setActiveText] = React.useState(textItems[0])
    const [isButtonHovered, setIsButtonHovered] = React.useState(false)
    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)",
        }
      }
    const TextGradientGenerator = () => {
        return {
            background: `linear-gradient(90deg, ${activeText.color_one} 0%, ${activeText.color_two} 100%) 0 0 / 400% 100%`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation : 'moving-gradient 8s linear infinite' 
        }
    }

    const ButtonGradient = () => {
        return {
            background: `linear-gradient(90deg, ${activeText.color_one} 0%, ${activeText.color_two} 100%)`,
        }
    }
    const defaultGradient = {
        background: `transparent`,
        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
        // animation : 'moving-gradient 8s linear infinite' 
    }
    const handleNavigate = (id) => {
        if(id == 'sketch'){
            navigate('/sketcher')
        }else if('more'){
            navigate('/about')
        }
    }
    useEffect(()=>{
        let i = 0
        const interval = setInterval(() => {
            if(i == textItems.length-1){
                i = 0
            }
            else{
                i++
            }
            setActiveText(textItems[i])
        }, 1500);
        return () => clearInterval(interval);
    }, [])
    return (
        <section className='min-h-[calc(100vh-88px)] flex items-center pt-[90px] justify-center flex-col w-full' data-aos="fade-right">
            <div className='flex items-center flex-wrap mt-12'>
                <div className='flex items-center flex-col'>
                    <div className='h-28 w-28'>
                        <motion.svg className='logo__item' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.41 206.94"><title>fp_logo</title>
                          
                          <motion.path d="M-214.72,1642.36h70.22c8.91,0,14-3.43,15.46-12.24a48.83,48.83,0,0,0-.59-18.13c-1.79-7.89-6.58-10.73-14.66-10.74q-36,0-72,0h-7c5.86-7.57,10.93-14.29,16.25-20.82.74-.91,2.66-1.21,4-1.21,19.66-.06,39.31-.15,59,0,14.85.15,25.23,7.7,31.54,20.76a50.74,50.74,0,0,1,2.32,39.85c-5.23,15.14-17.15,23.83-33.2,24.11-13.16.23-26.32.07-39.48.08h-6.26c0,2.26,0,4.18,0,6.09,0,24.82-.08,49.64.08,74.46a17.14,17.14,0,0,1-3.69,11.43c-7.34,9.46-14.27,19.25-22.06,29.85Z" transform="translate(336.53 -1579.16)" variants={icon}  initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut" },
                                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                                repeat : Infinity
                            }}/>

                        <motion.path d="M-303.87,1621.72h79.74V1786.1c-4.92-6.62-8.65-12.72-13.43-17.84-10.29-11-13.56-23.44-12.95-38.51,1.12-27.45.22-55,.41-82.47,0-4.3-1.32-5.37-5.39-5.24-9.16.28-18.33-.13-27.49.19-4,.14-6.44-1.22-8.65-4.37C-295.34,1632.58-299.41,1627.56-303.87,1621.72Z" transform="translate(336.53 -1579.16)" variants={icon}  initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                            repeat : Infinity
                        }}/>
                          
                          <motion.path d="M-336.53,1579.4h123.64c-5.75,7.44-10.9,14.27-16.31,20.89-.71.87-2.74.93-4.16.93q-41.47.07-82.93,0c-1.39,0-3.34-.2-4.07-1.09C-325.69,1593.58-330.77,1586.85-336.53,1579.4Z" transform="translate(336.53 -1579.16)" variants={icon}  initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                            repeat : Infinity
                          }}/>
                          </motion.svg>

                    </div>
                    <h1 className='text-[4rem] lg:text-[5rem] font-bold text-center select-none'>
                        <span className='custom__transition' style={activeText.name == 'sketch' ? TextGradientGenerator() : defaultGradient}>Sketch</span> 
                        <span className='custom__transition' style={activeText.name == 'justice' ? TextGradientGenerator() : defaultGradient}> Justice</span> 
                        <span className='custom__transition' style={activeText.name == 'with' ? TextGradientGenerator() : defaultGradient}> with</span> 
                        <span className='custom__transition' style={activeText.name == 'AI' ? TextGradientGenerator() : defaultGradient}> AI.</span></h1>
                    <p className='text-center select-none'>FaceSketch AI is a cutting-edge website that uses advanced machine learning algorithms to generate sketches of suspected individuals based on inputted facial characteristics.</p>
                    <div className='mt-10 flex flex-wrap gap-4'>
                        <a href="#sketcher"><PrimaryButton onClick={()=> handleNavigate('sketch')} className='flex items-center gap-1'>Start Sketch</PrimaryButton></a>
                        <a href="#about"><SecondaryButton onClick={()=> handleNavigate('more')} onMouseEnter={()=> setIsButtonHovered(true)} onMouseLeave={()=> setIsButtonHovered(false)} className={`custom__transition border-[${activeText.color_one}]`} style={{
                                                                                boxShadow: ` 5px -2px 73px 5px ${activeText.color_one}}`,
                                                                                WebkitBoxShadow: ` 5px -2px 73px 5px ${activeText.color_one}`,
                                                                                MozBoxShadow: ` 5px -2px 73px 5px ${activeText.color_one}`,
                                                                                background: isButtonHovered && `linear-gradient(90deg, ${activeText.color_one} 0%, ${activeText.color_two} 100%)`,
                                                                                color : isButtonHovered && 'black',
                                                                                border : isButtonHovered ? '2px transparent' : `2px solid ${activeText.color_one}`,
                                                                            }}>Learn more</SecondaryButton></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home