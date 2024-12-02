import React from 'react'
import ImageGallery from 'react-image-gallery';
import IMG from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img5.png'

const Gallery = () => {
    const images = [
        {
            original: IMG,
            thumbnail: IMG,
        },
        {
            original: IMG2,
            thumbnail: IMG2,
        },
        {
            original: IMG3,
            thumbnail: IMG3,
        },
        {
            original: IMG4,
            thumbnail: IMG4,
        },
        {
            original: IMG5,
            thumbnail: IMG5,
        },
    ];
    return (
        <section className='min-h-[calc(100vh-88px)] flex items-center pt-[90px] justify-center flex-col w-full' id='gallery' data-aos='fade-right'>
            <h2 className='text-primary'>Gallery</h2>
            <p>"Take a look at our previous successes and see the power of FaceSketch in action."</p>
            <ImageGallery items={images} additionalClass='mt-4' />

        </section>
    )
}

export default Gallery