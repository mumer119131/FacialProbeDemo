import React from 'react'
import Dropdown from '../../Common/Dropdown/Dropdown';
import PillPicker from '../../Common/PillPicker/PillPicker';
import SwipeLeft from '../../Common/FramerAnim/SwipeLeft/SwipeLeft';

const Nose = (props) => {
    const { noseShape,
        setNoseShape,
        noseBridge,
        setNoseBridge,
        noseTip,
        setNoseTip,
        noseNostrilFlare,
        setNoseNostrilFlare,
        noseNostrilShape,
        setNoseNostrilShape,
        noseNostrilSize,
        setNoseNostrilSize,
        noseNostrilPlacement,
        setNoseNostrilPlacement,
        noseRidge,
        setNoseRidge,
        noseNasalSeptumDeviation,
        setNoseNasalSeptumDeviation } = props

    const noseShapesOptions = [
        { value: "pointed", label: "Pointed" },
        { value: "hooked", label: "Hooked" },
        { value: "aquiline", label: "Aquiline" },
        { value: "bulbous", label: "Bulbous" },
        { value: "flat", label: "Flat" },
        { value: "wide", label: "Wide" },
        { value: "crooked", label: "Crooked" },
        { value: "small", label: "Small" },
        { value: "large", label: "Large" },
        { value: "upturned", label: "Upturned" },
        { value: "downturned", label: "Downturned" }
    ];
    const noseBridgesOptions = [
        { value: "wide", label: "Wide" },
        { value: "average", label: "Average" },
        { value: "narrow", label: "Narrow" },
        { value: "indented", label: "Indented" },
        { value: "hooked", label: "Hooked" },
        { value: "convex", label: "Convex" },
        { value: "concave", label: "Concave" }
    ];
    const noseTipsOptions = [
        { value: "pointed", label: "Pointed" },
        { value: "rounded", label: "Rounded" },
        { value: "bulbous", label: "Bulbous" },
        { value: "hooked", label: "Hooked" },
        { value: "crooked", label: "Crooked" }
    ];
    const noseNostrilFlareOptions = [
        { value: "wide", label: "Wide" },
        { value: "average", label: "Average" },
        { value: "narrow", label: "Narrow" }
    ];
    const noseNostrilShapesOptions = [
        { value: "round", label: "Round" },
        { value: "flared", label: "Flared" },
        { value: "narrow", label: "Narrow" },
        { value: "wide", label: "Wide" }
    ];
    const noseNostrilSizesOptions = [
        { value: "small", label: "Small" },
        { value: "average", label: "Average" },
        { value: "large", label: "Large" }
    ];
    const noseNostrilPlacementsOptions = [
        { value: "wide", label: "Wide" },
        { value: "average", label: "Average" },
        { value: "narrow", label: "Narrow" },
        { value: "asymmetrical", label: "Asymmetrical" }
    ];
    const noseRidgeShapesOptions = [
        { value: "prominent", label: "Prominent" },
        { value: "average", label: "Average" },
        { value: "low", label: "Low" },
        { value: "concave", label: "Concave" },
        { value: "convex", label: "Convex" },
    ];
    const noseNasalSeptumDeviations = [
        { value: "straight", label: "Straight" },
        { value: "deviated", label: "Deviated" },
        { value: "crooked", label: "Crooked" },
        { value: "septal-perforation", label: "Septal Perforation" }
    ];
    return (
        <SwipeLeft>
            <h2 className='text-3xl font-bold uppercase text-primary text-center'>Nose</h2>

            <div className='flex mt-4 gap-4 flex-wrap justify-center'>
                <PillPicker label='Shape' options={noseShapesOptions} onChange={setNoseShape} value={noseShape} />
                <PillPicker label='Bridge' options={noseBridgesOptions} onChange={setNoseBridge} value={noseBridge} />
                <PillPicker label='Tip' options={noseTipsOptions} onChange={setNoseTip} value={noseTip} />
                <PillPicker label='Nostril Flare' options={noseNostrilFlareOptions} onChange={setNoseNostrilFlare} value={noseNostrilFlare} />
                <PillPicker label='Nostril Shape' options={noseNostrilShapesOptions} onChange={setNoseNostrilShape} value={noseNostrilShape} />
                <PillPicker label='Nostril Size' options={noseNostrilSizesOptions} onChange={setNoseNostrilSize} value={noseNostrilSize} />
                <PillPicker label='Nostril Placement' options={noseNostrilPlacementsOptions} onChange={setNoseNostrilPlacement} value={noseNostrilPlacement} />
                <PillPicker label='Ridge' options={noseRidgeShapesOptions} onChange={setNoseRidge} value={noseRidge} />
                <PillPicker label='Nasal Septum Deviation' options={noseNasalSeptumDeviations} onChange={setNoseNasalSeptumDeviation} value={noseNasalSeptumDeviation} />

            </div>
        </SwipeLeft>
    )
}

export default Nose