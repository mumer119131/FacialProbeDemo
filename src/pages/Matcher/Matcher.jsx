import React, { useEffect } from 'react'
import Upload from '../../components/Matcher/Upload/Upload'
import axios from 'axios'
import Loading from '../../components/Sketcher/Loading/Loading'
import Matching from '../../components/Sketcher/Matching/Matching'
import PrimaryButton from '../../components/Common/PrimaryButton/PrimaryButton'

const Matcher = () => {
  const [matchImage, setMatchImage] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [selectedScreen, setSelectedScreen] = React.useState('upload')
  const [matchingImage , setMatchingImage] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [matchImageDetails, setMatchImageDetails] = React.useState(null)

  const handleImageChange = async(e) => {
    setIsLoading(true)
    setError(null)
    const file = e.target.files[0];
    setMatchImage(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("image", file);
    try{
      const response = await axios.post("http://localhost:5000/match-image", formData, { responseType : 'blob'}, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      console.log(response)
      const imgUrl = URL.createObjectURL(response.data)
      setMatchingImage(imgUrl)
      const fileName = response.headers.get('Content-Disposition').split('filename=')[1] 
      try{
        const response = await axios.get(`http://localhost:5000/match-image-details?image_name=${fileName}`)
        setMatchImageDetails(response.data)
        if (!response.data.country) {
          setError('Person not found in the database')
        }
      }catch{
        setError('Person not found in the database')
      }
      setIsLoading(false)
      setSelectedScreen('match')
    }catch(err){
      if(err.response.status === 401){
        setError('No face detected in the image')
        setIsLoading(false)
      }
      console.log(err)
    }
  }
  const resetImage = () => {
    setMatchImage(null)
    setSelectedScreen('upload')
    setMatchingImage(null)
    setMatchImageDetails(null)
  }
  return (
    <section className='min-h-[calc(100vh-88px)] flex items-center pt-[90px] justify-center flex-col w-full' id='sketcher' data-aos="fade-right">
        <h2 className='text-primary select-none'>Matcher</h2>
        <p className='select-none'>Match the faces of the criminals in the database</p>
        {
        }
        <div className='w-full flex items-center justify-center rounded mt-4 bg-background custom-shadow px-5 py-5 min-h-[20rem] overflow-hidden'>
            {
              !isLoading ? <div className='flex flex-col items-center w-full h-full'>
                {
                  selectedScreen === 'upload' && <Upload error={error} handleImageChange={handleImageChange} />
                }
                {
                  selectedScreen == 'match' && <Matching matchingImage={matchingImage} matchImageText='Original' image={matchImage} matchImageDetails={matchImageDetails}/>
                }
                {
                  selectedScreen == 'match' && <PrimaryButton onClick={resetImage} className='mt-4'>Reset</PrimaryButton>
                }
                </div> : <Loading loadingText='Matching face in the database...' />
              
            }
        </div>
    </section>
  )
}

export default Matcher