import React from 'react'

const ColorWindow = ({colorValue , colorValueComputed, isLightText}) => {
  return (
    <section>

        <div 
            className='p-5'
            style={{
              backgroundColor: colorValue,
              color: isLightText ? 'white' : 'black'


            }}
        >
            <p>{colorValue ? colorValue : ""}</p>
            <p>{colorValueComputed ? colorValueComputed : null}</p>
            </div>

    </section>
        
    
  )
}

export default ColorWindow