import React from 'react'

const SecondaryButton = ({className, children, onClick, disabled, title, style, onMouseEnter, onMouseLeave}) => {
  return (
    // <button title={title} disabled={disabled} onClick={onClick} className="button-85 px-2 rounded-md font-medium h-10 min-w-[8rem]" role="button">Button 85</button>
    <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} className={`border bg-black rounded-md px-6 h-12 ${className}`} disabled={disabled} title={title} type="button" style={style}>{children}</button>
    // <button title={title} disabled={disabled} onClick={onClick} className={`rounded-full border-primary border text-primary px-6 py-2 hover:bg-lightPrimary hover:border-lightPrimary ${className}`}>{children}</button>
  )
}

export default SecondaryButton