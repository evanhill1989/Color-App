import { useState } from 'react'
import InputColor from './InputColor'
import ColorWindow from './ColorWindow'


function App() {
  const [count, setCount] = useState(0)
  const [colorValue, setColorValue] = useState('')

  const [colorValueComputed, setColorValueComputed] = useState('')
  const [isLightText, setIsLightText] = useState(true)
  


 


  return (
    < div className='grid auto-cols-auto justify-center justify-items-center'>
        
        < ColorWindow 
            colorValue={colorValue}
            colorValueComputed={colorValueComputed}
            isLightText={isLightText}
        
        />
        < InputColor 
            colorValue={colorValue}
            setColorValue={setColorValue}
            setColorValueComputed={setColorValueComputed}
            isLightText={isLightText}
            setIsLightText={setIsLightText}
        
        />
        
    </div>
  )
}

export default App
