import React from 'react'
import PillPicker from '../../Common/PillPicker/PillPicker';
import SwipeLeft from '../../Common/FramerAnim/SwipeLeft/SwipeLeft';

const General = (props) => {
    const { gender, setGender, age, setAge, skinColor, setSkinColor, skinTexture, setSkinTexture } = props

    const ageOptions = [
        { value: "child", label: "Child" },
        { value: "teenager", label: "Teenager" },
        { value: "adult", label: "Adult" },
        { value: "senior", label: "Senior Citizen" }
    ];

    const genderOptions = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "transgender", label: "Transgender" }
    ];

    const skinColorOptions = [
        { value: "fair", label: "Fair" },
        { value: "medium", label: "Medium" },
        { value: "dark", label: "Dark" }
    ];

    const skinTextureOptions = [
        { value: "smooth", label: "Smooth" },
        { value: "rough", label: "Rough" },
        { value: "oily", label: "Oily" },
        { value: "dry", label: "Dry" }
    ];

    return (
        <SwipeLeft>
            <h2 className='text-3xl font-bold uppercase text-primary text-center'>General</h2>

            <div className='flex mt-4 gap-4 flex-wrap justify-center'>
                <PillPicker label='Age' options={ageOptions} value={age} onChange={setAge} />
                <PillPicker label='Gender' options={genderOptions} value={gender} onChange={setGender} />
                <PillPicker label='Skin Color' options={skinColorOptions} value={skinColor} onChange={setSkinColor} />
                <PillPicker label='Skin Texture' options={skinTextureOptions} value={skinTexture} onChange={setSkinTexture} />
            </div>
        </SwipeLeft>
    )
}

export default General