// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {

// const [counter, setCounter] = useState(15)

//   // let counter = 15
//   const addValue = () => {
//     if (counter < 30) {
//       setCounter(counter + 1)
//     }
//   }

//   const removeValue = () => {
// if (counter > 0) {
//       setCounter(counter - 1)
// }
//   }
//   return (
//     <>
//       <h1>React Counter Hooks</h1>
//       <h2>Counter: {counter}</h2>

//       <button
//         onClick={addValue}
//       >Increment</button>
//       <br />
//       <button
//         onClick={removeValue}
//       >Decrement</button>
//     </>
//   )
// }

// export default App


// interview question 
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // so here setCounter() will only increment in one time bcoz of react fibre that sends in batches it
      // to solve this setCounter(prev => prev + 1) 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

const [counter, setCounter] = useState(15)

  // let counter = 15
  const addValue = () => {
    if (counter < 30) {
      setCounter(prev => prev + 1)
      setCounter(prev => prev + 1)
      setCounter(prev => prev + 1)
      setCounter(prev => prev + 1)
    }
  }

  const removeValue = () => {
if (counter > 0) {
      setCounter(counter - 1)
}
  }
  return (
    <>
      <h1>React Counter Hooks</h1>
      <h2>Counter: {counter}</h2>

      <button
        onClick={addValue}
      >Increment</button>
      <br />
      <button
        onClick={removeValue}
      >Decrement</button>
    </>
  )
}

export default App
