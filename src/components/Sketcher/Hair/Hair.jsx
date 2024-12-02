import React from 'react'
import PillPicker from '../../Common/PillPicker/PillPicker';
import SwipeLeft from '../../Common/FramerAnim/SwipeLeft/SwipeLeft';

const Hair = (props) => {
    const {
        hairColor,
        setHairColor,
        hairTexture,
        setHairTexture,
        hairLength,
        setHairLength,
        hairThickness,
        setHairThickness,
        hairDensity,
        setHairDensity,
        hairPart,
        setHairPart,
        hairStyle,
        setHairStyle,
        hairHighlights,
        setHairHighlights,
        baldness,
        setBaldness,
        scalpMarkings,
        setScalpMarkings
    } = props

    const hairColorOptions = [
        { value: "black", label: "Black" },
        { value: "brown", label: "Brown" },
        { value: "blonde", label: "Blonde" },
        { value: "red", label: "Red" },
        { value: "grey", label: "Grey" },
        { value: "other", label: "Other" }
    ];

    const hairTextureOptions = [
        { value: "straight", label: "Straight" },
        { value: "wavy", label: "Wavy" },
        { value: "curly", label: "Curly" },
        { value: "coily", label: "Coily" },
        { value: "frizzy", label: "Frizzy" }
    ];

    const hairLengthOptions = [
        { value: "short", label: "Short" },
        { value: "medium", label: "Medium" },
        { value: "long", label: "Long" },
        { value: "extra-long", label: "Extra-Long" }
    ];

    const hairThicknessOptions = [
        { value: "fine", label: "Fine" },
        { value: "medium", label: "Medium" },
        { value: "thick", label: "Thick" },
        { value: "extra-thick", label: "Extra-Thick" }
    ];

    const hairDensityOptions = [
        { value: "low", label: "Low" },
        { value: "medium", label: "Medium" },
        { value: "high", label: "High" },
        { value: "extra-high", label: "Extra-High" }
    ];

    const hairPartOptions = [
        { value: "center", label: "Center" },
        { value: "left", label: "Left" },
        { value: "right", label: "Right" },
        { value: "none", label: "None" }
    ];

    const hairStyleOptions = [
        { value: "pixie-cut", label: "Pixie Cut" },
        { value: "bob", label: "Bob" },
        { value: "up-do", label: "Up-Do" },
        { value: "ponytail", label: "Ponytail" },
        { value: "braid", label: "Braid" },
        { value: "other", label: "Other" }
    ];

    const hairHighlightsOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const baldnessOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const scalpMarkingsOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    return (
        <SwipeLeft>
            <h2 className='text-3xl font-bold uppercase text-primary text-center'>Hairs</h2>

            <div className='flex mt-4 gap-4 flex-wrap justify-center'>
                <PillPicker label='Hair Color' options={hairColorOptions} value={hairColor} onChange={setHairColor} />
                <PillPicker label='Hair Texture' options={hairTextureOptions} value={hairTexture} onChange={setHairTexture} />
                <PillPicker label='Hair Length' options={hairLengthOptions} value={hairLength} onChange={setHairLength} />
                <PillPicker label='Hair Thickness' options={hairThicknessOptions} value={hairThickness} onChange={setHairThickness} />
                <PillPicker label='Hair Density' options={hairDensityOptions} value={hairDensity} onChange={setHairDensity} />
                <PillPicker label='Hair Part' options={hairPartOptions} value={hairPart} onChange={setHairPart} />
                <PillPicker label='Hair Style' options={hairStyleOptions} value={hairStyle} onChange={setHairStyle} />
                <PillPicker label='Hair Highlights' options={hairHighlightsOptions} value={hairHighlights} onChange={setHairHighlights} />
                <PillPicker label='Baldness' options={baldnessOptions} value={baldness} onChange={setBaldness} />
                <PillPicker label='Scalp Markings' options={scalpMarkingsOptions} value={scalpMarkings} onChange={setScalpMarkings} />

            </div>
        </SwipeLeft>
    )
}

export default Hair