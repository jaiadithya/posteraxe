"use client"

import React from 'react'

const Button = ({Label, handleOnClick, className}) => {
  return (
    <div>
        <button onClick={handleOnClick} className={className}>
            {Label}
        </button>
    </div>
  )
}

export default Button