import React from 'react'
import Dropdown from '../../Common/Dropdown/Dropdown';
import PillPicker from '../../Common/PillPicker/PillPicker';
import SwipeLeft from '../../Common/FramerAnim/SwipeLeft/SwipeLeft';

const Lips = (props) => {

    // get all props from the parent component
    const {
        lipShape,
        setLipShape,
        lipColor,
        setLipColor,
        cupidBow,
        setCupidBow,
        lipThickness,
        setLipThickness,
        lipTexture,
        setLipTexture,
        lipWrinkles,
        setLipWrinkles,
        lipVolume,
        setLipVolume,
        lipPosition,
        setLipPosition,
        lipScarring,
        setLipScarring,
        lipSize,
        setLipSize,
        lipPucker,
        setLipPucker,
        lipSmile,
        setLipSmile
    } = props;
    const lipShapesOptions = [
        { value: "straight", label: "Straight" },
        { value: "curved", label: "Curved" },
        { value: "full", label: "Full" },
        { value: "thin", label: "Thin" }
    ];


    const lipColorsOptions = [
        { value: "red", label: "Red" },
        { value: "pink", label: "Pink" },
        { value: "brown", label: "Brown" },
        { value: "nude", label: "Nude" }
    ];


    const cupidBowsOptions = [
        { value: "prominent", label: "Prominent" },
        { value: "average", label: "Average" },
        { value: "hidden", label: "Hidden" }
    ];


    const lipThicknessesOptions = [
        { value: "thick", label: "Thick" },
        { value: "average", label: "Average" },
        { value: "thin", label: "Thin" }
    ];
    const lipTexturesOptions = [
        { value: "smooth", label: "Smooth" },
        { value: "rough", label: "Rough" },
        { value: "cracked", label: "Cracked" }
    ];

    const lipWrinklesOptions = [
        { value: "few", label: "Few" },
        { value: "moderate", label: "Moderate" },
        { value: "many", label: "Many" }
    ];

    const lipVolumesOptions = [
        { value: "full", label: "Full" },
        { value: "average", label: "Average" },
        { value: "thin", label: "Thin" }
    ];

    const lipPositionsOptions = [
        { value: "upper", label: "Upper" },
        { value: "lower", label: "Lower" },
        { value: "symmetrical", label: "Symmetrical" }
    ];

    const lipScarringsOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];


    const lipSizesOptions = [
        { value: "large", label: "Large" },
        { value: "average", label: "Average" },
        { value: "small", label: "Small" }
    ];


    const lipPuckersOptions = [
        { value: "tight", label: "Tight" },
        { value: "relaxed", label: "Relaxed" },
        { value: "puckered", label: "Puckered" }
    ]
    return (
        <SwipeLeft>
            <h2 className='text-3xl font-bold uppercase text-primary text-center'>Lips</h2>

            <div className='flex mt-4 gap-4 flex-wrap justify-center'>
                <PillPicker label='Lip Shape' options={lipShapesOptions} value={lipShape} onChange={setLipShape} />
                <PillPicker label='Lip Color' options={lipColorsOptions} value={lipColor} onChange={setLipColor} />
                <PillPicker label='Cupid Bow' options={cupidBowsOptions} value={cupidBow} onChange={setCupidBow} />
                <PillPicker label='Lip Thickness' options={lipThicknessesOptions} value={lipThickness} onChange={setLipThickness} />
                <PillPicker label='Lip Texture' options={lipTexturesOptions} value={lipTexture} onChange={setLipTexture} />
                <PillPicker label='Lip Wrinkles' options={lipWrinklesOptions} value={lipWrinkles} onChange={setLipWrinkles} />
                <PillPicker label='Lip Volume' options={lipVolumesOptions} value={lipVolume} onChange={setLipVolume} />
                <PillPicker label='Lip Position' options={lipPositionsOptions} value={lipPosition} onChange={setLipPosition} />
                <PillPicker label='Lip Scarring' options={lipScarringsOptions} value={lipScarring} onChange={setLipScarring} />
                <PillPicker label='Lip Size' options={lipSizesOptions} value={lipSize} onChange={setLipSize} />
                <PillPicker label='Lip Pucker' options={lipPuckersOptions} value={lipPucker} onChange={setLipPucker} />
            </div>
        </SwipeLeft>
    )
}

export default Lips