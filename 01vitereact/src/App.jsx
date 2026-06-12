
import Chai from './chai'


function App() {
  const username = "Abhishek Jaiswal"
  return (
    // <h1>Hello React</h1>
    // jsx only one react components to solve this we use fragments
    <>
    <Chai/>
    <h2>hhh { username}</h2> 
    /* {} evaluated expression final outcomes of js*/
    </>
  )
}

export default App
