import React from 'react'
import PillPicker from '../../Common/PillPicker/PillPicker';
import SwipeLeft from '../../Common/FramerAnim/SwipeLeft/SwipeLeft';

const Forehead = (props) => {
    const {
        foreheadShape,
        setForeheadShape,
        foreheadHeight,
        setForeheadHeight,
        foreheadSlope,
        setForeheadSlope,
        browRidgeProminence,
        setBrowRidgeProminence,
        foreheadWrinkles,
        setForeheadWrinkles,
        foreheadHairline,
        setForeheadHairline,
        foreheadSweatGlands,
        setForeheadSweatGlands,
        foreheadVeins,
        setForeheadVeins,
        foreheadMoles,
        setForeheadMoles,
        foreheadScarring,
        setForeheadScarring,
    } = props;

    const foreheadShapeOptions = [
        { value: "square", label: "Square" },
        { value: "round", label: "Round" },
        { value: "oblong", label: "Oblong" },
        { value: "triangular", label: "Triangular" }
    ];

    const foreheadHeightOptions = [
        { value: "short", label: "Short" },
        { value: "average", label: "Average" },
        { value: "tall", label: "Tall" }
    ];

    const foreheadSlopeOptions = [
        { value: "steep", label: "Steep" },
        { value: "average", label: "Average" },
        { value: "gentle", label: "Gentle" }
    ];

    const browRidgeProminenceOptions = [
        { value: "prominent", label: "Prominent" },
        { value: "average", label: "Average" },
        { value: "recessed", label: "Recessed" }
    ];

    const foreheadWrinklesOptions = [
        { value: "many", label: "Many" },
        { value: "some", label: "Some" },
        { value: "few", label: "Few" },
        { value: "none", label: "None" }
    ];

    const foreheadHairlineOptions = [
        { value: "high", label: "High" },
        { value: "average", label: "Average" },
        { value: "low", label: "Low" }
    ];

    const foreheadSweatGlandsOptions = [
        { value: "active", label: "Active" },
        { value: "average", label: "Average" },
        { value: "inactive", label: "Inactive" }
    ];

    const foreheadVeinsOptions = [
        { value: "prominent", label: "Prominent" },
        { value: "average", label: "Average" },
        { value: "hidden", label: "Hidden" }
    ];

    const foreheadMolesOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const foreheadScarringOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];
    return (
        <SwipeLeft>
            <h2 className='text-3xl font-bold uppercase text-primary text-center'>Forehead</h2>

            <div className='flex mt-4 gap-4 flex-wrap justify-center'>
                <PillPicker label='Shape' options={foreheadShapeOptions} value={foreheadShape} onChange={setForeheadShape} />
                <PillPicker label='Height' options={foreheadHeightOptions} value={foreheadHeight} onChange={setForeheadHeight} />
                <PillPicker label='Slope' options={foreheadSlopeOptions} value={foreheadSlope} onChange={setForeheadSlope} />
                <PillPicker label='Brow Ridge Prominence' options={browRidgeProminenceOptions} value={browRidgeProminence} onChange={setBrowRidgeProminence} />
                <PillPicker label='Wrinkles' options={foreheadWrinklesOptions} value={foreheadWrinkles} onChange={setForeheadWrinkles} />
                <PillPicker label='Hairline' options={foreheadHairlineOptions} value={foreheadHairline} onChange={setForeheadHairline} />
                <PillPicker label='Sweat Glands' options={foreheadSweatGlandsOptions} value={foreheadSweatGlands} onChange={setForeheadSweatGlands} />
                <PillPicker label='Veins' options={foreheadVeinsOptions} value={foreheadVeins} onChange={setForeheadVeins} />
                <PillPicker label='Moles' options={foreheadMolesOptions} value={foreheadMoles} onChange={setForeheadMoles} />
                <PillPicker label='Scarring' options={foreheadScarringOptions} value={foreheadScarring} onChange={setForeheadScarring} />

            </div>
        </SwipeLeft>
    )
}

export default Forehead