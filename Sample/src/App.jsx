import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apnaapi from './Api/Apnaapi'
import ToggleColorMode from './Components/Mydarkmode'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToggleColorMode></ToggleColorMode>
      <Apnaapi></Apnaapi>
    </>
  )
}

export default App
