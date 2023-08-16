import React from 'react'
import colorNames from 'colornames'

const InputColor = ({
  setColorValue, colorValue, setColorValueComputed, isLightText, setIsLightText

}) => {
  return (
    <section>
        <form 
            action="input" 
        >
                <label htmlFor="color">Color</label>
                <input 
                    type="text"
                    value={colorValue}
                    onChange={

                        (e) => {
                            setColorValue(e.target.value);
                            setColorValueComputed(colorNames(e.target.value));


                    
                        }}

                >
                
                </input>
                <button
                 
                  type="button"
                  onClick={() => setIsLightText(!isLightText)}
                
                >
                  Toggle Tex Color

                </button>
        </form>
    </section>
  )
}

export default InputColor