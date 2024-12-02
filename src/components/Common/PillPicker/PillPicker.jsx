import React from 'react'

const PillPicker = (props) => {
    const { options, value, onChange, label } = props
    return (
        <div className='w-[25rem] flex flex-col'>
            <p className='text-xs mb-1'>{label}</p>
            <div className='flex flex-wrap gap-2'>
                {
                    options.map((option, index) => {
                        return (
                            <small key={index} className={`bg-primary cursor-pointer select-none text-white px-4 py-1 rounded-full ${option.label === value.label ? 'bg-opacity-100' : 'bg-opacity-40'} `} onClick={() => onChange(option)}>{option.label}</small>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PillPicker