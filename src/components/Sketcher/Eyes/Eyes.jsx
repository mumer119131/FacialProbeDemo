import React from 'react'
import Dropdown from '../../Common/Dropdown/Dropdown'
import PillPicker from '../../Common/PillPicker/PillPicker';
import SwipeLeft from '../../Common/FramerAnim/SwipeLeft/SwipeLeft';

const Eyes = (props) => {
    const { eyeShape,
        setEyeShape,
        eyeBrowShape,
        setEyeBrowShape,
        eyeColor,
        setEyeColor,
        pupilShape,
        setPupilShape,
        irisPattern,
        setIrisPattern,
        eyeSize,
        setEyeSize,
        eyelashes,
        setEyelashes,
        eyeSocketShape,
        setEyeSocketShape,
        eyeLidWrinkles,
        setEyeLidWrinkles,
        distanceBetweenEyes,
        setDistanceBetweenEyes } = props
    const eyeShapesList = [
        { value: "almond", label: "Almond-shaped" },
        { value: "round", label: "Round" },
        { value: "hooded", label: "Hooded" },
        { value: "downturned", label: "Downturned" },
        { value: "upturned", label: "Upturned" },
        { value: "monolid", label: "Monolid" },
        { value: "wide-set", label: "Wide-set" },
        { value: "close-set", label: "Close-set" },
        { value: "deep-set", label: "Deep-set" },
        { value: "prominent", label: "Prominent" },
        { value: "epicanthal", label: "Epicanthal fold" },
        { value: "cat-eye", label: "Cat-eye shaped" }
    ];

    const eyebrowShapesList = [
        { value: "arched", label: "Arched" },
        { value: "straight", label: "Straight" },
        { value: "curved", label: "Curved" },
        { value: "bushy", label: "Bushy" },
        { value: "thin", label: "Thin" },
        { value: "feathered", label: "Feathered" },
        { value: "angled", label: "Angled" },
        { value: "high", label: "High" },
        { value: "low", label: "Low" },
        { value: "round", label: "Round" }
    ];

    const eyeColorsList = [
        { value: "brown", label: "Brown" },
        { value: "blue", label: "Blue" },
        { value: "green", label: "Green" },
        { value: "hazel", label: "Hazel" },
        { value: "gray", label: "Gray" },
        { value: "amber", label: "Amber" },
        { value: "black", label: "Black" },
        { value: "violet", label: "Violet" }
    ];

    const pupilShapesList = [
        { value: "round", label: "Round" },
        { value: "almond", label: "Almond" },
        { value: "diamond", label: "Diamond" },
        { value: "football", label: "Football" },
        { value: "egg", label: "Egg" },
        { value: "teardrop", label: "Teardrop" },
        { value: "vertical-slit", label: "Vertical Slit" },
        { value: "horizontal-slit", label: "Horizontal Slit" }
    ];

    const irisPatternsList = [
        { value: "solid", label: "Solid" },
        { value: "ringed", label: "Ringed" },
        { value: "starburst", label: "Starburst" },
        { value: "speckled", label: "Speckled" },
        { value: "flecked", label: "Flecked" },
        { value: "swirled", label: "Swirled" },
        { value: "textured", label: "Textured" },
        { value: "mottled", label: "Mottled" }
    ];

    const eyeSizesList = [
        { value: "small", label: "Small" },
        { value: "average", label: "Average" },
        { value: "large", label: "Large" },
        { value: "extra-large", label: "Extra Large" }
    ];

    const eyelashesList = [
        { value: "short", label: "Short" },
        { value: "average", label: "Average" },
        { value: "long", label: "Long" },
        { value: "curled", label: "Curled" },
        { value: "straight", label: "Straight" },
        { value: "thick", label: "Thick" },
        { value: "thin", label: "Thin" }
    ];

    const eyeSocketShapesList = [
        { value: "deep", label: "Deep" },
        { value: "average", label: "Average" },
        { value: "shallow", label: "Shallow" },
        { value: "hooded", label: "Hooded" }
    ];
    const eyeLidWrinklesList = [
        { value: "none", label: "None" },
        { value: "minimal", label: "Minimal" },
        { value: "moderate", label: "Moderate" },
        { value: "pronounced", label: "Pronounced" }
    ];
    const eyeDistanceList = [
        { value: "wide", label: "Wide" },
        { value: "average", label: "Average" },
        { value: "close", label: "Close" },
        { value: "very close", label: "Very Close" }
    ];
    return (
        <SwipeLeft>
            <h2 className='text-3xl font-bold uppercase text-primary text-center'>Eyes</h2>

            <div className='flex mt-4 gap-6 flex-wrap justify-center'>
                <PillPicker options={eyeShapesList} onChange={setEyeShape} value={eyeShape} label='Select the Eye Shape' />
                <PillPicker options={eyebrowShapesList} onChange={setEyeBrowShape} value={eyeBrowShape} label='Select the Eye Shape' />
                <PillPicker options={eyeColorsList} onChange={setEyeColor} value={eyeColor} label='Select the Eye Color' />
                <PillPicker options={pupilShapesList} onChange={setPupilShape} value={pupilShape} label='Select the Pupil Shape' />
                <PillPicker options={irisPatternsList} onChange={setIrisPattern} value={irisPattern} label='Select the Iris Pattern' />
                <PillPicker options={eyeSizesList} onChange={setEyeSize} value={eyeSize} label='Select the Eye Size' />
                <PillPicker options={eyelashesList} onChange={setEyelashes} value={eyelashes} label='Select the Eyelashes' />
                <PillPicker options={eyeSocketShapesList} onChange={setEyeSocketShape} value={eyeSocketShape} label='Select the Eye Socket Shape' />
                <PillPicker options={eyeLidWrinklesList} onChange={setEyeLidWrinkles} value={eyeLidWrinkles} label='Select the Eye Lid Wrinkles' />
                <PillPicker options={eyeDistanceList} onChange={setDistanceBetweenEyes} value={distanceBetweenEyes} label='Select the Distance between Eyes' />

            </div>
        </SwipeLeft>
    )
}

export default Eyes