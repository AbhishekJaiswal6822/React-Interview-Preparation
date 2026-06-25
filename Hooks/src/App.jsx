import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UseCallback from './useCallback'
import UseRef from "./UseRef"
import UseParams from './UseParams'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <UseCallback /> */}
     {/* <UseRef /> */}
     <UseParams />
    </>
  )
}

export default App
