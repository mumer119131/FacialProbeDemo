import React from 'react'
import Dropdown from '../../Common/Dropdown/Dropdown';
import PillPicker from '../../Common/PillPicker/PillPicker';
import SwipeLeft from '../../Common/FramerAnim/SwipeLeft/SwipeLeft';

const Cheeks = (props) => {
    // get all props passed from the parent component
    const { cheekShape, setCheekShape, cheekFullness, setCheekFullness, cheekboneShape, setCheekboneShape, smileLines, setSmileLines, cheekBlush, setCheekBlush, sunkenCheeks, setSunkenCheeks, dimples, setDimples, facialHair, setFacialHair, cheekMoles, setCheekMoles, cheekScarring, setCheekScarring } = props
    const cheekShapesOptions = [
        { value: "round", label: "Round" },
        { value: "square", label: "Square" },
        { value: "oval", label: "Oval" },
        { value: "heart", label: "Heart" },
        { value: "diamond", label: "Diamond" },
        { value: "triangular", label: "Triangular" },
    ];


    const cheekFullnessOptions = [
        { value: "plump", label: "Plump" },
        { value: "average", label: "Average" },
        { value: "sunken", label: "Sunken" }
    ];


    const cheekBonesOptions = [
        { value: "prominent", label: "Prominent" },
        { value: "average", label: "Average" },
        { value: "recessed", label: "Recessed" }
    ];


    const cheekSmileLinesOptions = [
        { value: "deep", label: "Deep" },
        { value: "average", label: "Average" },
        { value: "shallow", label: "Shallow" },
        { value: "none", label: "None" }
    ];


    const cheekBlushOptions = [
        { value: "natural", label: "Natural" },
        { value: "enhanced", label: "Enhanced" },
        { value: "none", label: "None" }
    ];


    const cheekSunkenOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const cheekDimplesOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const facialHairsOptions = [
        { value: "thick", label: "Thick" },
        { value: "medium", label: "Medium" },
        { value: "thin", label: "Thin" },
        { value: "none", label: "None" }
    ];

    const cheekScarringOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];


    const cheekFrecklesOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];
    return (
        <SwipeLeft>
            <h2 className='text-3xl font-bold uppercase text-primary text-center'>Cheeks</h2>

            <div className='flex mt-4 gap-4 flex-wrap justify-center'>
                <PillPicker label='Cheek Shape' options={cheekShapesOptions} value={cheekShape} onChange={setCheekShape} />
                <PillPicker label='Cheek Fullness' options={cheekFullnessOptions} value={cheekFullness} onChange={setCheekFullness} />
                <PillPicker label='Cheekbone Shape' options={cheekBonesOptions} value={cheekboneShape} onChange={setCheekboneShape} />
                <PillPicker label='Smile Lines' options={cheekSmileLinesOptions} value={smileLines} onChange={setSmileLines} />
                <PillPicker label='Cheek Blush' options={cheekBlushOptions} value={cheekBlush} onChange={setCheekBlush} />
                <PillPicker label='Sunken Cheeks' options={cheekSunkenOptions} value={sunkenCheeks} onChange={setSunkenCheeks} />
                <PillPicker label='Dimples' options={cheekDimplesOptions} value={dimples} onChange={setDimples} />
                <PillPicker label='Facial Hair' options={facialHairsOptions} value={facialHair} onChange={setFacialHair} />
                <PillPicker label='Cheek Moles' options={cheekFrecklesOptions} value={cheekMoles} onChange={setCheekMoles} />
                <PillPicker label='Cheek Scarring' options={cheekScarringOptions} value={cheekScarring} onChange={setCheekScarring} />

            </div>
        </SwipeLeft>
    )
}

export default Cheeks