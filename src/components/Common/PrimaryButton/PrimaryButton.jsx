import React from 'react'

const PrimaryButton = ({className, children, onClick, disabled, title, type}) => {
  return (
    <button type={type} title={title} disabled={disabled} onClick={onClick} className={`bg-white text-black border-white border-2 px-6 hover:bg-black hover:border-white hover:text-white transition-all rounded-md font-medium h-12 ${className}`}>{children}</button>
  )
}

export default PrimaryButton