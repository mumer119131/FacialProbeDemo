import React from 'react'
import PERSON from '../../assets/person2.png'
const About = () => {
    return (
        <section className='min-h-[calc(100vh-88px)] flex items-center pt-[90px] justify-center flex-col w-full' id='about'>
            <h2 className='text-primary'>About</h2>
            <p>"Get to know the people and mission behind FaceSketch."</p>
            <div className='flex flex-wrap mt-4 items-center justify-between'>
                <div className='text-primary basis-[100%] lg:basis-[50%]'>
                    <h2 className='text-lg' data-aos='fade-right'>
                        "Our team of dedicated professionals is passionate about using AI to make a real difference in the world and assist law enforcement in solving crimes. From software engineers to criminologists, we are a group of like-minded individuals who are united in our commitment to innovation and excellence. Learn more about our team and see how we are working to revolutionize the field of criminal investigations."
                    </h2>
                    {/* <div className='mt-4 flex flex-wrap gap-2' data-aos='fade-left'>
                        <a href="#sketcher"><button className='bg-primary px-4 py-2 uppercase rounded text-white hover:tracking-wider hover:bg-lightPrimary transition-all'>Get Started</button></a>
                    </div> */}
                </div>
                <img width='500' src={PERSON} alt="" data-aos='fade-left' />
            </div>
        </section>
    )
}

export default About