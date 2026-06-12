import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

function App() {

  return (
  <>
  <Card username={"abhishek"} btnText={"click me"}/>
   <Card username={"anurag"} btnText={"view me"}/>
  </>  
  )
}

export default App
