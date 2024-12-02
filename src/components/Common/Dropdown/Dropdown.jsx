import React from 'react'
import Select from 'react-select'
const Dropdown = (props) => {

    const { options, onChange, label, value } = props
    return (
        <div>
            <p className='text-xs mb-1'>{label}</p>
            <Select options={options} onChange={onChange} value={value} className='w-[25rem]' />
        </div>
    )
}

export default Dropdown