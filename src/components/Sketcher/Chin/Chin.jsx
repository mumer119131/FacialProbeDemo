import React from 'react'
import PillPicker from '../../Common/PillPicker/PillPicker';
import SwipeLeft from '../../Common/FramerAnim/SwipeLeft/SwipeLeft';

const Chin = (props) => {
    const {
        chinShape,
        setChinShape,
        chinPointiness,
        setChinPointiness,
        chinSize,
        setChinSize,
        chinDimples,
        setChinDimples,
        chinCleft,
        setChinCleft,
        chinBoneProminence,
        setChinBoneProminence,
        chinFacialHair,
        setChinFacialHair,
        chinMoles,
        setChinMoles,
        chinScarring,
        setChinScarring,
        chinSkinTexture,
        setChinSkinTexture
    } = props;
    const chinShapeOptions = [
        { value: "rounded", label: "Rounded" },
        { value: "pointy", label: "Pointy" },
        { value: "square", label: "Square" }
    ];

    const chinPointnessOptions = [
        { value: "prominent", label: "Prominent" },
        { value: "recessed", label: "Recessed" },
        { value: "average", label: "Average" }
    ];

    const chinSizeOptions = [
        { value: "large", label: "Large" },
        { value: "small", label: "Small" },
        { value: "average", label: "Average" }
    ];

    const chinDimplesOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const chinCleftOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const chinBoneProminenceOptions = [
        { value: "prominent", label: "Prominent" },
        { value: "recessed", label: "Recessed" },
        { value: "average", label: "Average" }
    ];

    const chinFacialHairsOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const chinMolesOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const chinScarringOptions = [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ];

    const chinSkinTextureOptions = [
        { value: "smooth", label: "Smooth" },
        { value: "rough", label: "Rough" },
        { value: "average", label: "Average" }
    ];
    return (
        <SwipeLeft>
            <h2 className='text-3xl font-bold uppercase text-primary text-center'>Chin</h2>

            <div className='flex mt-4 gap-4 flex-wrap justify-center'>
                <PillPicker label='Shape' options={chinShapeOptions} value={chinShape} onChange={setChinShape} />
                <PillPicker label='Pointiness' options={chinPointnessOptions} value={chinPointiness} onChange={setChinPointiness} />
                <PillPicker label='Size' options={chinSizeOptions} value={chinSize} onChange={setChinSize} />
                <PillPicker label='Dimples' options={chinDimplesOptions} value={chinDimples} onChange={setChinDimples} />
                <PillPicker label='Cleft' options={chinCleftOptions} value={chinCleft} onChange={setChinCleft} />
                <PillPicker label='Bone Prominence' options={chinBoneProminenceOptions} value={chinBoneProminence} onChange={setChinBoneProminence} />
                <PillPicker label='Facial Hair' options={chinFacialHairsOptions} value={chinFacialHair} onChange={setChinFacialHair} />
                <PillPicker label='Moles' options={chinMolesOptions} value={chinMoles} onChange={setChinMoles} />
                <PillPicker label='Scarring' options={chinScarringOptions} value={chinScarring} onChange={setChinScarring} />
                <PillPicker label='Skin Texture' options={chinSkinTextureOptions} value={chinSkinTexture} onChange={setChinSkinTexture} />
            </div>
        </SwipeLeft>
    )
}

export default Chin